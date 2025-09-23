import Image from "next/image";
import banner from "@/assets/image/top_banner/top_banner_2x.webp";
import m_banner from "@/assets/image/top_banner_moblie/top_banner_moblie_3x1.webp";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("home");
  return (
    <div className="relative w-full">
      <div className="hidden sm:block absolute top-0 left-0 2xl:w-[1088px] 2xl:ml-[120px] 2xl:mt-[180px] sm:w-[680px]  sm:mt-[90px] sm:ml-[60px]">
        <div className="font-bold  2xl:text-[88px] 2xl:mb-[40px] sm:text-[56px] sm:mb-[16px] mb-[26px] text-[30px]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="2xl:text-[24px]  2xl:mb-[106px] text-[20px] mb-[89px] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <a href="#appDesc">
          <div className="2xl:text-[24px] 2xl:w-[304px] 2xl:h-[72px] w-[286px] h-[66px] text-[22px]  rounded-full bg-[rgba(0,204,145,1)] hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110 flex items-center justify-center text-white ">
            {t("heroCta")}
          </div>
        </a>
      </div>
      <Image
        src={banner}
        alt={t("top_banner_alt")}
        className="w-full h-auto hidden sm:block"
        priority
        width={3840}
        height={1872}
        sizes="(max-width: 768px) 100vw, 3840px"
        fetchPriority="high"
        placeholder="blur"
        // unoptimized
      ></Image>
      <Image
        src={m_banner}
        alt={t("top_banner_mobile_alt")}
        className="w-full h-auto block sm:hidden"
        width={1170}
        height={1140}
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 1170px"
        // unoptimized
      ></Image>
      <div className="block sm:hidden mt-[52px] text-center mx-auto mb-[64px]">
        <div className="font-bold text-[30px] mb-[12px]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="text-[15px] mb-[40px] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <a href="#appDesc">
          <div className="w-[204px] h-[48px] rounded-full bg-[rgba(0,204,145,1)] mx-auto flex items-center justify-center text-white text-[16px]">
            {t("heroCta")}
          </div>
        </a>
      </div>
    </div>
  );
}
