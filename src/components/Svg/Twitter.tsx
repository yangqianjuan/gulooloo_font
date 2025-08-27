// components/icons/Twitter.tsx
import { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string; // 支持 Tailwind 类
  hoverColor?: string; // 可选 hover 颜色
}

const Twitter: FC<IconProps> = ({ className = "", hoverColor = "#22c55e" }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-colors duration-300 ${className}`}
    >
      <path
        d="M48 24C48 37.2551 37.2551 48 24 48C10.7449 48 0 37.2551 0 24C0 10.7449 10.7449 0 24 0C37.2551 0 48 10.7449 48 24Z"
        fill="currentColor"
      />
      <path
        d="M27.4643 21.7939L37.1728 11.4102H33.4861L25.8662 19.5616L20.0304 11.4102H9.94629L20.1537 25.6691L9.94629 36.5879H13.633L21.753 27.9026L27.9704 36.5879H38.0546L27.4643 21.7951V21.7939ZM15.1418 14.081H18.657L32.8579 33.9171H29.3427L15.1418 14.081Z"
        fill="white"
      />
    </svg>
  );
};

export default Twitter;
