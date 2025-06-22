import React, { useState, useCallback } from 'react';
import { MacroArea, RipassoTopic } from '../types';
import { getStudyMaterialAnswer } from '../services/geminiService';
import QuestionMarkCircleIcon from './icons/QuestionMarkCircleIcon';

interface StudyAssistantProps {
  macroAreas: MacroArea[];
}

const StudyAssistant: React.FC<StudyAssistantProps> = ({ macroAreas }) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTopicName, setSelectedTopicName] = useState<string>('');
  
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiKeyExists = !!process.env.API_KEY;

  const selectedArea = macroAreas.find(area => area.id === selectedAreaId);
  const subjects = selectedArea ? Object.keys(selectedArea.ripasso) : [];
  const topics: RipassoTopic[] = selectedArea && selectedSubject ? selectedArea.ripasso[selectedSubject] : [];

  const handleGetAnswer = useCallback(async () => {
    if (!question.trim()) {
      setError("Per favore, inserisci una domanda.");
      return;
    }
    if (!apiKeyExists) {
      setError("Funzionalità AI disabilitata: API Key non configurata. Imposta la variabile d'ambiente API_KEY.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnswer(null);

    const context = {
      macroAreaTitle: selectedArea?.title,
      subject: selectedSubject || undefined,
      topicName: selectedTopicName || undefined,
    };

    try {
      const generatedAnswer = await getStudyMaterialAnswer(question, context);
      setAnswer(generatedAnswer);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Si è verificato un errore sconosciuto durante la generazione della risposta.");
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [question, selectedArea, selectedSubject, selectedTopicName, apiKeyExists]);

  if (!apiKeyExists) {
    return (
      <div className="bg-white rounded-xl p-6 my-6 sm:my-8 shadow-md border-l-4 border-amber-500">
        <div className="flex items-center mb-3">
            <QuestionMarkCircleIcon className="w-6 h-6 mr-2 text-amber-600 flex-shrink-0" />
            <h3 className="text-xl font-semibold text-slate-700">Assistente Studio AI (Disabilitato)</h3>
        </div>
        <p className="text-slate-600 text-sm">
          L'assistente AI per rispondere alle tue domande è temporaneamente non disponibile perché la chiave API di Gemini non è stata configurata.
        </p>
        <p className="text-slate-500 text-xs mt-2">
          Per abilitarlo, l'amministratore del sito deve impostare correttamente la variabile d'ambiente <code>API_KEY</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 my-6 sm:my-8 shadow-md border-l-4 border-sky-500">
      <div className="flex items-center mb-4">
        <QuestionMarkCircleIcon className="w-6 h-6 mr-2 text-sky-600 flex-shrink-0" />
        <h3 className="text-xl font-semibold text-slate-700">Assistente Studio AI</h3>
      </div>
      <p className="text-sm text-slate-600 mb-4">
        Hai una domanda su un argomento specifico? Chiedi all'AI! Fornisci un contesto per risposte più mirate.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="assistMacroAreaSelect" className="block text-xs font-medium text-slate-600 mb-1">Contesto: Macro Area (Opzionale)</label>
          <select
            id="assistMacroAreaSelect"
            value={selectedAreaId}
            onChange={(e) => {
              setSelectedAreaId(e.target.value);
              setSelectedSubject('');
              setSelectedTopicName('');
            }}
            className="w-full p-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 text-sm bg-white"
             aria-label="Seleziona macro area per contestualizzare la domanda"
          >
            <option value="">Nessuna specifica...</option>
            {macroAreas.map(area => (
              <option key={area.id} value={area.id}>{area.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="assistSubjectSelect" className="block text-xs font-medium text-slate-600 mb-1">Contesto: Materia (Opzionale)</label>
          <select
            id="assistSubjectSelect"
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setSelectedTopicName('');
            }}
            disabled={!selectedAreaId || subjects.length === 0}
            className="w-full p-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 disabled:bg-slate-100 disabled:text-slate-400 text-sm bg-white"
            aria-label="Seleziona materia per contestualizzare la domanda"
          >
            <option value="">Nessuna specifica...</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="assistTopicSelect" className="block text-xs font-medium text-slate-600 mb-1">Contesto: Argomento (Opzionale)</label>
          <select
            id="assistTopicSelect"
            value={selectedTopicName}
            onChange={(e) => setSelectedTopicName(e.target.value)}
            disabled={!selectedSubject || topics.length === 0}
            className="w-full p-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 disabled:bg-slate-100 disabled:text-slate-400 text-sm bg-white"
            aria-label="Seleziona argomento per contestualizzare la domanda"
          >
            <option value="">Nessuno specifico...</option>
            {topics.map(topic => (
              <option key={topic.name} value={topic.name}>{topic.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="questionTextarea" className="block text-sm font-medium text-slate-700 mb-1">La tua domanda:</label>
        <textarea
          id="questionTextarea"
          rows={3}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Es: Qual è la differenza principale tra Positivismo e critica della scienza di Nietzsche?"
          className="w-full p-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 text-sm"
        />
      </div>

      <button
        onClick={handleGetAnswer}
        disabled={isLoading || !question.trim()}
        className="mt-4 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Chiedo all'AI...
          </>
        ) : (
          'Ottieni Risposta AI'
        )}
      </button>

      {error && <p className="mt-4 text-sm text-red-700 bg-red-100 p-3 rounded-md border border-red-200">{error}</p>}

      {answer && !isLoading && (
        <div className="mt-6 p-4 border border-slate-200 rounded-lg bg-slate-50">
          <h4 className="font-semibold text-slate-700 mb-2">Risposta dell'Assistente AI:</h4>
          <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default StudyAssistant;