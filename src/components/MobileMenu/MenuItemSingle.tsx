// components/MenuItemSingle.tsx
import Link from "next/link";

interface Props {
  label: string;
  href?: string;
  onClick: () => void;
}

const MenuItemSingle: React.FC<Props> = ({ label, href = "#", onClick }) => (
  <Link
    href={href}
    className="block text-lg  text-[1.5rem] text-[rgba(4,30,84,0.32)]"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default MenuItemSingle;
