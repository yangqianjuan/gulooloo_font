import Image from "next/image";
import banner from "@/assets/app/Gofasting/top_banner/top_banner_2x.webp";
import m_banner from "@/assets/app/Gofasting/top_banner_mobile/group_2610165_2x.webp";
import banner_icon from "@/assets/app/Gofasting/logo.png";
import { useTranslations } from "next-intl";
import AppStore from "@/components/Svg/AppStore";
import GooglePlay from "@/components/Svg/GooglePlay";

export default function Banner() {
  const t = useTranslations("app");
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 2xl:w-[828px] 2xl:ml-[120px] 2xl:mt-[120px] sm:w-[500px]  sm:pt-[60px] sm:pl-[60px] mt-[24px] ml-[24px] ">
        <Image
          src={banner_icon}
          alt="Fasting Tracker Icon"
          className="2xl:w-[88px]  sm:w-[48px]  w-[40px]"
          width={100}
          height={100}
          priority
          fetchPriority="high"
          // unoptimized
        ></Image>
        <div className="font-bold  2xl:text-[88px]  sm:text-[56px]  text-[30px] 2xl:my-[24px] sm:my-[16px] my-[8px]">
          {t("app_gofasting_title")}
        </div>
        <div className="2xl:text-[32px]  sm:text-[20px] text-[15px] 2xl:mb-[96px] sm:mb-[60px] mb-[20px]">
          {t("app_gofasting_slogan")}
        </div>

        <div className="flex">
          <span
            onClick={() => {
              // toLink(d.link_ios);
            }}
          >
            <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[270px] sm:w-[162px] 2xl:mr-[24px] w-[135px] mr-[20px] transition-transform duration-300 hover:scale-110" />
          </span>
          <span
            onClick={() => {
              // toLink(d.link_android);
            }}
          >
            <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[270px] sm:w-[162px]  w-[135px]  transition-transform duration-300 hover:scale-110" />
          </span>
        </div>
      </div>
      <Image
        src={banner}
        alt="top_banner_alt"
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
        alt=""
        className="w-full h-auto block sm:hidden"
        width={1170}
        height={1140}
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 1170px"
        // unoptimized
      ></Image>
      {/* <div className="block sm:hidden mt-[24px] ml-[24px]">
        <div className="font-bold text-[30px] mb-[12px]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="text-[15px] mb-[40px] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <div className="flex">
          <span
            onClick={() => {
              // toLink(d.link_ios);
            }}
          >
            <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[162px] 2xl:mr-[24px] w-[135px] mr-[20px] transition-transform duration-300 hover:scale-110" />
          </span>
          <span
            onClick={() => {
              // toLink(d.link_android);
            }}
          >
            <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[162px]  w-[135px]  transition-transform duration-300 hover:scale-110" />
          </span>
        </div>
      </div> */}
    </div>
  );
}
