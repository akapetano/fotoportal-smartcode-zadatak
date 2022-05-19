import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en.json';
import hr from './public/locales/hr.json';
import { Locale } from './src/enums/locale';

i18n.use(initReactI18next).init({
  resources: {
    [Locale.En]: { translation: en },
    [Locale.Hr]: { translation: hr },
  },
  lng: Locale.En,
  fallbackLng: Locale.En,
  interpolation: { escapeValue: false },
});

export default i18n;
