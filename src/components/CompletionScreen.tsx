import { Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CompletionScreenProps {
  onRestart: () => void;
}

export function CompletionScreen({ onRestart }: CompletionScreenProps) {
  const { language, direction } = useLanguage();

  const content = {
    en: {
      title: 'Thank you for walking this path with me.',
      message: 'Your answers carry light — patterns your conscious mind may not yet see.',
      reflection: 'I\'ll reflect them gently, and suggest the test that best reveals your inner rhythm.',
      purpose: 'Not to label, but to understand.',
      healing: 'Because healing begins not in diagnosis — but in awareness.',
      note: 'Your responses have been recorded and will help us understand your unique perspective.',
      restart: 'Start Over'
    },
    fr: {
      title: 'Merci d\'avoir parcouru ce chemin avec moi.',
      message: 'Vos réponses portent de la lumière — des motifs que votre esprit conscient ne voit peut-être pas encore.',
      reflection: 'Je les refléterai doucement et suggérerai le test qui révèle le mieux votre rythme intérieur.',
      purpose: 'Non pour étiqueter, mais pour comprendre.',
      healing: 'Parce que la guérison commence non dans le diagnostic — mais dans la conscience.',
      note: 'Vos réponses ont été enregistrées et nous aideront à comprendre votre perspective unique.',
      restart: 'Recommencer'
    },
    ar: {
      title: 'شكراً لك على سلوك هذا الطريق معي.',
      message: 'إجاباتك تحمل النور - أنماط قد لا يراها عقلك الواعي بعد.',
      reflection: 'سأعكسها بلطف، وأقترح الاختبار الذي يكشف بشكل أفضل عن إيقاعك الداخلي.',
      purpose: 'ليس للتصنيف، بل للفهم.',
      healing: 'لأن الشفاء يبدأ ليس في التشخيص - بل في الوعي.',
      note: 'تم تسجيل إجاباتك وستساعدنا في فهم وجهة نظرك الفريدة.',
      restart: 'ابدأ من جديد'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8 animate-fade-in" dir={direction}>
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600 mb-6 animate-float">
            <Heart className="w-12 h-12 text-white animate-pulse-slow" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 space-y-6 border border-gray-200 dark:border-gray-700">
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">
            {t.message}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.reflection}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            {t.purpose}
          </p>

          <div className="flex items-center gap-3 pt-4 pb-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {t.healing}
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {t.note}
            </p>
          </div>

          <button
            onClick={onRestart}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t.restart}
          </button>
        </div>
      </div>
    </div>
  );
}
