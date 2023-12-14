import { Roboto, Playfair_Display, Roboto_Mono } from "next/font/google";

export const fontSecondary = Playfair_Display({
  subsets: ["latin", "cyrillic", "vietnamese"],
  // weight: ["400", "500", "600", "700", "800", "900"],
  display: "block",
  variable: "--font-secondary",
});

export const fontPrimary = Roboto({
  subsets: ["latin", "cyrillic", "vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "block",
  variable: "--font-primary",
});

export const fontMono = Roboto_Mono({
  subsets: ["latin", "cyrillic", "vietnamese"],
  variable: "--font-mono",
});
