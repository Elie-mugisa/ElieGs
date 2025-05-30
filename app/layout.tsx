import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elie Mugisa / My Portfolio",
  keywords: [
    "portfolio",
    "Software engineer",
    "web developer",
    "projects",
    "skills",
  ],
  authors: [
    {
      name: "Elie MUGISA (GS)",
      // url: "https://yourwebsite.com",
    },
  ],
  creator: "Elie MUGISA (GS)",
  description:
    "All about me, my projects, and my skills as a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
