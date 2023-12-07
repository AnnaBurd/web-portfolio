import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

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

type Props = {
  loadingProgress: number;
  className?: string;
};

const WelcomeText: React.FC<Props> = ({ loadingProgress, className }) => {
  // Change the text shown on the screen
  const activeTextVariant = ((loadingProgress: number) => {
    if (loadingProgress <= 30) return "ru";

    if (loadingProgress <= 65) return "vn";

    return "en";
  })(loadingProgress);

  // Calculate offset values for each of the welcome texts, use motion values because by default they are not animatable
  const offsetValEn = useMotionValue(offsetValTargets.en.intial);
  const offsetValVn = useMotionValue(offsetValTargets.vn.intial);
  const offsetValRu = useMotionValue(offsetValTargets.ru.intial);

  // Smooth out the animation of the offset values
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
    <motion.div
      className={`overflow-clip ${className ? className : ""}`}
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
  );
};

export default WelcomeText;
