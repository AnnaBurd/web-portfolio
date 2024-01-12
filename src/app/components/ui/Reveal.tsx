"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  options?: {
    verticalCenter?: boolean;
    revealHighlight?: boolean;
  };
};

const defaultOptions = {
  verticalCenter: false,
  revealHighlight: false,
};

const Reveal: React.FC<Props> = ({ children, className, options }) => {
  const { verticalCenter, revealHighlight } = { ...defaultOptions, ...options };

  const ref = useRef<HTMLDivElement>(null);
  //   const isInView = useInView(ref);
  const isInView = useInView(ref, { once: true });

  const animationControls = useAnimation();

  useEffect(() => {
    // console.log("isInView", isInView, ref.current);

    if (isInView) {
      animationControls.start("visible");

      if (revealHighlight) {
        ref.current?.setAttribute("data-highlight", "true");
      }
    }
  }, [isInView, animationControls, revealHighlight]);

  useEffect(() => {
    if (revealHighlight) {
      ref.current?.setAttribute("data-highlight", "false");
    }
  }, [revealHighlight]);

  return (
    <div className={className ? className + "  " : " "} ref={ref}>
      <motion.div
        className={
          verticalCenter
            ? "flex h-full w-full flex-col items-center justify-center"
            : ""
        }
        variants={{
          initial: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.05,
              duration: 0.3,
              easeFn: "cubic-bezier(0.17, 0.55, 0.55, 1)",
            },
          },
        }}
        initial="initial"
        animate={animationControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
