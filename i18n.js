const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  lng: 'en',
  otherLanguages: ['de', 'ar', 'id', 'zh', 'pt'],
  fallbackLng: 'en',
  localeSubpaths: {
    en: 'en',
    ar: 'ar',
    de: 'de',
    id: 'id',
    pt: 'pt',
    zh: 'zh',
  },
});
