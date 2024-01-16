"use client";

import { useContext } from "react";
import styles from "./ContactsBar.module.css";
import ContactsLinks from "./ContactsLinks";
import { Context } from "@/app/context/context-provider";
import { cubicBezier, motion } from "framer-motion";

type Props = {};

const barVariants = {
  initial: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.4,
      ease: cubicBezier(0.17, 0.55, 0.55, 1),
    },
  },
};

const ContactsBar: React.FC<Props> = ({}) => {
  const { loadingAnimationState } = useContext(Context);

  return (
    <aside className="w-30  fixed left-[0.75rem] top-[48vh] z-50 flex -translate-y-1/2 flex-col max-md:hidden">
      <motion.div
        animate={loadingAnimationState === "running" ? "initial" : "visible"}
        variants={barVariants}
        className={` ${styles.contacts} grid gap-2 text-[rgba(var(--text-rgb))]`}
      >
        <ContactsLinks />
      </motion.div>
    </aside>
  );
};

export default ContactsBar;
