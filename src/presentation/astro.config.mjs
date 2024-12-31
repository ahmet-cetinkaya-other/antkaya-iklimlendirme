import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

export default defineConfig({
  site: "https://antkayaiklimlendirme.com",
  prefetch: true,
  srcDir: "src/",
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "tr",
        locales: {
          tr: "tr",
          en: "en",
        },
      },
    }),
    compressor({
      gzip: true,
      brotli: true,
    }),
  ],
  experimental: {
    clientPrerender: true,
  },
});
