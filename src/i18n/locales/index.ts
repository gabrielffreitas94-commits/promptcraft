import { SupportedLanguage, TranslationSchema } from '../types';
import { ptBR } from './pt-BR';
import { enUS } from './en-US';
import { esES } from './es-ES';
import { frFR } from './fr-FR';
import { itIT } from './it-IT';
import { deDE } from './de-DE';
import { zhCN } from './zh-CN';
import { jaJP } from './ja-JP';
import { koKR } from './ko-KR';

export const translations: Record<SupportedLanguage, TranslationSchema> = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES,
  'fr-FR': frFR,
  'it-IT': itIT,
  'de-DE': deDE,
  'zh-CN': zhCN,
  'ja-JP': jaJP,
  'ko-KR': koKR,
};

export { ptBR, enUS, esES, frFR, itIT, deDE, zhCN, jaJP, koKR };
