import Company from "~/domain/data/Company";
import { TranslationKeys, type Locales } from "~/domain/models/TranslationKey";
import defaultOgImage from "~/presentation/src/shared/assets/images/antkaya-iklimlendirme-logo.webp";

export const SITE = {
  title: Company.name,
  tagline: TranslationKeys.seo_tagline,
  description: TranslationKeys.seo_description,
  description_short: TranslationKeys.seo_description_short,
  url: "https://antkayaiklimlendimre.com",
  author: Company.name,
};

export const SEO = {
  title: SITE.title,
  description: TranslationKeys.seo_description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "tr",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: TranslationKeys.seo_description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: TranslationKeys.seo_description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: TranslationKeys.seo_og_title,
  description: TranslationKeys.seo_og_description,
  image: defaultOgImage,
};

export type PageLink = {
  name: TranslationKeys;
  paths: Record<Locales, string>;
};
export const PAGES = {
  home: {
    name: TranslationKeys.common_home,
    paths: {
      tr: "/",
      en: "/en/",
      ru: "/ru/",
    },
  },
  services: {
    name: TranslationKeys.common_services,
    paths: {
      tr: "/hizmetler/",
      en: "/services/",
      ru: "/услуги/",
    },
  },
  // products: {
  //   name: TranslationKeys.common_products,
  //   paths: {
  //     tr: "/urunler/",
  //     en: "/products/",
  //     ru: "/продукты/",
  //   },
  // },
  faq: {
    name: TranslationKeys.faq_short_title,
    paths: {
      tr: "/sss/",
      en: "/faq/",
      ru: "/чаво/",
    },
  },
  post: {
    name: TranslationKeys.common_post,
    paths: {
      tr: "/yazi/",
      en: "/post/",
      ru: "/пост/",
    },
  },
  posts: {
    name: TranslationKeys.common_posts,
    paths: {
      tr: "/yazilar/",
      en: "/posts/",
      ru: "/посты/",
    },
  },
  contact: {
    name: TranslationKeys.common_contact,
    paths: {
      tr: "/iletisim/",
      en: "/contact/",
      ru: "/контакты/",
    },
  },
};
