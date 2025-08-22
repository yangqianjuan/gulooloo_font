"use client";
import Header from "@/components/Header";
import Banner from "./Banner";
import Team from "./Team";
import dynamic_ from "next/dynamic";
const ContactAs = dynamic_(() => import("./ContactAs"), { ssr: false });
const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });
export default function AboutPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col row-start-2 sm:items-start w-full">
        <Banner />
        <div className="bg-[rgba(222,251,255,1)] text-center xl:text-[1.5rem] xl:px-[22.5rem] xl:py-[3.75rem] sm:text-[1.125rem] sm:px-[7.5rem] sm:py-[2.5rem] text-[0.875rem] px-[1.5rem] py-[1.25rem]">
          At Gulooloo Tech, our journey began with a simple question: what if
          the tools on our phones could be smarter, more intuitive, and
          genuinely make life easier? This question drives our passionate,
          global team of creators. We don&apos;t chase trends; we focus on
          crafting simple, beautiful, and useful apps that solve real problems
          for real people—for you.
        </div>
        <Team />
        <ContactAs />
      </main>
      <Footer />
    </div>
  );
}
