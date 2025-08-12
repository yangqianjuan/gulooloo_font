import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "zh", "es", "fr", "ja", "ko", "pt", "tw", "de"],

  // Used when no locale matches
  defaultLocale: "en",
});
