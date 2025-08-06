import Image from "next/image";
import logo from "@/assets/icon/logo_text.svg";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Appstore_download from "@/assets/icon/Appstore_download.svg";
import Appstore_download_hover from "@/assets/icon/Appstore_download_hover.svg";
import googleplay_download from "@/assets/icon/googleplay_download.svg";
import googleplay_download_hover from "@/assets/icon/googleplay_download_hover.svg";
import MenuItemWithSubmenu from "@/components/MobileMenu/ MenuItemWithSubmenu";
import { iosLink, andoridLink } from "@/utils/index";
import { useMemoizedFn } from "ahooks";
export default function Footer() {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const toggleSubmenu = useMemoizedFn((key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  });
  const toAPPStore = (link: string) => {
    window.open(link);
  };
  const t = useTranslations();
  const list = useMemo(() => {
    return [
      {
        label: t("footerProductsTitle"),
        key: t("footerProductsTitle"),
        children: [
          {
            key: t("easyNotesTitle"),
            label: t("easyNotesTitle"),
          },
          {
            key: t("invoiceNowTitle"),
            label: t("invoiceNowTitle"),
          },
          {
            key: t("goFastingTitle"),
            label: t("goFastingTitle"),
          },
          { key: t("footerProduct4"), label: t("footerProduct4") },
        ],
      },
      {
        label: t("footerCompanyTitle"),
        key: t("footerCompanyTitle"),
        children: [
          {
            key: t("easyNotesTitle"),
            label: t("easyNotesTitle"),
          },
          {
            key: t("invoiceNowTitle"),
            label: t("invoiceNowTitle"),
          },
          {
            key: t("goFastingTitle"),
            label: t("goFastingTitle"),
          },
          {
            key: t("footerProduct4"),
            label: t("footerProduct4"),
          },
        ],
      },
      {
        label: t("footerDownloadTitle"),
        imgs: [
          {
            src: Appstore_download,
            hoverSrc: Appstore_download_hover,
            link: iosLink,
            alt: t("appstore_download_alt"),
          },
          {
            src: googleplay_download,
            hoverSrc: googleplay_download_hover,
            link: andoridLink,
            alt: t("googleplay_download_alt"),
          },
        ],
      },
    ];
  }, []);
  return (
    <footer className="text-[rgba(4,30,84,0.64)]   w-full xl:px-[5rem] xl:pt-[5rem] bg-[rgba(246,254,255,1)] px-[4rem] pt-[6rem]">
      <div className="flex flex-wrap sm:justify-between pb-[3.75rem]">
        <div className="lg:w-[31.25rem]  w-full mb-[3.2rem]">
          <Image src={logo} alt="" className="mb-[1rem]"></Image>
          <div className="">{t("ctaTagline")}</div>
        </div>
        {list.map((d) => {
          return (
            <div
              className="xl:w-[12.7rem] sm:w-[18rem] w-full mb-[2.4rem]"
              key={d.label}
            >
              {d.children && (
                <div className="sm:block hidden">
                  <div className="xl:text-[1.25rem] text-[1.6rem] font-semibold text-[rgba(4,30,84,1)]  mb-[2rem]">
                    {d.label}
                  </div>
                  <div className="xl:text-[1.25rem] text-[1.6rem] font-medium sm:block hidden">
                    {d.children.map((item) => {
                      return (
                        <div
                          key={item.key}
                          className="hover:text-[rgba(4,30,84,1)]"
                        >
                          {item.key}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {d.children && (
                <div className="sm:hidden text-[1.6rem] text-[rgba(4,30,84,1)]">
                  <MenuItemWithSubmenu
                    item={d}
                    isOpen={openKeys.includes(d.key)}
                    toggle={() => toggleSubmenu(d.key)}
                  />
                </div>
              )}

              {d.imgs && (
                <>
                  <div className="xl:text-[1.25rem] text-[1.6rem] sm:font-semibold text-[rgba(4,30,84,1)] mb-[2rem] font-medium">
                    {d.label}
                  </div>
                  <div className="sm:block flex">
                    {d.imgs.map((item) => {
                      return (
                        <Image
                          key={item.alt}
                          src={item.src}
                          alt={item.alt}
                          onClick={() => {
                            toAPPStore(item.link);
                          }}
                          className="w-[8.42rem] mb-[1.25rem] mr-[2rem] transition-transform duration-300 hover:scale-110"
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="xl:py-[3.75rem] sm:flex justify-between border-t border-[rgba(4,30,84,0.08)] text-[1.6rem] pt-[4rem] pb-[2rem]">
        <div className="mb-[2rem]">{t("footerCopyright")}</div>
        <div className="flex">
          <span className="mr-[3.75rem]">{t("footerPrivacy")}</span>
          <span>{t("footerTerms")}</span>
        </div>
      </div>
    </footer>
  );
}
