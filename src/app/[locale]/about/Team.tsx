import Image from "next/image";
import ic_user from "@/assets/about/ic_user.svg";
import ic_quality from "@/assets/about/ic_quality.svg";
import ic_stronger from "@/assets/about/ic_stronger.svg";
import { useTranslations } from "next-intl";
export default function Team() {
  const t = useTranslations("about");
  return (
    <div className="2xl:px-[80px] 2xl:py-[120px] sm:px-[40px] sm:py-[80px] px-[24px] py-[40px]">
      <div className="text-center 2xl:mb-[80px] sm:mb-[40px] mb-[20px] font-semibold 2xl:text-[66px] sm:text-[44px] text-[24px]">
        {t("aboutValuesTitle")}
      </div>
      <ul className="flex justify-between flex-wrap">
        <li className="sm:w-[32%] w-full flex flex-col items-center text-center rounded-32xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] 2xl:px-[60px] 2xl:py-[80px] sm:px-[24px] sm:py-[40px] px-[32px] py-[32px] sm:mb-[0px] mb-[24px]">
          <Image
            src={ic_user}
            alt=""
            width={80}
            className="2xl:w-[80px] 2xl:mb-[60px] sm:w-[56px] w-[48px] mb-[20px]"
          />
          <div className="2xl:text-[40px]  sm:text-[27px] text-[24px] 2xl:mb-[120px] sm:mb-[60px] mb-[32px]">
            {t("aboutValue1Title")}
          </div>
          <div className="text-[rgba(4,30,84,0.7)] 2xl:text-[24px] text-[16px]">
            {t("aboutValue1Desc")}
          </div>
        </li>
        <li className="sm:w-[32%] w-full flex flex-col items-center text-center rounded-32xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] 2xl:px-[60px] 2xl:py-[80px] sm:px-[24px] sm:py-[40px] px-[32px] py-[32px] sm:mb-[0px] mb-[24px]">
          <Image
            src={ic_quality}
            alt=""
            width={80}
            className="2xl:w-[80px] 2xl:mb-[60px] sm:w-[56px] w-[48px] mb-[20px]"
          />
          <div className="2xl:text-[40px]  sm:text-[27px] text-[24px] 2xl:mb-[120px] sm:mb-[60px] mb-[32px]">
            {t("aboutValue2Title")}
          </div>
          <div className="text-[rgba(4,30,84,0.7)] 2xl:text-[24px] text-[16px]">
            {t("aboutValue2Desc")}
          </div>
        </li>
        <li className="sm:w-[32%] w-full flex flex-col items-center text-center  rounded-32xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] 2xl:px-[60px] 2xl:py-[80px] sm:px-[24px] sm:py-[40px] px-[32px] py-[32px] sm:mb-[0px] mb-[24px]">
          <Image
            src={ic_stronger}
            alt=""
            width={80}
            className="2xl:w-[80px] 2xl:mb-[60px] sm:w-[56px] w-[48px] mb-[20px]"
          />
          <div className="2xl:text-[40px]  sm:text-[27px] text-[24px] 2xl:mb-[120px] sm:mb-[60px] mb-[32px]">
            {t("aboutValue3Title")}
          </div>
          <div className="text-[rgba(4,30,84,0.7)] 2xl:text-[24px] text-[16px]">
            {t("aboutValue3Desc")}
          </div>
        </li>
      </ul>
    </div>
  );
}
