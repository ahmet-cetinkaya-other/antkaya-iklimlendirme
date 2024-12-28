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
  },
  home_hero_title: {
    tr: 'Profesyonel İklimlendirme Çözümleri ile <span class="text-yellow-500 dark:text-yellow-400">Antkaya İklimlendirme</span>',
    en: 'Professional Climate Solutions with <span class="text-yellow-500 dark:text-yellow-400">Antkaya HVAC</span>',
    ru: 'Профессиональные климатические решения с <span class="text-yellow-500 dark:text-yellow-400">Antkaya HVAC</span>',
  },
  home_hero_subtitle: {
    tr: "Ev ve işyeriniz için uzman iklimlendirme servisi. Satış, montaj, bakım ve onarım hizmetleri.",
    en: "Expert HVAC service for your home and business. Sales, installation, maintenance, and repair services.",
    ru: "Экспертное обслуживание систем ОВиК для вашего дома и бизнеса. Продажа, установка, обслуживание и ремонт.",
  },
  home_hero_primary_btn: {
    tr: "Hizmetleri İncele",
    en: "Browse Services",
    ru: "Просмотреть услуги",
  },
  home_hero_secondary_btn: {
    tr: "Servis Talebi",
    en: "Service Request",
    ru: "Запрос на обслуживание",
  },
  home_hero_reviews: {
    tr: '<span class="font-bold">1000+</span> Mutlu Müşteri',
    en: '<span class="font-bold">1000+</span> Happy Customers',
    ru: '<span class="font-bold">1000+</span> Довольных клиентов',
  },
} as Record<TranslationKey, Record<Locales, string>>;
