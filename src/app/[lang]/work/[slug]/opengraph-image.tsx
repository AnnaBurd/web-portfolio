import { ImageResponse } from "next/og";
import { Locale } from "@/app/i18n/i18n-config";
import { siteMeta, siteUrl } from "@/app/seo";
import { getProjectData } from "@/scripts/getProjectsData";
import { loadOgFonts } from "@/app/_og/fonts";

export const alt = "Project — Anna Burdanova portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params: { lang, slug },
}: {
  params: { lang: Locale; slug: string };
}) {
  const meta = siteMeta[lang] ?? siteMeta.en;
  const { frontmatterData } = getProjectData(slug, lang);
  const tags = (frontmatterData.tags ?? []).slice(0, 4);
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
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#94a3b8",
            marginBottom: 28,
          }}
        >
          {meta.authorName} · Portfolio
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 1040,
          }}
        >
          {frontmatterData.title}
        </div>
        {tags.length > 0 && (
          <div style={{ display: "flex", gap: 16, marginTop: 44, flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 26,
                  color: "#cbd5e1",
                  border: "2px solid #475569",
                  borderRadius: 999,
                  padding: "8px 24px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
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
