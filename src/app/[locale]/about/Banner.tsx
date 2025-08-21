import Image from "next/image";
import banner from "@/assets/about/aboutus_banner/aboutus_banner_3x.webp";
import m_banner from "@/assets/about/aboutus_banner/aboutus_banner_3x.webp";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("home");
  return (
    <div className="relative">
      <div className="absolute top-1/2  -translate-y-1/2 text-center w-full text-white font-bold  xl:text-[4.5rem] sm:text-[2.75rem] text-[1.5rem]">
        We're a Passionate Team Crafting Nice Apps
      </div>
      <Image
        src={banner}
        alt={t("top_banner_alt")}
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
        alt={t("top_banner_mobile_alt")}
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
