import { ImageResponse } from "next/og";
import { Locale } from "../i18n/i18n-config";
import { siteMeta, siteUrl } from "../seo";
import { loadOgFonts } from "../_og/fonts";

export const alt = "Anna Burdanova — web developer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Localized role line shown under the author name.
const role: Record<Locale, string> = {
  en: "Web Developer",
  ru: "Веб-разработчик",
  vi: "Lập trình viên Web",
};

export default async function Image({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const meta = siteMeta[lang] ?? siteMeta.en;
  const fonts = loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%)",
          color: "#f8fafc",
          fontFamily: "Roboto",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#94a3b8",
            marginBottom: 24,
          }}
        >
          {role[lang] ?? role.en}
        </div>
        <div style={{ fontSize: 110, fontWeight: 700, lineHeight: 1.05 }}>
          {meta.authorName}
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#cbd5e1",
            marginTop: 36,
            maxWidth: 880,
          }}
        >
          React · Next.js · TypeScript
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 80,
            fontSize: 28,
            color: "#64748b",
          }}
        >
          {siteUrl.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
