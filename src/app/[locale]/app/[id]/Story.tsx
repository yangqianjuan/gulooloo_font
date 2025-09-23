import Image from "next/image";
import gofasting_story1 from "@/assets/app/Gofasting/story-james/james_2x.webp";
import gofasting_story2 from "@/assets/app/Gofasting/story-linda/linda_2x.webp";
import gofasting_story3 from "@/assets/app/Gofasting/story-sarah/sarah_2x.webp";
import gofasting_u1 from "@/assets/app/Gofasting/Profile-0.png";
import gofasting_u2 from "@/assets/app/Gofasting/Profile-1.png";
import gofasting_u3 from "@/assets/app/Gofasting/Profile-2.png";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
export default function Rate() {
  const t = useTranslations("app");
  const t_h = useTranslations("home");
  const list = useMemo(() => {
    return [
      {
        desc: t("app_gofasting_user_description1"),
        img: gofasting_story1,
        user_img: gofasting_u1,
        user_name: t("app_gofasting_user_name1"),
        kg: t("app_gofasting_user_title1"),
      },
      {
        desc: t("app_gofasting_user_description2"),
        img: gofasting_story2,
        user_img: gofasting_u2,
        user_name: t("app_gofasting_user_name2"),
        kg: t("app_gofasting_user_title2"),
      },
      {
        desc: t("app_gofasting_user_description3"),
        img: gofasting_story3,
        user_img: gofasting_u3,
        user_name: t("app_gofasting_user_name3"),
        kg: t("app_gofasting_user_title3"),
      },
    ];
  }, []);
  return (
    <div className="2xl:px-[80px] sm:px-[40px] px-[24px]">
      <div className="2xl:text-[64px] font-semibold sm:text-[40px] text-[24px] text-center">
        {t_h("testimonialTitle")}
      </div>
      <div className="2xl:text-[24px] sm:text-[18px] text-[15px] 2xl:mb-[80px] sm:mb-[40px] mb-[32px] text-center text-[rgba(4,30,84,0.48)]">
        {t_h("testimonialSubtitle")}
      </div>
      <div className="flex justify-between sm:flex-row flex-col">
        {list.map((d) => {
          return (
            <div
              className="flex flex-col shadow-[0_8px_24px_rgba(126,138,163,0.12)] bg-white sm:w-[32%] text-left  xl:rounded-[24px] rounded-[16px] sm:mb-[0] mb-[32px] last:mb-[0px]"
              key={d.user_name}
            >
              <div className="w-full h-auto  overflow-hidden 2xl:rounded-t-[24px] rounded-t-[16px]">
                <Image
                  src={d.img}
                  alt=""
                  width={1120}
                  height={720}
                  className="w-full h-auto  transition-transform duration-300 hover:scale-110"
                ></Image>
              </div>

              <div className="2xl:p-[40px] sm:p-[24px] p-[24px] pt-[20px] ">
                <div className="flex justify-between 2xl:mb-[36px] mb-[16px]">
                  <div className="2xl:text-[24px] text-[16px] flex items-center">
                    <Image
                      width={32}
                      src={d.user_img}
                      alt={d.user_name}
                      className="2xl:mr-[12px] mr-[8px] 2xl:w-[40px] w-[32px]"
                    ></Image>
                    <div className="2xl:text-[24px] text-[16px] font-medium text-[rgba(4,30,84,1)]">
                      {d.user_name}
                    </div>
                  </div>
                  <div className="text-[rgba(0,204,145,1)] font-bold 2xl:text-[32px] text-[20px]">
                    {d.kg}
                  </div>
                </div>
                <div className="2xl:text-[24px] text-[16px]  text-[rgba(4,30,84,1)] font-normal not-italic">
                  {d.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
