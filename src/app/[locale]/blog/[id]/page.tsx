"use client";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import dynamic_ from "next/dynamic";
import ic_dot from "@/assets/blog/ic_dot.svg";
import Twitter from "@/components/Svg/Twitter";
import Facebook from "@/components/Svg/Facebook";
import Link from "@/components/Svg/Link";
import Linke from "@/components/Svg/Linke";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import images from "./image";
import { useMemo, useEffect, useState, ReactNode } from "react";
import { useParams } from "next/navigation";
import productivity_01_detail from "@/assets/blog/productivity_01_detail/productivity_01_detail_2x.webp";
import { useMemoizedFn } from "ahooks";
import { useRouter } from "next/navigation";
import CopyPopover from "./CopyPopover";

type PageProps = {
  params: {
    id: string; // [id] 的值
  };
};

const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });

// 🔹 复用小组件
const BackButton = ({ text = "Back to Blog", BackToBlog = () => {} }) => (
  <div
    onClick={BackToBlog}
    className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center 2xl:text-[24px] sm:text-[20px] text-[16px] cursor-pointer"
  >
    <ArrowLeft className="2xl:w-[32px] sm:w-[30px] w-[24px]" />
    <span className="ml-2">{text}</span>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="2xl:text-[32px] sm:text-[28px] text-[20px] font-semibold 2xl:mb-[24px] mb-[16px]">
    {children}
  </div>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <div className="2xl:text-[24px] sm:text-[20px] text-[16px] 2xl:mt-[24px] mt-[16px] 2xl:mb-[60px] mb-[40px]">
    {children}
  </div>
);

const ListBlock = ({ items }: { items: string[] }) => (
  <ul className="list-disc marker:text-[rgba(0,204,145,1)] 2xl:pl-[40px] sm:pl-[24px] pl-[20px] 2xl:text-[24px] sm:text-[20px] text-[16px]">
    {items.map((item, index) => (
      <li key={index} className="2xl:mb-[24px] mb-[16px]">
        {item}
      </li>
    ))}
  </ul>
);

const QuoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[rgba(246,254,255,1)] italic relative 2xl:px-[86px] 2xl:py-[60px] sm:px-[56px] sm:py-[40px] px-[34px] py-[32px]">
    <span className="absolute 2xl:top-[40px] 2xl:left-[40px] sm:top-[24px] sm:left-[24px] top-[16px] left-[16px] 2xl:w-[29px] w-[21px]">
      <Image src={ic_dot} alt="" className="w-full" />
    </span>
    <div>{children}</div>
    <span className="absolute 2xl:bottom-[40px] 2xl:right-[40px] sm:bottom-[24px] sm:right-[24px] bottom-[16px] right-[16px] 2xl:w-[29px] w-[21px]">
      <Image src={ic_dot} className="w-full" alt="" />
    </span>
  </div>
);

const QABox = ({ q, a }: { q: string; a: string }) => (
  <div className="bg-[rgba(246,254,255,1)] border-[rgba(0,204,145,0.48)] rounded-lg sm:pl-[48px] sm:pr-[56px] sm:py-[32px] sm:mb-[16px] sm:border-l-[8px] pl-[18px] pr-[16px] py-[20px] mb-[12px] border-l-[6px] ">
    <h3 className="font-medium 2xl:text-[24px] sm:mb-[16px] sm:text-[20px] text-[14px] mb-[12px]">
      Q: {q}
    </h3>
    <div className="text-[rgba(4,30,84,0.70)] 2xl:text-[24px] sm:text-[20px] text-[14px]">
      A: {a}
    </div>
  </div>
);

export default function BlogDetail() {
  const router = useRouter();
  const { id, locale } = useParams<{ id: string; locale: string }>();
  console.log(id);
  const t = useTranslations("blog");
  const banner_image = images[id] || productivity_01_detail; // 默认使用第一个图片
  const [setion2_content, section2_list] = useMemo(() => {
    const arr = t(`article${id}Section2Content`).split(".;");
    const content = arr[0];
    const list =
      arr?.[1]?.split(";").filter((item) => item.trim() !== "") || [];

    return [content, list];
  }, []);
  const BackToBlog = useMemoizedFn(() => {
    router.push(`/${locale}/blog`);
  });
  useEffect(() => {
    document.title = t("metaTitleBlog");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("metaDescriptionBlog"));
  }, [t]);
  type LinkItem = {
    img: ReactNode;
    link: string;
    isCopy: boolean;
  };
  const link_list: LinkItem[] = useMemo(() => {
    const herf = window?.location?.href;

    return [
      {
        img: (
          <Twitter className="hover:text-[rgba(0,0,0,1)] mr-[24px] 2xl:w-[48px]  sm:w-[40px]  w-[36px]" />
        ),
        link: `https://twitter.com/intent/tweet?text=${t(
          `article${id}Title`
        )}&url=${herf}`,
        isCopy: false,
      },
      {
        img: (
          <Facebook className="hover:text-[rgba(8,102,255,1)] mr-[24px] 2xl:w-[48px]  sm:w-[40px]  w-[36px]" />
        ),
        link: `https://www.facebook.com/sharer/sharer.php?u=${herf}`,
        isCopy: false,
      },
      {
        img: (
          <Linke className="hover:text-[rgba(10,102,194,1)]  mr-[24px] 2xl:w-[48px]  sm:w-[40px]  w-[36px]" />
        ),
        link: `https://www.linkedin.com/sharing/share-offsite/?url=${herf}`,
        isCopy: false,
      },
      {
        img: (
          <Link className="hover:text-[rgba(0,204,145,1)]  2xl:w-[48px]  sm:w-[40px]  w-[36px]" />
        ),
        link: herf,
        isCopy: true,
      },
    ];
  }, [t, id, window]);

  const handle_link = useMemoizedFn((item: LinkItem) => {
    window.open(`${item.link}`, "_blank");
  });

  return (
    <div className="grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col row-start-2 sm:items-start w-full">
        <div className="leading-[1.5] 2xl:px-[200px] 2xl:py-[80px] sm:px-[80px] sm:py-[40px] px-[24px] py-[20px]">
          <div className="2xl:mb-[120px] sm:mb-[80px] mb-[40px]">
            <BackButton text={t("blogBack")} BackToBlog={BackToBlog} />
          </div>

          {/* 标题 */}
          <div className="font-semibold 2xl:text-[64px] 2xl:mb-[80px] sm:text-[40px] sm:mb-[40px] mb-[20px] text-[24px]">
            {t(`article${id}Title`)}
          </div>

          {/* 封面图 */}
          <Image
            src={banner_image}
            alt="bussniess_01_view"
            className="w-full 2xl:rounded-[16px]"
          />

          <div className="2xl:px-[218px] 2xl:pt-[40px]">
            <Paragraph>{t(`article${id}BodyIntro`)}</Paragraph>

            <SectionTitle>1. {t(`article${id}Section1Title`)}</SectionTitle>
            <Paragraph>{t(`article${id}Section1Content`)}</Paragraph>

            <SectionTitle>2. {t(`article${id}Section2Title`)}</SectionTitle>
            <Paragraph>
              <div className="2xl:mb-[24px] mb-[16px]">{setion2_content}</div>
              {section2_list.length > 0 && <ListBlock items={section2_list} />}
            </Paragraph>

            <SectionTitle>3. {t(`article${id}Section3Title`)}</SectionTitle>
            <Paragraph>
              <div className="2xl:mb-[24px] mb-[16px]">
                {t(`article${id}Section3Content`)}
              </div>
              <QuoteBox>{t(`article${id}Section3Highlight`)}</QuoteBox>
            </Paragraph>

            <SectionTitle>4. {t(`article${id}Section4Title`)}</SectionTitle>
            <Paragraph>{t(`article${id}Section4Content`)}</Paragraph>

            {t(`article${id}Section5Title`) && (
              <>
                <SectionTitle>5. {t(`article${id}Section5Title`)}</SectionTitle>
                <Paragraph>{t(`article${id}Section5Content`)}</Paragraph>
              </>
            )}

            {/* Q&A */}
            <div className="font-semibold 2xl:text-[32px] 2xl:mb-[24px] text-[20px] sm:mb-[30px] mb-[16px]">
              {t(`article1FaqTitle`)}
            </div>
            <QABox q={t(`article${id}FaqQ1`)} a={t(`article${id}FaqA1`)} />
            <QABox q={t(`article${id}FaqQ2`)} a={t(`article${id}FaqA2`)} />

            <Paragraph>{t(`article${id}Conclusion`)}</Paragraph>
          </div>

          {/* 底部分享 */}
          <div className="2xl:pt-[80px] sm:pt-[60px] pt-[40px] border-t border-[rgba(4,30,84,0.08)]">
            <div className="flex justify-between flex-wrap 2xl:mb-[120px] sm:mb-[60px] mb-[40px]">
              <div className="font-semibold 2xl:text-[32px] sm:text-[28px] text-[20px] sm:w-auto w-full sm:mb-[0px] mb-[16px]">
                {t(`articleShared`)}
              </div>
              <div className="flex relative">
                {link_list.map((item, i) => {
                  const IconComp = item.img;
                  if (item.isCopy) {
                    return (
                      <div key={i} className="flex items-center justify-center">
                        <CopyPopover
                          text={t("articleCopied")}
                          label={IconComp}
                          url={item.link}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <span key={i} onClick={() => handle_link(item)}>
                        {IconComp}
                      </span>
                    );
                  }
                })}
              </div>
            </div>
            <BackButton text={t("blogBack")} BackToBlog={BackToBlog} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
