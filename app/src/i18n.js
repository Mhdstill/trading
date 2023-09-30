import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('./locales/en.json'),
    },
    fr: {
      translation: require('./locales/fr.json'),
    },
  },
  lng: 'en', // Langue par défaut
  fallbackLng: 'en', // Langue de secours en cas de traduction manquante
  interpolation: {
    escapeValue: false, // Ne pas échapper les caractères HTML dans les traductions
  },
});

export default i18n;
