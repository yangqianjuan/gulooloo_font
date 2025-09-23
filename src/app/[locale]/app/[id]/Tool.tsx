import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { useMemoizedFn } from "ahooks";
import Image from "next/image";
import { useParams } from "next/navigation";

import gofasting_feature1 from "@/assets/app/Gofasting/function_tracker_pic/function_tracker_pic_2x.webp";
import gofasting_feature2 from "@/assets/app/Gofasting/function_plan_pic/function_plan_pic_2x.webp";
import gofasting_feature3 from "@/assets/app/Gofasting/function_calorie_pic/function_calorie_pic_2x.webp";
import gofasting_feature4 from "@/assets/app/Gofasting/function_weight_record_pic/function_weight_record_pic_2x.webp";
import ic_gofasting_feature1 from "@/assets/app/Gofasting/ic_fasting_tracker.svg";
import ic_gofasting_feature2 from "@/assets/app/Gofasting/ic_plan.svg";
import ic_gofasting_feature3 from "@/assets/app/Gofasting/ic_calorie.svg";
import ic_gofasting_feature4 from "@/assets/app/Gofasting/ic_weight.svg";

import invoicemaker_feature1 from "@/assets/app/invoice/function_1_pic/function_1_pic_2x.webp";
import invoicemaker_feature2 from "@/assets/app/invoice/function_2_pic/function_2_pic_2x.webp";
import invoicemaker_feature3 from "@/assets/app/invoice/function_3_pic/function_3_pic_2x.webp";
import invoicemaker_feature4 from "@/assets/app/invoice/function_4_pic/function_4_pic_2x.webp";
import ic_invoicemaker_feature1 from "@/assets/app/invoice/ic_invoice_invoice.svg";
import ic_invoicemaker_feature2 from "@/assets/app/invoice/ic_invoice_customize.svg";
import ic_invoicemaker_feature3 from "@/assets/app/invoice/ic_invoice_management.svg";
import ic_invoicemaker_feature4 from "@/assets/app/invoice/ic_invoice_report.svg";

import easynotes_feature1 from "@/assets/app/EasyNote/function_get_things_organized_pic/get_things_organized_pic_2x.webp";
import easynotes_feature2 from "@/assets/app/EasyNote/function_drawing_pic/drawing_pic_2x.webp";
import easynotes_feature3 from "@/assets/app/EasyNote/function_widget_pic/widget_pic_2x.webp";
import easynotes_feature4 from "@/assets/app/EasyNote/function_auto_sync_pic/auto_sync_pic_2x.webp";
import ic_easynotes_feature1 from "@/assets/app/EasyNote/Organized_ic.svg";
import ic_easynotes_feature2 from "@/assets/app/EasyNote/ic_draw.svg";
import ic_easynotes_feature3 from "@/assets/app/EasyNote/widget_ic.svg";
import ic_easynotes_feature4 from "@/assets/app/EasyNote/ic_Auto sync.svg";

import QRgenerator_feature1 from "@/assets/app/QR/function_generate_pic/function_generate_pic_2x.webp";
import QRgenerator_feature2 from "@/assets/app/QR/function_templates_pic/function_templates_pic_2x.webp";
import QRgenerator_feature3 from "@/assets/app/QR/function_customizable_pic/function_customizable_pic_2x.webp";
import QRgenerator_feature4 from "@/assets/app/QR/function_scan_pic/function_scan_pic_2x.webp";
import ic_QRgenerator_feature1 from "@/assets/app/QR/ic_generate.svg";
import ic_QRgenerator_feature2 from "@/assets/app/QR/ic_templates.svg";
import ic_QRgenerator_feature3 from "@/assets/app/QR/ic_customizable.svg";
import ic_QRgenerator_feature4 from "@/assets/app/QR/ic_scan.svg";

const imagesMap = {
  gofasting: {
    feature1: {
      img: gofasting_feature1,
      icon: ic_gofasting_feature1,
    },
    feature2: {
      img: gofasting_feature2,
      icon: ic_gofasting_feature2,
    },
    feature3: {
      img: gofasting_feature3,
      icon: ic_gofasting_feature3,
    },
    feature4: {
      img: gofasting_feature4,
      icon: ic_gofasting_feature4,
    },
  },
  invoicemaker: {
    feature1: {
      img: invoicemaker_feature1,
      icon: ic_invoicemaker_feature1,
    },
    feature2: {
      img: invoicemaker_feature2,
      icon: ic_invoicemaker_feature2,
    },
    feature3: {
      img: invoicemaker_feature3,
      icon: ic_invoicemaker_feature3,
    },
    feature4: {
      img: invoicemaker_feature4,
      icon: ic_invoicemaker_feature4,
    },
  },
  easynotes: {
    feature1: {
      img: easynotes_feature1,
      icon: ic_easynotes_feature1,
    },
    feature2: {
      img: easynotes_feature2,
      icon: ic_easynotes_feature2,
    },
    feature3: {
      img: easynotes_feature3,
      icon: ic_easynotes_feature3,
    },
    feature4: {
      img: easynotes_feature4,
      icon: ic_easynotes_feature4,
    },
  },
  QRgenerator: {
    feature1: {
      img: QRgenerator_feature1,
      icon: ic_QRgenerator_feature1,
    },
    feature2: {
      img: QRgenerator_feature2,
      icon: ic_QRgenerator_feature2,
    },
    feature3: {
      img: QRgenerator_feature3,
      icon: ic_QRgenerator_feature3,
    },
    feature4: {
      img: QRgenerator_feature4,
      icon: ic_QRgenerator_feature4,
    },
  },
};

export default function Tool() {
  const t = useTranslations("app");
  const { id } = useParams<{ id: keyof typeof imagesMap }>();
  console.log("id", id);
  const toLink = useMemoizedFn((link: string) => {
    window.open(link);
  });
  const list = useMemo(() => {
    return [
      {
        direct: "flex-row",
        icon: imagesMap[id]?.feature1.icon,
        img: imagesMap[id]?.feature1.img,
        textInfo: {
          title: t(`app_${id}_feature_title_1`),
          desc: t(`app_${id}_feature_description1`),
        },
        id: "ic_fasting_tracker",
      },
      {
        direct: "flex-row-reverse",
        img: imagesMap[id]?.feature2.img,
        icon: imagesMap[id]?.feature2.icon,
        textInfo: {
          title: t(`app_${id}_feature_title_2`),
          desc: t(`app_${id}_feature_description2`),
        },
        id: "ic_plan",
      },
      {
        direct: "flex-row",
        img: imagesMap[id]?.feature3.img,
        icon: imagesMap[id]?.feature3.icon,
        textInfo: {
          title: t(`app_${id}_feature_title_3`),
          desc: t(`app_${id}_feature_description3`),
        },
        id: "ic_calorie",
      },
      {
        direct: "flex-row-reverse",
        img: imagesMap[id]?.feature4.img,
        icon: imagesMap[id]?.feature4.icon,
        textInfo: {
          title: t(`app_${id}_feature_title_4`),
          desc: t(`app_${id}_feature_description4`),
        },
        id: "ic_weight",
      },
    ];
  }, []);
  return (
    <div
      className="w-full text-center 2xl:pb-[80px] sm:pb-[40px] pb-[20px]"
      id="appDesc"
    >
      <div
        className={`${
          (
            {
              gofasting: "bg-[rgba(209,249,233,1)]",
              invoicemaker: "bg-[rgba(56,117,247,0.1)]",
              easynotes: "bg-[rgba(255,247,232,1)]",
              QRgenerator: "bg-[rgba(226,255,246,1)]",
            } as Record<string, string>
          )[id] || "bg-[rgba(209,249,233,1)]"
        }
        2xl:py-[60px] sm:py-[40px] py-[32px]  sm:mb-[120px]  mb-[60px] sm:px-[120px] px-[24px]`}
      >
        <div className="font-semibold 2xl:text-[64px] sm:text-[40px] text-[24px] leading-[150%] 2xl:mb-[20px] sm:mb-[12px] mb-[4px]">
          {t(`app_${id}_hero_title`)}
        </div>
        <div className="2xl:text-[24px]  sm:text-[16px]  text-[15px] leading-[150%]">
          {t(`app_${id}_hero_description`)}
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
            } sm:justify-between text-left flex-col items-center  sm:pb-[80px] pb-[60px] 2xl:px-[200px] sm:px-[80px] px-[40px]`}
            key={d.textInfo.title}
          >
            <div className="2xl:w-[38%] sm:w-[41%] w-full">
              <Image
                src={d.img}
                className="w-full sm:mb-[0px] mb-[40px]"
                alt={d.textInfo.title}
                loading="lazy"
                width={1384}
                height={1560}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 430px, 692px"
              />
            </div>
            <div className="2xl:w-[51%]  sm:w-[50%]  w-full px-[0px] flex items-center">
              <div>
                <Image
                  src={d.icon}
                  alt="icon"
                  loading="lazy"
                  className="2xl:w-[80px] sm:w-[48px]  2xl:mb-[48px] sm:mb-[32px] sm:block hidden"
                />
                <div className="font-semibold 2xl:text-[64px] sm:text-[40px] text-[22px] 2xl:mb-[24px] sm:mb-[16px] mb-[8px]">
                  {d.textInfo.title}
                </div>
                <div className="text-[rgba(4,30,84,1)] 2xl:text-[24px] text-[16px]">
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
