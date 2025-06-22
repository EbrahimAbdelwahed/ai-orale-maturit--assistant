import React from 'react';
import { MacroArea } from '../types';
import SubjectItem from './SubjectItem';
import BookOpenIcon from './icons/BookOpenIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface MacroAreaCardProps {
  area: MacroArea;
  index: number;
  isActive: boolean;
  isRipassoVisible: boolean;
  onAreaToggle: (areaId: string) => void;
  onToggleRipasso: (areaId: string) => void;
}

const MacroAreaCard: React.FC<MacroAreaCardProps> = ({
  area,
  index,
  isActive,
  isRipassoVisible,
  onAreaToggle,
  onToggleRipasso,
}) => {
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('.ripasso-details') || (e.target as HTMLElement).closest('a')) {
      return;
    }
    onAreaToggle(area.id);
  };

  return (
    <div
      className={`bg-white rounded-xl p-5 shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg ${
        isActive ? 'ring-2 ring-offset-1 ring-emerald-500 shadow-emerald-100' : 'ring-1 ring-slate-200'
      }`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onAreaToggle(area.id);}}
      aria-pressed={isActive}
      aria-label={`Macro area: ${area.title}. Stato: ${isActive ? 'Attiva' : 'Non attiva'}`}
    >
      <div className="flex items-center mb-4">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-sm mr-3 flex-shrink-0">
          {index + 1}
        </span>
        <h3 className="text-lg font-semibold text-slate-800 flex-1">{area.title}</h3>
      </div>

      <div className="mb-3">
        <h5 className="text-xs font-semibold text-amber-700 mb-1">📄 Possibili documenti-stimolo:</h5>
        <ul className="list-disc list-inside pl-1 space-y-0.5 text-xs text-slate-600">
          {area.stimoli.map((stimolo, i) => (
            <li key={i}>{stimolo}</li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h5 className="text-xs font-semibold text-emerald-700 mb-1">🔗 Collegamenti interdisciplinari:</h5>
        <ul className="list-disc list-inside pl-1 space-y-0.5 text-xs text-slate-600">
          {area.collegamenti.map((collegamento, i) => (
            <li key={i}>{collegamento}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation(); 
          onToggleRipasso(area.id);
        }}
        className="w-full flex items-center justify-center text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
        aria-expanded={isRipassoVisible}
        aria-controls={`ripasso-details-${area.id}`}
      >
        <BookOpenIcon className="w-4 h-4 mr-2" />
        {isRipassoVisible ? 'Nascondi argomenti' : 'Mostra cosa ripassare'}
        <ChevronDownIcon className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${isRipassoVisible ? 'rotate-180' : ''}`} />
      </button>

      {isRipassoVisible && (
        <div className="mt-4 pt-4 border-t border-slate-200 ripasso-details" id={`ripasso-details-${area.id}`}>
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Argomenti da ripassare:</h4>
          {Object.entries(area.ripasso).map(([subjectName, topics]) => (
            <SubjectItem key={subjectName} subjectName={subjectName} topics={topics} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MacroAreaCard;