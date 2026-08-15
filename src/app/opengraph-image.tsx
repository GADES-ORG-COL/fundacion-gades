import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-static";
export const alt =
  "Fundación GADES — Gestión agroambiental para el desarrollo social y empresarial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "linear-gradient(135deg, #004486 0%, #0a5fa8 55%, #0f8a6a 100%)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.78)",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 22,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 700,
            color: "white",
            letterSpacing: 0,
          }}
        >
          G
        </div>
        <span>Fundación GADES</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.1,
            maxWidth: 980,
            letterSpacing: -1,
          }}
        >
          Gestión agroambiental para el desarrollo social y empresarial.
        </div>
        <div
          style={{
            fontSize: 24,
            lineHeight: 1.4,
            maxWidth: 880,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          Operador técnico y humano en el Valle del Cauca desde 1997. ONG sin
          ánimo de lucro · NIT 815.000.850-0.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 20,
          color: "rgba(255,255,255,0.78)",
          borderTop: "1px solid rgba(255,255,255,0.22)",
          paddingTop: 24,
        }}
      >
        <span>fundaciongades.org.co</span>
        <span>Palmira · Valle del Cauca · Colombia</span>
      </div>
    </div>,
    { ...size },
  );
}
