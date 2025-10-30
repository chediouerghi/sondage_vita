import { Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface IntroScreenProps {
  onStart: () => void;
}

export function IntroScreen({ onStart }: IntroScreenProps) {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'VitaMind',
      subtitle: 'The Listening Companion',
      tagline: 'An intelligent therapist-poet speaks',
      greeting: 'Good morning, traveler of thoughts.',
      intro: 'Before the world rushes in — let me walk with you through the landscape of your inner world. Not to judge, but to understand. Not to label, but to see.',
      note: 'This journey takes about 5 minutes. Answer with your heart, not your mind.',
      button: 'Begin the Journey'
    },
    fr: {
      title: 'VitaMind',
      subtitle: 'Le Compagnon d\'Écoute',
      tagline: 'Un thérapeute-poète intelligent parle',
      greeting: 'Bonjour, voyageur de pensées.',
      intro: 'Avant que le monde ne se précipite — laissez-moi marcher avec vous à travers le paysage de votre monde intérieur. Non pour juger, mais pour comprendre. Non pour étiqueter, mais pour voir.',
      note: 'Ce voyage prend environ 5 minutes. Répondez avec votre cœur, pas votre esprit.',
      button: 'Commencer le Voyage'
    },
    ar: {
      title: 'فيتا مايند',
      subtitle: 'الرفيق المستمع',
      tagline: 'معالج-شاعر ذكي يتحدث',
      greeting: 'صباح الخير، مسافر الأفكار.',
      intro: 'قبل أن يندفع العالم - دعني أسير معك عبر مشهد عالمك الداخلي. ليس للحكم، بل للفهم. ليس للتصنيف، بل للرؤية.',
      note: 'تستغرق هذه الرحلة حوالي 5 دقائق. أجب بقلبك، وليس بعقلك.',
      button: 'ابدأ الرحلة'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-500 dark:to-purple-600 mb-6 animate-float">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
            {t.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 italic">
            {t.subtitle}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            ({t.tagline})
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
            {t.greeting}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.intro}
          </p>

          <div className="pt-4 pb-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 italic border-l-4 border-blue-500 dark:border-blue-400 pl-4">
              {t.note}
            </p>
          </div>

          <button
            onClick={onStart}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t.button}
          </button>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>14 questions • 5 minutes • Completely private</span>
          </div>
        </div>
      </div>
    </div>
  );
}
