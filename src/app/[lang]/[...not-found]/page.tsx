import { notFound } from "next/navigation";

// Catch-all for unknown paths under a locale. Calling notFound() renders
// [lang]/not-found.tsx with a real 404 status (instead of a soft 404 that
// returns 200 and gets reported in Search Console).
export default function CatchAll() {
  notFound();
}
