import type II18n from "~/core/acore-ts/i18n/abstraction/II18n";
import Container, { Tokens } from "~/presentation/Container";
import type { TranslationKey, Locales } from "~/domain/models/TranslationKey";
import { PAGES } from "../constants/constants";

export function useI18nStatic(url: URL | null = null) {
  const i18n = Container.resolve<II18n>(Tokens.I18n);
  const currentUrl = url || new URL(window.location.href);
  const decodedPath = decodeURIComponent(currentUrl.pathname);
  const currentPagePath = decodedPath.split("/")[1];

  let currentPage = "home";
  let currentLocale: Locales = "tr";
  // Search through all pages and their localized paths
  for (const [pageName, page] of Object.entries(PAGES)) {
    for (const [locale, path] of Object.entries(page.paths)) {
      const cleanPath = decodeURIComponent(path).replace(/^\/|\/$/g, "");
      if (cleanPath === currentPagePath || (cleanPath === "" && currentPagePath === "")) {
        currentPage = pageName;
        currentLocale = locale as Locales;
        break;
      }
    }
  }

  return {
    translate: (key: TranslationKey) => i18n.translate(currentLocale, key),
    currentLocale,
    currentPage,
  };
}
