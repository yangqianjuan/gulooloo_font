import Image from "next/image";
import banner from "@/assets/app/Gofasting/gofasting/bg_2x.webp";
import m_banner from "@/assets/app/Gofasting/gofasting_mobile/mask_group_2x.webp";
import banner_icon from "@/assets/app/Gofasting/logo.png";
import { useTranslations } from "next-intl";
import AppStore from "@/components/Svg/AppStore";
import GooglePlay from "@/components/Svg/GooglePlay";

export default function Start() {
  const t = useTranslations("home");
  return (
    <div className="relative 2xl:my-[160px] sm:my-[80px] my-[60px] 2xl:px-[80px] sm:px-[40px] px-[24px]">
      <div className="absolute top-0 left-0 w-full h-full  2xl:p-[80px] p-[40px]  text-center">
        <div className="font-bold  2xl:text-[64px]  sm:text-[40px]  text-[24px] sm:mb-[16px] mb-[12px]">
          Ready to Get Started?
        </div>
        <div className="2xl:text-[24px]  sm:text-[18px] text-[16px] 2xl:mb-[80px] sm:mb-[49px] mb-[40px]">
          Download GoFasting today and experience a simpler, more efficient way
          of life.
        </div>

        <div className="flex justify-center">
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
    </div>
  );
}
