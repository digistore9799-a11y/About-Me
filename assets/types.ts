export type Language = 'en' | 'fa';

export interface TranslationContent {
  brand: string;
  nav: {
    home: string;
    about: string;
    languageToggle: string;
  };
  hero: {
    greeting: string;
    name: string;
    headline: string;
    supportingText: string;
    ctaButton: string;
    avatarAlt: string;
  };
  about: {
    sectionTag: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    focusAreasTitle: string;
  };
  interests: {
    title: string;
    subtitle: string;
    cards: Array<{
      id: string;
      title: string;
      description: string;
      icon: 'code' | 'globe' | 'sparkles';
    }>;
  };
  footer: {
    copyright: string;
  };
}
