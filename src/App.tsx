import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { IntroScreen } from './components/IntroScreen';
import { Survey } from './components/Survey';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageSelector } from './components/LanguageSelector';
import { SurveyResponse } from './types/survey';

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleComplete = (responses: SurveyResponse[]) => {
    console.log('Survey completed with responses:', responses);
  };

  const handleRestart = () => {
    setHasStarted(false);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen relative">
          <div className="absolute top-4 right-4 flex items-center gap-4 z-10">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {!hasStarted ? (
            <IntroScreen onStart={handleStart} />
          ) : (
            <Survey onComplete={handleComplete} onRestart={handleRestart} />
          )}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
