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
          {
            key: "easyNotes",
            label: t("easyNotesTitle"),
            href: "/app/easynotes",
          },
          {
            key: "invoiceNow",
            label: t("invoiceNowTitle"),
            href: "/app/invoicemaker",
          },
          {
            key: "goFasting",
            label: t("goFastingTitle"),
            href: "/app/gofasting",
          },
          {
            key: "qrGenerator",
            label: t("footerProduct4"),
            href: "/app/QRgenerator",
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
              <AppStore className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] w-[135px] mb-[20px] mr-[32px] transition-transform duration-300 hover:scale-110" />
            ),
            link: iosLink,
            alt: t("appstore_download_alt"),
          },
          {
            node: (
              <GooglePlay className="text-[rgba(0,0,0,1)] hover:text-[rgba(4,30,84,1)] w-[135px] mb-[20px] transition-transform duration-300 hover:scale-110" />
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
      className="text-[rgba(4,30,84,0.64)] w-full xl:px-[80px] 2xl:pt-[71px] sm:pt-[60px] bg-[rgba(246,254,255,1)] px-[24px] pt-[40px]"
      aria-label="site footer"
    >
      <div className="flex flex-wrap sm:justify-between 2xl:pb-[60px] sm:pb-[40px] pb-[32px]">
        <div className="2xl:w-[500px] sm:w-[320px]  w-full sm:mb-[0px] mb-[32px]">
          <Image src={logo} alt="" className="mb-[16px]"></Image>
          <div className="2xl:text-[20px] text-[18px]">{t("ctaTagline")}</div>
        </div>
        {list.map((section) => (
          <div className="2xl:w-[320px] sm:w-[180px] w-full" key={section.key}>
            {section.children && (
              <div className="sm:block hidden">
                <h2 className="2xl:text-[20px] text-[16px] font-semibold text-[rgba(4,30,84,1)] mb-[32px]">
                  {section.label}
                </h2>
                <nav
                  aria-label={section.label}
                  className="2xl:text-[20px] text-[16px] font-medium"
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
              <div className="sm:hidden 2xl:text-[20px] text-[18px] text-[rgba(4,30,84,1)] mb-[24px]">
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
                <h2 className="2xl:text-[20px] text-[18px] sm:font-semibold text-[rgba(4,30,84,1)] mb-[32px] font-medium">
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
      <div className="xl:py-[60px] sm:flex justify-between border-t border-[rgba(4,30,84,0.08)] 2xl:text-[20px] text-[18px] pt-[64px] pb-[32px]">
        <div className="mb-[32px]">{t("footerCopyright")}</div>
        <div className="flex">
          <span
            onClick={() => switchPath("/privacy-policy")}
            className="cursor-pointer  max-w-[40vw] sm:mr-[60px] mr-[24px] break-words"
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
