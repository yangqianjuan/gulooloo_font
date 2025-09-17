"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import ic_success from "@/assets/blog/ic_success.svg";
import Image, { StaticImageData } from "next/image";
import Link from "@/components/Svg/Link";

interface CopyPopoverProps {
  url: string; // 需要复制的文字
  label: ReactNode; // 按钮文案
  text: string;
}

export default function CopyPopover({ url, text, label }: CopyPopoverProps) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setOpen(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setOpen(false), 2000); // 2s 后关闭
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="relative inline-block">
      {/* Popover 提示在上方 */}
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-[28px] bg-[rgba(4,30,84,1)] text-white shadow-lg">
          <span className="flex sm:px-[16px] px-[12px] sm:py-[12px] py-[10px]  2xl:text-[20px] sm:text-[16px] text-[14px]">
            <div className="2xl:w-[20px]  w-[16px] mr-[10px] flex items-center">
              <Image src={ic_success} className="w-full" alt="" />
            </div>
            <span>{text}</span>
          </span>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[rgba(4,30,84,1)] rotate-45"></div>
        </div>
      )}

      {/* 复制按钮 */}
      <button onClick={copyToClipboard} className="rounded-lg transition">
        {label}
      </button>
    </div>
  );
}
