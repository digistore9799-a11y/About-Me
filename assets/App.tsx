import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Footer } from './components/Footer';
import { BackgroundCanvas } from './components/BackgroundCanvas';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  // Sync document language and direction
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const currentContent = translations[language];

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden">
      {/* Interactive Ambient Constellation Background */}
      <BackgroundCanvas />

      {/* Main Navigation Bar */}
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        content={currentContent}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        {/* 1. Hero Section */}
        <Hero content={currentContent} />

        {/* 2. About Me Section */}
        <About content={currentContent} />

        {/* 3. Personal Interests */}
        <Interests content={currentContent} />
      </main>

      {/* Footer */}
      <Footer content={currentContent} />
    </div>
  );
}
