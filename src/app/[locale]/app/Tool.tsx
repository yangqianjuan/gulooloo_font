import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { useMemoizedFn } from "ahooks";
import Image from "next/image";

import function_tracker_pic_2x from "@/assets/app/Gofasting/function_tracker_pic/function_tracker_pic_2x.webp";
import function_plan_pic_2x from "@/assets/app/Gofasting/function_plan_pic/function_plan_pic_2x.webp";
import function_calorie_pic from "@/assets/app/Gofasting/function_calorie_pic/function_calorie_pic_2x.webp";
import function_weight_record_pic_2x from "@/assets/app/Gofasting/function_weight_record_pic/function_weight_record_pic_2x.webp";

import ic_fasting_tracker from "@/assets/app/Gofasting/ic_fasting_tracker.svg";
import ic_plan from "@/assets/app/Gofasting/ic_plan.svg";
import ic_calorie from "@/assets/app/Gofasting/ic_calorie.svg";
import ic_weight from "@/assets/app/Gofasting/ic_weight.svg";

export default function Tool() {
  const t = useTranslations("home");
  const toLink = useMemoizedFn((link: string) => {
    window.open(link);
  });
  const list = useMemo(() => {
    return [
      {
        direct: "flex-row",
        icon: ic_fasting_tracker,
        img: function_tracker_pic_2x,
        alt: t("apps_easynotes_pic_alt"),
        textInfo: {
          title: "Smart Fasting Tracker",
          desc: "Easily start, pause, and track your fasting windows with clear progress visuals that keep you motivated every day.",
        },
        id: "ic_fasting_tracker",
      },
      {
        direct: "flex-row-reverse",
        img: function_plan_pic_2x,
        icon: ic_plan,
        alt: t("apps_invoice_pic_alt"),
        textInfo: {
          title: "Tailored Fasting Plans",
          desc: "Get customized fasting schedules designed around your lifestyle, making weight loss simple, safe, and effective.",
        },
        id: "ic_plan",
      },
      {
        direct: "flex-row",
        img: function_calorie_pic,
        icon: ic_calorie,
        alt: t("apps_gofasting_pic_alt"),
        textInfo: {
          title: "AI Calorie Scanner",
          desc: "Snap a photo of your meal to instantly identify foods, calories, and nutrients with AI-powered recognition.",
        },
        id: "ic_calorie",
      },
      {
        direct: "flex-row-reverse",
        img: function_weight_record_pic_2x,
        icon: ic_weight,
        alt: t("apps_ar_pic_alt"),
        textInfo: {
          title: "Comprehensive Weight Monitor",
          desc: "Track weight changes with detailed charts and insights, helping you stay on top of your health journey.",
        },
        id: "ic_weight",
      },
    ];
  }, []);
  return (
    <div
      className="w-full text-center xl:mb-[7rem] sm:mb-[8rem] mb-[6rem]"
      id="appDesc"
    >
      <div className="py-[60px] bg-[rgba(209,249,233,1)]">
        <div className="font-semibold 2xl:text-[64px] sm:text-[40px] text-[24px]">
          {t("productsMainTitle")}
        </div>
        <div className="text-[rgba(4,30,84,0.48)] 2xl:text-[24px]  sm:text-[16px]  text-[15px]">
          {t("productsSubtitle")}
        </div>
      </div>
      {list.map((d) => {
        return (
          <div
            id={d.id}
            className={`flex ${
              d.direct === "flex-row-reverse"
                ? "sm:flex-row-reverse"
                : d.direct === "flex-row"
                ? "sm:flex-row"
                : ""
            } sm:justify-between text-left flex-col items-center  sm:pt-[7.5rem] 2xl:px-[7.5rem] sm:px-[3.75rem] px-[2rem]  pt-[6rem]`}
            key={d.textInfo.title}
          >
            <div className="2xl:w-[42%] sm:w-[44%] w-full">
              <Image
                src={d.img}
                className="w-full sm:mb-[0rem] mb-[2.5rem]"
                alt=""
                loading="lazy"
                width={1384}
                height={1560}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 26.875rem, 43.25rem"
              />
            </div>
            <div className="2xl:w-[47%]  sm:w-[48%]  w-full px-[0rem] flex items-center">
              <div>
                <Image
                  src={d.icon}
                  alt=""
                  loading="lazy"
                  className="2xl:w-[80px] sm:w-[48px]  2xl:mb-[48px] sm:mb-[32px] sm:block hidden"
                />
                <div className="font-semibold 2xl:text-[4rem] sm:text-[2.5rem] 2xl:mb-[1.5rem] sm:mb-[1rem] mb-[0.5rem] text-[1.375rem]">
                  {d.textInfo.title}
                </div>
                <div className="text-[rgba(4,30,84,1)] 2xl:text-[1.5rem] sm:text-[1.25rem] 2xl:mb-[2.5rem]  sm:mb-[1.6rem] mb-[1rem] text-[0.9735rem]">
                  {d.textInfo.desc}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
