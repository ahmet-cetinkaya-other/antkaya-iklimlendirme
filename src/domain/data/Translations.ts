import type { Locales, TranslationKey } from "../models/TranslationKey";

export default {
  common_home: {
    tr: "Anasayfa",
    en: "Home",
    ru: "Домой",
  },
  common_tr: {
    tr: "Türkçe",
    en: "Türkçe",
    ru: "Türkçe",
  },
  common_en: {
    tr: "English",
    en: "English",
    ru: "English",
  },
  common_ru: {
    tr: "Русский",
    en: "Русский",
    ru: "Русский",
  },
  common_services: {
    tr: "Hizmetler",
    en: "Services",
    ru: "Услуги",
  },
  common_posts: {
    tr: "Yazılar",
    en: "Posts",
    ru: "Посты",
  },
  common_contact: {
    tr: "İletişim",
    en: "Contact",
    ru: "Контакты",
  },
} as Record<TranslationKey, Record<Locales, string>>;
