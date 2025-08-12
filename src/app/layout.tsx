// src/app/layout.tsx
// 字体加载
// import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "Gulooloo Tech – Best Notes, Fasting & Invoice Apps",
  description:
    "Discover Easy Notes, GoFasting, Invoice Now and more. Boost your productivity and wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
