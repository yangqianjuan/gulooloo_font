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
          key={item.row}
          className=" bg-white shadow-[0_8px_24px_0_rgba(126,138,163,0.12)]  overflow-hidden 2xl:rounded-[24px] 2xl:mb-[40px] sm:w-[32%] rounded-[16px] w-full mb-[32px]"
        >
          <div className="w-full h-auto  overflow-hidden 2xl:rounded-t-[24px] rounded-t-[16px]">
            <Image
              src={images[item.row]}
              alt={"bussniess_01_view"}
              width={560}
              height={360}
              loading="lazy"
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="w-full h-auto  transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="2xl:p-[40px] px-[24px] pb-[24px] pt-[20px]">
            <div className="2xl:mb-[40px] mb-[20px]">
              <h3 className="text-[rgba(4,30,84,1)] font-medium 2xl:text-[32px] 2xl:mb-[32px] text-[20px] mb-[16px]">
                {t(`article${item.row}Title`)}
              </h3>
              <p className="text-[rgba(4,30,84,0.64)] 2xl:text-[24px] text-[16px]">
                {t(`article${item.row}MetaDesc`)}
              </p>
            </div>
            <div
              onClick={() => {
                switchPath(item.row);
              }}
              className="cursor-pointer font-medium text-[rgba(0,204,145,1)] hover:text-[rgba(16,185,129,1)] flex items-center 2xl:text-[24px] text-[16px] "
            >
              <span className="mr-[8px]">{tc("readMoreBtn")}</span>
              <ArrowRight className="w-[24px]" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
