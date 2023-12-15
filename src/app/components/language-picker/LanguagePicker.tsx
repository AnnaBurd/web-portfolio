"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import ChevronDownIcon from "../icons/ChevronDownIcon";
import "./LanguagePicker.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, locales } from "../../i18n/i18n-config";
import { useTranslation } from "../../i18n/client";
import ReactDOM from "react-dom";

type Props = {
  currentLang: Locale;
};

// Preload image flags so they are ready when the user changes language
ReactDOM.preload("https://flagsapi.com/GB/flat/64.png", {
  as: "image",
  fetchPriority: "low",
});

ReactDOM.preload("https://flagsapi.com/RU/flat/64.png", {
  as: "image",
  fetchPriority: "low",
});

ReactDOM.preload("https://flagsapi.com/VN/flat/64.png", {
  as: "image",
  fetchPriority: "low",
});

export default function LanguagePicker({ currentLang }: Props) {
  const { t } = useTranslation(currentLang, "common");

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");

    if (segments[0] === "" && segments[1] === "work") {
      segments.splice(1, 0, locale);
    } else {
      segments[1] = locale;
    }
    return segments.join("/");
  };

  return (
    <Menu
      as="div"
      className="relative z-0 inline-block min-w-[4rem] -translate-y-[1px] text-right text-base "
    >
      <Menu.Button className="justify-center font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        {({ open }) => {
          return (
            <span
              className={`inline-flex w-full   items-center gap-1  px-3  py-1.5 pr-2 uppercase transition-colors duration-150 ease-in-out hover:bg-[--color-btn]  ${
                open ? "bg-[--color-btn]" : ""
              }`}
            >
              {currentLang}
              <ChevronDownIcon
                className={`  h-3.5 w-3.5 origin-center transition-transform duration-100 ease-out    ${
                  open ? " -translate-y-[1px] rotate-180" : ""
                }`}
              />
            </span>
          );
        }}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-1 w-max origin-top-right  bg-[--background-accent] shadow-lg ring-1 ring-black/5 focus:outline-none">
          {locales.map((locale) => (
            <Menu.Item key={locale}>
              {({ active }) => (
                <li
                  className={`pr-.5 list-none  ${
                    active || locale === currentLang ? "bg-[--color-btn]" : ""
                  }`}
                >
                  <Link
                    href={redirectedPathName(locale)}
                    className=" inline-flex  w-full items-center justify-start  gap-2 px-4 py-2.5 text-sm hover:bg-[--color-btn]"
                  >
                    <span
                      className={`flag-icon flag-icon-${locale}  h-4 w-4 `}
                    ></span>
                    {t(locale)}
                    {/* {locale.toUpperCase()} */}
                  </Link>
                </li>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
