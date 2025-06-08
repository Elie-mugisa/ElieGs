"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { useState } from "react";
import { FaLinux } from "react-icons/fa";
import Link from "next/link";

export default function AboutSection() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div id="about" className=" bg-[#111111] relative py-8 w-full  ">
      <FaLinux className="text-9xl text-[#9d9d9d]/30 absolute bottom-20 right-20 z-20 " />
      <div className="flex bg-[#111111] flex-col-reverse gap-x-14 gap-y-10 items-center  md:py-14 lg:flex-row lg:items-start ">
        {/* picture */}
        <div className="w-full flex justify-center items-center pt-4 md:pt-10 lg:pl-24 lg:w-auto ">
          <div className="h-[60vh] w-[95vw] flex flex-col rounded-md  md:w-[85vw] lg:w-[25vw]">
            <div className="h-[90%]  relative flex justify-center items-center">
              {/* Spinner */}
              {isLoading && (
                <div className="absolute w-full h-full flex flex-col items-center justify-center bg-[#111111]/60 z-10">
                  <Loader2 className="h-16 w-16 animate-spin opacity-70" />
                  <h1 className=" text-white text-xl font-bold opacity-70">
                    Image loading
                  </h1>
                </div>
              )}
              <Image
                className="object-cover rounded-t-md bg-fixed  transition-opacity duration-1000"
                onLoad={() => setIsLoading(false)}
                src={"/images/pic2.jpeg"}
                priority
                alt="image"
                width={100}
                height={50}
                unoptimized
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="h-full w-full bg-[#111111]/60 absolute " />
            </div>
            <div className="flex items-center rounded-b-md bg-black justify-center p-4 font-semibold text-xl text-[#9d9d9d] md:text-4xl ">
              Sotware Enginneer
            </div>
          </div>
        </div>
        {/* text */}
        <div className="px-10 w-full flex flex-col justify-start lg-px-0 lg:pr-24 lg:mt-10 ">
          <div className="relative pb-2 border-b border-[#9d9d9d] ">
            <h1 className="text-[#9d9d9d]  font-medium text-2xl md:text-4xl ">
              About me
            </h1>
          </div>

          <div className=" flex flex-col gap-y-4 mt-10">
            <p className="text-[#9d9d9d] text-lg md:text-2xl mt-4">
              I am a passionate software engineer with a strong foundation in
              computer science and a keen interest in web development. I thrive
              on solving complex problems and creating efficient, scalable, and
              elegant software solutions.{" "}
            </p>
            <p className="text-[#9d9d9d] text-lg md:text-2xl">
              My journey in software development has equipped me with a diverse
              skill set, including proficiency in various programming languages,
              frameworks, and tools. I am committed to continuous learning and
              staying updated with the latest industry trends to deliver high
              quality solutions.{" "}
            </p>
          </div>
          <div className="flex flex-col  items-start py-10 ">
            <h3 className="text-[#9d9d9d] font-semibold text-xl md:text-2xl ">
              My background
            </h3>

            <div className="flex flex-col gap-y-4 pl-6 mt-4">
              <div className="flex items-start gap-x-4">
                <div className="h-10 w-10 flex justify-center items-start">
                  <FaCaretRight className="inline text-[#9d9d9d] text-2xl " />
                </div>
                <p className="text-[#9d9d9d] text-lg md:text-2xl">
                  Trainer for two years at Fongolab, Fongolab is a Tech
                  Laboratory at Hope Africa University Burudundi; Students get
                  to learn programing and involve in the comunity
                  <span>
                    <Link
                      href="https://fongolab.org"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-x-4">
                <div className="h-10 w-10 flex justify-center items-start">
                  <FaCaretRight className="inline text-[#9d9d9d] text-2xl " />
                </div>
                <p className="text-[#9d9d9d] text-lg md:text-2xl">
                  Deputy coordinator at Fongolab{" "}
                  <span>
                    <Link
                      href="https://fongolab.org"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-x-4">
                <div className="h-10 w-10 flex justify-center items-start">
                  <FaCaretRight className="inline text-[#9d9d9d] text-2xl " />
                </div>
                <p className="text-[#9d9d9d] text-lg md:text-2xl">
                  Mobile developer at Magis/Burundi{" "}
                  <span>
                    <Link
                      href="https://magis.bi/"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-x-4 ">
                <div className="h-10 w-10 flex justify-center items-start">
                  <FaCaretRight className="inline text-[#9d9d9d] text-2xl " />
                </div>
                <p className="text-[#9d9d9d] text-lg md:text-2xl">
                  Currently working as a program manager and software engineer
                  at Autafrika{" "}
                  <span>
                    <Link
                      href="https://www.autafrika.com/"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-x-4 ">
                <div className="h-10 w-10 flex justify-center items-start">
                  <FaCaretRight className="inline text-[#9d9d9d] text-2xl " />
                </div>
                <p className="text-[#9d9d9d] text-lg md:text-2xl">
                  Co-founder of Autafrika
                  <span>
                    <Link
                      href="https://www.autafrika.com/"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-x-4 ">
                <div className="h-10 w-10 flex justify-center items-start">
                  <FaCaretRight className="inline text-[#9d9d9d] text-2xl " />
                </div>
                <p className="text-[#9d9d9d] text-lg md:text-2xl">
                  Currently working as a software engineer at Humanitarian
                  Action for Africa{" "}
                  <span>
                    <Link
                      href="https://www.h-action-africa.org/en"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
