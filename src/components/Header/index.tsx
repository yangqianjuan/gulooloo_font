"use client";

import React, { useMemo, useState } from "react";
import AnchorDropdown from "@/components/AnchorDropdown";
import logo from "@/assets/icon/logo_text.svg";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import MobileMenu, { MenuItem } from "@/components/MobileMenu/index";
import MenuToggleButton from "@/components/MenuToggleButton";
const menuItems: MenuItem[] = [
  { label: "首页", key: "home", href: "/" },
  {
    label: "产品",
    key: "products",
    children: [
      { label: "手机", key: "phone", href: "/products/phone" },
      { label: "电脑", key: "laptop", href: "/products/laptop" },
    ],
  },
  { label: "联系我们", key: "contact", href: "/contact" },
];
const Header: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
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
      { label: "简体中文", value: "cn" },
    ];
  }, []);

  const showLang = useMemo(() => {
    const item = langList.find((item) => item.value === locale);
    return item ? item.label : locale.toLocaleUpperCase();
  }, []);

  return (
    <header className="w-full h-[80px] justify-between  flex items-center px-6 ">
      <Image src={logo} alt="" width={190} />
      <div className="text-xl  items-center hidden lg:flex">
        <AnchorDropdown
          isShowArrow={true}
          options={[
            { label: t("easyNotesTitle"), value: "1" },
            { label: t("invoiceNowTitle"), value: "2" },
            { label: t("goFastingTitle"), value: "3" },
            { label: t("footerProduct4"), value: "4" },
          ]}
          placeholder={t("navProducts")}
        />
        <div className="mx-16 xl:text-[1.25rem] text-[1.8rem]">
          {t("navResource")}
        </div>
        <div className="xl:text-[1.25rem] text-[1.8rem]">{t("navAbout")}</div>
      </div>
      <div className="text-xl items-center hidden lg:flex">
        <span className="text-[1.25rem] mr-[1.7rem] ">
          <AnchorDropdown
            options={langList}
            placeholder={showLang}
            isShowGlobal={true}
          />
        </span>
      </div>
      <div className="relative lg:hidden">
        <div className="flex justify-between items-center p-4">
          <MenuToggleButton onClick={() => setMenuOpen(true)} />
        </div>
        <MobileMenu
          items={menuItems}
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
