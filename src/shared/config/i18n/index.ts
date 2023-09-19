import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// eslint-disable-next-line no-void
void i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next).init({
        fallbackLng: 'ru',
        // debug: __IS__DEV__, // if you need debug information
        interpolation: {
            escapeValue: false,
        },
    })
    .then();

export default i18n;
