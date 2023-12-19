"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "../ui/Link";
import { Locale } from "@/app/i18n/i18n-config";

import MobileNavbar from "./MobileNavbar";

type Props = {
  lang: Locale;
};

const Navbar: React.FC<Props> = ({ lang }) => {
  const pathname = usePathname();

  // console.log(window.location.href, window.location.origin);

  const homePathRe = /^\/(en|vi|ru)?$/i;
  const pathWithLocaleRe = /^\/(en|vi|ru)\//i;

  let portfolioPath = "#portfolio";

  if (!homePathRe.test(pathname)) {
    if (pathWithLocaleRe.test(pathname)) {
      portfolioPath = `/${lang}#portfolio`;
    } else {
      portfolioPath = "/#portfolio";
    }

    // Note: Next JS app router has a bug? navigating to a path with /#hash does not trigger scroll to the element with id=hash, when navigating from a different page a SECOND time. The first time works fine. This is a workaround, which helps but the issue still persists for n-th time navigation.
    if (typeof window !== "undefined") {
      portfolioPath = window.location.origin + portfolioPath;
    }
  }

  const links = [
    { path: portfolioPath, text: "my work" },
    { path: "#footer", text: "get in touch" },
  ];

  return (
    <>
      <MobileNavbar lang={lang} links={links} />

      <nav className="mr-0.5 max-md:hidden">
        {links.map((link) => (
          <Link
            href={link.path}
            className="mx-4 "
            key={link.path}
            scroll={true}
          >
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
