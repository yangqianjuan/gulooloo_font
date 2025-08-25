"use client";
import { useState } from "react";
import Header from "@/components/Header";
import dynamic_ from "next/dynamic";
import Banner from "./Banner";
import Tab from "./tab";
import BlogList from "./BlogList";
import { ActiveTab, BlogTabItem } from "@/type";
import { useTranslations } from "next-intl";

const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });
export default function BlogPage() {
  const t = useTranslations("blog");
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");

  const tabList: BlogTabItem[] = [
    { label: t("blogFilterAll"), key: "all" },
    { label: t("blogFilterProductivity"), key: "productivity" },
    { label: t("blogFilterBusiness"), key: "busniess" },
    { label: t("blogFilterWellness"), key: "wellness" },
  ];
  const handleTabChange = (key: ActiveTab) => {
    setActiveTab(key);
  };
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col  row-start-2 sm:items-start w-full">
        <Banner />
        <div className="xl:pt-[7.5rem] xl:pb-[5rem] xl:px-[5rem] sm:pt-[3.75rem] sm:pb-[1.75rem] sm:px-[2.5rem] pt-[2.5rem] pb-[0.5rem] px-[1.5rem]">
          <Tab
            activeTab={activeTab}
            list={tabList}
            handleTabChange={handleTabChange}
          />
          <BlogList activeTab={activeTab} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
