import Image from "next/image";
import explore from "@/assets/about/contact_us_bg/contact_us_bg_3x.webp";
import explore_m from "@/assets/about/contact_us_mobile_bg/contact_us_mobile_bg_3x.webp";
import { useTranslations } from "next-intl";
import { useMemoizedFn } from "ahooks";

export default function Explore() {
  const t = useTranslations("about");
  const toStart = useMemoizedFn(() => {
    window.location.href = "mailto:support@guloolootech.com";
  });
  return (
    <div className="w-full relative 2xl:px-[5rem] 2xl:py-[7.5rem] sm:px-[2.5rem] sm:py-[5rem] px-[1.5rem] py-[2.5rem] text-[#fff]">
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
        <div className="font-bold 2xl:text-[4.5rem] sm:text-[2.5rem] text-[1.5rem] sm:mb-[1rem] mb-[0.25rem]">
          {t("aboutFinalCtaTitle")}
        </div>
        <div className="2xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] 2xl:mb-[6.38rem] sm:mb-[1.88rem] mb-[0.75rem]">
          {t("aboutFinalCtaDesc")}
        </div>
        <div
          className="rounded-full inline-block bg-[rgba(0,204,145,1)]  items-center justify-center text-white  hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110 sm:text-[1.5rem] text-[1rem] 2xl:px-[5.25rem] 2xl:py-[1.13rem] sm:px-[4.16rem] sm:py-[0.88rem] px-[2.25rem] py-[0.62rem]"
          onClick={toStart}
        >
          {t("aboutFinalCtaBtn")}
        </div>
      </div>

      <Image
        src={explore}
        alt=""
        className="hidden sm:block w-full  h-auto object-cover 2xl:rounded-[2.5rem] rounded-[1rem]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
        // unoptimized
      ></Image>
      <Image
        src={explore_m}
        alt=""
        className="sm:hidden block w-full h-auto rounded-[1rem]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
      />
    </div>
  );
}
