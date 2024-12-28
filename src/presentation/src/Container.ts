import Injector from "~/core/acore-ts/dependencyInjection/Injector";
import I18n from "~/core/acore-ts/i18n/I18n";
import Translations from "~/domain/data/Translations";

const injectMap = new WeakMap<object, unknown>();
const Container = Injector.getInstance(injectMap);

export const Tokens = {
  I18n: { key: "I18n" },
};

const i18n = new I18n();
i18n.translations = Translations;
Container.register(Tokens.I18n, i18n);

export default Container;
