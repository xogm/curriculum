import { ImageResponse } from "next/og";
import Image from "next/image";
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
          backgroundImage: `url(${personalInfo.backgroundUrl})`,
          backgroundSize: "cover",
          color: "white",
          textShadow: "1px 1px 1px black",
        }}
      >
        <Image
          src={personalInfo.avatarUrl}
          alt="Avatar"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "5px solid white",
          }}
        />
        <h1>
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2>
          {personalInfo.title} em {personalInfo.location.city} -{" "}
          {personalInfo.location.country}
        </h2>
        <p>{personalInfo.summary}</p>
      </div>
    ),
    { width: 1200, height: 600 }
  );
}
