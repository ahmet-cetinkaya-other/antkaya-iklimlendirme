import type II18n from "~/core/acore-ts/i18n/abstraction/II18n";
import Container, { Tokens } from "~/presentation/Container";
import type { TranslationKey } from "~/domain/models/TranslationKey";

export function useI18nStatic(url: URL | null = null) {
  const i18n = Container.resolve<II18n>(Tokens.I18n);

  const currentUrl = url || new URL(window.location.href);
  let currentLocale = i18n.getLocaleFromUrl(currentUrl, i18n.locales[0]);
  if (!i18n.locales.includes(currentLocale)) currentLocale = i18n.locales[0];

  return (key: TranslationKey) => i18n.translate(currentLocale, key);
}
