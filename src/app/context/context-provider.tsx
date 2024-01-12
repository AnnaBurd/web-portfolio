"use client";

import { createContext, useState } from "react";

export const Context = createContext({
  loadingAnimationState: "running",
  updateLoadingProgressState: (currentState: "finished" | "skipped") => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loadingAnimationState, setLoadingAnimationState] = useState<
    "running" | "finished" | "skipped"
  >("running");

  const updateLoadingProgressState = (currentState: "finished" | "skipped") => {
    setLoadingAnimationState(currentState);
  };

  return (
    <Context.Provider
      value={{ loadingAnimationState, updateLoadingProgressState }}
    >
      {children}
    </Context.Provider>
  );
};
