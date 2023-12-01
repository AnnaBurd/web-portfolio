"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as _useTranslationOriginal,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  Locale,
  Namespace,
  defaultLocale,
  locales,
  cookieName,
} from "./i18n-config";

function getOptions(lng = defaultLocale, ns = "defaultNS") {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng,
    fallbackNS: "defaultNS",
    defaultNS: "defaultNS",
    ns,
  };
}

// Check if we are on the server side
const runsOnServerSide = typeof window === "undefined";

// Initialize i18next instance
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? locales : [],
  });

// Export access to the i18next instance for the server/client side through a hook (wrap the original useTranslation hook)
export function useTranslation(
  lng: Locale,
  ns?: Namespace,
  options?: UseTranslationOptions<undefined> | undefined,
) {
  const _t = _useTranslationOriginal(ns, options);

  // Get the reference to the i18next instance
  const i18n = _t.i18n;

  // Get the reference to the cookies (on client side)
  const [cookies, setCookie] = useCookies([cookieName]);

  const [activeLng, setActiveLng] = useState(
    runsOnServerSide ? "none" : i18n.resolvedLanguage, // if we are on the server side, we ignore the language detected by the i18n instance
  );

  // If we are on the server side, we need to set the language on the i18next instance
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }

  // If we are on the client side, we need to set the language on the i18next instance and on the cookies

  useEffect(() => {
    if (activeLng === "none" || activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);

  useEffect(() => {
    if (activeLng === "none" || !lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n, activeLng]);

  useEffect(() => {
    if (activeLng === "none" || cookies[cookieName] === lng) return;
    setCookie(cookieName, lng, { path: "/" });
  }, [cookies, lng, setCookie, activeLng]);

  return _t;
}
