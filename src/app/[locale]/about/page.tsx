"use client";
import Header from "@/components/Header";
import Banner from "./Banner";
import Team from "./Team";
import dynamic_ from "next/dynamic";
import { useTranslations } from "next-intl";
const ContactAs = dynamic_(() => import("./ContactAs"), { ssr: false });
const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });
export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div className="grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col row-start-2 sm:items-start w-full">
        <Banner />
        <div className="bg-[rgba(222,251,255,1)] text-center xl:text-[1.5rem] xl:px-[22.5rem] xl:py-[3.75rem] sm:text-[1.125rem] sm:px-[7.5rem] sm:py-[2.5rem] text-[0.875rem] px-[1.5rem] py-[1.25rem]">
          {t("aboutIntro")}
        </div>
        <Team />
        <ContactAs />
      </main>
      <Footer />
    </div>
  );
}
