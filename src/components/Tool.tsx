import Image from "next/image";
import apps_easynotes_pic from "@/assets/App_image/apps_easynotes_pic/apps_easynotes_pic_2x.webp";
import apps_invoice_pic from "@/assets/App_image/apps_invoice_pic/apps_invoice_pic_2x.webp";
import apps_gofasting from "@/assets/App_image/apps_gofasting_pic/apps_gofasting_pic_2x.webp";
import apps_ar_pic from "@/assets/App_image/apps_ar_pic/apps_ar_pic_2x.webp";
import ic from "@/assets/icon/ic.svg";
import Appstore_download from "@/assets/icon/Appstore_download.svg";
import googleplay_download from "@/assets/icon/googleplay_download.svg";
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
import Blog from "@/components/Blog";
import Rate from "@/components/Rate";
import Explore from "@/components/Explore";
import { useTranslations } from "next-intl";
import { useMemoizedFn } from "ahooks";
export default function Tool() {
  const t = useTranslations();
  const toLink = useMemoizedFn((link: string) => {
    window.open(link);
  });
  const list = useMemo(() => {
    return [
      {
        direct: "",
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
        direct: "",
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
    <div className="w-full text-center">
      <div className="font-semibold xl:text-[4.125rem] sm:text-[4.8rem] text-[2.4rem]">
        {t("productsMainTitle")}
      </div>
      <div className="text-[rgba(4,30,84,0.48)] xl:text-[1.5rem] xl:mb-[5rem] sm:text-[2rem] sm:mb-[8rem] text-[1.5rem] mb-[4rem]">
        {t("productsSubtitle")}
      </div>
      {list.map((d) => {
        return (
          <div
            className={`flex sm:${d.direct} sm:justify-between sm:flex-row  sm:mb-[7.5rem] sm:px-[7.5rem] text-left flex-col px-[2.4rem] items-center mb-[4rem]`}
            key={d.textInfo.title}
          >
            <div className="sm:px-[0rem] px-[2.5rem]">
              <Image
                src={d.img}
                className="xl:w-[43.25rem] sm:w-[43rem] w-full"
                alt=""
              />
            </div>
            <div className="xl:w-[50rem] pt-[4rem] sm:w-[46rem] w-full sm:px-[0rem] px-[2.5rem]">
              <div className="font-semibold sm:text-[4rem] sm:mb-[1.5rem] text-[2.2rem]">
                {d.textInfo.title}
              </div>
              <div className="text-[rgba(4,30,84,1)] xl:text-[1.5rem] sm:mb-[2.5rem] sm:text-[2rem] mb-[1.6rem] text-[1.5rem]">
                {d.textInfo.desc}
              </div>
              <ul className="mb-[8.75rem]">
                {d.textInfo.items.map((item) => {
                  return (
                    <li className="flex items-start w-full" key={item}>
                      <Image
                        src={ic}
                        alt=""
                        className="xl:w-[1.5rem] w-[2.4rem] mr-[1.6rem] shrink-0"
                      />
                      <div className="xl:text-[1.5rem] sm:text-[2rem] text-[1.5rem] leading-snug">
                        {item}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="flex">
                <Image
                  src={Appstore_download}
                  alt={t("appstore_download_alt")}
                  onClick={() => {
                    toLink(d.link_ios);
                  }}
                  className="xl:w-[10rem] xl:mr-[1.25rem] w-[13.5rem] mr-[2rem] transition-transform duration-300 hover:scale-110"
                />
                <Image
                  src={googleplay_download}
                  alt={t("googleplay_download_alt")}
                  onClick={() => {
                    toLink(d.link_android);
                  }}
                  className="xl:w-[10rem] w-[13.5rem] transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        );
      })}
      <Blog></Blog>
      <Rate></Rate>
      <Explore></Explore>
    </div>
  );
}
