"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import GlobalIcon from "@/assets/icon/global.svg";
import { Link } from "@/i18n/navigation";

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

  const handleSelect = (value: string) => {
    setOpen(false);
    setCurentLocale(value);
    // const el = document.getElementById(anchorId);
    // if (el) {
    //   el.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between rounded hover:bg-[rgba(0,204,145,0.078)] hover:text-[rgba(0,204,145,1)] focus:outline-none py-[0.81rem] px-[1.56rem]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {isShowGlobal && <Globe size={20} className="mr-[0.25rem]" />}
        <span className="mr-2 xl:text-[1.25rem] text-[1.8rem]">
          {placeholder}
        </span>
        {isShowArrow && <ChevronDown size={24} />}
      </button>

      {open && (
        <ul className="absolute z-10 top-[6.25rem] rounded-[1.5rem] left-1/2 -translate-x-1/2 mt-1 px-5 py-8 w-[16rem] bg-white rounded shadow-md transition-all duration-200 text-[1.25rem]">
          {options.map((opt) => (
            <li
              key={opt.value}
              // onClick={() => handleSelect(opt.value)}
              className="px-4 py-2 rounded-[16px] hover:bg-[rgba(245,248,252,1)] cursor-pointer"
              role="option"
            >
              {isShowGlobal ? (
                <Link href="/" locale={opt.value}>
                  {opt.label}
                </Link>
              ) : (
                opt.label
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
