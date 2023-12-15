import { Locale } from "../../i18n/i18n-config";
import LanguagePicker from "../language-picker/LanguagePicker";

import Logo from "./Logo";
import Navbar from "./Navbar";

type Props = {
  lang: Locale;
};

const Header: React.FC<Props> = ({ lang }) => {
  return (
    <header className="4xl:top-12 absolute top-[calc(var(--inset)*2)] z-50 w-full">
      <div className="wrapper">
        <div className="flex items-center justify-between ">
          <Logo />

          <Navbar lang={lang} />

          <LanguagePicker currentLang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
