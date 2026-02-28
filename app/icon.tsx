import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #3b82f6, #a855f7)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "4px 5px 3px",
          gap: 2,
        }}
      >
        {/* Building columns — tall, medium, short */}
        {[{ h: 18 }, { h: 14 }, { h: 10 }].map((col, i) => (
          <div
            key={i}
            style={{
              width: 5,
              height: col.h,
              background: "rgba(255,255,255,0.9)",
              borderRadius: "2px 2px 0 0",
            }}
          />
        ))}
      </div>
    ),
    size
  );
}
