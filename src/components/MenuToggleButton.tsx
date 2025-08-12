// components/MenuToggleButton.tsx
import { Menu } from "lucide-react";

interface MenuToggleButtonProps {
  onClick: () => void;
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="p-2" aria-label="Toggle menu">
      <Menu size={28} />
    </button>
  );
};

export default MenuToggleButton;
