import Image from "next/image";
import { ArrowRight } from "lucide-react";
import article_fasting_pic from "@/assets/image/article_fasting_pic/article_fasting_pic_2x.webp";
import article_invoce_pic from "@/assets/image/article_invoce_pic/article_invoce_pic_2x.webp";
import article_notes_pic from "@/assets/image/article_notes_pic/article_notes_pic_2x.webp";
import ic_arrow_back from "@/assets/icon/ic_arrow_back.svg";
import { useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import type { StaticImageData } from "next/image";
import { useMemoizedFn } from "ahooks";
import { useRouter } from "next/navigation";
interface CardItemProps {
  img: StaticImageData;
  title: string;
  desc: string;
  alt: string;
  row: number;
}
function CardItem({ d }: { d: CardItemProps }) {
  const t = useTranslations("home");
  const locale = useLocale();
  const router = useRouter();
  const switchPath = useMemoizedFn((path: number) => {
    // 把路径改成新语言
    router.push(`/${locale}/blog/${path}`);
  });
  return (
    <article className="shadow-[0_8px_24px_rgba(126,138,163,0.12)] bg-white sm:w-[32%] w-full text-left 2xl:rounded-[24px] rounded-[16px] sm:mb-[0px] mb-[32px]">
      <div className="w-full h-auto  overflow-hidden 2xl:rounded-t-[24px] rounded-t-[16px]">
        <Image
          src={d.img}
          alt={d.alt}
          width={560}
          height={360}
          loading="lazy"
          sizes="(min-width: 1024px) 32vw, 100vw"
          className="w-full h-auto  transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="2xl:p-[40px] px-[24px] py-[20px] ">
        <div className="2xl:text-[32px] text-[20px] font-medium text-[rgba(4,30,84,1)] 2xl:mb-[32px] mb-[16px]">
          {d.title}
        </div>
        <div className="2xl:text-[24px] text-[16px] text-[rgba(4,30,84,0.64)] 2xl:mb-[40px] mb-[20px]">
          {d.desc}
        </div>
        <div
          onClick={() => switchPath(d.row)}
          className="cursor-pointer font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center 2xl:text-[24px] text-[16px]"
        >
          <span className="mr-[8px]">{t("readMoreBtn")}</span>
          <ArrowRight className="w-[24px]" />
        </div>
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
        row: 1,
      },
      {
        img: article_invoce_pic,
        title: t("blogPost2Title"),
        desc: t("blogPost2Subtitle"),
        alt: t("daily_life_alt"),
        row: 2,
      },
      {
        img: article_fasting_pic,
        title: t("blogPost3Title"),
        desc: t("blogPost3Subtitle"),
        alt: t("fasting_wellness_alt"),
        row: 3,
      },
    ];
  }, []);
  return (
    <div className=" 2xl:p-[80px] sm:p-[40px]  p-[24px]">
      <div className="2xl:text-[64px] font-semibold sm:text-[48px] text-[24px] text-center">
        {t("blogSectionTitle")}
      </div>
      <div className="2xl:text-[24px] 2xl:mb-[80px] sm:text-[20px] sm:mb-[40px] text-[16px] mb-[38px] text-center text-[rgba(4,30,84,0.48)]">
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
