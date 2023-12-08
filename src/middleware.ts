import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Negotiator from "negotiator";

import { locales, defaultLocale, cookieName } from "./app/i18n/i18n-config";

const availableLocales = [...locales];

function getPreferredLocale(request: NextRequest): string | undefined {
  // Check if the cookie from previous visit with the locale preferences exist
  const localeCookie = request.cookies.get(cookieName);

  if (localeCookie && availableLocales.some((l) => l === localeCookie.value)) {
    console.log(
      "🌍 getPreferredLocale: got locale preferences from cookie - ",
      localeCookie.value,
    );
    return localeCookie.value;
  }

  // An ordered by precedence list of locales the user accepts among the available locales
  const languages = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") || "",
    },
  }).languages(availableLocales);

  console.log(
    "🌍 getPreferredLocale: got locale preferences from the request header - ",
    languages[0],
  );

  const preferredLocale = languages[0];
  return preferredLocale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return; // The pathname already has a locale, so we don't need to redirect

  console.log(`➡️ middleware - redirecting ${pathname} to correct locale`);

  // Check if the browser has a default language preference
  const preferredLocale = getPreferredLocale(request);

  const locale = preferredLocale || defaultLocale;
  // Redirect to the path with the preferred|default locale

  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // "/((?!_next).*)",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
