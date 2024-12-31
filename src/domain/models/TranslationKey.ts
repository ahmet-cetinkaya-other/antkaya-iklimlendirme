export type Locales = "tr" | "en" | "ru";

export enum TranslationKeys {
  common_en = "common_en",
  common_tr = "common_tr",
  common_ru = "common_ru",
  common_home = "common_home",
  common_posts = "common_posts",
  common_contact = "common_contact",
  common_services = "common_services",
  common_products = "common_products",
  contact_call = "contact_call",
  contact_call_us = "contact_call_us",
  home_hero_title = "home_hero_title",
  home_hero_subtitle = "home_hero_subtitle",
  home_hero_primary_btn = "home_hero_primary_btn",
  home_hero_secondary_btn = "home_hero_secondary_btn",
  home_hero_reviews = "home_hero_reviews",
  brands_section_title = "brands_section_title",
  brands_section_subtitle = "brands_section_subtitle",
  features_section_title = "features_section_title",
  features_section_subtitle = "features_section_subtitle",
  features_professional_service = "features_professional_service",
  features_professional_service_desc = "features_professional_service_desc",
  features_maintenance = "features_maintenance",
  features_maintenance_desc = "features_maintenance_desc",
  features_support = "features_support",
  features_support_desc = "features_support_desc",
  features_quality = "features_quality",
  features_quality_desc = "features_quality_desc",
  features_tabs_title = "features_tabs_title",
  features_ac_service_heading = "features_ac_service_heading",
  features_ac_service_content = "features_ac_service_content",
  features_ac_installation_heading = "features_ac_installation_heading",
  features_ac_installation_content = "features_ac_installation_content",
  features_heating_service_heading = "features_heating_service_heading",
  features_heating_service_content = "features_heating_service_content",
  faq_heading = "faq_heading",
  faq_subtitle = "faq_subtitle",
  faq_ac_maintenance_question = "faq_ac_maintenance_question",
  faq_ac_maintenance_answer = "faq_ac_maintenance_answer",
  faq_supported_brands_question = "faq_supported_brands_question",
  faq_supported_brands_answer = "faq_supported_brands_answer",
  faq_emergency_service_question = "faq_emergency_service_question",
  faq_emergency_service_answer = "faq_emergency_service_answer",
  faq_boiler_maintenance_question = "faq_boiler_maintenance_question",
  faq_boiler_maintenance_answer = "faq_boiler_maintenance_answer",
  faq_ac_filter_question = "faq_ac_filter_question",
  faq_ac_filter_answer = "faq_ac_filter_answer",
  faq_gas_leak_question = "faq_gas_leak_question",
  faq_gas_leak_answer = "faq_gas_leak_answer",
  faq_service_cost_question = "faq_service_cost_question",
  faq_service_cost_answer = "faq_service_cost_answer",
  faq_warranty_question = "faq_warranty_question",
  faq_warranty_answer = "faq_warranty_answer",
  faq_service_area_question = "faq_service_area_question",
  faq_service_area_answer = "faq_service_area_answer",
  hero_alt_title = "hero_alt_title",
  hero_alt_subtitle = "hero_alt_subtitle",
  hero_alt_button = "hero_alt_button",
  footer_newsletter_title = "footer_newsletter_title",
  footer_newsletter_desc = "footer_newsletter_desc",
  footer_company = "footer_company",
  footer_services = "footer_services",
  footer_about = "footer_about",
  footer_contact = "footer_contact",
  footer_emergency = "footer_emergency",
  footer_maintenance = "footer_maintenance",
  footer_installation = "footer_installation",
  footer_repair = "footer_repair",
  footer_copyright = "footer_copyright",
  contact_email = "contact_email",
  common_street = "common_street",
  common_road = "common_road",
  common_neighborhood = "common_neighborhood",
  common_address = "common_address",
  contact_title = "contact_title",
  contact_subtitle = "contact_subtitle",
  contact_form_title = "contact_form_title",
  contact_first_name = "contact_first_name",
  contact_last_name = "contact_last_name",
  contact_details = "contact_details",
  contact_knowledgebase_title = "contact_knowledgebase_title",
  contact_knowledgebase_content = "contact_knowledgebase_content",
  contact_knowledgebase_link = "contact_knowledgebase_link",
  contact_faq_content = "contact_faq_content",
  contact_faq_link = "contact_faq_link",
  contact_visit_title = "contact_visit_title",
  contact_email_title = "contact_email_title",
  contact_email_content = "contact_email_content",
  contact_submit = "contact_submit",
  contact_redirected_your_email_client = "contact_redirected_your_email_client",
  faq_short_title = "faq_short_title",
  services_main_title = "services_main_title",
  services_main_subtitle = "services_main_subtitle",
  services_main_cta = "services_main_cta",
  services_learn_more = "services_learn_more",
  services_contact = "services_contact",
  services_schedule = "services_schedule",
  services_call_now = "services_call_now",
  services_ac_service_title = "services_ac_service_title",
  services_ac_service_desc = "services_ac_service_desc",
  services_ac_service_img_alt = "services_ac_service_img_alt",
  services_ac_install_title = "services_ac_install_title",
  services_ac_install_desc = "services_ac_install_desc",
  services_ac_install_img_alt = "services_ac_install_img_alt",
  services_heating_title = "services_heating_title",
  services_heating_desc = "services_heating_desc",
  services_heating_img_alt = "services_heating_img_alt",
  services_maintenance_title = "services_maintenance_title",
  services_maintenance_desc = "services_maintenance_desc",
  services_maintenance_img_alt = "services_maintenance_img_alt",
  services_emergency_title = "services_emergency_title",
  services_emergency_desc = "services_emergency_desc",
  services_emergency_img_alt = "services_emergency_img_alt",
  services_stats_title = "services_stats_title",
  services_stats_subtitle = "services_stats_subtitle",
  services_stats_experience = "services_stats_experience",
  services_stats_projects = "services_stats_projects",
  services_stats_satisfaction = "services_stats_satisfaction",
  services_stats_support = "services_stats_support",
  common_more = "common_more",
  posts_page_title = "posts_page_title",
  posts_page_subtitle = "posts_page_subtitle",
  posts_recent_title = "posts_recent_title",
  posts_no_posts = "posts_no_posts",
  common_post = "common_post",
  posts_read = "posts_read",
  posts_other_posts = "posts_other_posts",
  common_share = "common_share",
  common_copy_link = "common_copy_link",
  common_copied = "common_copied",
  error_404_title = "error_404_title",
  error_404_subtitle = "error_404_subtitle", 
  error_404_content = "error_404_content",
  error_404_button = "error_404_button",
}

export type TranslationKey = TranslationKeys;
