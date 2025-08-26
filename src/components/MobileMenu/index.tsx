// components/MobileMenu.tsx
import { useState } from "react";
import { X } from "lucide-react";
// import { MenuItem } from "./MobileMenu"; // 可选导出位置优化
import MenuItemSingle from "./MenuItemSingle";
import MenuItemWithSubmenu from "./ MenuItemWithSubmenu";
import { useMemoizedFn } from "ahooks";

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
  switchPath: (path: string) => void;
}
// types/menu.ts
export interface MenuItem {
  label: string;
  key: string;
  href?: string;
  children?: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  items,
  isOpen,
  onClose,
  switchPath,
}) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const toggleSubmenu = useMemoizedFn((key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  });
  const toPath = useMemoizedFn((path: string) => {
    onClose();
    switchPath(path);
  });

  return (
    <div
      className={`fixed inset-0 z-50 bg-[rgba(246,254,255,1)] transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end px-[1.5rem] py-[1.25rem]">
        <button onClick={onClose} aria-label="closed modal">
          <X size={24} />
        </button>
      </div>

      <nav className="pt-[1.25rem] px-[1.5rem] text-[1rem]">
        <ul>
          {items.map((item) => (
            <li
              key={item.key}
              className="py-[1rem] border-b-[1px] border-[rgba(4,30,84,0.08)]  text-[rgba(4,30,84,0.48)] hover:text-[rgba(4,30,84,1)]"
            >
              {item.children ? (
                <MenuItemWithSubmenu
                  item={item}
                  isOpen={openKeys.includes(item.key)}
                  toggle={() => toggleSubmenu(item.key)}
                  onClose={onClose}
                />
              ) : (
                <MenuItemSingle
                  label={item.label}
                  href={item.href}
                  onClick={() => toPath(item.href || "/")}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
