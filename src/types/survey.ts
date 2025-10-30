export type Language = 'en' | 'fr' | 'ar';

export type QuestionType = 'yesno' | 'multiple' | 'yesnomaybe';

export interface Translation {
  en: string;
  fr: string;
  ar: string;
}

export interface QuestionOption {
  value: string;
  label: Translation;
}

export interface Question {
  id: number;
  type: QuestionType;
  question: Translation;
  options?: QuestionOption[];
}

export interface SurveyResponse {
  questionId: number;
  answer: string;
  timestamp: Date;
}

export interface SurveySession {
  id?: string;
  startTime: Date;
  endTime?: Date;
  responses: SurveyResponse[];
  language: Language;
}
