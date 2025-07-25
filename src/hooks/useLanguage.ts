import useLocalStorageState from 'use-local-storage-state';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja' | 'zh';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export const useLanguage = () => {
  const [language, setLanguage] = useLocalStorageState<Language>('language', {
    defaultValue: 'en',
  });

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return {
    language,
    setLanguage,
    currentLanguage,
    languages,
  };
};