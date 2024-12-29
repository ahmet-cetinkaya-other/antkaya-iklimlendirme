import type Faq from "../models/Faq";
import { TranslationKeys } from "../models/TranslationKey";

export default [
  {
    question: TranslationKeys.faq_ac_maintenance_question,
    answer: TranslationKeys.faq_ac_maintenance_answer,
  },
  {
    question: TranslationKeys.faq_supported_brands_question,
    answer: TranslationKeys.faq_supported_brands_answer,
  },
  {
    question: TranslationKeys.faq_emergency_service_question,
    answer: TranslationKeys.faq_emergency_service_answer,
  },
  {
    question: TranslationKeys.faq_boiler_maintenance_question,
    answer: TranslationKeys.faq_boiler_maintenance_answer,
  },
] as Faq[];
