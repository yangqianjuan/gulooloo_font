import Image from "next/image";
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
        user_img: u1,
        user_name: t("testimonial1Author"),
        star_num: 5,
      },
      {
        title: t("testimonial2Title"),
        desc: t("testimonial2Content"),
        user_img: u2,
        user_name: t("testimonial2Author"),
        star_num: 5,
      },
      {
        title: t("testimonial3Title"),
        desc: t("testimonial3Content"),
        user_img: u3,
        user_name: t("testimonial3Author"),
        star_num: 5,
      },
    ];
  }, []);
  return (
    <div className="2xl:p-[80px] sm:p-[40px] p-[24px]">
      <div className="2xl:text-[64px] font-semibold sm:text-[40px] text-[24px] text-center">
        {t("testimonialTitle")}
      </div>
      <div className="sm:text-[24px] 2xl:mb-[80px] text-[18px] mb-[64px]  text-center text-[rgba(4,30,84,0.48)]">
        {t("testimonialSubtitle")}
      </div>
      <div className="flex justify-between sm:flex-row flex-col">
        {list.map((d) => {
          return (
            <div
              className="flex flex-col justify-between shadow-[0_8px_24px_rgba(126,138,163,0.12)] bg-white sm:w-[32%] text-left xl:p-[40px]  p-[38px] mb-[32px] xl:rounded-[24px] rounded-[16px]"
              key={d.title}
            >
              <div className="mb-[26px] 2xl:text-[32px] text-[20px] font-medium">
                {d.title}
              </div>
              <div className="2xl:text-[24px] text-[16px]  2xl:mb-[16px] mb-[8px] text-[rgba(4,30,84,0.64)]">
                {d.desc}
              </div>
              <div className="flex justify-between ">
                <div className="sm:text-[24px] text-[16px] flex items-center">
                  <Image
                    width={32}
                    src={d.user_img}
                    alt=""
                    className="2xl:mr-[12px] mr-[8px] 2xl:w-[40px] w-[32px]"
                  ></Image>
                  <span>{d.user_name}</span>
                </div>
                <div className="flex">
                  {Array.from({ length: d.star_num }, (_, i) => (
                    <Image
                      src={star}
                      alt=""
                      width={24}
                      key={i}
                      className="2xl:ml-[4px] ml-[3px] 2xl:w-[30px] w-[24px]"
                    ></Image>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
