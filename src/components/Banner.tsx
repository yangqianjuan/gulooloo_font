import Image from "next/image";
import banner from "@/assets/image/top_banner/top_banner_2x.webp";
import m_banner from "@/assets/image/top_banner_moblie/top_banner_moblie_3x.webp";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations();
  return (
    <div className="relative">
      <div className="hidden sm:block absolute top-0 left-0 ml-[6rem] mt-[9rem] w-[68rem] xl:mt-[5.63rem] xl:ml-[5.75rem] xl:w-[62.5rem]">
        <div className="font-bold text-[5.6rem] mb-[1.6rem]  2xl:text-[5.5rem]  2xl:mb-[2.5rem]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="2xl:text-[1.5rem]  2xl:mb-[6.62rem] text-[2rem] mb-[8.9rem] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <a href="#appDesc">
          <div className="w-[28.6rem] h-[6.6rem] xl:w-[16rem] xl:h-[4.5rem] rounded-full bg-[rgba(0,204,145,1)] hover:bg-[rgba(82,220,180,1)] transition-transform duration-300 hover:scale-110 flex items-center justify-center text-white text-[1.5rem]">
            {t("heroCta")}
          </div>
        </a>
      </div>
      <Image
        src={banner}
        alt={t("top_banner_alt")}
        className="w-full h-auto hidden sm:block"
        priority
        // unoptimized
      ></Image>
      <Image
        src={m_banner}
        alt={t("top_banner_mobile_alt")}
        className="w-full h-auto block sm:hidden"
        priority
        // unoptimized
      ></Image>
      <div className="block sm:hidden mt-[3.25rem] text-center mx-auto mb-[4rem]">
        <div className="font-bold text-[3rem] mb-[1.2rem]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="text-[1.5rem] mb-[4rem] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <a href="#appDesc">
          <div className="w-[20.4rem] h-[4.8rem] rounded-full bg-[rgba(0,204,145,1)] mx-auto flex items-center justify-center text-white text-[1.6rem]">
            {t("heroCta")}
          </div>
        </a>
      </div>
    </div>
  );
}
