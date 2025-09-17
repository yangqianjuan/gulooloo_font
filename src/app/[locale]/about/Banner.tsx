import Image from "next/image";
import banner from "@/assets/about/aboutus_banner/aboutus_banner_3x.webp";
import m_banner from "@/assets/about/aboutus_banner/aboutus_banner_3x.webp";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("about");
  return (
    <div className="relative w-full">
      <div className="absolute top-[30.5%]  text-center w-full text-white font-bold  2xl:text-[72px] sm:text-[44px] text-[24px]">
        {t("aboutHeroTitle")}
      </div>
      <Image
        src={banner}
        alt=""
        className="w-full h-auto hidden sm:block"
        priority
        width={3840}
        height={1360}
        sizes="(max-width: 768px) 100vw, 3840px"
        fetchPriority="high"
        placeholder="blur"
        // unoptimized
      ></Image>
      <Image
        src={m_banner}
        alt=""
        className="w-full h-auto block sm:hidden"
        width={3840}
        height={1360}
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 1170px"
        // unoptimized
      ></Image>
    </div>
  );
}
