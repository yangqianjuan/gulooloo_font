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
    <div className="xl:p-[5rem] sm:p-[4rem] px-[2.4rem] py-[6rem]">
      <div className="xl:text-[4rem] font-semibold sm:text-[4.8rem] text-[2.4rem] text-center">
        {t("testimonialTitle")}
      </div>
      <div className="xl:text-[1.5rem] xl:mb-[5rem] sm:text-[2rem] mb-[4rem] text-[1.5rem] text-center text-[rgba(4,30,84,0.48)]">
        {t("testimonialSubtitle")}
      </div>
      <div className="flex justify-between sm:flex-row flex-col">
        {list.map((d) => {
          return (
            <div
              className="flex flex-col justify-between sm:w-[32%] text-left xl:p-[2.5rem] bg-[rgba(245,248,252,1)] p-[2.4rem] mb-[2rem] xl:rounded-[24px] rounded-[16px]"
              key={d.title}
            >
              <div className="mb-[1.6rem] text-[2rem] font-medium">
                {d.title}
              </div>
              <div className="xl:text-[1.5rem]  mb-[2rem] text-[rgba(4,30,84,0.64)] text-[1.6rem]">
                {d.desc}
              </div>
              <div className="flex justify-between ">
                <div className="text-[1.6rem] flex items-center">
                  <Image
                    width={32}
                    src={d.user_img}
                    alt=""
                    className="mr-[0.8rem]"
                  ></Image>
                  <span className="xl:ml-[0.12rem] ml-[0.16rem]">
                    {d.user_name}
                  </span>
                </div>
                <div className="flex">
                  {Array.from({ length: d.star_num }, (_, i) => (
                    <Image
                      src={star}
                      alt=""
                      key={i}
                      width={24}
                      className="ml-[0.32rem]"
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
