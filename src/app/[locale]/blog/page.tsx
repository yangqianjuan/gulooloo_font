"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import dynamic_ from "next/dynamic";
import Banner from "./Banner";
import Tab from "./tab";
import BlogList from "./BlogList";
import { ActiveTab, BlogTabItem } from "@/type";
import { useTranslations } from "next-intl";
import { useMemoizedFn } from "ahooks";

const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });
export default function BlogPage() {
  const t = useTranslations("blog");
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");
  useEffect(() => {
    document.title = t("metaTitleBlog");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("metaDescriptionBlog"));
  }, [t]);

  const tabList: BlogTabItem[] = [
    { label: t("blogFilterAll"), key: "all" },
    { label: t("blogFilterProductivity"), key: "productivity" },
    { label: t("blogFilterBusiness"), key: "busniess" },
    { label: t("blogFilterWellness"), key: "wellness" },
  ];
  const handleTabChange = useMemoizedFn((key: ActiveTab) => {
    setActiveTab(key);
  });
  return (
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col  row-start-2 sm:items-start w-full">
        <Banner />
        <div className="2xl:pt-[120px] 2xl:pb-[80px] 2xl:px-[80px] sm:pt-[60px] sm:pb-[28px] sm:px-[40px] pt-[40px] pb-[8px] px-[24px]">
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
