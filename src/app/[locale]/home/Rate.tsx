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
    <div className="2xl:p-[5rem] sm:p-[2.5rem] p-[1.5rem]">
      <div className="2xl:text-[4rem] font-semibold sm:text-[3rem] text-[1.5rem] text-center">
        {t("testimonialTitle")}
      </div>
      <div className="sm:text-[1.5rem] 2xl:mb-[5rem] text-[1.25rem] mb-[4rem]  text-center text-[rgba(4,30,84,0.48)]">
        {t("testimonialSubtitle")}
      </div>
      <div className="flex justify-between sm:flex-row flex-col">
        {list.map((d) => {
          return (
            <div
              className="flex flex-col justify-between shadow-[0_8px_24px_rgba(126,138,163,0.12)] bg-white sm:w-[32%] text-left xl:p-[2.5rem]  p-[2.4rem] mb-[2rem] xl:rounded-[24px] rounded-[16px]"
              key={d.title}
            >
              <div className="mb-[1.6rem] 2xl:text-[2rem] text-[1.25rem] font-medium">
                {d.title}
              </div>
              <div className="2xl:text-[1.5rem] text-[1rem]  2xl:mb-[1rem] mb-[0.5rem] text-[rgba(4,30,84,0.64)]">
                {d.desc}
              </div>
              <div className="flex justify-between ">
                <div className="text-[1.6rem] flex items-center">
                  <Image
                    width={32}
                    src={d.user_img}
                    alt=""
                    className="2xl:mr-[0.8rem] mr-[0.25rem]"
                  ></Image>
                  <span>{d.user_name}</span>
                </div>
                <div className="flex">
                  {Array.from({ length: d.star_num }, (_, i) => (
                    <Image
                      src={star}
                      alt=""
                      key={i}
                      width={24}
                      className="2xl:ml-[0.25rem] ml-[0.2rem]"
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
