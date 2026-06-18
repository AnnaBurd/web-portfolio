"use client"; // Error components must be Client Components

import { useEffect } from "react";
import ButtonLink from "../components/ui/ButtonLink";
import Button from "../components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center  bg-rose-500 text-3xl opacity-80">
      <h2 className="mb-4 max-w-[30ch] text-center text-2xl font-medium text-white">
        500: Uh-oh!
      </h2>
      <p className="mb-16 max-w-[30ch] text-center text-xl font-medium text-white">
        Something went horribly wrong, do you want to try to reset the page?
      </p>

      <Button onClick={() => reset()}>Reset</Button>
    </div>
  );
}
