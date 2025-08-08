"use client";
export const runtime = "edge";
export const dynamic = "force-static";
import dynamic_ from "next/dynamic";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
const Achievement = dynamic_(() => import("@/components/Achievement"), {
  ssr: false,
});
const Tool = dynamic_(() => import("@/components/Tool"));
const Blog = dynamic_(() => import("@/components/Blog"), { ssr: false });
const Rate = dynamic_(() => import("@/components/Rate"), { ssr: false });
const Explore = dynamic_(() => import("@/components/Explore"), { ssr: false });
const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });

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
