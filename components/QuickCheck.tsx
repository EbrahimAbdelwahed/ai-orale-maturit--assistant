import React from 'react';

const QuickCheck: React.FC = () => {
  const checkListItems = [
    "Identifica la macro-area del documento-stimolo.",
    "Scegli 4-6 discipline da collegare (almeno una STEM, una umanistica e l'Educazione Civica).",
    "Ordina il discorso: Stimolo → Disciplina A → B → C … → Educazione Civica → Sintesi personale.",
    "Inserisci una mini-formula o un calcolo dove pertinente (es. E=mc², una derivata, una formula chimica).",
    "Chiudi con una riflessione critica personale, collegandoti all'attualità o a un'esperienza PCTO."
  ];

  return (
    <div className="bg-white rounded-xl p-6 my-6 sm:my-8 shadow-md border-l-4 border-emerald-500">
      <h3 className="text-xl font-semibold text-slate-700 mb-4">⚡ CHECK RAPIDO FINALE – "PARLA & COLLEGA"</h3>
      <ol className="list-none pl-0 space-y-3">
        {checkListItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-xs mr-3 mt-0.5">
              {index + 1}
            </span>
            <span className="text-slate-700 font-medium">{item}</span>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm italic text-slate-600">
        <strong>Memorizza le sette schede:</strong> coprono in modo strategico tutti gli argomenti dei programmi allegati e ti permettono di valorizzare le tue aree di eccellenza. Con questo strumento, sei attrezzato per affrontare qualunque stimolo e puntare al massimo. <strong>In bocca al lupo!</strong> 🍀
      </p>
    </div>
  );
};

export default QuickCheck;