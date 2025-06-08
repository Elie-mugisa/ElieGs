import { FaTerminal } from "react-icons/fa6";
import { IoGitBranch } from "react-icons/io5";
import { VscVscodeInsiders, VscJson } from "react-icons/vsc";

import { IoCodeSlashOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#111111] w-full flex justify-center items-center relative">
      <FaTerminal className="absolute left-20 top-[25vh] text-xl font-black text-[#9d9d9d]/15 md:text-6xl " />
      <FaTerminal className="absolute right-10 bottom-[15vh] text-2xl font-black text-[#9d9d9d]/15 md:text-9xl " />
      <IoGitBranch className="absolute left-[25vw] bottom-[35vh] text-4xl font-black text-[#9d9d9d]/15 md:text-9xl " />
      <VscVscodeInsiders className="absolute left-[15vw] bottom-[55vh] text-8xl font-black text-[#9d9d9d]/15 md:text-9xl " />
      <VscJson className="absolute left-[5vw] bottom-[5vh] text-5xl font-black text-[#9d9d9d]/15 md:text-6xl " />
      <VscVscodeInsiders className="absolute left-[15vw] bottom-[2vh] text-5xl font-black text-[#9d9d9d]/15 md:text-6xl " />
      <IoCodeSlashOutline className="absolute left-[5vw] bottom-[25vh] text-8xl font-black text-[#9d9d9d]/15 md:text-9xl " />

      {/* content */}
      <div className=" w-full flex flex-col items-center gap-y-8 z-20 md:pt-[14vh] lg:flex-row lg:pt-0 ">
        {/* text */}
        <HeroText />
        {/* pic */}
        <HeroPic />
      </div>
    </div>
  );
}

function HeroText() {
  return (
    <div className=" pt-[14vh] w-full  px-6 flex flex-col gap-6 items-center md:pt-0 md:pl-24 md:gap-8 md:flex-[1] ">
      <p className="text-[#9d9d9d] text-center font-extralight text-base md:text-2xl lg:text-start ">
        Passionate about transforming ideas into scalable, efficient, and
        elegant software solutions.
      </p>
      <h1 className="font-bold text-center text-white text-4xl md:text-6xl lg:text-start ">
        Bringing ideas to life with the power of algorithms, design patterns,
        and best practices.
      </h1>
      <h2 className="font-light  mt-6 text-center text-white/70 text-xl md:pt-10 md:text-4xl lg:text-start">
        {
          "{   I don’t just write code I create solutions that make a difference   }"
        }
      </h2>
    </div>
  );
}

function HeroPic() {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center relative  min-h-[50vh] md:flex-[1] lg:min-h-screen lg:justify-start ">
      <div className="h-[50vh] w-[50vh] rounded-full absolute  bg-[#161616] lg:h-[150vh] lg:w-[150vh]" />
      <div className="h-[40vh] w-[40vh] rounded-full absolute bg_for_img lg:h-[110vh] lg:w-[110vh] lg:left-[10vw]" />
      <div className="h-[40vh] w-[40vh] rounded-full absolute bg-[#111111]/50  lg:h-[110vh] lg:w-[110vh] lg:left-[10vw]" />
      <div className="h-[20vh] w-[20vh] rounded-full absolute bg-[#1E1E1E] lg:h-[90vh] lg:w-[90vh] lg:left-[22vw]" />
      <div className="h-[10vh] w-[10vh] rounded-full absolute bg-[#111111] lg:h-[50vh] lg:w-[50vh] lg:left-[34vw]" />
    </div>
  );
}
