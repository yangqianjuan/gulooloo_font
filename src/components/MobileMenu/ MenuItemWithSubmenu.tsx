// components/MenuItemWithSubmenu.tsx
import { ChevronDown, ChevronUp, Divide } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useMemoizedFn } from "ahooks";
// import { MenuItem } from "./MobileMenu";

// types/menu.ts
export interface MenuItem {
  label: string;
  key: string;
  href?: string;
  isLang?: boolean;
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
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const switchLang = useMemoizedFn((locale: string) => {
    // 把路径改成新语言
    const new_locale = locale.split("/");

    const segments = pathname.split("/");
    console.log(locale, segments);
    segments[1] = new_locale[1]; // 第一个 segment 是 locale
    router.push(segments.join("/"));
  });
  return (
    <div>
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center font-medium"
        aria-label="toggle submenu"
      >
        {item.label}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <ul className="ml-4 mt-2  text-base text-gray-700 mb-[2rem]">
          {item.children?.map((child) => (
            <li
              key={child.key}
              className="sm:text-[rgba(4,30,84,1)] text-[rgba(4,30,84,0.32)] hover:text-[rgba(4,30,84,1)] 2xl:text-[1.25rem] sm:text-[1.125rem] text-[1rem] mt-[1.5rem]"
            >
              {item.isLang ? (
                <div onClick={() => switchLang(child.href || "")}>
                  {child.label}{" "}
                </div>
              ) : (
                <Link href={child.href ?? "#"} onClick={onClose}>
                  {child.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuItemWithSubmenu;
