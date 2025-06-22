import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Quiz } from '../types';

const GEMINI_MODEL_TEXT = 'gemini-2.5-flash-preview-04-17';

// Assuming 'process.env.API_KEY' is pre-configured, valid, and accessible (as a string).
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });


export const generateQuizFromTopic = async (
  macroAreaTitle: string,
  subject: string,
  topic: string
): Promise<Quiz> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key non configurata. Imposta la variabile d'ambiente API_KEY.");
  }
  
  const prompt = `Sei un assistente per la preparazione di esami orali per studenti liceali italiani.
Macro Area Tematica: ${macroAreaTitle}
Materia: ${subject}
Argomento Specifico: ${topic}

Genera una domanda di verifica stimolante e una risposta concisa e accurata su questo argomento.
La domanda deve incoraggiare la riflessione e l'applicazione delle conoscenze, non la semplice memorizzazione.
Formatta la tua risposta ESCLUSIVAMENTE come un oggetto JSON con le chiavi "question" e "answer". Non includere \`\`\`json \`\`\` o altre formattazioni.

Esempio di output JSON atteso:
{
  "question": "Descrivi come il principio di indeterminazione di Heisenberg, solitamente discusso in Fisica, possa offrire una metafora per comprendere la complessità dell'identità individuale esplorata da Pirandello.",
  "answer": "Il principio di indeterminazione di Heisenberg afferma l'impossibilità di conoscere simultaneamente con precisione assoluta posizione e quantità di moto di una particella. Metaforicamente, questo può riflettere la visione pirandelliana dell'identità: così come osservare una particella ne altera lo stato, il tentativo di definire univocamente un individuo ('forma') ne limita e distorce la sua vera natura fluida e multiforme ('vita'). L'io, come la particella, sfugge a una catalogazione definitiva, rivelandosi in modi diversi a seconda del contesto e dell'osservatore."
}
`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            temperature: 0.7, 
        }
    });

    let jsonStr = (response.text as string).trim();
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = (match[2] as string).trim();
    }
    
    const parsedData = JSON.parse(jsonStr);
    if (parsedData.question && parsedData.answer) {
      return parsedData as Quiz;
    } else {
      throw new Error("Risposta API non valida: mancano 'question' o 'answer'.");
    }

  } catch (error) {
    console.error("Errore durante la generazione del quiz:", error);
    if (error instanceof Error) {
        throw new Error(`Errore Gemini API: ${error.message}`);
    }
    throw new Error("Errore sconosciuto durante la generazione del quiz.");
  }
};

export const getStudyMaterialAnswer = async (
  question: string,
  context?: { macroAreaTitle?: string; subject?: string; topicName?: string }
): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key non configurata. Imposta la variabile d'ambiente API_KEY.");
  }

  let promptContext = "Contesto generale di studio per il colloquio orale.";
  if (context) {
    const contextParts = [];
    if (context.macroAreaTitle) contextParts.push(`Area Tematica: ${context.macroAreaTitle}`);
    if (context.subject) contextParts.push(`Materia: ${context.subject}`);
    if (context.topicName) contextParts.push(`Argomento Specifico: ${context.topicName}`);
    if (contextParts.length > 0) {
      promptContext = `Contesto specifico:\n${contextParts.join('\n')}`;
    }
  }
  
  const prompt = `Sei un assistente allo studio esperto, paziente e incoraggiante per studenti liceali italiani che si preparano per un esame orale.
Fornisci una risposta chiara, concisa e accurata alla domanda dello studente. Se la domanda è vaga, cerca di fornire l'informazione più rilevante o chiedi chiarimenti in modo gentile.
Utilizza un linguaggio semplice ma preciso.

${promptContext}

Domanda dello studente: "${question}"

Risposta dettagliata e utile:`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT,
        contents: prompt,
        config: {
            temperature: 0.5, // Factual but slightly more elaborative for explanations
        }
    });
    return response.text;
  } catch (error) {
    console.error("Errore durante la generazione della risposta di studio:", error);
    if (error instanceof Error) {
        throw new Error(`Errore Gemini API: ${error.message}`);
    }
    throw new Error("Errore sconosciuto durante la generazione della risposta.");
  }
};