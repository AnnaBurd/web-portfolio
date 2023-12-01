import Link from "./ui/Link";

import LanguagePicker from "./language-picker/LanguagePicker";
import { Locale } from "../i18n/i18n-config";

type Props = {
  lang: Locale;
};

const Header: React.FC<Props> = async ({ lang }) => {
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
          <nav className="mr-3">
            <Link href="/#portfolio" className="mx-4 ">
              my work
            </Link>
            <Link href="/#footer" className="mx-4 ">
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
