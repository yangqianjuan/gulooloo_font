import Image from "next/image";
import logo from "@/assets/icon/logo_text.svg";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import GooglePlay from "@/components/Svg/GooglePlay";
import AppStore from "@/components/Svg/AppStore";
import MenuItemWithSubmenu from "@/components/MobileMenu/MenuItemWithSubmenu";
import { iosLink, andoridLink } from "@/utils/index";
import { useMemoizedFn } from "ahooks";
export default function Footer() {
  const t = useTranslations("home");
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const switchPath = useMemoizedFn((path: string) => {
    // 把路径改成新语言
    // router.push(`${path}`);
    window.open(`${path}`, "_blank", "noopener,noreferrer");
  });

  const toggleSubmenu = useMemoizedFn((key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  });
  const toAPPStore = useMemoizedFn((link: string) => {
    window.open(link);
  });

  interface FooterNavItem {
    label: string;
    key: string;
    children?: { key: string; label: string; href?: string }[];
    imgs?: { node: React.ReactNode; link: string; alt: string }[];
  }

  const list: FooterNavItem[] = useMemo(
    () => [
      {
        label: t("footerProductsTitle"),
        key: "products", // 使用稳定 key 而不是翻译文本
        children: [
          { key: "easyNotes", label: t("easyNotesTitle"), href: "/#easyNotes" },
          {
            key: "invoiceNow",
            label: t("invoiceNowTitle"),
            href: "/#invoiceNow",
          },
          { key: "goFasting", label: t("goFastingTitle"), href: "/#goFasting" },
          {
            key: "qrGenerator",
            label: t("footerProduct4"),
            href: "/#Qrgenerator",
          },
        ],
      },
      {
        label: t("footerCompanyTitle"),
        key: "company",
        children: [
          { key: "about", label: t("footerAboutUs"), href: "/about" },
          { key: "resource", label: t("footerResource"), href: "/blog" },
          {
            key: "contact",
            label: t("footerContactUs"),
            href: "mailto:support@guloolootech.com",
          },
        ],
      },
      {
        label: t("footerDownloadTitle"),
        key: "download",
        imgs: [
          {
            node: (
              <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] w-[8.42rem] mb-[1.25rem] mr-[2rem] transition-transform duration-300 hover:scale-110" />
            ),
            link: iosLink,
            alt: t("appstore_download_alt"),
          },
          {
            node: (
              <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] w-[8.42rem] mb-[1.25rem] transition-transform duration-300 hover:scale-110" />
            ),
            link: andoridLink,
            alt: t("googleplay_download_alt"),
          },
        ],
      },
    ],
    [t]
  );
  return (
    <footer
      className="text-[rgba(4,30,84,0.64)] w-full xl:px-[5rem] 2xl:pt-[4.44rem] sm:pt-[3.75rem] bg-[rgba(246,254,255,1)] px-[1.5rem] pt-[2.5rem]"
      aria-label="site footer"
    >
      <div className="flex flex-wrap sm:justify-between 2xl:pb-[3.75rem] sm:pb-[2.5rem] pb-[2rem]">
        <div className="2xl:w-[31.25rem] sm:w-[20rem]  w-full sm:mb-[0rem] mb-[2rem]">
          <Image src={logo} alt="" className="mb-[1rem]"></Image>
          <div className="2xl:text-[1.25rem] text-[1.125rem]">
            {t("ctaTagline")}
          </div>
        </div>
        {list.map((section) => (
          <div
            className="2xl:w-[20rem] sm:w-[11.25rem] w-full"
            key={section.key}
          >
            {section.children && (
              <div className="sm:block hidden">
                <h2 className="2xl:text-[1.25rem] text-[1rem] font-semibold text-[rgba(4,30,84,1)] mb-[2rem]">
                  {section.label}
                </h2>
                <nav
                  aria-label={section.label}
                  className="2xl:text-[1.25rem] text-[1rem] font-medium"
                >
                  {section.children.map((item) => (
                    <div key={item.key}>
                      <Link
                        className="hover:text-[rgba(4,30,84,1)]"
                        href={item.href ?? "#"}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            )}
            {section.children && (
              <div className="sm:hidden 2xl:text-[1.25rem] text-[1.125rem] text-[rgba(4,30,84,1)] mb-[1.5rem]">
                <MenuItemWithSubmenu
                  // 复用移动端组件
                  item={{
                    label: section.label,
                    key: section.key,
                    children: section.children.map((c) => ({
                      label: c.label,
                      key: c.key,
                      href: c.href,
                    })),
                  }}
                  isOpen={openKeys.includes(section.key)}
                  toggle={() => toggleSubmenu(section.key)}
                />
              </div>
            )}
            {section.imgs && (
              <div>
                <h2 className="2xl:text-[1.25rem] text-[1.125rem] sm:font-semibold text-[rgba(4,30,84,1)] mb-[2rem] font-medium">
                  {section.label}
                </h2>
                <div className="sm:block flex">
                  {section.imgs.map((item) => (
                    <button
                      key={item.link}
                      onClick={() => toAPPStore(item.link)}
                      aria-label={item.alt}
                      className="p-0 m-0 bg-transparent"
                      type="button"
                    >
                      {item.node}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="xl:py-[3.75rem] sm:flex justify-between border-t border-[rgba(4,30,84,0.08)] 2xl:text-[1.25rem] text-[1.125rem] pt-[4rem] pb-[2rem]">
        <div className="mb-[2rem]">{t("footerCopyright")}</div>
        <div className="flex">
          <span
            onClick={() => switchPath("/privacy-policy")}
            className="cursor-pointer  max-w-[40vw] sm:mr-[3.75rem] mr-[1.5rem] break-words"
          >
            {t("footerPrivacy")}
          </span>
          <span
            className="cursor-pointer  max-w-[40vw] break-words"
            onClick={() => switchPath("/terms-of-use")}
          >
            {t("footerTerms")}
          </span>
        </div>
      </div>
    </footer>
  );
}
