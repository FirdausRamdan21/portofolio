import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Firdaus Ramdan — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #090d16 0%, #0f172a 55%, #0c1f3a 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
              color: "#090d16",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            FR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#38bdf8",
              fontWeight: 700,
            }}
          >
            {`${profile.alias} · Portfolio`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.08,
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 32, color: "#cbd5e1", fontWeight: 600 }}>
            {profile.role}
          </div>
          <div style={{ fontSize: 22, color: "#94a3b8" }}>{profile.tagline}</div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 20, color: "#7dd3fc" }}>
          {["Next.js", "TypeScript", "Laravel", "SQL & Prisma"].map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                background: "rgba(14, 165, 233, 0.12)",
                border: "1.5px solid rgba(56, 189, 248, 0.35)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
