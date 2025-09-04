import Image from "next/image";
import { useTranslations } from "next-intl";
import bg from "@/assets/image/world_map_bg/world_map_bg_2x.webp";
import l_leaf from "@/assets/icon/left_leaf.svg";
import r_leaf from "@/assets/icon/right_leaf.svg";
import app_store from "@/assets/icon/appstore_logo.svg";
import user_pic from "@/assets/icon/user_pic/user_pic_2x.webp";
import google_bestapp from "@/assets/icon/google_bestapp.svg";
export default function Achievement() {
  const t = useTranslations("home");
  return (
    <div className="w-full text-[rgba(118,61,3,1)]">
      <div
        // style={{ backgroundImage: `url(${bg.src})` }}
        className="sm:py-[5rem] 2xl:px-[5rem]  sm:px-[3.75rem] text-[rgba(118,61,3,1)] sm:bg-[url('/images/world_map_bg_2x.webp')] bg-[url('/images/world_map_mobile_2x.webp')] bg-cover font-semibold px-[3.5rem] py-[2.5rem]"
      >
        <div className="text-center 2xl:text-[4rem] 2xl:pb-[5rem] sm:text-[2.75rem] sm:pb-[2.5rem]  text-[1.5rem] pb-[4rem]">
          {t("whyUsTitle")}
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <div className="relative sm:w-[31%] w-full sm:mb-[0rem] mb-[2rem] sm:order-1 order-2">
            <Image
              src={l_leaf}
              alt=""
              className="absolute left-0 top-0 2xl:w-[5.625rem] w-[3.25rem]"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={app_store}
                alt={t("appstore_logo_alt")}
                className="2xl:w-[5.875rem] w-[3rem]"
                loading="lazy"
              />
              <div className="2xl:text-[2.5rem]  text-[1.5rem]">
                {t("appleAward")}
              </div>
              <div className="sm:text-[1.5rem]   text-[1rem] font-medium">
                {t("applePlatform")}
              </div>
            </div>
            <Image
              src={r_leaf}
              alt=""
              className="absolute right-0 top-0 2xl:w-[5.625rem] w-[3.25rem]"
              loading="lazy"
            />
          </div>
          <div className="relative sm:w-[34%] w-full sm:mb-[0rem] mb-[3.4rem] sm:order-2 order-1">
            <Image
              src={l_leaf}
              alt=""
              className="absolute left-0 top-0 2xl:w-[6.875rem] sm:w-[3.625rem] w-[3.25rem]"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={user_pic}
                className="2xl:w-[13rem] w-[7.125rem]"
                alt=""
                loading="lazy"
              />
              <div className="2xl:text-[5.5rem] sm:text-[2.75rem] text-[2rem]">
                {t("downloadCount")}
              </div>
              <div className="2xl:text-[2rem] sm:text-[1.25rem] text-[1rem] font-medium">
                {t("trustedUsers")}
              </div>
            </div>
            <Image
              src={r_leaf}
              className="absolute right-0 top-0 2xl:w-[6.875rem] sm:w-[3.625rem] w-[3.25rem]"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="relative items-center sm:w-[31%] w-full order-3">
            <Image
              src={l_leaf}
              alt=""
              className="absolute left-0 top-0 2xl:w-[5.625rem] w-[3.25rem]"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={google_bestapp}
                alt={t("google_bestapp_alt")}
                className="2xl:w-[5.875rem] w-[3rem]"
              />
              <div className="2xl:text-[2.5rem]  text-[1.5rem]">
                {t("googleAward")}
              </div>
              <div className="sm:text-[1.5rem]   text-[1rem] font-medium">
                {t("googlePlatform")}
              </div>
            </div>
            <Image
              src={r_leaf}
              loading="lazy"
              alt=""
              className="absolute right-0 top-0 2xl:w-[5.625rem] w-[3.25rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
