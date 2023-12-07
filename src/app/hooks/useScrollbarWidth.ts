import { useRef } from "react";

const isServerSide = typeof document === "undefined";

export const useScrollbarWidth = () => {
  const didCompute = useRef(false);
  const widthRef = useRef(0);

  if (isServerSide) return 0;

  if (didCompute.current) return widthRef.current;

  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  // outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer?.parentNode?.removeChild(outer);

  didCompute.current = true;
  widthRef.current = scrollbarWidth;

  return scrollbarWidth;
};
