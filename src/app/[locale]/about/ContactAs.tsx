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
    <div className="w-full relative 2xl:px-[80px] 2xl:py-[120px] sm:px-[40px] sm:py-[80px] px-[24px] py-[40px] text-[#fff]">
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
        <div className="font-bold 2xl:text-[72px] sm:text-[40px] text-[24px] sm:mb-[16px] mb-[4px]">
          {t("aboutFinalCtaTitle")}
        </div>
        <div className="2xl:text-[24px] sm:text-[20px] text-[16px] 2xl:mb-[102px] sm:mb-[30px] mb-[12px]">
          {t("aboutFinalCtaDesc")}
        </div>
        <div
          className="rounded-full inline-block bg-[rgba(0,204,145,1)]  items-center justify-center text-white  hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110 sm:text-[24px] text-[16px] 2xl:px-[84px] 2xl:py-[18px] sm:px-[66px] sm:py-[14px] px-[36px] py-[10px]"
          onClick={toStart}
        >
          {t("aboutFinalCtaBtn")}
        </div>
      </div>

      <Image
        src={explore}
        alt=""
        className="hidden sm:block w-full  h-auto object-cover 2xl:rounded-[40px] rounded-[16px]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
        // unoptimized
      ></Image>
      <Image
        src={explore_m}
        alt=""
        className="sm:hidden block w-full h-auto rounded-[16px]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
      />
    </div>
  );
}
