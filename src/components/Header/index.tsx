"use client";

import React, { useMemo, useState } from "react";
import AnchorDropdown from "@/components/AnchorDropdown";
import logo from "@/assets/icon/logo_text.svg";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import MobileMenu, { MenuItem } from "@/components/MobileMenu/index";
import MenuToggleButton from "@/components/MenuToggleButton";
import { useRouter, usePathname } from "next/navigation";
import { useMemoizedFn } from "ahooks";

const Header: React.FC = () => {
  const t = useTranslations("home");
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const switchPath = useMemoizedFn((path: string) => {
    // 把路径改成新语言
    router.push(`/${locale}/${path}`);
  });
  const menuItems: MenuItem[] = useMemo(() => {
    return [
      { label: t("navHome"), key: "home", href: "/" },
      {
        label: t("navProducts"),
        key: "products",
        children: [
          {
            label: t("easyNotesTitle"),
            key: "easyNotesTitle",
            href: "/#easyNotes",
          },
          {
            label: t("invoiceNowTitle"),
            key: "invoiceNowTitle",
            href: "/#invoiceNow",
          },
          {
            label: t("goFastingTitle"),
            key: "goFastingTitle",
            href: "/#goFasting",
          },
          {
            label: t("footerProduct4"),
            key: "footerProduct4",
            href: "/#Qrgenerator",
          },
        ],
      },
      { label: t("navResource"), key: "navResource", href: "/blog" },
      { label: t("navAbout"), key: "navAbout", href: "/about" },
      {
        label: t("navLanguage"),
        key: "language",
        children: [
          { label: "English", key: "en", href: "/en" },
          { label: "Español", key: "es", href: "/es" },
          { label: "Français", key: "fr", href: "/fr" },
          { label: "Português", key: "pt", href: "/pt" },
          { label: "Deutsch", key: "de", href: "/de" },
          { label: "日本語", key: "ja", href: "/ja" },
          { label: "한국인", key: "ko", href: "/ko" },
          { label: "繁體中文", key: "tw", href: "/tw" },
          { label: "简体中文", key: "zh", href: "/zh" },
        ],
      },
    ];
  }, []);
  const langList = useMemo(() => {
    return [
      { label: "English", value: "en" },
      { label: "Español", value: "es" },
      { label: "Français", value: "fr" },
      { label: "Português", value: "pt" },
      { label: "Deutsch", value: "de" },
      { label: "日本語", value: "ja" },
      { label: "한국인", value: "ko" },
      { label: "繁體中文", value: "tw" },
      { label: "简体中文", value: "zh" },
    ];
  }, []);

  const showLang = useMemo(() => {
    const item = langList.find((item) => item.value === locale);
    return item ? item.label : locale.toLocaleUpperCase();
  }, []);

  const toHome = useMemoizedFn(() => {
    router.push(`/`);
  });

  return (
    <header className="w-full h-[80px] justify-between  flex items-center px-6 sticky top-0 z-50 bg-white">
      <Image
        className="cursor-pointer"
        onClick={toHome}
        src={logo}
        alt=""
        width={190}
      />
      <div className="text-xl  items-center hidden sm:flex">
        <AnchorDropdown
          isShowArrow={true}
          options={[
            { label: t("easyNotesTitle"), value: "#easyNotes" },
            { label: t("invoiceNowTitle"), value: "#invoiceNow" },
            { label: t("goFastingTitle"), value: "#goFasting" },
            { label: t("footerProduct4"), value: "#Qrgenerator" },
          ]}
          placeholder={t("navProducts")}
        />
        <div
          onClick={() => switchPath("blog")}
          className="cursor-pointer rounded-[0.75rem] mx-[1.5rem] 2xl:text-[1.25rem] text-[1.125rem] hover:bg-[rgba(0,204,145,0.078)] hover:text-[rgba(0,204,145,1)] py-[0.81rem] px-[1.56rem]"
        >
          {t("navResource")}
        </div>
        <div
          onClick={() => switchPath("about")}
          className="cursor-pointer rounded-[0.75rem] 2xl:text-[1.25rem] text-[1.125rem] hover:bg-[rgba(0,204,145,0.078)] hover:text-[rgba(0,204,145,1)] py-[0.81rem] px-[1.56rem]"
        >
          {t("navAbout")}
        </div>
      </div>
      <div className="text-xl items-center hidden sm:flex">
        <span className="text-[1.25rem] mr-[1.7rem] ">
          <AnchorDropdown
            options={langList}
            placeholder={showLang}
            isShowGlobal={true}
          />
        </span>
      </div>
      <div className="relative sm:hidden">
        <div className="flex justify-between items-center p-4">
          <MenuToggleButton onClick={() => setMenuOpen(true)} />
        </div>
        <MobileMenu
          items={menuItems}
          isOpen={menuOpen}
          switchPath={switchPath}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
