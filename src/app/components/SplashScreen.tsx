"use client";

import { useEffect, useRef, useState } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import SmilingFace from "./SmilingFace";

// Offset of the hello/привет/xin chào welcome texts from start position on svg path around circle perimeter
const firstQuarterOffset = (2 * Math.PI * 200 * 1) / 4;
const offsetValTargets = {
  en: {
    intial: firstQuarterOffset - 46 - 170,
    visible: firstQuarterOffset - 44,
    out: firstQuarterOffset - 46 + 220,
  },
  vn: {
    intial: firstQuarterOffset - 62 - 170,
    visible: firstQuarterOffset - 62,
    out: firstQuarterOffset - 62 + 220,
  },
  ru: {
    intial: firstQuarterOffset - 58 - 170,
    visible: firstQuarterOffset - 58,
    out: firstQuarterOffset - 58 + 220,
  },
};

// Size of the background polygon (circle sector) behind the welcome texts
const polygonVariants = {
  en: {
    clipPath: "polygon(50% 50%, 30% 0%, 70% 0%)",
  },
  vn: {
    clipPath: "polygon(50% 50%, 20% 0%, 80% 0%)",
  },
  ru: {
    clipPath: "polygon(50% 50%, 30% 0%, 70% 0%)",
  },
};

// Animation variants in/out of the screen for the whole svg wrapper
const positionVariants = {
  initial: { x: 0, y: -100, scale: 0.7, opacity: 0 },
  visible: { x: 0, y: -20, scale: 1, opacity: 1 },
  exit: { x: 0, y: -100, scale: 0.7, opacity: 0 }, // TODO: add exit animation
};

// Animation variants for the whole splash screen
const splashScreenVariants = {
  shrink: {
    opacity: 0,
    inset: "1.5rem",
    display: "none",
    transition: {
      opacity: { delay: 0.4, duration: 0.5 },
      inset: { duration: 0.5 },
      display: { delay: 1, duration: 0.01 },
    },
  },
  visible: { opacity: 1 },
};

export default function SplashScreen() {
  const splashRef = useRef<HTMLDivElement>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isBlinkingFace, setIsBlinkingFace] = useState(false);
  const [hasFinishedInitialAnimation, setHasFinishedInitialAnimation] =
    useState(true);
  const [hasStartedExitAnimation, setHasStartedExitAnimation] = useState(false);

  // Wait for initial animation to finish
  useEffect(() => {
    setTimeout(() => {
      setHasFinishedInitialAnimation(true);
    }, 200);
  }, []);

  // Update loading progress (randomly)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (hasFinishedInitialAnimation && loadingProgress < 100)
      timer = setTimeout(() => {
        setLoadingProgress((prev) => {
          return Math.min(prev + Math.random() * 5, 100);
        });
      }, 50);

    return () => {
      timer && clearTimeout(timer);
    };
  }, [hasFinishedInitialAnimation, loadingProgress]);

  // Hide splash screen when loading is done
  useEffect(() => {
    if (!isBlinkingFace && loadingProgress >= 100 && splashRef.current) {
      setIsBlinkingFace(true); // Blink
      // splashRef.current.style.display = "none";

      setTimeout(() => {
        setHasStartedExitAnimation(true);
      }, 1000);
    }
  }, [isBlinkingFace, loadingProgress]);

  // Change the text shown on the screen
  const activeTextVariant = ((loadingProgress: number) => {
    if (loadingProgress <= 30) return "ru";

    if (loadingProgress <= 65) return "vn";

    return "en";
  })(loadingProgress);

  const offsetValEn = useMotionValue(offsetValTargets.en.intial);
  const offsetValVn = useMotionValue(offsetValTargets.vn.intial);
  const offsetValRu = useMotionValue(offsetValTargets.ru.intial);

  const offsetValEnSmooth = useSpring(offsetValEn, {
    damping: 10,
    stiffness: 100,
  });
  const offsetValVnSmooth = useSpring(offsetValVn, {
    damping: 10,
    stiffness: 100,
  });
  const offsetValRuSmooth = useSpring(offsetValRu, {
    damping: 10,
    stiffness: 100,
  });

  // Trigger text animations
  useEffect(() => {
    if (activeTextVariant === "ru")
      offsetValRu.set(offsetValTargets.ru.visible);

    if (activeTextVariant === "vn") {
      offsetValRu.set(offsetValTargets.ru.out);
      offsetValVn.set(offsetValTargets.vn.visible);
    }

    if (activeTextVariant === "en") {
      offsetValRu.set(offsetValTargets.ru.out);
      offsetValVn.set(offsetValTargets.vn.out);
      offsetValEn.set(offsetValTargets.en.visible);
    }
  }, [activeTextVariant, offsetValEn, offsetValRu, offsetValVn]);

  return (
    <div ref={splashRef} className="fixed z-[100] h-screen w-screen ">
      <motion.div
        className=" absolute inset-0  bg-[--background-accent]"
        variants={splashScreenVariants}
        initial="visible"
        animate={hasStartedExitAnimation ? "shrink" : "visible"}
      ></motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          className="relative z-0 "
          variants={positionVariants}
          initial="initial"
          animate={hasStartedExitAnimation ? "exit" : "visible"}
        >
          {/* Progress bar */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 ">
            <svg
              className="h-full w-full rotate-[-90deg]"
              viewBox="0 0 150 150"
            >
              <circle
                className="loader-progress-bg opacity-20"
                stroke="var(--color-btn)"
                fill="none"
                strokeWidth={4}
                strokeDasharray={2 * Math.PI * 70} // perimeter = 2*Math.PI * r
                cx="75"
                cy="75"
                r="70"
              ></circle>

              <circle
                className="loader-progress-bar "
                stroke="var(--color-btn-active)"
                fill="none"
                strokeWidth={3}
                strokeDasharray={2 * Math.PI * 70} // perimeter = 2*Math.PI * r
                strokeDashoffset={
                  (1 - loadingProgress / 100) * 2 * Math.PI * 70
                }
                cx="75"
                cy="75"
                r="70"
              ></circle>
            </svg>
          </div>

          {/* Rotating welcome messages */}
          <motion.div
            className="absolute left-1/2 top-1/2 -z-10 h-[11.2rem] w-[11.2rem] -translate-x-1/2 -translate-y-1/2 overflow-clip  bg-[--background-accent] "
            variants={polygonVariants}
            initial="ru"
            animate={activeTextVariant}
            transition={{ type: "inertia", velocity: 50 }}
          >
            <svg className="h-full w-full" viewBox="0 0 500 500">
              <defs>
                <path
                  fill="green"
                  d=" M50,250 A 200 200 0 0 1 450 250 A 200 200 0 0 1 50 250 Z"
                  id="txt-path"
                />
              </defs>

              <text className=" text-4xl font-medium tracking-tight text-[var(rgb(--text-rgb))] opacity-80">
                <motion.textPath
                  xlinkHref="#txt-path"
                  fill="currentColor"
                  startOffset={offsetValRuSmooth.get()}
                >
                  Привет
                </motion.textPath>

                <motion.textPath
                  xlinkHref="#txt-path"
                  fill="currentColor"
                  startOffset={offsetValVnSmooth.get()}
                >
                  Xin chào
                </motion.textPath>

                <motion.textPath
                  xlinkHref="#txt-path"
                  fill="currentColor"
                  startOffset={offsetValEnSmooth.get()}
                >
                  Hello
                </motion.textPath>
              </text>
            </svg>
          </motion.div>

          <div className="h-28 w-28">
            <SmilingFace isBlinking={isBlinkingFace} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
