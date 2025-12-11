export interface Question {
  id: string;
  type: 'multiple-choice' | 'open-ended';
  text: string;
  options?: string[]; // For multiple choice
  lines?: number; // For open ended
}

export interface Section {
  title: string;
  content: string;
  note?: string; // Box "Observação"
  qrCodeLink?: string; // External URL
  qrCodeLabel?: string;
}

export interface Chapter {
  id: string;
  title: string;
  sections: Section[];
  illustrationPrompt?: string;
  imageUrl?: string;
  activities?: Question[]; // "Colocar em Prática"
}

export interface BookData {
  title: string;
  subtitle: string;
  author: string;
  grade: string;
  publisher: string;
  publisherUrl: string;
  chapters: Chapter[];
}

export enum AppState {
  IDLE = 'IDLE',
  GENERATING_IMAGES = 'GENERATING_IMAGES',
  READY_TO_DOWNLOAD = 'READY_TO_DOWNLOAD',
  DOWNLOADING = 'DOWNLOADING',
  ERROR = 'ERROR'
}