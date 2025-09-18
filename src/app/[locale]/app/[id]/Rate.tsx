import Image from "next/image";
import { useParams } from "next/navigation";
import invoicemaker_u1 from "@/assets/app/invoice/avator-Mike.png";
import invoicemaker_u2 from "@/assets/app/invoice/avator-sarah.png";
import invoicemaker_u3 from "@/assets/app/invoice/avator-rebert.png";

import easynotes_u1 from "@/assets/app/EasyNote/avatar-michael.png";
import easynotes_u2 from "@/assets/app/EasyNote/avatar-sophia.png";
import easynotes_u3 from "@/assets/app/EasyNote/avatar-grace.png";

import QRgenerator_u1 from "@/assets/app/QR/avatar-0.png";
import QRgenerator_u2 from "@/assets/app/QR/avatar-1.png";
import QRgenerator_u3 from "@/assets/app/QR/avatar-2.png";
import star from "@/assets/icon/Star.svg";
import { useMemo } from "react";
import { useTranslations } from "next-intl";

const imagesMap = {
  invoicemaker: {
    u1: invoicemaker_u1,
    u2: invoicemaker_u2,
    u3: invoicemaker_u3,
  },
  easynotes: {
    u1: easynotes_u1,
    u2: easynotes_u2,
    u3: easynotes_u3,
  },
  QRgenerator: {
    u1: QRgenerator_u1,
    u2: QRgenerator_u2,
    u3: QRgenerator_u3,
  },
};
export default function Rate() {
  const { id } = useParams<{ id: keyof typeof imagesMap }>();
  const t = useTranslations("app");
  const t_h = useTranslations("home");

  const list = useMemo(() => {
    return [
      {
        title: t(`app_${id}_user_title1`),
        desc: t(`app_${id}_user_description1`),
        user_img: imagesMap[id]?.u1,
        user_name: t(`app_${id}_user_name1`),
        star_num: 5,
      },
      {
        title: t(`app_${id}_user_title2`),
        desc: t(`app_${id}_user_description2`),
        user_img: imagesMap[id]?.u2,
        user_name: t(`app_${id}_user_name2`),
        star_num: 5,
      },
      {
        title: t(`app_${id}_user_title3`),
        desc: t(`app_${id}_user_description3`),
        user_img: imagesMap[id]?.u3,
        user_name: t(`app_${id}_user_name3`),
        star_num: 5,
      },
    ];
  }, [id]);
  return (
    <div className="2xl:px-[80px] sm:px-[40px] px-[24px]">
      <div className="2xl:text-[64px] font-semibold sm:text-[48px] text-[24px] text-center">
        {t_h("testimonialTitle")}
      </div>
      <div className="sm:text-[24px] 2xl:mb-[80px] text-[20px] mb-[64px]  text-center text-[rgba(4,30,84,0.48)]">
        {t_h("testimonialSubtitle")}
      </div>
      <div className="flex justify-between sm:flex-row flex-col">
        {list.map((d) => {
          return (
            <div
              className="flex flex-col justify-between shadow-[0_8px_24px_rgba(126,138,163,0.12)] bg-white sm:w-[32%] text-left xl:p-[40px] p-[38px] xl:rounded-[24px] rounded-[16px]"
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
                    className="2xl:mr-[13px] mr-[4px] 2xl:w-[40px] w-[32px]"
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
