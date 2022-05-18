import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en.json';
import hr from './public/locales/hr.json';

i18n.use(initReactI18next).init({
  resources: {
    'en-US': { translation: en },
    'hr-HR': { translation: hr },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: { escapeValue: false },
});

export default i18n;
