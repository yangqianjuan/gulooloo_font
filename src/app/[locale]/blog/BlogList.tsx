import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import {
  productivity_01_view,
  productivity_02_view,
  productivity_03_view,
  productivity_04_view,
  productivity_05_view,
  productivity_06_view,
  bussniess_01_view,
  bussniess_02_view,
  bussniess_03_view,
  bussniess_04_view,
  bussniess_05_view,
  bussniess_06_view,
  wellness_01_view,
  wellness_02_view,
  wellness_03_view,
  wellness_04_view,
  wellness_05_view,
  wellness_06_view,
} from "./image";
import { useEffect, useState } from "react";
import { ActiveTab } from "@/type";

type BlogListProps = {
  activeTab: ActiveTab;
};
export default function BlogList({ activeTab }: BlogListProps) {
  const allList = {
    productivity: [
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: productivity_01_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: productivity_02_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: productivity_03_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: productivity_04_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: productivity_05_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: productivity_06_view,
      },
    ],
    busniess: [
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: bussniess_01_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: bussniess_02_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: bussniess_03_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: bussniess_04_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: bussniess_05_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: bussniess_06_view,
      },
    ],
    wellness: [
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: wellness_01_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: wellness_02_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: wellness_03_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: wellness_04_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: wellness_05_view,
      },
      {
        title: "5 Simple Ways to Record Your Inspiration",
        desc: "This is a brief description of the blog post content. It gives an overview of what the blog is about.",
        image: wellness_06_view,
      },
    ],
  };
  const [list, setList] =
    useState<{ image: StaticImageData; title: string; desc: string }[]>();
  useEffect(() => {
    const newList =
      activeTab === "all"
        ? [...allList.productivity, ...allList.busniess, ...allList.wellness]
        : allList[activeTab];
    console.log(activeTab);
    setList(newList);
  }, [activeTab]);

  return (
    <ul className="flex flex-wrap justify-between">
      {list?.map((item, index) => (
        <li
          key={item.title}
          className=" bg-white shadow-[0_8px_24px_0_rgba(126,138,163,0.12)]  overflow-hidden xl:rounded-[1.5rem] xl:mb-[2.5rem] sm:w-[29%] rounded-[1rem] w-full mb-[2rem]"
        >
          <Image
            src={item.image}
            alt={"bussniess_01_view"}
            className="w-full"
          />
          <div className="xl:px-[2.5rem] xl:py-[2.5rem] px-[1.5rem] pb-[1.5rem] pt-[1.25rem]">
            <div className="xl:mb-[2.5rem] mb-[1.25rem]">
              <h3 className="text-[rgba(4,30,84,1)] font-medium xl:text-[2rem] xl:mb-[2rem] text-[1.25rem] mb-[1rem]">
                {item.title}
              </h3>
              <p className="text-[rgba(4,30,84,0.64)] xl:text-[1.5rem] text-[1rem]">
                {item.desc}
              </p>
            </div>
            <div className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center text-[1.6rem]">
              <span className="mr-[0.8rem]">Read more</span>
              <ArrowRight width={24} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
