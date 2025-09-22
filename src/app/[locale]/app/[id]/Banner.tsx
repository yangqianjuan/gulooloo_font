import Image from "next/image";
import gofasting_banner from "@/assets/app/Gofasting/top_banner/top_banner_2x.webp";
import gofasting_m_banner from "@/assets/app/Gofasting/top_banner_mobile/group_2610165_2x.webp";
import gofasting_banner_icon from "@/assets/app/Gofasting/logo.png";

import invoicemaker_banner from "@/assets/app/invoice/top_banner/top_banner_2x.webp";
import invoicemaker_m_banner from "@/assets/app/invoice/top_banner_mobile/banner_2x.webp";
import invoicemaker_banner_icon from "@/assets/app/invoice/logo.png";

import easynotes_banner from "@/assets/app/EasyNote/top_banner/top_banner_2x.webp";
import easynotes_m_banner from "@/assets/app/EasyNote/top_banner_mobile/top_banner_pic_notes_2x.webp";
import easynotes_banner_icon from "@/assets/app/EasyNote/logo.png";

import QRgenerator_banner from "@/assets/app/QR/top_banner_qr/top_banner_qr_2x.webp";
import QRgenerator_m_banner from "@/assets/app/QR/top_banner_mobile/group_2610166_2x.webp";
import QRgenerator_banner_icon from "@/assets/app/QR/logo.png";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import AppStore from "@/components/Svg/AppStore";
import GooglePlay from "@/components/Svg/GooglePlay";

const imagesMap = {
  gofasting: {
    banner: gofasting_banner,
    m_banner: gofasting_m_banner,
    banner_icon: gofasting_banner_icon,
  },
  invoicemaker: {
    banner: invoicemaker_banner,
    m_banner: invoicemaker_m_banner,
    banner_icon: invoicemaker_banner_icon,
  },
  easynotes: {
    banner: easynotes_banner,
    m_banner: easynotes_m_banner,
    banner_icon: easynotes_banner_icon,
  },
  QRgenerator: {
    banner: QRgenerator_banner,
    m_banner: QRgenerator_m_banner,
    banner_icon: QRgenerator_banner_icon,
  },
};

export default function Banner() {
  const { id, locale } = useParams<{
    id: keyof typeof imagesMap;
    locale: string;
  }>();
  console.log("id", id);

  const t = useTranslations("app");
  return (
    <div className="relative w-full">
      <div className="absolute top-0 left-0 2xl:w-[1104px] 2xl:ml-[120px] 2xl:mt-[120px] sm:w-[628px]  sm:mt-[60px] sm:ml-[60px] sm:mr-[0px] sm:mb-[0px] m-[24px]">
        <Image
          src={imagesMap[id]?.banner_icon}
          alt="Fasting Tracker Icon"
          className="2xl:w-[88px]  sm:w-[48px]  w-[40px]"
          width={100}
          height={100}
          priority
          fetchPriority="high"
          // unoptimized
        ></Image>
        <div className="font-bold  2xl:text-[88px]  sm:text-[56px]  text-[30px] 2xl:my-[24px] sm:my-[16px] my-[8px]">
          {t(`app_${id}_title`)}
        </div>
        <div className="2xl:text-[32px]  sm:text-[20px] text-[15px] 2xl:mb-[96px] sm:mb-[60px] mb-[20px]">
          {t(`app_${id}_slogan`)}
        </div>

        <div className="flex">
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
        src={imagesMap[id]?.banner}
        alt={t(`app_${id}_title`)}
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
        src={imagesMap[id]?.m_banner}
        alt={t(`app_${id}_title`)}
        className="w-full h-auto block sm:hidden"
        width={1170}
        height={1140}
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 1170px"
        // unoptimized
      ></Image>
      {/* <div className="block sm:hidden mt-[24px] ml-[24px]">
        <div className="font-bold text-[30px] mb-[12px]">
          {t("primarySlogan")}
          <br />
          {t("secondarySlogan")}
        </div>
        <div className="text-[15px] mb-[40px] text-[rgba(4,30,84,0.64)]">
          {t("heroSubtitle")}
        </div>
        <div className="flex">
          <span
            onClick={() => {
              // toLink(d.link_ios);
            }}
          >
            <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[162px] 2xl:mr-[24px] w-[135px] mr-[20px] transition-transform duration-300 hover:scale-110" />
          </span>
          <span
            onClick={() => {
              // toLink(d.link_android);
            }}
          >
            <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] 2xl:w-[162px]  w-[135px]  transition-transform duration-300 hover:scale-110" />
          </span>
        </div>
      </div> */}
    </div>
  );
}
