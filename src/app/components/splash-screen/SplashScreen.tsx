"use client";

import { usePathname } from "next/navigation";
import Animations from "./Animations";
import { RouteChangeListener, isFirstRouteRender } from "./RouteChangeListener";

export default function SplashScreen() {
  const isFirstRender = isFirstRouteRender();
  const pathname = usePathname();

  return (
    <>
      <RouteChangeListener />
      {/* Show splash screen animations on first load or on "/" path */}
      <Animations play={isFirstRender || pathname === "/"} />
    </>
  );
}
