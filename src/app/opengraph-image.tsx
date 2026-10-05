import { ImageResponse } from "next/og";

export const alt = "Advocate Shubham Singh – Supreme Court & Delhi High Court";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0b1220",
          color: "#dee2ef",
          padding: "60px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid #e4c27d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e4c27d",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            §
          </div>
          <span
            style={{
              color: "#e4c27d",
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            CHAMBERS OF SHUBHAM SINGH
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "30px" }}>
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#dee2ef",
              margin: 0,
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            Advocate, Delhi
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#e4c27d",
              margin: 0,
              fontFamily: "sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Supreme Court of India • Delhi High Court • District Courts
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#c6c6cc",
              margin: 0,
              fontFamily: "sans-serif",
              maxWidth: "850px",
              lineHeight: 1.5,
            }}
          >
            Criminal Defense, Section 138 NI Act, Matrimonial & Family Law, Civil Disputes, and Trademark Litigation.
          </p>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(228, 194, 125, 0.3)",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#909096", fontFamily: "sans-serif" }}>
            shubhamsingh.adv.in
          </span>
          <span style={{ fontSize: "16px", color: "#e4c27d", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>
            ENROLLMENT: D/1942/2012
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
