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
    <div className="relative 2xl:m-[5rem] sm:m-[2.5rem] m-[1.5rem]">
      <div className="sm:hidden block  top-[1.5rem] left-[4.5rem]  text-center">
        <div className="absolute top-[4.8rem]  left-1/2 transform -translate-x-1/2 font-semibold text-[1.5rem]">
          {t("ctaSectionTitle")}
        </div>
        <div
          className="absolute bottom-[2.25rem] left-1/2 transform -translate-x-1/2  w-[10.125rem] h-[2.75rem] rounded-full bg-[rgba(0,204,145,1)]  flex items-center justify-center text-white text-[1rem] hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110"
          onClick={toStart}
        >
          {t("ctaButton")}
        </div>
      </div>
      <div className="sm:block absolute hidden 3xl:top-[5rem] 3xl:left-[5rem] 2xl:w-[47.5rem] w-[28.375rem] text-left sm:top-[3.12rem] sm:left-[3.75rem]">
        <div className="font-bold 2xl:text-[4rem] text-[2.5rem]">
          {t("ctaSectionTitle")}
        </div>
        <div className="2xl:text-[1.5rem] text-[1rem] 3xl:mb-[5.5rem] 2xl:mb-[4rem] lg:mb-[3.5rem]  mb-[3rem]  text-[rgba(4,30,84,0.64)]">
          {t("ctaSectionSubtitle")}
        </div>
        <div
          className="2xl:w-[19rem] 2xl:h-[4.5rem] w-[16.75rem] h-[4rem] rounded-full bg-[rgba(0,204,145,1)]  flex items-center justify-center text-white text-[24px] hover:bg-[rgba(16,185,129,1)] transition-transform duration-300 hover:scale-110"
          onClick={toStart}
        >
          {t("ctaButton")}
        </div>
      </div>

      <Image
        src={explore}
        alt={t("download_call_alt")}
        className="hidden sm:block xl:w-full xl:h-auto h-[23.75rem] w-auto object-cover object-right 2xl:rounded-[2.5rem] sm:rounded-[1.4rem]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
        // unoptimized
      ></Image>
      <Image
        src={explore_m}
        alt={t("download_call_alt")}
        className="sm:hidden block w-full h-auto rounded-[1rem]"
        loading="lazy"
        sizes="100vw"
        placeholder="blur"
      />
    </div>
  );
}
