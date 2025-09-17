import Image from "next/image";
import apps_easynotes_pic from "@/assets/App_image/apps_easynotes_pic/apps_easynotes_pic_2x.webp";
import apps_invoice_pic from "@/assets/App_image/apps_invoice_pic/apps_invoice_pic_2x.webp";
import apps_gofasting from "@/assets/App_image/apps_gofasting_pic/apps_gofasting_pic_2x.webp";
import apps_ar_pic from "@/assets/App_image/apps_ar_pic/apps_ar_pic_2x.webp";
import ic from "@/assets/icon/ic.svg";
import GooglePlay from "@/components/Svg/GooglePlay";
import AppStore from "@/components/Svg/AppStore";
import {
  iosLink_easy_notes,
  iosLink_go_fasting,
  iosLink_invoice_now,
  iosLink_qr_generator,
  andoridLink_easy_notes,
  andoridLink_go_fasting,
  andoridLink_invoice_now,
  andoridLink_qr_generator,
} from "@/utils/index";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { useMemoizedFn } from "ahooks";
export default function Tool() {
  const t = useTranslations("home");
  const toLink = useMemoizedFn((link: string) => {
    window.open(link);
  });
  const list = useMemo(() => {
    return [
      {
        direct: "flex-row",
        img: apps_easynotes_pic,
        alt: t("apps_easynotes_pic_alt"),
        link_ios: iosLink_easy_notes,
        link_android: andoridLink_easy_notes,
        textInfo: {
          title: t("easyNotesTitle"),
          desc: t("easyNotesDesc"),
          items: [
            t("easyNotesFeature1"),
            t("easyNotesFeature2"),
            t("easyNotesFeature3"),
          ],
        },
        id: "easyNotes",
      },
      {
        direct: "flex-row-reverse",
        img: apps_invoice_pic,
        alt: t("apps_invoice_pic_alt"),
        link_ios: iosLink_invoice_now,
        link_android: andoridLink_invoice_now,
        textInfo: {
          title: t("invoiceNowTitle"),
          desc: t("invoiceNowDesc"),
          items: [
            t("invoiceNowFeature1"),
            t("invoiceNowFeature2"),
            t("invoiceNowFeature3"),
          ],
        },
        id: "invoiceNow",
      },
      {
        direct: "flex-row",
        img: apps_gofasting,
        alt: t("apps_gofasting_pic_alt"),
        link_ios: iosLink_go_fasting,
        link_android: andoridLink_go_fasting,
        textInfo: {
          title: t("goFastingTitle"),
          desc: t("goFastingDesc"),
          items: [
            t("goFastingFeature1"),
            t("goFastingFeature2"),
            t("goFastingFeature3"),
          ],
        },
        id: "goFasting",
      },
      {
        direct: "flex-row-reverse",
        img: apps_ar_pic,
        alt: t("apps_ar_pic_alt"),
        link_ios: iosLink_qr_generator,
        link_android: andoridLink_qr_generator,
        textInfo: {
          title: t("qrGeneratorTitle"),
          desc: t("qrGeneratorDesc"),
          items: [
            t("qrGeneratorFeature1"),
            t("qrGeneratorFeature2"),
            t("qrGeneratorFeature3"),
          ],
        },
        id: "Qrgenerator",
      },
    ];
  }, []);
  return (
    <div
      className="w-full text-center pt-[120px] xl:mb-[112px] sm:mb-[128px] mb-[96px]"
      id="appDesc"
    >
      <div className="font-semibold 2xl:text-[66px] sm:text-[44px] text-[24px]">
        {t("productsMainTitle")}
      </div>
      <div className="text-[rgba(4,30,84,0.48)] 2xl:text-[24px]  sm:text-[20px]  text-[15px]">
        {t("productsSubtitle")}
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
            } sm:justify-between text-left flex-col items-center  sm:pt-[120px] 2xl:px-[120px] sm:px-[60px] px-[32px]  pt-[96px]`}
            key={d.textInfo.title}
          >
            <div className="2xl:w-[42%] sm:w-[44%] w-full">
              <Image
                src={d.img}
                className="w-full sm:mb-[0px] mb-[40px]"
                alt=""
                loading="lazy"
                width={1384}
                height={1560}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 430px, 692px"
              />
            </div>
            <div className="2xl:w-[47%]  sm:w-[48%]  w-full px-[0px] flex items-center">
              <div>
                <div className="font-semibold 2xl:text-[64px] sm:text-[40px] 2xl:mb-[24px] sm:mb-[16px] mb-[8px] text-[22px]">
                  {d.textInfo.title}
                </div>
                <div className="text-[rgba(4,30,84,1)] 2xl:text-[24px] sm:text-[20px] 2xl:mb-[40px]  sm:mb-[26px] mb-[16px] text-[16px]">
                  {d.textInfo.desc}
                </div>
                <ul className="2xl:mb-[140px] sm:mb-[80px] mb-[64px]">
                  {d.textInfo.items.map((item) => {
                    return (
                      <li
                        className="flex items-center w-full mb-[16px]"
                        key={item}
                      >
                        <Image
                          src={ic}
                          alt=""
                          className="w-[24px] mr-[26px]"
                          loading="lazy"
                        />
                        <div className="2xl:text-[24px] sm:text-[20px] text-[15px] ">
                          {item}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex">
                  <span
                    onClick={() => {
                      toLink(d.link_ios);
                    }}
                  >
                    <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[162px] 2xl:mr-[24px] w-[135px] mr-[20px] transition-transform duration-300 hover:scale-110" />
                  </span>
                  <span
                    onClick={() => {
                      toLink(d.link_android);
                    }}
                  >
                    <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[162px]  w-[135px]  transition-transform duration-300 hover:scale-110" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
