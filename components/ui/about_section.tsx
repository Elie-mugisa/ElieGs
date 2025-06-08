"use client";
import React from "react";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { FaCaretRight } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { useState } from "react";
import { FaLinux } from "react-icons/fa";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function AboutSection() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div id="about" className=" bg-[#111111] relative py-8 w-full  ">
      <FaLinux className="text-9xl text-[#9d9d9d]/30 absolute bottom-20 right-20 z-20 " />
      <div className="flex bg-[#111111] flex-col-reverse gap-x-14 gap-y-10 items-center  md:py-14 lg:flex-row lg:items-start ">
        {/* picture */}
        <Fade direction="up" duration={800} triggerOnce>
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
        </Fade>
        {/* text */}
        <div className="px-10 w-full flex flex-col justify-start lg-px-0 lg:pr-24 lg:mt-10 ">
          <div className="relative pb-2 border-b border-[#9d9d9d] ">
            <h1 className="text-[#9d9d9d]  font-medium text-2xl md:text-4xl ">
              About me
            </h1>
          </div>

          <div className=" flex flex-col gap-y-4 mt-10">
            <Fade duration={500} direction="up" triggerOnce>
              <p className="text-[#9d9d9d] text-lg md:text-2xl mt-4">
                I am a passionate software engineer with a strong foundation in
                computer science and a keen interest in web development. I
                thrive on solving complex problems and creating efficient,
                scalable, and elegant software solutions.{" "}
              </p>
            </Fade>
            <Fade duration={500} direction="up" triggerOnce>
              <p className="text-[#9d9d9d] text-lg md:text-2xl mt-4">
                My journey in software development has equipped me with a
                diverse skill set, including proficiency in various programming
                languages, frameworks, and tools. I am committed to continuous
                learning and staying updated with the latest industry trends to
                deliver high quality solutions.{" "}
              </p>
            </Fade>
          </div>
          <div className="flex flex-col  items-start py-10 ">
            <Fade duration={500} direction="up" triggerOnce>
              <h3 className="text-[#9d9d9d] font-semibold text-xl md:text-2xl ">
                My background
              </h3>
            </Fade>

            <div className="flex flex-col gap-y-4 pl-2 mt-4 md:pl-4 ">
              {/* <Fade duration={500} direction="up" triggerOnce></Fade> */}
              <Fade duration={500} direction="up" triggerOnce>
                <div className="flex items-center gap-x-4 bg-[#111111] shadow-xl shadow-[#131313] p-4 rounded-md border border-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-101 ">
                  <p className="text-[#9d9d9d] flex-[4] font-light text-base md:text-xl">
                    Trainer for two years at Fongolab, Fongolab is a Tech
                    Laboratory at Hope Africa University Burudundi; Students get
                    to learn programing and involve in the comunity
                  </p>
                  <div className="flex-[1] h-[4vh] border-l border-[#2c2c2c] flex justify-center items-center lg:h-[4vh]">
                    <Link
                      href="https://fongolab.org"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </div>
                </div>
              </Fade>

              <Fade duration={600} direction="up" triggerOnce>
                <div className="flex items-center gap-x-4 bg-[#111111] shadow-xl shadow-[#131313] p-4 rounded-md border border-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-101 ">
                  <p className="text-[#9d9d9d] flex-[4] font-light text-base md:text-xl">
                    Deputy coordinator at Fongolab
                  </p>
                  <div className="flex-[1] h-[4vh] border-l border-[#2c2c2c] flex justify-center items-center lg:h-[4vh]">
                    <Link
                      href="https://fongolab.org"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </div>
                </div>
              </Fade>

              <Fade duration={600} direction="up" triggerOnce>
                <div className="flex items-center gap-x-4 bg-[#111111] shadow-xl shadow-[#131313] p-4 rounded-md border border-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-101 ">
                  <p className="text-[#9d9d9d] flex-[4] font-light text-base md:text-xl">
                    Mobile developer at Magis/Burundi
                  </p>
                  <div className="flex-[1] h-[4vh] border-l border-[#2c2c2c] flex justify-center items-center lg:h-[4vh]">
                    <Link
                      href="https://magis.bi/"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </div>
                </div>
              </Fade>

              <Fade duration={600} direction="up" triggerOnce>
                <div className="flex items-center gap-x-4 bg-[#111111] shadow-xl shadow-[#131313] p-4 rounded-md border border-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-101 ">
                  <p className="text-[#9d9d9d] flex-[4] font-light text-base md:text-xl">
                    Currently working as a program manager and software engineer
                    at Autafrika
                  </p>
                  <div className="flex-[1] h-[4vh] border-l border-[#2c2c2c] flex justify-center items-center lg:h-[4vh]">
                    <Link
                      href="https://www.autafrika.com/"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </div>
                </div>
              </Fade>
              <Fade duration={700} direction="up" triggerOnce>
                <div className="flex items-center gap-x-4 bg-[#111111] shadow-xl shadow-[#131313] p-4 rounded-md border border-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-101 ">
                  <p className="text-[#9d9d9d] flex-[4] font-light text-base md:text-xl">
                    Co-founder of Autafrika
                  </p>
                  <div className="flex-[1] h-[4vh] border-l border-[#2c2c2c] flex justify-center items-center lg:h-[4vh]">
                    <Link
                      href="https://www.autafrika.com/"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </div>
                </div>
              </Fade>
              <Fade duration={800} direction="up" triggerOnce>
                <div className="flex items-center gap-x-4 bg-[#111111] shadow-xl shadow-[#131313] p-4 rounded-md border border-[#2c2c2c] cursor-pointer transition-all duration-300 hover:scale-101 ">
                  <p className="text-[#9d9d9d] flex-[4] font-light text-base md:text-xl">
                    Currently working as a software engineer at Humanitarian
                    Action for Africa
                  </p>
                  <div className="flex-[1] h-[4vh] border-l border-[#2c2c2c] flex justify-center items-center lg:h-[4vh]">
                    <Link
                      href="https://www.h-action-africa.org/en"
                      target="_blank"
                      className="text-[#9d9d9d] hover:text-white transition-colors duration-300 ml-2"
                    >
                      <HiExternalLink className="inline text-xl md:text-3xl" />
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
