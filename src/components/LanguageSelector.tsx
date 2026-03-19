import React from 'react';
import { useLanguage } from '../i18n';
import { Language } from '../translations';

export const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-4 text-sm font-mono tracking-widest uppercase">
      {(['es', 'ca', 'en'] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`hover:text-accent transition-colors ${
            language === lang ? 'text-accent font-bold' : 'text-white/50'
          }`}
          aria-label={`Select language: ${t.nav[`lang_${lang}` as keyof typeof t.nav]}`}
        >
          {t.nav[`lang_${lang}` as keyof typeof t.nav]}
        </button>
      ))}
    </div>
  );
};
