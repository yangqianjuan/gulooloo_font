import Image from "next/image";
import { useTranslations } from "next-intl";
import bg from "@/assets/image/world_map_bg/world_map_bg_2x.webp";
import l_leaf from "@/assets/icon/left_leaf.svg";
import r_leaf from "@/assets/icon/right_leaf.svg";
import app_store from "@/assets/icon/appstore_logo.svg";
import user_pic from "@/assets/icon/user_pic/user_pic_2x.webp";
import google_bestapp from "@/assets/icon/google_bestapp.png";
export default function Achievement() {
  const t = useTranslations("home");
  return (
    <div className="w-full text-[rgba(118,61,3,1)]">
      <div
        // style={{ backgroundImage: `url(${bg.src})` }}
        className="sm:py-[80px] 2xl:px-[80px]  sm:px-[60px] text-[rgba(118,61,3,1)] sm:bg-[url('/images/world_map_bg_2x.webp')] bg-[url('/images/world_map_mobile_2x.webp')] bg-cover font-semibold px-[56px] py-[40px]"
      >
        <div className="text-center 2xl:text-[64px] 2xl:pb-[80px] sm:text-[40px] sm:pb-[40px]  text-[24px] pb-[64px]">
          {t("whyUsTitle")}
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-end">
          <div className="relative h-full sm:w-[31%] w-full sm:mb-[0px] mb-[32px] sm:order-1 order-2">
            <Image
              src={l_leaf}
              alt=""
              className="absolute left-0 bottom-0 2xl:w-[90px] w-[52px]"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={app_store}
                alt={t("appstore_logo_alt")}
                className="2xl:w-[94px] w-[48px]"
                loading="lazy"
              />
              <div className="2xl:text-[40px]   text-[24px] 2xl:leading-[60px] leading-[36px] 2xl:mb-[16px] mb-[4px]">
                {t("appleAward")}
              </div>
              <div className="font-medium sm:text-[24px]   text-[16px]  2xl:leading-[32px] leading-[24px]">
                {t("applePlatform")}
              </div>
            </div>
            <Image
              src={r_leaf}
              alt=""
              className="absolute right-0 bottom-0 2xl:w-[90px] w-[52px]"
              loading="lazy"
            />
          </div>
          <div className="relative h-full sm:w-[34%] w-full sm:mb-[0px] mb-[54px] sm:order-2 order-1">
            <Image
              src={l_leaf}
              alt=""
              className="absolute left-0 bottom-0 2xl:w-[110px] sm:w-[58px] w-[52px]"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={user_pic}
                className="2xl:w-[208px] w-[114px]"
                alt=""
                loading="lazy"
              />
              <div className="2xl:text-[88px] sm:text-[44px] text-[32px] 2xl:leading-[132px] sm:leading-[66px] leading-[48px] ">
                {t("downloadCount")}
              </div>
              <div className="2xl:text-[32px] sm:text-[20px] text-[16px] font-medium 2xl:leading-[48px] sm:leading-[30px] leading-[24px]">
                {t("trustedUsers")}
              </div>
            </div>
            <Image
              src={r_leaf}
              className="absolute right-0 bottom-0 2xl:w-[110px] sm:w-[58px] w-[52px]"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="relative h-full  sm:w-[31%] w-full order-3">
            <Image
              src={l_leaf}
              alt=""
              className="absolute left-0 bottom-0 2xl:w-[90px] w-[52px]"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={google_bestapp}
                alt={t("google_bestapp_alt")}
                className="2xl:w-[94px] w-[48px]"
              />
              <div className="2xl:text-[40px]  text-[24px] 2xl:leading-[60px] leading-[36px] 2xl:mb-[16px] mb-[4px]">
                {t("googleAward")}
              </div>
              <div className="sm:text-[24px]   text-[16px] font-medium 2xl:leading-[32px] leading-[24px]">
                {t("googlePlatform")}
              </div>
            </div>
            <Image
              src={r_leaf}
              loading="lazy"
              alt=""
              className="absolute right-0 bottom-0 2xl:w-[90px] w-[52px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
