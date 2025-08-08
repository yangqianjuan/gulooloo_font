"use client";
export const runtime = "edge";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
const Achievement = dynamic(() => import("@/components/Achievement"));
const Tool = dynamic(() => import("@/components/Tool"));
const Blog = dynamic(() => import("@/components/Blog"));
const Rate = dynamic(() => import("@/components/Rate"));
const Explore = dynamic(() => import("@/components/Explore"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const handleSelect = (value: string) => {
    console.log("选中了：", value);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col  row-start-2 sm:items-start w-full">
        <Banner />
        <Achievement />
        <Tool />
        <Blog />
        <Rate />
        <Explore />
      </main>
      <Footer />
    </div>
  );
}
