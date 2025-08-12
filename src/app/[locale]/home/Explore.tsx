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
    <div className="relative sm:p-[5rem] p-[2.4rem]">
      <div className="sm:hidden block  top-[10rem] left-[11rem] sm:w-[36.6rem] text-center">
        <div className="absolute top-[4.8rem]  left-1/2 transform -translate-x-1/2 font-semibold text-[2.4rem] w-[20rem]">
          {t("ctaSectionTitle")}
        </div>
        <div
          className="absolute bottom-[6rem] left-1/2 transform -translate-x-1/2  w-[16.8rem] h-[4.4rem] rounded-full bg-[rgba(0,204,145,1)]  flex items-center justify-center text-white text-[1.6rem] hover:bg-[rgba(82,220,180,1)] transition-transform duration-300 hover:scale-110"
          onClick={toStart}
        >
          {t("ctaButton")}
        </div>
      </div>
      <div className="sm:block absolute hidden xl:top-[10rem] xl:left-[10rem] xl:w-[47.5rem] text-left top-[10rem] left-[11rem] w-[36.6rem]">
        <div className="font-bold xl:text-[5rem] text-[4.4rem]">
          {t("ctaSectionTitle")}
        </div>
        <div className="text-[1.5rem] xl:mb-[6.62rem] mb-[4.8rem]  text-[rgba(4,30,84,0.64)]">
          {t("ctaSectionSubtitle")}
        </div>
        <div
          className="xl:w-[16rem] xl:h-[4.5rem] w-[26.8rem] h-[6.4rem] rounded-full bg-[rgba(0,204,145,1)]  flex items-center justify-center text-white text-[24px] hover:bg-[rgba(82,220,180,1)] transition-transform duration-300 hover:scale-110"
          onClick={toStart}
        >
          {t("ctaButton")}
        </div>
      </div>

      <Image
        src={explore}
        alt={t("download_call_alt")}
        className="hidden sm:block xl:w-full xl:h-auto h-[38rem] w-auto xl:rounded-[2.5rem] rounded-[4rem]"
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
