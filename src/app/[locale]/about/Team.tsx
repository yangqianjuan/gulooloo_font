import Image from "next/image";
import ic_user from "@/assets/about/ic_user.svg";
export default function Team() {
  return (
    <div className="xl:px-[5rem] xl:py-[7.5rem] sm:px-[2.5rem] sm:py-[5rem] px-[1.5rem] py-[2.5rem]">
      <div className="text-center xl:mb-[5rem] sm:mb-[2.5rem] mb-[1.25rem] font-semibold xl:text-[4.125rem] sm:text-[3rem] text-[1.5rem]">
        Our Team Values
      </div>
      <ul className="flex justify-between flex-wrap">
        <li className="sm:w-[29%] w-full flex flex-col items-center text-center rounded-3xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] xl:px-[3.75rem] xl:py-[5rem] sm:px-[1.5rem] sm:py-[2.5rem] px-[2rem] py-[2rem] sm:mb-[0rem] mb-[1.5rem]">
          <Image
            src={ic_user}
            alt=""
            width={80}
            className="xl:w-[80px] xl:mb-[3.75rem] sm:w-[56px] w-[48px] mb-[1.25rem]"
          />
          <div className="xl:text-[2.5rem]  sm:text-[1.67rem] text-[1.5rem] xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2rem]">
            User-First
          </div>
          <div className="text-[rgba(4,30,84,0.7)] xl:text-[1.5rem] text-[1rem]">
            You are at the center of everything we do. We listen to your
            feedback, learn from your experiences, and build products that solve
            your real-world problems. Our goal is to create something
            you&apos;ll not only use, but love.
          </div>
        </li>
        <li className="sm:w-[29%] w-full flex flex-col items-center text-center rounded-3xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] xl:px-[3.75rem] xl:py-[5rem] sm:px-[1.5rem] sm:py-[2.5rem] px-[2rem] py-[2rem] sm:mb-[0rem] mb-[1.5rem]">
          <Image
            src={ic_user}
            alt=""
            width={80}
            className="xl:w-[80px] xl:mb-[3.75rem] sm:w-[56px] w-[48px] mb-[1.25rem]"
          />
          <div className="xl:text-[2.5rem]  sm:text-[1.67rem] text-[1.5rem] xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2rem]">
            User-First
          </div>
          <div className="text-[rgba(4,30,84,0.7)] xl:text-[1.5rem] text-[1rem]">
            You are at the center of everything we do. We listen to your
            feedback, learn from your experiences, and build products that solve
            your real-world problems. Our goal is to create something
            you&apos;ll not only use, but love.
          </div>
        </li>
        <li className="sm:w-[29%] w-full flex flex-col items-center text-center  rounded-3xl shadow-[0_8px_24px_0_rgba(126,138,163,0.12)] xl:px-[3.75rem] xl:py-[5rem] sm:px-[1.5rem] sm:py-[2.5rem] px-[2rem] py-[2rem] sm:mb-[0rem] mb-[1.5rem]">
          <Image
            src={ic_user}
            alt=""
            width={80}
            className="xl:w-[80px] xl:mb-[3.75rem] sm:w-[56px] w-[48px] mb-[1.25rem]"
          />
          <div className="xl:text-[2.5rem]  sm:text-[1.67rem] text-[1.5rem] xl:mb-[7.5rem] sm:mb-[3.75rem] mb-[2rem]">
            User-First
          </div>
          <div className="text-[rgba(4,30,84,0.7)] xl:text-[1.5rem] text-[1rem]">
            You are at the center of everything we do. We listen to your
            feedback, learn from your experiences, and build products that solve
            your real-world problems. Our goal is to create something
            you&apos;ll not only use, but love.
          </div>
        </li>
      </ul>
    </div>
  );
}
