import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

import styles from "./ContactsBar.module.css";
import ContactsLinks from "./ContactsLinks";

type Props = {};

const ContactsBar: React.FC<Props> = ({}) => {
  return (
    <aside className="w-30  4xl:flex fixed left-[0.75rem] top-[48vh] z-50 hidden -translate-y-1/2 flex-col">
      <div
        className={` ${styles.contacts} grid gap-2 text-[rgba(var(--text-rgb))]`}
      >
        {/* <a
          href="#"
          className="transition-all duration-150 ease-in-out hover:text-[--color-btn-active]"
        >
          <LinkedinLogo size={26} weight="fill" />
        </a>
        <a
          href="#"
          className="transition-all duration-150 ease-in-out hover:text-[--color-btn-active]"
        >
          <GithubLogo size={26} weight="fill" />
        </a>

        <a
          href="#"
          className="transition-all duration-150 ease-in-out hover:text-[--color-btn-active]"
        >
          <Envelope size={26} weight="fill" />
        </a> */}

        <ContactsLinks />
      </div>
    </aside>
  );
};

export default ContactsBar;
