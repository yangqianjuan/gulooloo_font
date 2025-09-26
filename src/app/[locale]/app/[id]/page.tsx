"use client";
import dynamic_ from "next/dynamic";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Banner from "./Banner";
import Story from "./Story";
import Rate from "./Rate";
import Start from "./Start";
import React from "react";
import Head from "next/head";
import JsonLd from "@/components/Schema/JsonLd";
import HreflangLinks from "@/components/Schema/HreflangLinks";
import { createAppSchema, createBreadcrumbSchema, combineSchemas } from "@/components/Schema/schemas";

// import "./index.css";
// const Achievement = dynamic_(() => import("./Achievement"), {
//   ssr: false,
// });
const Tool = dynamic_(() => import("./Tool"));

// const Blog = dynamic_(() => import("./Blog"), { ssr: false });
// const Story = dynamic_(() => import("./Story"), { ssr: false });
// const Explore = dynamic_(() => import("./Explore"), { ssr: false });
const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });

export default function App() {
  const handleSelect = (value: string) => {
    console.log("选中了：", value);
  };
  const { id, locale } = useParams<{
    id: "gofasting" | "invoicemaker" | "easynotes" | "QRgenerator";
    locale: string;
  }>();

  const validIds = ["gofasting", "invoicemaker", "easynotes", "QRgenerator"];

  if (!id || !validIds.includes(id)) {
    notFound();
  }

  // Create JSON-LD schemas for the app
  const appSchema = createAppSchema(id, locale);
  const appName = (appSchema as Record<string, unknown>).name as string || "App";
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: `https://guloolootech.com/${locale}` },
    { name: "Apps", url: `https://guloolootech.com/${locale}/apps` },
    { name: appName, url: `https://guloolootech.com/${locale}/app/${id}` }
  ], locale);
  const schemas = combineSchemas(appSchema, breadcrumbSchema);

  return (
    <>
      <Head>
        <JsonLd data={schemas} />
        <HreflangLinks
          baseUrl="https://guloolootech.com"
          currentLocale={locale}
          pageType="app"
          pageId={id}
        />
      </Head>
      <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
        <Header />
        <main className="flex flex-col  row-start-2 sm:items-start w-full">
          <Banner />
          <Tool />
          {id === "gofasting" ? <Story /> : <Rate />}
          <Start />
        </main>
        <Footer />
      </div>
    </>
  );
}
