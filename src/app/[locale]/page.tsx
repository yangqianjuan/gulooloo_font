"use client";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Achievement from "@/components/Achievement";
import Tool from "@/components/Tool";
import Footer from "@/components/Footer";
export default function Home() {
  const handleSelect = (value: string) => {
    console.log("选中了：", value);
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header></Header>
      <main className="flex flex-col  row-start-2 sm:items-start w-full">
        <Banner></Banner>
        <Achievement></Achievement>
        <Tool></Tool>
      </main>
      <Footer></Footer>
    </div>
  );
}
