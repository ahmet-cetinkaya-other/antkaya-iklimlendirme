import type { TranslationKey } from "./TranslationKey";

export default class Faq {
  constructor(
    public question: TranslationKey,
    public answer: TranslationKey,
  ) {}
}
