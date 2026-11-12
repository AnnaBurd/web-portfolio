import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export const email = "burdanovaas@gmail.com";
export const linkedin = "https://www.linkedin.com/in/annaburd/";
export const github = "https://github.com/AnnaBurd";

const contacts = [
  {
    key: "social-linkedin",
    event: "contact-linkedin",
    href: linkedin,
    icon: <LinkedinLogo size={26} weight="fill" />,
  },
  {
    key: "social-git",
    event: "contact-github",
    href: github,
    icon: <GithubLogo size={26} weight="fill" />,
  },
  {
    key: "social-mail",
    event: "contact-email",
    href: `mailto:${email}`,
    icon: <Envelope size={26} weight="fill" />,
  },
];

export default contacts;
