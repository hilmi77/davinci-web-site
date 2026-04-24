import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import tr from '../locales/tr/translation.json'
import en from '../locales/en/translation.json'

const LANG_KEY = 'davinci_lang'
const savedLang = localStorage.getItem(LANG_KEY) ?? 'tr'

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: 'tr',
  interpolation: { escapeValue: false },
  keySeparator: false,
  nsSeparator: false,
})

i18n.on('languageChanged', (lang) => {
  localStorage.setItem(LANG_KEY, lang)
})

export default i18n
