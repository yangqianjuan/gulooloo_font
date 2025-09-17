import Image from "next/image";
import story1 from "@/assets/app/Gofasting/story-james/james_2x.webp";
import story2 from "@/assets/app/Gofasting/story-linda/linda_2x.webp";
import story3 from "@/assets/app/Gofasting/story-sarah/sarah_2x.webp";

import u1 from "@/assets/icon/u1.svg";
import u2 from "@/assets/icon/u2.svg";
import u3 from "@/assets/icon/u3.svg";
import star from "@/assets/icon/Star.svg";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
export default function Rate() {
  const t = useTranslations("home");
  const list = useMemo(() => {
    return [
      {
        title: t("testimonial1Title"),
        desc: t("testimonial1Content"),
        img: story1,
        user_img: u1,
        user_name: t("testimonial1Author"),
        star_num: 5,
      },
      {
        title: t("testimonial2Title"),
        desc: t("testimonial2Content"),
        img: story2,
        user_img: u2,
        user_name: t("testimonial2Author"),
        star_num: 5,
      },
      {
        title: t("testimonial3Title"),
        desc: t("testimonial3Content"),
        img: story3,
        user_img: u3,
        user_name: t("testimonial3Author"),
        star_num: 5,
      },
    ];
  }, []);
  return (
    <div className="2xl:p-[80px] sm:p-[40px] p-[24px]">
      <div className="2xl:text-[64px] font-semibold sm:text-[40px] text-[24px] text-center">
        Success Stories
      </div>
      <div className="2xl:text-[24px] sm:text-[18px] text-[15px] 2xl:mb-[80px] sm:mb-[40px] mb-[32px] text-center text-[rgba(4,30,84,0.48)]">
        Real stories from people who use Gulooloo Tech every day
      </div>
      <div className="flex justify-between sm:flex-row flex-col">
        {list.map((d) => {
          return (
            <div
              className="flex flex-col shadow-[0_8px_24px_rgba(126,138,163,0.12)] bg-white sm:w-[32%] text-left  xl:rounded-[24px] rounded-[16px] sm:mb-[0] mb-[32px]"
              key={d.title}
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
                  <div className="sm:text-[24px] text-[16px] flex items-center">
                    <Image
                      width={32}
                      src={d.user_img}
                      alt=""
                      className="2xl:mr-[13px] mr-[4px] 2xl:w-[40px] w-[32px]"
                    ></Image>
                    <span>{d.user_name}</span>
                  </div>
                  <div className="text-[rgba(0,204,145,1)] font-bold 2xl:text-[32px] text-[20px]">
                    8kg
                  </div>
                </div>
                <div className="2xl:text-[24px] text-[16px]   text-[rgba(4,30,84,0.64)]">
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
