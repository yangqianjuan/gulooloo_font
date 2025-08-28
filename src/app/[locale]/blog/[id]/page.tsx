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
    className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center 2xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] cursor-pointer"
  >
    <ArrowLeft className="2xl:w-[2rem] sm:w-[1.875rem] w-[1.5rem]" />
    <span className="ml-2">{text}</span>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="2xl:text-[2rem] font-semibold 2xl:mb-[1.5rem] mb-[1rem]">
    {children}
  </div>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <div className="2xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] 2xl:mt-[1.5rem] mt-[1rem] 2xl:mb-[3.75rem] mb-[2.5rem]">
    {children}
  </div>
);

const ListBlock = ({ items }: { items: string[] }) => (
  <ul className="list-disc marker:text-[rgba(0,204,145,1)] 2xl:pl-[2.5rem] sm:pl-[1.5rem] pl-[1.25rem] 2xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem]">
    {items.map((item, index) => (
      <li key={index} className="2xl:mb-[1.5rem] mb-[1rem]">
        {item}
      </li>
    ))}
  </ul>
);

const QuoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[rgba(246,254,255,1)] italic relative 2xl:px-[5.37rem] 2xl:py-[3.75rem] sm:px-[3.5rem] sm:py-[2.5rem] px-[2.13rem] py-[2rem]">
    <span className="absolute 2xl:top-[2.5rem] 2xl:left-[2.5rem] sm:top-[1.5rem] sm:left-[1.5rem] top-[1rem] left-[1rem]">
      <Image src={ic_dot} alt="" />
    </span>
    <div>{children}</div>
    <span className="absolute 2xl:bottom-[2.5rem] 2xl:right-[2.5rem] sm:bottom-[1.5rem] sm:right-[1.5rem] bottom-[1rem] right-[1rem]">
      <Image src={ic_dot} alt="" />
    </span>
  </div>
);

const QABox = ({ q, a }: { q: string; a: string }) => (
  <div className="bg-[rgba(246,254,255,1)] border-[rgba(0,204,145,0.48)] rounded-lg sm:pl-[3rem] sm:pr-[3.5rem] sm:py-[2rem] sm:mb-[1rem] sm:border-l-[0.5rem] pl-[1.12rem] pr-[1rem] py-[1.25rem] mb-[0.75rem] border-l-[0.375rem] ">
    <h3 className="font-medium 2xl:text-[1.5rem] sm:mb-[1rem] sm:text-[1.25rem] text-[0.875rem] mb-[0.75rem]">
      Q: {q}
    </h3>
    <div className="text-[rgba(4,30,84,0.70)] 2xl:text-[1.5rem] sm:text-[1.25rem] text-[0.875rem]">
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
          <Twitter className="hover:text-[rgba(0,0,0,1)] mr-[1.5rem] 2xl:w-[3rem]  sm:w-[2.5rem]  w-[2.25rem]" />
        ),
        link: `https://twitter.com/intent/tweet?text=${t(
          `article${id}Title`
        )}&url=${herf}`,
        isCopy: false,
      },
      {
        img: (
          <Facebook className="hover:text-[rgba(8,102,255,1)] mr-[1.5rem] 2xl:w-[3rem]  sm:w-[2.5rem]  w-[2.25rem]" />
        ),
        link: `https://www.facebook.com/sharer/sharer.php?u=${herf}`,
        isCopy: false,
      },
      {
        img: (
          <Linke className="hover:text-[rgba(10,102,194,1)] mr-[1.5rem] 2xl:w-[3rem]  sm:w-[2.5rem]  w-[2.25rem]" />
        ),
        link: `https://www.linkedin.com/sharing/share-offsite/?url=${herf}`,
        isCopy: false,
      },
      {
        img: (
          <Link className="hover:text-[rgba(0,204,145,1)] 2xl:w-[3rem]  sm:w-[2.5rem]  w-[2.25rem]" />
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
        <div className="leading-[1.5] 2xl:px-[12.5rem] 2xl:py-[5rem] sm:px-[5rem] sm:py-[2.5rem] px-[1.5rem] py-[1.25rem]">
          <div className="2xl:mb-[7.5rem] sm:mb-[5rem] mb-[2.5rem]">
            <BackButton text={t("blogBack")} BackToBlog={BackToBlog} />
          </div>

          {/* 标题 */}
          <div className="font-semibold 2xl:text-[4rem] 2xl:mb-[5rem] sm:text-[2.5rem] sm:mb-[2.5rem] mb-[1.25rem] text-[1.5rem]">
            {t(`article${id}Title`)}
          </div>

          {/* 封面图 */}
          <Image
            src={banner_image}
            alt="bussniess_01_view"
            className="w-full 2xl:rounded-[1rem]"
          />

          <div className="2xl:px-[13.65rem] 2xl:pt-[2.5rem]">
            <Paragraph>{t(`article${id}BodyIntro`)}</Paragraph>

            <SectionTitle>1. {t(`article${id}Section1Title`)}</SectionTitle>
            <Paragraph>{t(`article${id}Section1Content`)}</Paragraph>

            <SectionTitle>2. {t(`article${id}Section2Title`)}</SectionTitle>
            <Paragraph>
              <div className="2xl:mb-[1.5rem] mb-[1rem]">{setion2_content}</div>
              {section2_list.length > 0 && <ListBlock items={section2_list} />}
            </Paragraph>

            <SectionTitle>3. {t(`article${id}Section3Title`)}</SectionTitle>
            <Paragraph>
              <div className="2xl:mb-[1.5rem] mb-[1rem]">
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
            <div className="font-semibold 2xl:text-[2rem] 2xl:mb-[1.5rem] text-[1.25rem] sm:mb-[1.87rem] mb-[1rem]">
              {t(`article1FaqTitle`)}
            </div>
            <QABox q={t(`article${id}FaqQ1`)} a={t(`article${id}FaqA1`)} />
            <QABox q={t(`article${id}FaqQ2`)} a={t(`article${id}FaqA2`)} />

            <Paragraph>{t(`article${id}Conclusion`)}</Paragraph>
          </div>

          {/* 底部分享 */}
          <div className="2xl:pt-[5rem] sm:pt-[3.75rem] pt-[2.5rem] border-t border-[rgba(4,30,84,0.08)]">
            <div className="flex justify-between 2xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2.5rem]">
              <div className="font-semibold 2xl:text-[2rem] sm:text-[1.75rem] text-[1.25rem]">
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
