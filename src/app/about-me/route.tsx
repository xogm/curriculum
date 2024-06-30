import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personalInfo";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2>
          {personalInfo.title} em {personalInfo.location.city} -{" "}
          {personalInfo.location.country}
        </h2>
        <p>{personalInfo.bio}</p>
      </div>
    ),
    { width: 1200, height: 600 }
  );
}
