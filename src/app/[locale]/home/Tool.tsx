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
      },
    ];
  }, []);
  return (
    <div className="w-full text-center pt-[7.5rem]" id="appDesc">
      <div className="font-semibold 2xl:text-[4.125rem] sm:text-[3rem] text-[1.5rem]">
        {t("productsMainTitle")}
      </div>
      <div className="text-[rgba(4,30,84,0.48)] 2xl:text-[1.5rem] sm:mb-[5rem] sm:text-[1.25rem]  text-[0.9375rem] mb-[3rem]">
        {t("productsSubtitle")}
      </div>
      {list.map((d) => {
        return (
          <div
            className={`flex ${
              d.direct === "flex-row-reverse"
                ? "sm:flex-row-reverse"
                : d.direct === "flex-row"
                ? "sm:flex-row"
                : ""
            } sm:justify-between text-left flex-col items-center  sm:mb-[7.5rem] 2xl:px-[7.5rem] sm:px-[3.75rem] px-[3.15rem]  mb-[6rem]`}
            key={d.textInfo.title}
          >
            <div>
              <Image
                src={d.img}
                className="2xl:w-[43.25rem] sm:w-[26.875rem] w-full sm:mb-[0rem] mb-[2.5rem]"
                alt=""
                loading="lazy"
                width={1384}
                height={1560}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 26.875, 43.25rem"
              />
            </div>
            <div className="2xl:w-[50rem] 2xl:pt-[7.37rem]  sm:w-[28.75rem] sm:pt-[2.5rem]  w-full sm:px-[0rem] px-[2.5rem]">
              <div className="font-semibold 2xl:text-[4rem] sm:text-[2.5rem] 2xl:mb-[1.5rem] sm:mb-[1rem] mb-[0.5rem] text-[1.375rem]">
                {d.textInfo.title}
              </div>
              <div className="text-[rgba(4,30,84,1)] 2xl:text-[1.5rem] sm:text-[1.25rem] axl:mb-[2.5rem]  sm:mb-[1.6rem] mb-[1rem] text-[0.9735rem]">
                {d.textInfo.desc}
              </div>
              <ul className="sm:mb-[8.75rem] mb-[4rem]">
                {d.textInfo.items.map((item) => {
                  return (
                    <li
                      className="flex items-center w-full mb-[1rem]"
                      key={item}
                    >
                      <Image
                        src={ic}
                        alt=""
                        className="w-[1.5rem] mr-[1.6rem]"
                        loading="lazy"
                      />
                      <div className="2xl:text-[1.5rem] sm:text-[1.25rem] text-[0.9375rem] ">
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
                  <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[10.125rem] 2xl:mr-[1.5rem] w-[8.4375rem] mr-[1.25rem] transition-transform duration-300 hover:scale-110" />
                </span>
                <span
                  onClick={() => {
                    toLink(d.link_android);
                  }}
                >
                  <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[10.125rem] 2xl:mr-[1.5rem] w-[8.4375rem] mr-[1.25rem] transition-transform duration-300 hover:scale-110" />
                </span>
                {/* <Image
                  src={Appstore_download}
                  alt={t("appstore_download_alt")}
                  onClick={() => {
                    toLink(d.link_ios);
                  }}
                  className="2xl:w-[10.125rem] 2xl:mr-[1.5rem] w-[8.4375rem] mr-[1.25rem] transition-transform duration-300 hover:scale-110"
                /> */}
                {/* <Image
                  src={googleplay_download}
                  alt={t("googleplay_download_alt")}
                  onClick={() => {
                    toLink(d.link_android);
                  }}
                  className="2xl:w-[10.125rem] w-[8.4375rem] transition-transform duration-300 hover:scale-110"
                /> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
