import { BlogTabProps } from "@/type/index";

export default function BlogTab({
  activeTab,
  list,
  handleTabChange,
}: BlogTabProps) {
  return (
    <ul className="flex sm:w-full w-[calc(100vw-3rem)] 2xl:mb-[5rem] sm:mb-[2.5rem] mb-[1.5rem] overflow-x-auto  ">
      {list.map((item, index) => (
        <li
          onClick={() => handleTabChange(item.key)}
          key={item.key}
          className={`rounded-[2.5rem]  2xl:mr-[2.69rem] sm:mr-[2rem] mr-[1.25rem] 2xl:px-[2.5rem] 2xl:py-[0.63rem]  sm:px-[1.5rem] sm:py-[0.5rem] px-[1.25rem] py-[0.38rem] ${
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
