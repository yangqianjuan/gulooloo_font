import Image from "next/image";
import { ArrowRight } from "lucide-react";
import article_fasting_pic from "@/assets/image/article_fasting_pic/article_fasting_pic_2x.webp";
import article_invoce_pic from "@/assets/image/article_invoce_pic/article_invoce_pic_2x.webp";
import article_notes_pic from "@/assets/image/article_notes_pic/article_notes_pic_2x.webp";
import ic_arrow_back from "@/assets/icon/ic_arrow_back.svg";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import type { StaticImageData } from "next/image";
interface CardItemProps {
  img: StaticImageData;
  title: string;
  desc: string;
  alt: string;
}
function CardItem({ d }: { d: CardItemProps }) {
  const t = useTranslations("home");
  return (
    <article className="sm:w-[32%] w-full text-left">
      <Image
        src={d.img}
        alt={d.alt}
        width={560}
        height={360}
        loading="lazy"
        sizes="(min-width: 1024px) 32vw, 100vw"
        className="w-full h-auto mb-[2rem] rounded-[1.6rem] transition-transform duration-300 hover:scale-110"
      />
      <div className="text-[2rem] font-medium text-[rgba(4,30,84,1)] mb-[1.6rem]">
        {d.title}
      </div>
      <div className="text-[1.6rem] text-[rgba(4,30,84,0.64)] mb-[2rem]">
        {d.desc}
      </div>
      <div className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center text-[1.6rem] mb-[4rem]">
        <span className="mr-[0.8rem]">{t("readMoreBtn")}</span>
        <ArrowRight width={24} />
      </div>
    </article>
  );
}
export default function Blog() {
  const t = useTranslations("home");
  const list = useMemo(() => {
    return [
      {
        img: article_notes_pic,
        title: t("blogPost1Title"),
        desc: t("blogPost1Subtitle"),
        alt: t("productivity_notetaking_alt"),
      },
      {
        img: article_invoce_pic,
        title: t("blogPost2Title"),
        desc: t("blogPost2Subtitle"),
        alt: t("daily_life_alt"),
      },
      {
        img: article_fasting_pic,
        title: t("blogPost3Title"),
        desc: t("blogPost3Subtitle"),
        alt: t("fasting_wellness_alt"),
      },
    ];
  }, []);
  return (
    <div className="bg-[rgba(246,254,255,1)] xl:p-[5rem] sm:px-[4rem]  px-[2.4rem] py-[6rem]">
      <div className="xl:text-[4rem] font-semibold sm:text-[4.8rem] text-[2.4rem] text-center">
        {t("blogSectionTitle")}
      </div>
      <div className="xl:text-[1.5rem] xl:mb-[5rem] sm:text-[2rem] sm:mb-[4.4rem] text-[1.5rem] mb-[3.8rem] text-center text-[rgba(4,30,84,0.48)]">
        {t("blogSectionSubtitle")}
      </div>
      <div className="flex justify-between flex-wrap">
        {list.map((d) => {
          return <CardItem key={d.title} d={d} />;
        })}
      </div>
    </div>
  );
}
