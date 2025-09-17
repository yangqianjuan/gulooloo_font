import Image from "next/image";
import explore from "@/assets/image/call_to_action_pc/call_to_action_pc_2x.webp";
import explore_m from "@/assets/image/call_to_action_mobile/call_to_action_mobile_2x.webp";
import { useTranslations } from "next-intl";
import {
  detectDeviceType,
  iosLink,
  andoridLink,
  otherlink,
} from "@/utils/index";
import { useMemoizedFn } from "ahooks";

export default function Explore() {
  const t = useTranslations("home");
  const toStart = useMemoizedFn(() => {
    const deviceType = detectDeviceType();
    if (deviceType === "iOS") {
      window.open(iosLink);
      return;
    }
    if (deviceType === "Android") {
      window.open(andoridLink);
      return;
    }
    window.open(otherlink);
  });
  return (
    <div className="relative 2xl:m-[80px] sm:m-[40px] m-[24px]">
      <div className="sm:hidden block  top-[24px] left-[72px]  text-center">
        <div className="absolute top-[77px]  left-1/2 transform -translate-x-1/2 font-semibold text-[24px]">
          {t("ctaSectionTitle")}
        </div>
        <div
          className="absolute bottom-[36px] left-1/2 transform -translate-x-1/2  w-[162px] h-[44px] rounded-full bg-[rgba(0,204,145,1)]  flex items-center justify-center text-white text-[16px] hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110"
          onClick={toStart}
        >
          {t("ctaButton")}
        </div>
      </div>
      <div className="sm:block absolute hidden 3xl:top-[80px] 3xl:left-[80px] 2xl:w-[760px] w-[454px] text-left sm:top-[50px] sm:left-[60px]">
        <div className="font-bold 2xl:text-[64px] text-[40px]">
          {t("ctaSectionTitle")}
        </div>
        <div className="2xl:text-[24px] text-[16px] 3xl:mb-[88px] 2xl:mb-[64px] lg:mb-[56px]  mb-[48px]  text-[rgba(4,30,84,0.64)]">
          {t("ctaSectionSubtitle")}
        </div>
        <div
          className="2xl:w-[304px] 2xl:h-[72px] w-[268px] h-[64px] rounded-full bg-[rgba(0,204,145,1)]  flex items-center justify-center text-white text-[24px] hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110"
          onClick={toStart}
        >
          {t("ctaButton")}
        </div>
      </div>

      <Image
        src={explore}
        alt={t("download_call_alt")}
        className="hidden sm:block xl:w-full xl:h-auto h-[380px] w-auto object-cover object-right 2xl:rounded-[40px] sm:rounded-[22px]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
        // unoptimized
      ></Image>
      <Image
        src={explore_m}
        alt={t("download_call_alt")}
        className="sm:hidden block w-full h-auto rounded-[16px]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
      />
    </div>
  );
}
