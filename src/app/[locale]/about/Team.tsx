import Image from "next/image";
import ic_user from "@/assets/about/ic_user.svg";
import ic_quality from "@/assets/about/ic_quality.svg";
import ic_stronger from "@/assets/about/ic_stronger.svg";
import { useTranslations } from "next-intl";
export default function Team() {
  const t = useTranslations("about");
  return (
    <div className="2xl:px-[5rem] 2xl:py-[7.5rem] sm:px-[2.5rem] sm:py-[5rem] px-[1.5rem] py-[2.5rem]">
      <div className="text-center 2xl:mb-[5rem] sm:mb-[2.5rem] mb-[1.25rem] font-semibold 2xl:text-[4.125rem] sm:text-[3rem] text-[1.5rem]">
        {t("aboutValuesTitle")}
      </div>
      <ul className="flex justify-between flex-wrap">
        <li className="sm:w-[32%] w-full flex flex-col items-center text-center rounded-32xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] 2xl:px-[3.75rem] 2xl:py-[5rem] sm:px-[1.5rem] sm:py-[2.5rem] px-[2rem] py-[2rem] sm:mb-[0rem] mb-[1.5rem]">
          <Image
            src={ic_user}
            alt=""
            width={80}
            className="2xl:w-[80px] 2xl:mb-[3.75rem] sm:w-[56px] w-[48px] mb-[1.25rem]"
          />
          <div className="2xl:text-[2.5rem]  sm:text-[1.67rem] text-[1.5rem] 2xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2rem]">
            {t("aboutValue1Title")}
          </div>
          <div className="text-[rgba(4,30,84,0.7)] 2xl:text-[1.5rem] text-[1rem]">
            {t("aboutValue1Desc")}
          </div>
        </li>
        <li className="sm:w-[32%] w-full flex flex-col items-center text-center rounded-32xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] 2xl:px-[3.75rem] 2xl:py-[5rem] sm:px-[1.5rem] sm:py-[2.5rem] px-[2rem] py-[2rem] sm:mb-[0rem] mb-[1.5rem]">
          <Image
            src={ic_quality}
            alt=""
            width={80}
            className="2xl:w-[80px] 2xl:mb-[3.75rem] sm:w-[56px] w-[48px] mb-[1.25rem]"
          />
          <div className="2xl:text-[2.5rem]  sm:text-[1.67rem] text-[1.5rem] 2xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2rem]">
            {t("aboutValue2Title")}
          </div>
          <div className="text-[rgba(4,30,84,0.7)] 2xl:text-[1.5rem] text-[1rem]">
            {t("aboutValue2Desc")}
          </div>
        </li>
        <li className="sm:w-[32%] w-full flex flex-col items-center text-center  rounded-32xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] 2xl:px-[3.75rem] 2xl:py-[5rem] sm:px-[1.5rem] sm:py-[2.5rem] px-[2rem] py-[2rem] sm:mb-[0rem] mb-[1.5rem]">
          <Image
            src={ic_stronger}
            alt=""
            width={80}
            className="2xl:w-[80px] 2xl:mb-[3.75rem] sm:w-[56px] w-[48px] mb-[1.25rem]"
          />
          <div className="2xl:text-[2.5rem]  sm:text-[1.67rem] text-[1.5rem] 2xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2rem]">
            {t("aboutValue3Title")}
          </div>
          <div className="text-[rgba(4,30,84,0.7)] 2xl:text-[1.5rem] text-[1rem]">
            {t("aboutValue3Desc")}
          </div>
        </li>
      </ul>
    </div>
  );
}
