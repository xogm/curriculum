import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/data/personalInfo";
import Footer from "@/components/Footer";
import ThemeSelector from "@/components/ThemeSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.firstName} ${personalInfo.lastName} - ${personalInfo.title} em ${personalInfo.location.city} - ${personalInfo.location.country}`,
  description: personalInfo.bio,
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
