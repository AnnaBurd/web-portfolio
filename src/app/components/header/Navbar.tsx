"use client";

import { usePathname } from "next/navigation";
import Link from "../ui/Link";
import { Locale } from "@/app/i18n/i18n-config";

import MobileNavbar from "./MobileNavbar";

type Props = {
  lang: Locale;
};

const Navbar: React.FC<Props> = ({ lang }) => {
  const pathname = usePathname();

  const homePathRe = /^\/(en|vi|ru)?$/i;
  const pathWithLocaleRe = /^\/(en|vi|ru)\//i;

  const portfolioPath = homePathRe.test(pathname)
    ? "#portfolio"
    : pathWithLocaleRe.test(pathname)
      ? `/${lang}#portfolio`
      : "/#portfolio";

  const links = [
    { path: portfolioPath, text: "my work" },
    { path: "#footer", text: "get in touch" },
  ];

  return (
    <>
      <MobileNavbar lang={lang} links={links} />

      <nav className="mr-0.5 max-md:hidden">
        {links.map((link) => (
          <Link href={link.path} className="mx-4 " key={link.path}>
            {link.text}
          </Link>
        ))}

        {/* <Link href={portfolioPath} className="mx-4 ">
          my work
        </Link>
        <Link href="#footer" className="mx-4 ">
          get in touch
        </Link> */}
      </nav>
    </>
  );
};

export default Navbar;
