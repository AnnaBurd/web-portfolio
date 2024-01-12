"use client";

import { fontSecondary } from "@/app/fonts";
import ButtonLink from "../../../components/ui/ButtonLink";
import { Locale } from "@/app/i18n/i18n-config";
import { useTranslation } from "@/app/i18n/client";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { Context } from "@/app/context/context-provider";

type Props = {
  lang: Locale;
};

const headingVariants = {
  initial: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { delay: 0, duration: 0.3 } },
};

const textVariants = {
  initial: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.3 } },
};

const buttonVariants = {
  initial: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.3 } },
};

const Hero: React.FC<Props> = ({ lang }) => {
  const translation = useTranslation(lang, "home").t;
  const translationCommon = useTranslation(lang, "common").t;

  const { loadingAnimationState } = useContext(Context);

  // Show the highlight animation only when the page has loaded
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (loadingAnimationState === "running") {
      headingRef.current?.setAttribute("data-highlight", "false");
    }

    if (loadingAnimationState === "finished") {
      setTimeout(() => {
        headingRef.current?.setAttribute("data-highlight", "true");
      }, 1000);
    }
  }, [loadingAnimationState]);

  return (
    <section className="relative flex min-h-[100svh] w-full">
      <div className=" absolute inset-[--inset] z-0 bg-[--background-accent]"></div>
      <div className="wrapper  z-10 flex w-full items-center justify-stretch ">
        <motion.div
          className="4xl:pb-60 4xl:pt-40 mb-10 mt-16"
          animate={loadingAnimationState !== "running" ? "visible" : "initial"}
        >
          <motion.h1
            ref={headingRef}
            variants={headingVariants}
            className={
              fontSecondary.className + ` mb-6 font-black leading-tight`
            }
          >
            <span
              dangerouslySetInnerHTML={{
                __html: translation("h1", {
                  interpolation: { escapeValue: false },
                }),
              }}
            ></span>
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="mb-12 max-w-prose text-base leading-7 opacity-80 [text-wrap:balance] md:text-lg md:leading-loose"
          >
            {translation("intro")}
          </motion.p>

          <motion.div variants={buttonVariants}>
            <ButtonLink
              href="#portfolio"
              className=" min-w-[clamp(10rem,15vw,15rem)]"
            >
              {translationCommon("btn.work")}
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
