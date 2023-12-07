export type Locale = (typeof locales)[number];

export const locales = ["en", "ru", "vi"] as const;
export const defaultLocale: Locale = "en";

export const namespaces = ["common", "home", "project"] as const;
export type Namespace = (typeof namespaces)[number];

export const cookieName = "LOCALE_PREF";
