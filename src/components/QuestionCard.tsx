import { useLanguage } from '../contexts/LanguageContext';
import { Question } from '../types/survey';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  currentAnswer?: string;
}

export function QuestionCard({ question, onAnswer, currentAnswer }: QuestionCardProps) {
  const { language, direction } = useLanguage();

  const yesNoLabels = {
    en: { yes: 'Yes', no: 'No' },
    fr: { yes: 'Oui', no: 'Non' },
    ar: { yes: 'نعم', no: 'لا' }
  };

  const renderOptions = () => {
    if (question.type === 'yesno') {
      return (
        <div className="grid grid-cols-2 gap-4">
          {['yes', 'no'].map(value => (
            <button
              key={value}
              onClick={() => onAnswer(value)}
              className={`py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
                currentAnswer === value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {yesNoLabels[language][value as 'yes' | 'no']}
            </button>
          ))}
        </div>
      );
    }

    if (question.options) {
      return (
        <div className="space-y-3">
          {question.options.map(option => (
            <button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-102 text-${direction === 'rtl' ? 'right' : 'left'} ${
                currentAnswer === option.value
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-102'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {option.label[language]}
            </button>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full max-w-3xl mx-auto animate-slide-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 space-y-8 border border-gray-200 dark:border-gray-700">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 flex items-center justify-center text-white font-bold text-lg animate-pulse-slow">
              {question.id}
            </div>
            <p
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed flex-1"
              dir={direction}
            >
              {question.question[language]}
            </p>
          </div>
        </div>

        <div className="pt-4" dir={direction}>
          {renderOptions()}
        </div>
      </div>
    </div>
  );
}
