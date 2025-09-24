import { BlogTabProps } from "@/type/index";

export default function BlogTab({
  activeTab,
  list,
  handleTabChange,
}: BlogTabProps) {
  return (
    <ul className="flex sm:w-full w-[calc(100vw-48px)] 2xl:mb-[80px] sm:mb-[40px] mb-[24px] overflow-x-auto  ">
      {list.map((item, index) => (
        <li
          onClick={() => handleTabChange(item.key)}
          key={item.key}
          className={`whitespace-nowrap font-medium sm:rounded-[40px] rounded-[20px] 2xl:mr-[43px] sm:mr-[32px] mr-[20px] 2xl:px-[40px] 2xl:leading-[76px]  sm:px-[24px] sm:leading-[46px] px-[20px] leading-[36px]  2xl:text-[30px] sm:text-[20px] text-[16px] ${
            activeTab === item.key
              ? "bg-[#00CC91] text-[rgba(255,255,255,1)]"
              : "bg-[rgba(241,245,249,1)]"
          } cursor-pointer transition-all duration-300 ease-in-out`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
