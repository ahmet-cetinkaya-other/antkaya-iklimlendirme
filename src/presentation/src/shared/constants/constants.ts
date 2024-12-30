import Company from "~/domain/data/Company";
import { TranslationKeys, type Locales } from "~/domain/models/TranslationKey";
import ogImageSrc from "~/presentation/shared/assets/images/image-not-found.svg";

export const SITE = {
  title: Company.name,
  tagline: "Dolor Sit Amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  description_short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  url: "https://antkayaiklimlendimre.com",
  author: Company.name,
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Dolor Sit Amet`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image: ogImageSrc,
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
  products: {
    name: TranslationKeys.common_products,
    paths: {
      tr: "/urunler/",
      en: "/products/",
      ru: "/продукты/",
    },
  },
  faq: {
    name: TranslationKeys.faq_short_title,
    paths: {
      tr: "/sss/",
      en: "/faq/",
      ru: "/чаво/",
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
