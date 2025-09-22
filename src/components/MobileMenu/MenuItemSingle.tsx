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
    aria-label={label}
    className="block text-lg  text-[16px]"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default MenuItemSingle;
