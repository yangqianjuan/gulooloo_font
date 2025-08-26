import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import images from "./image";
import { useEffect, useState } from "react";
import { ActiveTab } from "@/type";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useMemoizedFn } from "ahooks";

type BlogListProps = {
  activeTab: ActiveTab;
};
export default function BlogList({ activeTab }: BlogListProps) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("blog");
  const tc = useTranslations("home");
  const allList = {
    productivity: [
      {
        row: 1,
      },
      {
        row: 4,
      },
      {
        row: 7,
      },
      {
        row: 10,
      },
      {
        row: 13,
      },
      {
        row: 16,
      },
    ],
    busniess: [
      {
        row: 2,
      },
      {
        row: 5,
      },
      {
        row: 8,
      },
      {
        row: 11,
      },
      {
        row: 14,
      },
      {
        row: 17,
      },
    ],
    wellness: [
      {
        row: 3,
      },
      {
        row: 6,
      },
      {
        row: 9,
      },
      {
        row: 12,
      },
      {
        row: 15,
      },
      {
        row: 18,
      },
    ],
  };
  const [list, setList] = useState<{ row: number }[]>();
  useEffect(() => {
    const newList =
      activeTab === "all"
        ? [...allList.productivity, ...allList.busniess, ...allList.wellness]
        : allList[activeTab];
    const sortedList = newList.sort((a, b) => a.row - b.row);
    setList(sortedList);
  }, [activeTab]);

  const switchPath = useMemoizedFn((path: number) => {
    // 把路径改成新语言
    router.push(`/${locale}/blog/${path}`);
  });

  return (
    <ul className="flex flex-wrap justify-between">
      {list?.map((item, index) => (
        <li
          onClick={() => {
            switchPath(item.row);
          }}
          key={item.row}
          className=" bg-white shadow-[0_8px_24px_0_rgba(126,138,163,0.12)]  overflow-hidden 2xl:rounded-[1.5rem] 2xl:mb-[2.5rem] sm:w-[32%] rounded-[1rem] w-full mb-[2rem]"
        >
          <Image
            src={images[item.row]}
            alt={"bussniess_01_view"}
            className="w-full"
          />
          <div className="2xl:px-[2.5rem] 2xl:py-[2.5rem] px-[1.5rem] pb-[1.5rem] pt-[1.25rem]">
            <div className="2xl:mb-[2.5rem] mb-[1.25rem]">
              <h3 className="text-[rgba(4,30,84,1)] font-medium 2xl:text-[2rem] 2xl:mb-[2rem] text-[1.25rem] mb-[1rem]">
                {t(`article${item.row}Title`)}
              </h3>
              <p className="text-[rgba(4,30,84,0.64)] 2xl:text-[1.5rem] text-[1rem]">
                {t(`article${item.row}MetaDesc`)}
              </p>
            </div>
            <div className="font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(82,220,180,1)] flex items-center text-[1.6rem]">
              <span className="mr-[0.8rem]">{tc("readMoreBtn")}</span>
              <ArrowRight width={24} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
