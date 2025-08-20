"use client";
import Header from "@/components/Header";
import dynamic_ from "next/dynamic";
import Banner from "./Banner";
const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });
export default function BlogPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col  row-start-2 sm:items-start w-full">
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
