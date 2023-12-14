"use client";

import { useState } from "react";

type Props = {
  textContent: string;
};

export const CopyButton: React.FC<Props> = ({ textContent }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(textContent);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className="transition-opacity duration-200 hover:opacity-70"
    >
      {isCopied ? "copied!" : "copy"}
    </button>
  );
};
