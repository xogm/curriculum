import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/personalInfo";
import Footer from "@/components/Footer";
import ThemeSelector from "@/components/ThemeSelector";

const inter = Inter({ subsets: ["latin"] });
const title = `${personalInfo.firstName} ${personalInfo.lastName} - ${personalInfo.title} em ${personalInfo.location.city} - ${personalInfo.location.country}`;

export const metadata: Metadata = {
  title,
  description: personalInfo.bio,
  openGraph: {
    title,
    description: personalInfo.bio,
    url: "https://x1.dev.br",
    type: "profile",
    images: [
      "https://x1.dev.br/about-me.jpg",
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Footer />
        <ThemeSelector />
      </body>
    </html>
  );
}
