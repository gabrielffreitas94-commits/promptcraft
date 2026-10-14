import { AIFlavor, Scenario } from '../types/template';

/**
 * Interpola valores de formulário no template de texto.
 * Suporta:
 * - Variáveis simples: {{fieldId}}
 * - Formatação inteligente de arrays (listas de checkboxes/multiselect)
 * - Blocos condicionais: {{#if fieldId}}conteúdo{{/if}}
 */
export function interpolateTemplate(
  template: string,
  formData: Record<string, unknown>
): string {
  if (!template) return '';

  // 1. Processar blocos condicionais: {{#if fieldId}}conteúdo{{/if}}
  let result = template.replace(/\{\{#if\s+([a-zA-Z0-9_-]+)\}\}([\s\S]*?)\{\{\/if\}\}/g, (_, fieldId, content) => {
    const value = formData[fieldId];
    if (value === undefined || value === null || value === false || value === '') {
      return '';
    }
    if (Array.isArray(value) && value.length === 0) {
      return '';
    }
    return content;
  });

  // 2. Substituir variáveis: {{fieldId}}
  result = result.replace(/\{\{([a-zA-Z0-9_-]+)\}\}/g, (_, fieldId) => {
    const value = formData[fieldId];

    if (value === undefined || value === null) {
      return '';
    }

    if (Array.isArray(value)) {
      if (value.length === 0) return '_Nenhum item selecionado_';
      return value.map(item => `- ${item}`).join('\n');
    }

    if (typeof value === 'boolean') {
      return value ? 'Sim' : 'Não';
    }

    return String(value).trim();
  });

  // Limpar quebras de linha excessivas mantendo no máximo 2 consecutivas
  return result.replace(/\n{3,}/g, '\n\n').trim();
}

/**
 * Converte o prompt para o formato otimizado da IA escolhida.
 * - Markdown: Padrão claro para ChatGPT / Gemini / Copilot
 * - Claude XML: Envelopamento com tags estruturadas (<context>, <rules>, <instructions>)
 */
export function formatPromptForAI(
  rawPrompt: string,
  flavor: AIFlavor,
  scenario: Scenario
): string {
  if (!rawPrompt) return '';

  if (flavor === 'markdown') {
    return rawPrompt;
  }

  // Conversão para Claude XML Tags
  // Detecta seções com base em ### ou títulos em caixa alta e envolve em tags XML
  const sections = rawPrompt.split(/\n(?=###\s+|[A-Z\s]{4,}:)/g);
  
  const xmlParts: string[] = [];
  xmlParts.push(`<!-- Prompt otimizado para Anthropic Claude -->`);
  xmlParts.push(`<scenario id="${scenario.id}">${escapeXml(scenario.title)}</scenario>`);

  for (const section of sections) {
    const trimmed = section.trim();
    if (!trimmed) continue;

    const headingMatch = trimmed.match(/^(?:###\s+)?([A-ZÀ-Ú\s\/\-_()]+)(?:\n|:)([\s\S]*)$/i);
    if (headingMatch) {
      const title = headingMatch[1].trim().toLowerCase().replace(/[^a-z0-9]+/g, '_');
      const body = headingMatch[2].trim();
      const tagName = mapTitleToXmlTag(title);
      xmlParts.push(`<${tagName}>\n${body}\n</${tagName}>`);
    } else {
      xmlParts.push(`<instruction>\n${trimmed}\n</instruction>`);
    }
  }

  return xmlParts.join('\n\n');
}

function mapTitleToXmlTag(rawTitle: string): string {
  if (rawTitle.includes('papel') || rawTitle.includes('role') || rawTitle.includes('engenheiro')) return 'role';
  if (rawTitle.includes('context') || rawTitle.includes('projeto') || rawTitle.includes('atividade')) return 'context';
  if (rawTitle.includes('regra') || rawTitle.includes('qualidade') || rawTitle.includes('restri') || rawTitle.includes('salvaguarda')) return 'guidelines';
  if (rawTitle.includes('objetivo') || rawTitle.includes('meta') || rawTitle.includes('tarefa') || rawTitle.includes('funcionalidade')) return 'task';
  if (rawTitle.includes('instru') || rawTitle.includes('execu')) return 'instructions';
  if (rawTitle.includes('codigo') || rawTitle.includes('code') || rawTitle.includes('log') || rawTitle.includes('erro')) return 'code_reference';
  
  return rawTitle.slice(0, 20) || 'section';
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
