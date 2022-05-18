import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './public/locales/en';
import { hr } from './public/locales/hr';

i18n.use(initReactI18next).init({
  resources: {
    'en-US': { translations: en },
    'hr-HR': { translations: hr },
  },
  lng: 'en-US',
  fallbackLng: 'en-US',
  interpolation: { escapeValue: false },
});

export default i18n;
