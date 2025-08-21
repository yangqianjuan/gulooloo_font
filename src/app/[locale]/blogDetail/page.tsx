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

import Image, { StaticImageData } from "next/image";

const Footer = dynamic_(() => import("@/components/Footer"), { ssr: false });
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
    <div className="grid grid-rows-[auto_1fr_auto]  justify-items-center min-h-screen max-w-[1920px] mx-auto sm:min-w-[1080px]">
      <Header />
      <main className="flex flex-col row-start-2 sm:items-start w-full">
        <div className="leading-[1.5] xl:px-[12.5rem] xl:py-[5rem] sm:px-[5rem] sm:py-[2.5rem] px-[1.5rem] py-[1.25rem]">
          <div className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center text-[1.6rem] xl:mb-[7.5rem] sm:mb-[5rem] mb-[2.5rem]">
            <ArrowLeft width={24} />
            <span>Back to Blog</span>
          </div>
          <div className="font-semibold xl:text-[4rem] xl:mb-[5rem] sm:text-[2.5rem] sm:mb-[2.5rem] mb-[1.25rem] text-[1.5rem]">
            5 Simple Ways to Record Your Inspiration
          </div>
          <Image
            src={business_01_detail}
            alt={"bussniess_01_view"}
            className="w-full xl:rounded-[1rem]"
          />
          <div className="xl:px-[13.65rem] xl:pt-[2.5rem] ">
            <div className="xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] xl:mt-[2.5rem] sm:mt-[1.5rem] mt-[1rem] xl:mb-[3.75rem] mb-[2.5rem]">
              For freelancers and small business owners, getting paid on time is
              critical. A professional, clear, and timely invoice is the first
              step in ensuring a smooth payment process. Yet, many still rely on
              cumbersome spreadsheets or word documents that are prone to errors
              and look unprofessional. An efficient invoicing workflow not only
              gets you paid faster but also enhances your brand's image. This
              guide will walk you through the easiest way to create a perfect
              invoice every time.
            </div>
            <div className="xl:text-[2rem] font-semibold xl:mb-[1.5rem] mb-[1rem]">
              1. Start with a Professional Template
            </div>
            <div className="xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] xl:mt-[1.5rem] mt-[1rem] xl:mb-[3.75rem] mb-[2.5rem]">
              Why start from scratch? Using a professionally designed template
              from an app like Invoice Now saves you time and ensures you
              include all necessary information. A good template provides a
              clean layout that is easy for your clients to read and understand.
              It establishes a baseline of professionalism that builds client
              trust from the very beginning and makes you look like the expert
              you are.
            </div>
            <div className="xl:text-[2rem] font-semibold xl:mb-[1.5rem] mb-[1rem]">
              2. Include All Essential Information
            </div>
            <div className="xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] xl:mt-[1.5rem] mt-[1rem] xl:mb-[3.75rem] mb-[2.5rem]">
              <div className="xl:mb-[1.5rem] mb-[1rem]">
                An invoice is a legal document, and it needs to be thorough to
                avoid any back-and-forth. Make sure every invoice includes:
              </div>
              <ul className="list-disc marker:text-[rgba(0,204,145,1)] xl:pl-[2.5rem] sm:pl-[1.5rem] pl-[1.25rem] xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem]">
                {list.map((item, index) => (
                  <li key={index} className="xl:mb-[1.5rem] mb-[1rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:text-[2rem] font-semibold xl:mb-[1.5rem] mb-[1rem]">
              3. The Visual Snapshot
            </div>
            <div className="xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] xl:mt-[1.5rem] mt-[1rem] xl:mb-[3.75rem] mb-[2.5rem]">
              <div className="xl:mb-[1.5rem] mb-[1rem]">
                Sometimes inspiration isn’t a thought, but something you see. It
                could be a unique color combination on a building, a clever
                layout in a magazine, or the way light hits a landscape. Your
                phone’s camera is your best friend here. Snap a photo and, if
                possible, add a quick note to it in an app like EasyNotes about
                what specifically caught your eye. This visual library becomes a
                rich source of inspiration you can pull from anytime. Think of
                it as creating your own personal mood board.
              </div>
              <div className="bg-[rgba(246,254,255,1)] italic relative xl:px-[5.37rem] xl:py-[3.75rem] sm:px-[3.5rem] sm:py-[2.5rem] px-[2.13rem] py-[2rem]">
                <span className="absolute xl:top-[2.5rem] xl:left-[2.5rem] sm:top-[1.5rem] sm:left-[1.5rem] top-[1rem] left-[1rem]">
                  <Image src={ic_dot} alt="" />
                </span>
                <div>
                  A picture is worth a thousand words, especially when it’s the
                  seed of your next big idea.
                </div>
                <span className="absolute xl:bottom-[2.5rem] xl:right-[2.5rem] sm:bottom-[1.5rem] sm:right-[1.5rem] bottom-[1rem] right-[1rem]">
                  <Image src={ic_dot} alt="" />
                </span>
              </div>
            </div>
            <div className="xl:text-[2rem] font-semibold xl:mb-[1.5rem] mb-[1rem]">
              4. Automate and Track with an App
            </div>
            <div className="xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] xl:mt-[1.5rem] mt-[1rem] xl:mb-[3.75rem] mb-[2.5rem]">
              This is the real game-changer. Using an invoice generator like
              Invoice Now automates the entire process. It can assign invoice
              numbers, calculate totals, and save client information for future
              use. More importantly, it allows you to track the status of your
              invoices—see when they’ve been viewed, when they’re due, and when
              they’re overdue. This eliminates manual follow-up and gives you a
              clear overview of your cash flow.
            </div>
            <div className="font-semibold xl:text-[2rem] xl:mb-[1.5rem] text-[1.25rem] sm:mb-[1.87rem] mb-[1rem]">
              Common Questions
            </div>
            <div className="bg-[rgba(246,254,255,1)] border-[rgba(0,204,145,0.48)] rounded-lg sm:pl-[3rem] sm:pr-[3.5rem] sm:py-[2rem] sm:mb-[1rem] sm:border-l-[0.5rem] pl-[1.12rem] pr-[1rem] py-[1.25rem] mb-[0.75rem] border-l-[0.375rem] ">
              <h3 className="font-medium xl:text-[1.5rem] sm:mb-[1rem] sm:text-[1.25rem] text-[0.875rem] mb-[0.75rem]">
                Q: When is the best time to send an invoice?
              </h3>
              <div className="text-[rgba(4,30,84,0.70)] xl:text-[1.5rem] sm:text-[1.25rem] text-[0.875rem]">
                A: Immediately after the work is completed or a project
                milestone is reached. The sooner you send it, the sooner it
                enters your client's payment cycle.
              </div>
            </div>
            <div className="bg-[rgba(246,254,255,1)] border-[rgba(0,204,145,0.48)] rounded-lg sm:pl-[3rem] sm:pr-[3.5rem] sm:py-[2rem] sm:mb-[1rem] sm:border-l-[0.5rem] pl-[1.12rem] pr-[1rem] py-[1.25rem] mb-[0.75rem] border-l-[0.375rem] ">
              <h3 className="font-medium xl:text-[1.5rem] sm:mb-[1rem] sm:text-[1.25rem] text-[0.875rem] mb-[0.75rem]">
                Q: When is the best time to send an invoice?
              </h3>
              <div className="text-[rgba(4,30,84,0.70)] xl:text-[1.5rem] sm:text-[1.25rem] text-[0.875rem]">
                A: Immediately after the work is completed or a project
                milestone is reached. The sooner you send it, the sooner it
                enters your client's payment cycle.
              </div>
            </div>
            <div className="xl:text-[1.5rem] sm:text-[1.25rem] text-[1rem] xl:mt-[2.75rem] mt-[2.5rem] xl:mb-[5rem] sm:mb-[3.75rem] mb-[2.5rem]">
              This is the real game-changer. Using an invoice generator like
              Invoice Now automates the entire process. It can assign invoice
              numbers, calculate totals, and save client information for future
              use. More importantly, it allows you to track the status of your
              invoices—see when they’ve been viewed, when they’re due, and when
              they’re overdue. This eliminates manual follow-up and gives you a
              clear overview of your cash flow.
            </div>
          </div>
          <div className="xl:pt-[5rem] border-t-1 border-[rgba(4,30,84,0.08)]">
            <div className="flex justify-between xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2.5rem]">
              <div className="font-semibold xl:text-[2rem] sm:text-[1.75rem] text-[1.25rem]">
                Share this article
              </div>
              <div className="flex">
                <Image src={twitter} alt="" className="ml-[1.5rem]" />
                <Image src={facebook_icon} alt="" className="ml-[1.5rem]" />
                <Image src={linke_icon} alt="" className="ml-[1.5rem]" />
                <Image src={link_icon} alt="" className="ml-[1.5rem]" />
              </div>
            </div>
            <div className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center text-[1.6rem]">
              <ArrowLeft width={24} />
              <span>Back to Blog</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
