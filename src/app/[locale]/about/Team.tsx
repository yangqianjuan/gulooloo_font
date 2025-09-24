import Image from "next/image";
import ic_user from "@/assets/about/ic_user.svg";
import ic_quality from "@/assets/about/ic_quality.svg";
import ic_stronger from "@/assets/about/ic_stronger.svg";
import { useTranslations } from "next-intl";

interface TeamValueItemProps {
  icon: any;
  titleKey: string;
  descKey: string;
  t: (key: string) => string;
}

function TeamValueItem({ icon, titleKey, descKey, t }: TeamValueItemProps) {
  return (
    <li className="sm:w-[32%] w-full flex flex-col items-center text-center rounded-32xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] 2xl:px-[60px] 2xl:py-[80px] sm:px-[24px] sm:py-[40px] px-[32px] py-[32px] sm:mb-[0px] mb-[24px]">
      <Image
        src={icon}
        alt=""
        width={80}
        className="2xl:w-[80px] 2xl:mb-[60px] sm:w-[56px] w-[48px] mb-[20px]"
      />
      <div className="2xl:text-[40px]  sm:text-[27px] text-[24px] 2xl:mb-[60px] sm:mb-[20px] mb-[32px] flex-1 flex items-start">
        {t(titleKey)}
      </div>
      <div className="text-[rgba(4,30,84,0.7)] 2xl:text-[24px] text-[16px] flex-1 flex items-start">
        {t(descKey)}
      </div>
    </li>
  );
}

export default function Team() {
  const t = useTranslations("about");

  const teamValues = [
    { icon: ic_user, titleKey: "aboutValue1Title", descKey: "aboutValue1Desc" },
    {
      icon: ic_quality,
      titleKey: "aboutValue2Title",
      descKey: "aboutValue2Desc",
    },
    {
      icon: ic_stronger,
      titleKey: "aboutValue3Title",
      descKey: "aboutValue3Desc",
    },
  ];

  return (
    <div className="2xl:px-[80px] 2xl:py-[120px] sm:px-[40px] sm:py-[80px] px-[24px] py-[40px]">
      <div className="text-center 2xl:mb-[80px] sm:mb-[40px] mb-[20px] font-semibold 2xl:text-[66px] sm:text-[44px] text-[24px]">
        {t("aboutValuesTitle")}
      </div>
      <ul className="flex justify-between flex-wrap">
        {teamValues.map((value, index) => (
          <TeamValueItem
            key={index}
            icon={value.icon}
            titleKey={value.titleKey}
            descKey={value.descKey}
            t={t}
          />
        ))}
      </ul>
    </div>
  );
}
