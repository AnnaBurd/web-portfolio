"use client";

import { createContext, useState } from "react";

type LoadingState = "running" | "finished" | "skipped";

export const Context = createContext({
  loadingAnimationState: "running" as LoadingState,
  updateLoadingProgressState: (
    currentState: Exclude<LoadingState, "running">,
  ) => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loadingAnimationState, setLoadingAnimationState] =
    useState<LoadingState>("running");

  const updateLoadingProgressState = (
    currentState: Exclude<LoadingState, "running">,
  ) => {
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
