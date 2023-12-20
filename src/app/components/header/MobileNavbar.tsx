import { Locale } from "@/app/i18n/i18n-config";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import Link from "../ui/Link";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { Envelope } from "@phosphor-icons/react/dist/ssr/Envelope";
import contacts from "../contacts/Contacts";

type Props = {
  lang: Locale;
  links: { path: string; text: string }[];
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const backgroundVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${
      height * 2 + 200
    }px  at calc(100% - var(--inset) * 3/2 - 14px) calc(var(--inset) * 3/2 + 14px))`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath:
      "circle(28px at calc(100% - var(--inset) * 3/2 - 14px) calc(var(--inset) * 3/2 + 14px))",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const navigationListVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: "grid",
  },
  closed: {
    display: "none",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
      // display: { delay: 1 },
      // transitionEnd: { display: "none" },
    },
    // display: "none",
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileNavbar: React.FC<Props> = ({ lang, links }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  //   const { height } = useDimensions(containerRef);
  // TODO: get height of the menu and pass it to backgroundVariants.open
  // to adjust circle clip path animation speed to the menu height

  return (
    <motion.div
      className="z-10  order-10 ml-4 flex items-center md:hidden"
      animate={isOpen ? "open" : "closed"}
      initial={false} // Prevents animation on first render
    >
      <button
        onClick={() => {
          toggleOpen();
        }}
        className="z-50"
      >
        <svg width="26" height="26" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>

      <motion.div
        className="absolute -top-[calc(var(--inset)*3/2)] left-[calc(var(--inset)/2)] -z-10 h-[calc(100svh-var(--inset)*2/2)] w-[calc(100%-var(--inset)*2/2)] bg-[--background-accent] "
        variants={backgroundVariants}
      ></motion.div>

      <motion.ul
        className="  absolute -top-[calc(var(--inset)*3/2)] left-[calc(var(--inset)/2)] z-0 grid h-[calc(100svh-var(--inset)*2/2)] w-[calc(100%-var(--inset)*2/2)] grid-rows-[1fr,auto,auto,1fr] gap-7"
        variants={navigationListVariants}
        onClick={() => {
          isOpen && toggleOpen(); // close menu when clicking on a link / outside of the menu
        }}
      >
        <div></div>
        {links.map((link) => (
          <motion.li
            key={link.text}
            variants={linkVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="pointer-events-auto  self-center justify-self-center "
          >
            <Link href={link.path} className="" key={link.path}>
              {link.text}
            </Link>
          </motion.li>
        ))}
        <div className="m-4 flex items-center justify-end gap-2 self-end  pt-10">
          {contacts.map((contact) => (
            <motion.a
              key={contact.key}
              variants={linkVariants}
              href={contact.href}
              whileHover={{ color: "var(--color-btn-active)" }}
              whileTap={{ scale: 0.95 }}
            >
              {contact.icon}
            </motion.a>
          ))}
        </div>
      </motion.ul>
    </motion.div>
  );
};

export default MobileNavbar;
