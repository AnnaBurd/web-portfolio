// import { useTranslation } from "next-i18next";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (locale: string) => {
//     i18n.changeLanguage(locale);
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage("en")}>English</button>
//       <button onClick={() => changeLanguage("ru")}>Español</button>
//       <button onClick={() => changeLanguage("vn")}>Français</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

type Props = {
  onLanguageChange: (locale: string) => void;
};

const LanguageSwitcher: React.FC<Props> = ({ onLanguageChange }) => {
  return (
    <div>
      <select>
        <option value="en">English</option>
        <option value="vn">Vietnamese</option>
        <option value="ru">Russian</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
