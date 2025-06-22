import React, { useState, useCallback } from 'react';
import { MacroArea, Quiz, RipassoTopic } from '../types';
import { generateQuizFromTopic } from '../services/geminiService';
import SparklesIcon from './icons/SparklesIcon';

interface GeminiQuizProps {
  macroAreas: MacroArea[];
}

const GeminiQuiz: React.FC<GeminiQuizProps> = ({ macroAreas }) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTopicName, setSelectedTopicName] = useState<string>('');
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const apiKeyExists = !!process.env.API_KEY;

  const selectedArea = macroAreas.find(area => area.id === selectedAreaId);
  const subjects = selectedArea ? Object.keys(selectedArea.ripasso) : [];
  const topics: RipassoTopic[] = selectedArea && selectedSubject ? selectedArea.ripasso[selectedSubject] : [];

  const handleGenerateQuiz = useCallback(async () => {
    if (!selectedArea || !selectedSubject || !selectedTopicName) {
      setError("Per favore, seleziona una macro area, una materia e un argomento.");
      return;
    }
    if (!apiKeyExists) {
        setError("Funzionalità AI disabilitata: API Key non configurata. Imposta la variabile d'ambiente API_KEY.");
        return;
    }

    setIsLoading(true);
    setError(null);
    setQuiz(null);
    setShowAnswer(false);

    try {
      const generatedQuiz = await generateQuizFromTopic(selectedArea.title, selectedSubject, selectedTopicName);
      setQuiz(generatedQuiz);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Si è verificato un errore sconosciuto durante la generazione del quiz.");
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedArea, selectedSubject, selectedTopicName, apiKeyExists]);

  if (!apiKeyExists) {
    return (
      <div className="bg-white rounded-xl p-6 my-6 sm:my-8 shadow-md border-l-4 border-amber-500">
        <div className="flex items-center mb-3">
            <SparklesIcon className="w-6 h-6 mr-2 text-amber-600 flex-shrink-0" />
            <h3 className="text-xl font-semibold text-slate-700">Generatore Quiz AI (Disabilitato)</h3>
        </div>
        <p className="text-slate-600 text-sm">
          La funzionalità di generazione quiz tramite AI è temporaneamente non disponibile perché la chiave API di Gemini non è stata configurata nell'ambiente di esecuzione.
        </p>
         <p className="text-slate-500 text-xs mt-2">
          Per abilitarla, l'amministratore del sito deve impostare correttamente la variabile d'ambiente <code>API_KEY</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 my-6 sm:my-8 shadow-md border-l-4 border-emerald-500">
      <div className="flex items-center mb-4">
        <SparklesIcon className="w-6 h-6 mr-2 text-emerald-600 flex-shrink-0" />
        <h3 className="text-xl font-semibold text-slate-700">Generatore Quiz AI</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <div>
          <label htmlFor="quizMacroAreaSelect" className="block text-sm font-medium text-slate-700 mb-1">Macro Area</label>
          <select
            id="quizMacroAreaSelect"
            value={selectedAreaId}
            onChange={(e) => {
              setSelectedAreaId(e.target.value);
              setSelectedSubject('');
              setSelectedTopicName('');
              setQuiz(null);
              setError(null);
            }}
            className="w-full p-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-sm bg-white"
            aria-label="Seleziona macro area per il quiz"
          >
            <option value="">Seleziona...</option>
            {macroAreas.map(area => (
              <option key={area.id} value={area.id}>{area.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quizSubjectSelect" className="block text-sm font-medium text-slate-700 mb-1">Materia</label>
          <select
            id="quizSubjectSelect"
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedTopicName('');
              setQuiz(null);
              setError(null);
            }}
            disabled={!selectedAreaId || subjects.length === 0}
            className="w-full p-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-slate-100 disabled:text-slate-400 text-sm bg-white"
            aria-label="Seleziona materia per il quiz"
          >
            <option value="">Seleziona...</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quizTopicSelect" className="block text-sm font-medium text-slate-700 mb-1">Argomento</label>
          <select
            id="quizTopicSelect"
            value={selectedTopicName}
            onChange={(e) => {
                setSelectedTopicName(e.target.value);
                setQuiz(null);
                setError(null);
            }}
            disabled={!selectedSubject || topics.length === 0}
            className="w-full p-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-slate-100 disabled:text-slate-400 text-sm bg-white"
            aria-label="Seleziona argomento per il quiz"
          >
            <option value="">Seleziona...</option>
            {topics.map(topic => (
              <option key={topic.name} value={topic.name}>{topic.name}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerateQuiz}
        disabled={isLoading || !selectedTopicName}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generazione in corso...
          </>
        ) : (
          '🧠 Genera Domanda AI'
        )}
      </button>

      {error && <p className="mt-4 text-sm text-red-700 bg-red-100 p-3 rounded-md border border-red-200">{error}</p>}

      {quiz && !isLoading && (
        <div className="mt-6 p-4 border border-slate-200 rounded-lg bg-slate-50">
          <div className="mb-4">
            <h4 className="font-semibold text-slate-700 mb-1">Domanda:</h4>
            <p className="text-slate-800 leading-relaxed">{quiz.question}</p>
          </div>
          
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="text-sm bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-md transition-colors"
            >
              Mostra Risposta
            </button>
          ) : (
             <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-md">
                <h4 className="font-semibold text-emerald-700 mb-1">Risposta:</h4>
                <p className="text-sm text-emerald-800 leading-relaxed whitespace-pre-wrap">{quiz.answer}</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GeminiQuiz;