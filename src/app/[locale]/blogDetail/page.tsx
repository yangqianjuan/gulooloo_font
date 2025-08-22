"use client";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import dynamic_ from "next/dynamic";
import business_01_detail from "@/assets/blog/business_01_detail/business_01_detail_2x.webp";
import ic_dot from "@/assets/blog/ic_dot.svg";
import twitter from "@/assets/blog/twitter.svg";
import facebook_icon from "@/assets/blog/facebook.svg";
import linke_icon from "@/assets/blog/linke.svg";
import link_icon from "@/assets/blog/link.svg";

import Image from "next/image";

const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });

// 🔹 复用小组件
const BackButton = ({ text = "Back to Blog" }) => (
  <div className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center text-[1.6rem] cursor-pointer">
    <ArrowLeft width={24} />
    <span className="ml-2">{text}</span>
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="xl:text-[2rem] font-semibold xl:mb-[1.5rem] mb-[1rem]">
    {children}
  </div>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <div className="xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] xl:mt-[1.5rem] mt-[1rem] xl:mb-[3.75rem] mb-[2.5rem]">
    {children}
  </div>
);

const ListBlock = ({ items }: { items: string[] }) => (
  <ul className="list-disc marker:text-[rgba(0,204,145,1)] xl:pl-[2.5rem] sm:pl-[1.5rem] pl-[1.25rem] xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem]">
    {items.map((item, index) => (
      <li key={index} className="xl:mb-[1.5rem] mb-[1rem]">
        {item}
      </li>
    ))}
  </ul>
);

const QuoteBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[rgba(246,254,255,1)] italic relative xl:px-[5.37rem] xl:py-[3.75rem] sm:px-[3.5rem] sm:py-[2.5rem] px-[2.13rem] py-[2rem]">
    <span className="absolute xl:top-[2.5rem] xl:left-[2.5rem] sm:top-[1.5rem] sm:left-[1.5rem] top-[1rem] left-[1rem]">
      <Image src={ic_dot} alt="" />
    </span>
    <div>{children}</div>
    <span className="absolute xl:bottom-[2.5rem] xl:right-[2.5rem] sm:bottom-[1.5rem] sm:right-[1.5rem] bottom-[1rem] right-[1rem]">
      <Image src={ic_dot} alt="" />
    </span>
  </div>
);

const QABox = ({ q, a }: { q: string; a: string }) => (
  <div className="bg-[rgba(246,254,255,1)] border-[rgba(0,204,145,0.48)] rounded-lg sm:pl-[3rem] sm:pr-[3.5rem] sm:py-[2rem] sm:mb-[1rem] sm:border-l-[0.5rem] pl-[1.12rem] pr-[1rem] py-[1.25rem] mb-[0.75rem] border-l-[0.375rem] ">
    <h3 className="font-medium xl:text-[1.5rem] sm:mb-[1rem] sm:text-[1.25rem] text-[0.875rem] mb-[0.75rem]">
      Q: {q}
    </h3>
    <div className="text-[rgba(4,30,84,0.70)] xl:text-[1.5rem] sm:text-[1.25rem] text-[0.875rem]">
      A: {a}
    </div>
  </div>
);

export default function BlogDetail() {
  const list = [
    "Your business name and contact information.",
    "A unique invoice number for tracking (e.g., 2025-001).",
    "The date the invoice was issued and the payment due date.",
    "An itemized list of services or products with clear descriptions.",
    "The total amount due, including any taxes or discounts.",
    "Clear payment terms and instructions (e.g., bank transfer details, accepted payment methods)",
  ];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col row-start-2 sm:items-start w-full">
        <div className="leading-[1.5] xl:px-[12.5rem] xl:py-[5rem] sm:px-[5rem] sm:py-[2.5rem] px-[1.5rem] py-[1.25rem]">
          <div className="xl:mb-[7.5rem] sm:mb-[5rem] mb-[2.5rem]">
            <BackButton />
          </div>

          {/* 标题 */}
          <div className="font-semibold xl:text-[4rem] xl:mb-[5rem] sm:text-[2.5rem] sm:mb-[2.5rem] mb-[1.25rem] text-[1.5rem]">
            5 Simple Ways to Record Your Inspiration
          </div>

          {/* 封面图 */}
          <Image
            src={business_01_detail}
            alt="bussniess_01_view"
            className="w-full xl:rounded-[1rem]"
          />

          <div className="xl:px-[13.65rem] xl:pt-[2.5rem]">
            <Paragraph>
              For freelancers and small business owners, getting paid on time is
              critical. A professional, clear, and timely invoice is the first
              step in ensuring a smooth payment process...
            </Paragraph>

            <SectionTitle>1. Start with a Professional Template</SectionTitle>
            <Paragraph>
              Why start from scratch? Using a professionally designed template
              from an app like Invoice Now...
            </Paragraph>

            <SectionTitle>2. Include All Essential Information</SectionTitle>
            <Paragraph>
              <div className="xl:mb-[1.5rem] mb-[1rem]">
                An invoice is a legal document, and it needs to be thorough...
              </div>
              <ListBlock items={list} />
            </Paragraph>

            <SectionTitle>3. The Visual Snapshot</SectionTitle>
            <Paragraph>
              <div className="xl:mb-[1.5rem] mb-[1rem]">
                Sometimes inspiration isn’t a thought, but something you see...
              </div>
              <QuoteBox>
                A picture is worth a thousand words, especially when it’s the
                seed of your next big idea.
              </QuoteBox>
            </Paragraph>

            <SectionTitle>4. Automate and Track with an App</SectionTitle>
            <Paragraph>
              This is the real game-changer. Using an invoice generator like
              Invoice Now automates the entire process...
            </Paragraph>

            {/* Q&A */}
            <div className="font-semibold xl:text-[2rem] xl:mb-[1.5rem] text-[1.25rem] sm:mb-[1.87rem] mb-[1rem]">
              Common Questions
            </div>
            <QABox
              q="When is the best time to send an invoice?"
              a="Immediately after the work is completed..."
            />
            <QABox
              q="When is the best time to send an invoice?"
              a="Immediately after the work is completed..."
            />

            <Paragraph>
              This is the real game-changer. Using an invoice generator like
              Invoice Now automates the entire process...
            </Paragraph>
          </div>

          {/* 底部分享 */}
          <div className="xl:pt-[5rem] border-t border-[rgba(4,30,84,0.08)]">
            <div className="flex justify-between xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2.5rem]">
              <div className="font-semibold xl:text-[2rem] sm:text-[1.75rem] text-[1.25rem]">
                Share this article
              </div>
              <div className="flex">
                {[twitter, facebook_icon, linke_icon, link_icon].map(
                  (icon, i) => (
                    <Image key={i} src={icon} alt="" className="ml-[1.5rem]" />
                  )
                )}
              </div>
            </div>
            <BackButton />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
