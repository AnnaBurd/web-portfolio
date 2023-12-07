import { useRef } from "react";

const isServerSide = typeof document === "undefined";

export const useInitialScrollPosition = () => {
  const didCompute = useRef(false);
  const scrollPosition = useRef(0);

  if (isServerSide) return 0;

  if (!didCompute.current) scrollPosition.current = window.scrollY;

  return scrollPosition.current;
};
