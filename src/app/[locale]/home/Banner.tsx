import Image from "next/image";
import banner from "@/assets/image/top_banner/top_banner_2x1.webp";
import m_banner from "@/assets/image/top_banner_moblie/top_banner_moblie_3x1.webp";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("home");
  return (
    <div className="relative w-full">
      <div className="hidden sm:block absolute top-0 left-0 2xl:w-[68rem] 2xl:ml-[7.5rem] 2xl:mt-[11.25rem] sm:w-[42.5rem]  sm:mt-[5.63rem] sm:ml-[3.75rem]">
        <div className="font-bold  2xl:text-[5.5rem] 2xl:mb-[2.5rem] sm:text-[3.5rem] sm:mb-[1rem] mb-[1.6rem] text-[1.875rem]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="2xl:text-[1.5rem]  2xl:mb-[6.62rem] text-[1.25rem] mb-[5.56rem] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <a href="#appDesc">
          <div className="2xl:text-[1.5rem] 2xl:w-[19rem] 2xl:h-[4.5rem] w-[17.875rem] h-[4.125rem] text-[1.375rem]  rounded-full bg-[rgba(0,204,145,1)] hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110 flex items-center justify-center text-white ">
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
      <div className="block sm:hidden mt-[3.25rem] text-center mx-auto mb-[4rem]">
        <div className="font-bold text-[1.875rem] mb-[0.75rem]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="text-[0.9375rem] mb-[2.5rem] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <a href="#appDesc">
          <div className="w-[12.75rem] h-[3rem] rounded-full bg-[rgba(0,204,145,1)] mx-auto flex items-center justify-center text-white text-[1rem]">
            {t("heroCta")}
          </div>
        </a>
      </div>
    </div>
  );
}
