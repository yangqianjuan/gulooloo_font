"use client";

import { useEffect } from "react";

export default function RefreshOnBack({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handlePopState = () => {
      // 方式 1：整页刷新，确保 CSS 恢复
      window.location.reload();

      // 方式 2：只刷新当前路由数据（不丢状态）
      // router.refresh();  <-- 如果想要用 Next.js 的刷新
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return <>{children}</>;
}
