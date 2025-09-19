// src/app/layout.tsx
// 字体加载优化
import "./globals.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

export const metadata = {
  title: "Gulooloo Tech – Best Notes, Fasting & Invoice Apps",
  description:
    "Discover Easy Notes, GoFasting, Invoice Maker and more. Boost your productivity and wellness.",
  metadataBase: new URL('https://guloolootech.com'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: "Gulooloo Tech – Best Notes, Fasting & Invoice Apps",
    description: "Discover Easy Notes, GoFasting, Invoice Maker and more. Boost your productivity and wellness.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
