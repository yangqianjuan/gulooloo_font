// components/MobileMenu.tsx
import { useState } from "react";
import { X } from "lucide-react";
// import { MenuItem } from "./MobileMenu"; // 可选导出位置优化
import MenuItemSingle from "./MenuItemSingle";
import MenuItemWithSubmenu from "./ MenuItemWithSubmenu";

interface MobileMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}
// types/menu.ts
export interface MenuItem {
  label: string;
  key: string;
  href?: string;
  children?: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen, onClose }) => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const toggleSubmenu = (key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <X size={28} />
        </button>
      </div>

      <nav className="px-6 py-2">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.key}>
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
                  onClick={onClose}
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
