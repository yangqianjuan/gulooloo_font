"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import Image from "next/image";
import GlobalIcon from "@/assets/icon/global.svg";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "next/navigation";
import { useMemoizedFn } from "ahooks";

interface Option {
  label: string;
  value: string; // e.g., anchor ID like "section1"
}

interface AnchorDropdownProps {
  options: Option[];
  placeholder?: string;
  isShowArrow?: boolean;
  isShowGlobal?: boolean;
  onSelect?: (value: string) => void;
}

export default function AnchorDropdown({
  options,
  placeholder = "",
  isShowArrow = false,
  isShowGlobal = false,
  onSelect,
}: AnchorDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [curentLocale, setCurentLocale] = useState("en");
  const router = useRouter();
  const pathname = usePathname();
  const switchLang = useMemoizedFn((locale: string) => {
    // 把路径改成新语言
    const segments = pathname.split("/");
    segments[1] = locale; // 第一个 segment 是 locale
    router.push(segments.join("/"));
  });

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between rounded-[0.75rem] hover:bg-[rgba(0,204,145,0.078)] hover:text-[rgba(0,204,145,1)] focus:outline-none py-[0.81rem] px-[1.56rem] group"
        aria-haspopup="listbox"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {isShowGlobal && <Globe size={20} className="mr-[0.25rem]" />}
        <span className="mr-2 2xl:text-[1.25rem] text-[1.125rem]">
          {placeholder}
        </span>
        {isShowArrow &&
          (open ? (
            <ChevronUp
              className="text-[rgba(4,30,84,0.32)] group-hover:text-[rgba(0,204,145,1)]"
              strokeWidth={1.8}
              size={28}
            />
          ) : (
            <ChevronDown
              className="text-[rgba(4,30,84,0.32)] group-hover:text-[rgba(0,204,145,1)]"
              strokeWidth={1.8}
              size={28}
            />
          ))}
      </button>

      {open && (
        <ul className="absolute z-10 top-[5rem] rounded-[1.5rem] left-1/2 -translate-x-1/2 px-[1.25rem]  py-[2rem] w-[16rem] bg-white  shadow-md transition-all duration-200 text-[1.25rem]">
          {options.map((opt) => (
            <li
              key={opt.value}
              className="px-4 py-2 rounded-[16px] hover:bg-[rgba(245,248,252,1)] cursor-pointer"
              role="option"
            >
              {isShowGlobal ? (
                <div onClick={() => switchLang(opt.value)}>{opt.label} </div>
              ) : (
                <Link href={`/${opt.value}`}>{opt.label}</Link>
                // opt.label
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
