import { usePathname } from "next/navigation";
import { useEffect } from "react";

const storePathValues = (newPath: string) => {
  const storage = globalThis?.sessionStorage;

  if (!storage) return;

  const currPath = storage.getItem("currentPath") || "";

  if (currPath === newPath) return;

  storage.setItem("prevPath", currPath);
  storage.setItem("currentPath", newPath);
};

export const getPrevPath = () => {
  const storage = globalThis?.sessionStorage;

  if (!storage) return "";

  const prevPath = storage.getItem("prevPath") || "";

  return prevPath;
};

export const isFirstRouteRender = () => {
  const storage = globalThis?.sessionStorage;

  if (!storage) return true;

  const currentPath = storage.getItem("currentPath") || "";

  return !currentPath;
};

export function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(`RouteChangeListener: route changed to: ${pathname}`);

    // Store history of navigation in local session storage
    storePathValues(pathname);
  }, [pathname]);

  return <></>;
}
