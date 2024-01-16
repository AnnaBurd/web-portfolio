import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set size at the first client-side load
    handleSize();

    // Listen to window size changes
    window.addEventListener("resize", handleSize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
}
