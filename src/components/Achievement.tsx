import Image from "next/image";
import { useTranslations } from "next-intl";
import bg from "@/assets/image/world_map_bg/world_map_bg_2x.webp";
import l_leaf from "@/assets/icon/left_leaf.svg";
import r_leaf from "@/assets/icon/right_leaf.svg";
import app_store from "@/assets/icon/appstore_logo.svg";
import user_pic from "@/assets/icon/user_pic/user_pic_2x.webp";
import google_bestapp from "@/assets/icon/google_bestapp.svg";
export default function Achievement() {
  const t = useTranslations();
  return (
    <div className=" w-full text-[rgba(118,61,3,1)] xl:mb-[7.5rem] mb-[6rem]">
      <div
        // style={{ backgroundImage: `url(${bg.src})` }}
        className="sm:py-[5rem] sm:mx-[5rem] text-[rgba(118,61,3,1)] sm:bg-[url('/images/world_map_bg_2x.webp')] bg-[url('/images/world_map_mobile_2x.webp')] bg-cover font-semibold sm:px-[0rem] px-[5.6rem] py-[4.6rem]"
      >
        <div className="text-center sm:text-[4rem] sm:pb-[5rem]  text-[2.4rem] pb-[4rem]">
          {t("whyUsTitle")}
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <div className="flex justify-between items-center sm:w-[30%] w-full sm:mb-[0rem] mb-[3.4rem]">
            <Image src={l_leaf} alt="" className="xl:w-[5.625rem] w-[5.2rem]" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={app_store}
                alt={t("appstore_logo_alt")}
                className="xl:w-[5.875rem] w-[4.8rem]"
              />
              <div className="xl:text-[2.5rem] text-[1.5rem]">
                {t("appleAward")}
              </div>
              <div className="xl:text-[1.5rem] text-[1rem] font-medium">
                {t("applePlatform")}
              </div>
            </div>
            <Image src={r_leaf} alt="" className="xl:w-[5.625rem] w-[5.2rem]" />
          </div>
          <div className="flex justify-between items-center sm:w-[35%] w-full sm:mb-[0rem] mb-[3.4rem]">
            <Image
              src={l_leaf}
              alt=""
              className="xl:w-[6.875rem] sm:w-[5.8rem] w-[5.2rem]"
            />
            <div className="flex flex-col items-center justify-center">
              <Image src={user_pic} className="xl:w-[13rem] w-[11rem]" alt="" />
              <div className="xl:text-[5.5rem] sm:text-[4.4rem] text-[2.75rem]">
                {t("downloadCount")}
              </div>
              <div className="xl:text-[2rem] sm:text-[2rem] text-[1.25rem] font-medium">
                {t("trustedUsers")}
              </div>
            </div>
            <Image
              src={r_leaf}
              className="xl:w-[6.875rem] sm:w-[5.8rem] w-[5.2rem]"
              alt=""
            />
          </div>
          <div className="flex justify-between items-center sm:w-[30%] w-full">
            <Image src={l_leaf} alt="" className="xl:w-[5.625rem] w-[5.2rem]" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src={google_bestapp}
                alt={t("google_bestapp_alt")}
                className="xl:w-[5.875rem] w-[4.8rem]"
              />
              <div className="xl:text-[2.5rem] text-[1.5rem]">
                {t("googleAward")}
              </div>
              <div className="xl:text-[1.5rem] text-[1rem] font-medium">
                {t("googlePlatform")}
              </div>
            </div>
            <Image src={r_leaf} alt="" className="xl:w-[5.625rem] w-[5.2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
