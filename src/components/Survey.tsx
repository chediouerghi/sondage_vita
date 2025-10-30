import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { questions } from '../data/questions';
import { SurveyResponse } from '../types/survey';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from './ProgressBar';
import { CompletionScreen } from './CompletionScreen';
import { useLanguage } from '../contexts/LanguageContext';

interface SurveyProps {
  onComplete: (responses: SurveyResponse[]) => void;
  onRestart: () => void;
}

export function Survey({ onComplete, onRestart }: SurveyProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const { language } = useLanguage();

  const currentQuestion = questions[currentIndex];
  const currentResponse = responses.find(r => r.questionId === currentQuestion.id);

  const navigationLabels = {
    en: { previous: 'Previous', next: 'Next' },
    fr: { previous: 'Précédent', next: 'Suivant' },
    ar: { previous: 'السابق', next: 'التالي' }
  };

  const handleAnswer = (answer: string) => {
    const newResponse: SurveyResponse = {
      questionId: currentQuestion.id,
      answer,
      timestamp: new Date()
    };

    setResponses(prev => {
      const filtered = prev.filter(r => r.questionId !== currentQuestion.id);
      return [...filtered, newResponse];
    });

    if (currentIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setIsComplete(true);
        onComplete([...responses.filter(r => r.questionId !== currentQuestion.id), newResponse]);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1 && currentResponse) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleRestartComplete = () => {
    setIsComplete(false);
    setCurrentIndex(0);
    setResponses([]);
    onRestart();
  };

  if (isComplete) {
    return <CompletionScreen onRestart={handleRestartComplete} />;
  }

  const labels = navigationLabels[language];

  return (
    <div className="min-h-screen flex flex-col p-4 py-8">
      <div className="max-w-4xl w-full mx-auto space-y-8 flex-1 flex flex-col">
        <div className="space-y-6">
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>

        <div className="flex-1 flex items-center justify-center py-8">
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            currentAnswer={currentResponse?.answer}
          />
        </div>

        <div className="flex justify-between items-center gap-4 pt-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:scale-105'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            {labels.previous}
          </button>

          <div className="flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-500 dark:bg-blue-400 w-8'
                    : responses.some(r => r.questionId === questions[index].id)
                    ? 'bg-green-500 dark:bg-green-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1 || !currentResponse}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              currentIndex === questions.length - 1 || !currentResponse
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 shadow-lg'
            }`}
          >
            {labels.next}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
