import { TranslationKeys } from "../models/TranslationKey";

export default {
  name: "Antkaya İklimlendirme",
  tel: "+905396069242",
  email: "antkayaiklimlendirme@gmail.com",
  address: {
    full: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {{${TranslationKeys.common_street}}} {{${TranslationKeys.common_road}}} {{${TranslationKeys.common_neighborhood}}}`,
    city: "Ankara",
    country: "Turkey",
    postalCode: "06500",
    street: "Lorem ipsum",
    region: "Çankaya",
  },
  socials: {
    facebook: "https://facebook.com/antkayaiklimlendirme",
    instagram: "https://instagram.com/antkayaiklimlendirme",
  },
};
