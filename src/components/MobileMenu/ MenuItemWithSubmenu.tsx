// components/MenuItemWithSubmenu.tsx
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
// import { MenuItem } from "./MobileMenu";

// types/menu.ts
export interface MenuItem {
  label: string;
  key: string;
  href?: string;
  children?: MenuItem[];
}
interface Props {
  item: MenuItem;
  isOpen: boolean;
  toggle: () => void;
  onClose?: () => void;
}

const MenuItemWithSubmenu: React.FC<Props> = ({
  item,
  isOpen,
  toggle,
  onClose,
}) => (
  <div>
    <button
      onClick={toggle}
      className="w-full flex justify-between items-center text-[1.6rem] text-[rgba(4,30,84,1)]  font-medium"
    >
      {item.label}
      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
    {isOpen && (
      <ul className="ml-4 mt-2  text-base text-gray-700">
        {item.children?.map((child) => (
          <li
            key={child.key}
            className="text-[1.5rem] text-[rgba(4,30,84,0.32)]"
          >
            <Link href={child.href ?? "#"} onClick={onClose}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default MenuItemWithSubmenu;
