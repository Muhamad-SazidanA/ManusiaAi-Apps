import { ChevronDown, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from './TranslationContext';
import { useState } from 'react';

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ID' as const, name: 'Indonesia', flag: '🇮🇩' },
    { code: 'EN' as const, name: 'English', flag: '🇺🇸' },
    { code: 'CN' as const, name: '中文', flag: '🇨🇳' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: typeof language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 px-2 py-1.5 h-8"
      >
        <Globe className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-sm">{currentLang?.flag}</span>
        <span className="text-sm font-medium">{currentLang?.code}</span>
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-lg shadow-xl border border-border py-1 z-50 animate-in fade-in-0 zoom-in-95">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors duration-200 flex items-center space-x-2.5 ${
                language === lang.code ? 'bg-accent text-foreground font-medium' : 'text-muted-foreground'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-primary text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}