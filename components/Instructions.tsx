import React from 'react';
import ProgressBar from './ProgressBar';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface InstructionsProps {
  activeAreasCount: number;
  totalAreas: number;
}

const Instructions: React.FC<InstructionsProps> = ({ activeAreasCount, totalAreas }) => {
  const instructionsList = [
    "Durante i primi minuti di riflessione dopo aver ricevuto il documento-stimolo, individua il tema centrale e la macro-area corrispondente.",
    "Apri mentalmente la scheda di riferimento qui sotto: troverai collegamenti già pronti per sette discipline.",
    "Scegline almeno quattro, valorizzando i tuoi punti di forza.",
    "Concludi sempre con un riferimento puntuale all'Educazione Civica (Costituzione, Agenda 2030) o a un'esperienza PCTO."
  ];

  return (
    <div className="bg-white rounded-xl p-6 mb-6 sm:mb-8 shadow-md border-l-4 border-amber-500">
      <h3 className="text-xl font-semibold text-slate-700 mb-4">🎯 Come usare questa mappa</h3>
      <ul className="list-none pl-0 space-y-2.5 mb-5">
        {instructionsList.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-emerald-500 mr-2.5 mt-0.5 flex-shrink-0" />
            <span className="text-slate-600">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-700 font-medium mb-1">Aree tematiche esplorate:</p>
      <ProgressBar current={activeAreasCount} total={totalAreas} />
    </div>
  );
};

export default Instructions;