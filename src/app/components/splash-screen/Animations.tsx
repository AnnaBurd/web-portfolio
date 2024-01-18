"use client";

import { useContext, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import SmilingFace from "../smiling-face/SmilingFace";
import { useScrollbarWidth } from "../../hooks/useScrollbarWidth";
import { useInitialScrollPosition } from "../../hooks/useInitialScrollPosition";
import WelcomeText from "./WelcomeText";
import ProgressBar from "./ProgressBar";
import { Context } from "@/app/context/context-provider";

// Animation variants in/out of the screen for the svg smile wrapper
const positionVariants = {
  initial: { y: -100, scale: 0.7, opacity: 0 },
  visible: { y: -20, scale: 1, opacity: 1 },
  exit: {
    y: -20,
    scale: 0,
    opacity: 0,
    transition: {
      scale: { type: "tween", ease: "anticipate", duration: 0.4 },
    },
  },
};

type Props = {
  play: boolean;
};

export default function Animations({ play }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);

  const [hasFinishedInitialAnimation, setHasFinishedInitialAnimation] =
    useState(true);
  const [hasStartedBlinkingFaceAnimation, setHasStartedBlinkingFaceAnimation] =
    useState(false);
  const [hasStartedExitAnimation, setHasStartedExitAnimation] = useState(false);

  const { updateLoadingProgressState } = useContext(Context);

  // Hide unplayable animations
  useEffect(() => {
    if (!play) {
      wrapperRef.current?.classList.add("hidden");

      // console.log("play - Hide unplayable animations");
      updateLoadingProgressState("skipped");
    }
  }, [play, updateLoadingProgressState]);

  // Wait for initial animation to finish
  useEffect(() => {
    if (play)
      setTimeout(() => {
        setHasFinishedInitialAnimation(true);
      }, 200);
  }, [play]);

  // Update loading progress (randomly)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (play && hasFinishedInitialAnimation && loadingProgress < 100)
      timer = setTimeout(() => {
        setLoadingProgress((prev) => {
          return Math.min(prev + Math.random() * 5, 100);
        });
      }, 50);

    return () => {
      timer && clearTimeout(timer);
    };
  }, [play, hasFinishedInitialAnimation, loadingProgress]);

  // Hide splash screen when loading is done
  useEffect(() => {
    if (play && !hasStartedBlinkingFaceAnimation && loadingProgress >= 100) {
      setHasStartedBlinkingFaceAnimation(true); // Blink

      setTimeout(() => {
        setHasStartedExitAnimation(true);

        // Hide splash screen after all animations are done
        setTimeout(() => {
          wrapperRef.current?.classList.add("hidden");
        }, 400);

        // Update context
        updateLoadingProgressState("finished");
      }, 1000);
    }
  }, [
    play,
    hasStartedBlinkingFaceAnimation,
    loadingProgress,
    updateLoadingProgressState,
  ]);

  const scrollbarWidth = useScrollbarWidth();
  const initialScrollPosition = useInitialScrollPosition();

  // Animation variants for the whole splash screen
  const splashScreenVariants = {
    visible: {
      opacity: 1,
      clipPath: `polygon(0rem 0rem, calc(100% - 0rem - ${0}px) 0rem, calc(100% - 0rem - ${0}px) calc(100% - 0rem), 0rem calc(100% - 0rem)) `,
    },
    shrink: {
      opacity: 0,
      clipPath: `polygon(1.5rem 1.5rem, calc(100% - 1.5rem - ${scrollbarWidth}px) 1.5rem, calc(100% - 1.5rem - ${scrollbarWidth}px) calc(100% - 1.5rem), 1.5rem calc(100% - 1.5rem)) `,

      transition: {
        clipPath: { type: "tween", ease: "easeOut", duration: 0.4 },
        opacity: { delay: 0.3, duration: 0.4 },
      },
    },
    fade: {
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="fixed z-[100] h-screen w-screen " ref={wrapperRef}>
      {/* Background */}
      <motion.div
        className=" absolute h-full bg-[--background-accent]  [width:calc(200vw_-_100%)]"
        variants={splashScreenVariants}
        initial="visible"
        animate={
          hasStartedExitAnimation
            ? initialScrollPosition > 0
              ? "fade"
              : "shrink"
            : "visible"
        }
      ></motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Smiling face and progress bar around */}
        <motion.div
          className="relative z-0 "
          variants={positionVariants}
          initial="initial"
          animate={hasStartedExitAnimation ? "exit" : "visible"}
        >
          {/* Progress bar */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 ">
            <ProgressBar loadingProgress={loadingProgress} />
          </div>

          {/* Rotating welcome messages */}
          <WelcomeText
            loadingProgress={loadingProgress}
            className="absolute left-1/2 top-1/2 -z-10 h-[11.2rem] w-[11.2rem] -translate-x-1/2 -translate-y-1/2 bg-[--background-accent] "
          />

          {/* Smiling face */}
          <div className="h-28 w-28">
            <SmilingFace isBlinking={hasStartedBlinkingFaceAnimation} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
