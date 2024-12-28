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
  common_products: {
    tr: "Ürünler",
    en: "Products",
    ru: "Продукты",
  },
  contact_call: {
    tr: "Ara",
    en: "Call",
    ru: "Позвонить",
  },
  contact_call_us: {
    tr: "Bizi arayın",
    en: "Call us",
    ru: "Позвоните нам",
  }
} as Record<TranslationKey, Record<Locales, string>>;
