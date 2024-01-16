"use client";

import { cubicBezier, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  options?: {
    verticalCenter?: boolean;
    revealHighlight?: boolean;
    animationDelay?: number;
    animationRootMargin?: string;
  };
};

const defaultOptions = {
  verticalCenter: false,
  revealHighlight: false,
  animationDelay: 0,
  animationRootMargin: "-200px",
};

const Reveal: React.FC<Props> = ({
  children,
  className,
  containerClassName,
  options,
}) => {
  const { verticalCenter, revealHighlight } = { ...defaultOptions, ...options };

  const ref = useRef<HTMLDivElement>(null);
  //   const isInView = useInView(ref);
  const isInView = useInView(ref, {
    once: true,
    margin: options?.animationRootMargin || defaultOptions.animationRootMargin,
  });

  const animationControls = useAnimation();

  const variants = {
    initial: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: options?.animationDelay || defaultOptions.animationDelay,
        duration: 0.8,
        ease: cubicBezier(0.17, 0.55, 0.55, 1),
      },
    },
  };

  useEffect(() => {
    // console.log("isInView", isInView, ref.current);

    if (isInView) {
      animationControls.start("visible");

      if (revealHighlight) {
        setTimeout(() => {
          ref.current?.setAttribute("data-highlight", "true");
        }, 250);
      }
    }
  }, [isInView, animationControls, revealHighlight]);

  useEffect(() => {
    if (revealHighlight) {
      ref.current?.setAttribute("data-highlight", "false");
    }
  }, [revealHighlight]);

  return (
    <div
      // className={
      //   className
      //     ? className + "  border-2 bg-blue-300"
      //     : "border-2 bg-blue-300 "
      // }
      className={className || ""}
      ref={ref}
    >
      <motion.div
        className={
          verticalCenter
            ? "flex h-full w-full flex-col items-center justify-center will-change-transform " +
                containerClassName || ""
            : "will-change-transform " + containerClassName || ""
        }
        variants={variants}
        initial="initial"
        animate={animationControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
