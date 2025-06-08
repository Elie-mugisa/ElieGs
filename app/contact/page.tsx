import NavContainer from "@/components/navigation/nav_container";
import Link from "next/link";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import React from "react";

export default function Contact() {
  return (
    <div className=" min-h-screen w-full flex justify-center items-end  service  ">
      <div className="min-h-screen w-full bg-[#111111]/98 absolute " />
      <NavContainer />

      <div className="absolute top-[16vh] min-h-[75vh] gap-y-2  w-full rounded-md  mb-[5vh] flex gap-x-8 flex-col justify-center md:top-[16vh] md:p-6 lg:p-10 lg:flex-row ">
        <div className="w-full h-[60vh] p-6 flex flex-col gap-2 md:h-auto md:p-0 md:gap-8 lg:flex-[1]  ">
          <div className="  h-full justify-center flex gap-2 flex-[1] md:gap-8 ">
            <div className="bg-[#1b1b1b] py-4 flex flex-col gap-4 justify-center items-center rounded-md w-full lg:gap-8">
              <LiaLinkedin className="text-[#9d9d9d] text-3xl lg:text-9xl " />
              <p className="text-xl lg:text-4xl text-[#9d9d9d] ">Mugisa Elie</p>
              <Link
                href={""}
                className="text-white bg-black px-6 py-2 rounded-md text-base transition-all duration-200 hover:bg-white hover:text-black "
              >
                text me
              </Link>
            </div>
            <div className="bg-[#1b1b1b] py-4 flex flex-col gap-4 justify-center items-center rounded-md w-full lg:gap-8 ">
              <BsWhatsapp className="text-[#9d9d9d] text-3xl lg:text-9xl " />
              <p className="text-xl lg:text-4xl text-[#9d9d9d] ">
                +257 79 882 175
              </p>
              <Link
                href={""}
                className="text-white bg-black px-6 py-2 rounded-md text-base transition-all duration-200 hover:bg-white hover:text-black "
              >
                text me
              </Link>
            </div>
          </div>
          <div className="h-full justify-center flex gap-2 flex-[1] md:gap-8 ">
            <div className="bg-[#1b1b1b] py-4 flex flex-col gap-4 justify-center items-center rounded-md w-full lg:gap-8 ">
              <BsGithub className="text-[#9d9d9d] text-3xl lg:text-9xl " />
              <p className="text-xl lg:text-4xl text-[#9d9d9d] ">Mugisa Elie</p>
              <Link
                href={""}
                className="text-white bg-black px-6 py-2 rounded-md text-base transition-all duration-200 hover:bg-white hover:text-black "
              >
                Check
              </Link>
            </div>
            <div className="bg-[#1b1b1b] py-4 flex flex-col gap-4 justify-center items-center rounded-md w-full lg:gap-8 ">
              <LiaLinkedin className="text-[#9d9d9d] text-3xl lg:text-9xl " />
              <p className="text-xl lg:text-4xl text-[#9d9d9d] ">Mugisa Elie</p>
              <Link
                href={""}
                className="text-white bg-black text-center px-6 py-2 rounded-md text-base transition-all duration-200 hover:bg-white hover:text-black "
              >
                text me
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full p-4 bg-[#111111] border-t border-l-0 border-[#9d9d9d] lg:flex-[1] lg:border-l lg:border-t-0 py-10 px-6 md:h-auto  lg:pl-14 ">
          <h1 className="text-white font-semibold text-3xl lg:text-6xl">
            Yes, we can do it!
          </h1>
          <p className="text-base mt-10 text-[#9d9d9d] ">
            Let's turn your idea into reality
          </p>
          <p className="text-base mt-4 text-[#9d9d9d] ">
            Let's bring digital solution, and make it easy to handle
          </p>
          <div className="w-full flex flex-col gap-4 py-10 lg:gap-6 ">
            <div className="flex gap-6 items-center">
              <div className="h-8 w-8 flex justify-center items-center">
                <PiPhone className="text-2xl lg:text-3xl text-white" />
              </div>
              <p className="text-2xl lg:text-3xl text-white">
                +243 823 575 527
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="h-8 w-8 flex justify-center items-center">
                <FaMessage className="text-xl lg:text-3xl text-white" />
              </div>
              <p className="text-2xl lg:text-3xl text-white">
                +243 823 575 527
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="h-8 w-8 flex justify-center items-center">
                <MdEmail className="text-2xl lg:text-3xl text-white" />
              </div>
              <p className="text-2xl lg:text-3xl text-white">
                eliegs@autafrika.com
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="h-8 w-8 flex justify-center items-center">
                <MdEmail className="text-2xl lg:text-3xl text-white" />
              </div>
              <p className="text-2xl lg:text-3xl text-white">
                eliemugisa777@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
