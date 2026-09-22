import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
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
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #f0f9ff 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 999,
              background: "#2563eb",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ fontSize: 28, color: "#1e40af", fontWeight: 600 }}>
            {profile.alias}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 32, color: "#475569" }}>{profile.role}</div>
          <div style={{ fontSize: 24, color: "#64748b" }}>{profile.tagline}</div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 20, color: "#64748b" }}>
          {["Next.js", "TypeScript", "Tailwind CSS", "Laravel"].map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "2px solid #cbd5e1",
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