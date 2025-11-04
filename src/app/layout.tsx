import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "./print.css";
import { personalInfo } from "@/data/personalInfo";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
const title = `${personalInfo.firstName} ${personalInfo.lastName} - ${personalInfo.title} em ${personalInfo.location.city} - ${personalInfo.location.country}`;
const description = personalInfo.bio;
const siteUrl = "https://ronis.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${personalInfo.firstName} ${personalInfo.lastName}`,
  },
  description,
  keywords: [
    "desenvolvedor full-stack",
    "programador",
    "web developer",
    "react",
    "next.js",
    "typescript",
    "node.js",
    personalInfo.location.city,
    personalInfo.location.country,
    personalInfo.firstName,
    personalInfo.lastName,
  ],
  authors: [{ name: `${personalInfo.firstName} ${personalInfo.lastName}` }],
  creator: `${personalInfo.firstName} ${personalInfo.lastName}`,
  publisher: `${personalInfo.firstName} ${personalInfo.lastName}`,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: siteUrl,
    title,
    description,
    siteName: title,
    images: [
      {
        url: "https://ronis.com.br/about-me.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.firstName} ${personalInfo.lastName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://ronis.com.br/about-me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${inter.className}`} suppressHydrationWarning>
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
