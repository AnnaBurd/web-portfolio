"use client";

import Link from "./ui/Link";

import LanguagePicker from "./language-picker/LanguagePicker";
import { Locale } from "../i18n/i18n-config";
import { usePathname } from "next/navigation";

type Props = {
  lang: Locale;
};

const Header: React.FC<Props> = ({ lang }) => {
  const pathname = usePathname();

  return (
    <header className="absolute top-12 z-50 w-full">
      <div className="wrapper">
        <div className="flex items-center justify-between ">
          <a
            href="/"
            aria-current="page"
            aria-label="home"
            className="  mr-auto text-lg font-extrabold"
          >
            <span className="[font-size:1.02em]">A</span>nna
            <span className="[font-size:1.02em]">B</span>urd.
          </a>
          <nav className="mr-0.5">
            {/* TODO: Refactor */}
            <Link
              href={
                pathname === "/" ||
                pathname === "/en" ||
                pathname === "/vi" ||
                pathname === "/ru"
                  ? `#portfolio`
                  : pathname.startsWith("/en/") ||
                      pathname.startsWith("/vi/") ||
                      pathname.startsWith("/ru/")
                    ? `/${lang}#portfolio`
                    : "/#portfolio"
              }
              className="mx-4 "
            >
              my work
            </Link>
            <Link href="#footer" className="mx-4 ">
              get in touch
            </Link>
          </nav>

          <LanguagePicker currentLang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
