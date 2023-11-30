"use client";

import { usePathname } from "next/navigation";

import { Locale, locales } from "../i18n/i18n-config";
import Link from "next/link";
import { useTranslation } from "../i18n/client";

type Props = {
  lang: Locale;
};

const LanguageSwitcher: React.FC<Props> = ({ lang }) => {
  const { t } = useTranslation(lang, "common");

  console.log("LanguageSwitcher: ", t("title"), "Locale: ", lang);

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    // console.log("pathName", pathName);
    // console.log("segments", segments);

    if (segments[0] === "" && segments[1] === "work") {
      segments.splice(1, 0, locale);
    } else {
      segments[1] = locale;
    }
    return segments.join("/");
  };

  return (
    <div>
      <ul className="ml-8 flex gap-3 text-base font-medium">
        {locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{t(locale)}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
