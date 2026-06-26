import fs from "fs";
import path from "path";

// One Roboto set covering Latin + Cyrillic + Vietnamese, loaded for every
// locale. satori falls back across these for whatever glyphs a string needs.
// Files are pinned into the bundle via `outputFileTracingIncludes`.
const FILES: { file: string; weight: 400 | 700 }[] = [
  { file: "Roboto-Regular.ttf", weight: 400 },
  { file: "Roboto-Bold.ttf", weight: 700 },
  { file: "Roboto-cyrillic-400.ttf", weight: 400 },
  { file: "Roboto-cyrillic-700.ttf", weight: 700 },
  { file: "Roboto-vietnamese-400.ttf", weight: 400 },
  { file: "Roboto-vietnamese-700.ttf", weight: 700 },
];

export function loadOgFonts() {
  return FILES.map((f) => ({
    name: "Roboto",
    data: fs.readFileSync(
      path.join(process.cwd(), "src", "app", "_og", f.file),
    ),
    weight: f.weight,
    style: "normal" as const,
  }));
}
