import Image from "next/image";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import gofasting_banner from "@/assets/app/Gofasting/gofasting/bg_2x.webp";
import gofasting_m_banner from "@/assets/app/Gofasting/gofasting_mobile/mask_group_2x.webp";

import easynotes_banner from "@/assets/app/EasyNote/easynote/start__2x.webp";
import easynotes_m_banner from "@/assets/app/EasyNote/easynote_mobile/marsk_2x.webp";

import invoicemaker_banner from "@/assets/app/invoice/incoice_bg/incoice_bg_l_2x.webp";
import invoicemaker_m_banner from "@/assets/app/invoice/incoice_bg_mobile/incoice_bg_s_2x.webp";

import QRgenerator_banner from "@/assets/app/QR/QR/bg_2x.webp";
import QRgenerator_m_banner from "@/assets/app/QR/QR_mobile/bg_2x.webp";

import AppStore from "@/components/Svg/AppStore";
import GooglePlay from "@/components/Svg/GooglePlay";

const imagesMap = {
  gofasting: {
    banner: gofasting_banner,
    m_banner: gofasting_m_banner,
  },
  easynotes: {
    banner: easynotes_banner,
    m_banner: easynotes_m_banner,
  },
  invoicemaker: {
    banner: invoicemaker_banner,
    m_banner: invoicemaker_m_banner,
  },
  QRgenerator: {
    banner: QRgenerator_banner,
    m_banner: QRgenerator_m_banner,
  },
};

export default function Start() {
  const { id } = useParams<{ id: keyof typeof imagesMap }>();
  const t = useTranslations("app");
  return (
    <div className="relative 2xl:my-[160px] sm:my-[80px] my-[60px] 2xl:px-[80px] sm:px-[40px] px-[24px]">
      <div className="absolute top-0 left-0 w-full h-full  2xl:p-[80px] p-[40px]  text-center">
        <div className="font-bold  2xl:text-[64px]  sm:text-[40px]  text-[24px] sm:mb-[16px] mb-[12px]">
          {t("app_final_CTA")}
        </div>
        <div className="2xl:text-[24px]  sm:text-[18px] text-[16px] 2xl:mb-[80px] sm:mb-[49px] mb-[40px]">
          {t(`app_${id}_final_CTA_subtitle`)}
        </div>

        <div className="flex justify-center">
          <span
            onClick={() => {
              // toLink(d.link_ios);
            }}
          >
            <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[270px] sm:w-[162px] 2xl:mr-[24px] w-[135px] mr-[20px] transition-transform duration-300 hover:scale-110" />
          </span>
          <span
            onClick={() => {
              // toLink(d.link_android);
            }}
          >
            <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[270px] sm:w-[162px]  w-[135px]  transition-transform duration-300 hover:scale-110" />
          </span>
        </div>
      </div>
      <Image
        src={imagesMap[id].banner}
        alt="top_banner_alt"
        className="w-full h-auto hidden sm:block"
        priority
        width={3840}
        height={1872}
        sizes="(max-width: 768px) 100vw, 3840px"
        fetchPriority="high"
        placeholder="blur"
        // unoptimized
      ></Image>
      <Image
        src={imagesMap[id].m_banner}
        alt=""
        className="w-full h-auto block sm:hidden"
        width={1170}
        height={1140}
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 1170px"
        // unoptimized
      ></Image>
    </div>
  );
}
