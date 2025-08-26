"use client";
import React, { useState, useEffect } from "react";
import "../app/index.css"; // 引入样式
import { useMemoizedFn } from "ahooks";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // 监听滚动，控制按钮显示
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setVisible(window.scrollY > 300); // 滚动超过300px显示按钮
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击滚动回顶部
  const scrollToTop = useMemoizedFn(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
