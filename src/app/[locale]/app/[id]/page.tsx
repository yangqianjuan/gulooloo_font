"use client";
export const runtime = "edge";
export const dynamic = "force-static";
import dynamic_ from "next/dynamic";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Banner from "./Banner";
import Story from "./Story";
import Rate from "./Rate";
import Start from "./Start";

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
  const { id } = useParams<{
    id: "gofasting" | "invoicemaker" | "easynotes" | "QRgenerator";
  }>();

  return (
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
  );
}
