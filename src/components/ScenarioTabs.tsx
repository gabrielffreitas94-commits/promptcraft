import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Repeat, 
  Bug, 
  CheckCircle2, 
  FileCode2 
} from 'lucide-react';
import { Scenario } from '../types/template';

interface ScenarioTabsProps {
  scenarios: Scenario[];
  activeScenarioId: string;
  onSelectScenario: (id: string) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Layers,
  Repeat,
  Bug,
  CheckCircle2,
  FileCode2,
};

export const ScenarioTabs: React.FC<ScenarioTabsProps> = ({
  scenarios,
  activeScenarioId,
  onSelectScenario,
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Selecione o Cenário de Código
        </label>
        <span className="text-xs text-neutral-400">
          {scenarios.length} cenários disponíveis
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenarioId;
          const IconComponent = (scenario.icon && ICON_MAP[scenario.icon]) || FileCode2;

          return (
            <button
              key={scenario.id}
              onClick={() => onSelectScenario(scenario.id)}
              className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-neutral-900 border-neutral-900 text-white shadow-sm ring-2 ring-neutral-900/10'
                  : 'bg-white border-neutral-200 text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50/80'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5 w-full">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1.5 rounded-lg ${
                      isActive ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-xs leading-snug line-clamp-1">
                    {scenario.title}
                  </span>
                </div>

                {scenario.category && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider ${
                      isActive
                        ? 'bg-neutral-800 text-neutral-300'
                        : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    {scenario.category}
                  </span>
                )}
              </div>

              <p
                className={`text-[11px] leading-relaxed line-clamp-2 ${
                  isActive ? 'text-neutral-300' : 'text-neutral-500'
                }`}
              >
                {scenario.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
