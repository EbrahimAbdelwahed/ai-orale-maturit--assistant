
export interface StudyResource {
  text: string;
  url?: string; // Optional URL for the resource
}

export interface RipassoTopic {
  name: string;
  resources?: StudyResource[];
}

export interface RipassoMap {
  [subject: string]: RipassoTopic[];
}

export interface MacroArea {
  id: string; // Unique ID for each macro area
  title: string;
  stimoli: string[];
  collegamenti: string[];
  ripasso: RipassoMap;
}

export interface Quiz {
  question: string;
  answer: string;
}

// For Gemini Search Grounding (if used, not in current scope but good to have)
export interface GroundingChunkWeb {
  uri: string;
  title: string;
}
export interface GroundingChunk {
  web?: GroundingChunkWeb;
  retrievalQuery?: string;
  // Other types of chunks if relevant
}