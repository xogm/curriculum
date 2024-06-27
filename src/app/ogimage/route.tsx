import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personalInfo";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">{personalInfo.firstName} {personalInfo.lastName}</h1>
          <h2 className="text-2xl">{personalInfo.title} em {personalInfo.location.city} - {personalInfo.location.country}</h2>
          <p>{personalInfo.bio}</p>
        </div>
      </div>
    ),
    { width: 1200, height: 600 }
  );
}
