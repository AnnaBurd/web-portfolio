import { Envelope } from "@phosphor-icons/react/dist/ssr/Envelope";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";

const ContactsLinks = () => {
  return (
    <>
      <a
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
      </a>
    </>
  );
};

export default ContactsLinks;
