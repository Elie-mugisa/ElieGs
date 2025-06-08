"use client";
import React from "react";

import Link from "next/link";
import Navlinks from "../navigation/nav_link";
import { LiaLinkedin } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="min-h-[30vh] overflow-hidden border-t border-[#1e1e1e] flex flex-col gap-y-2 justify-between items-center  w-full bg-black py-10 px-6 lg:flex-row lg:px-24 ">
      <div className="w-full flex flex-col gap-4 items-start gap-y-8 ">
        <h2 className="text-[#9d9d9d] w-full text-center font-light text-xl lg:text-start ">
          Camponies that have trusted:
        </h2>
        <div className="flex flex-col gap-x-4 gap-y-2 items-center px-6 w-full md:w-auto md:flex-row md:px-2 lg:px-0  ">
          <Link
            href={"https://www.autafrika.com"}
            className="h-[10vh] w-[50vw] rounded-md bg-[#1f1f1f] lg:w-[10vw] "
          >
            <div className="flex-[1] h-full relative hover:flex-[4] ">
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
                className="object-cover flex-[1] bg-fixed rounded-sm transition-opacity duration-1000 hover:flex-[4]"
                onLoad={() => setIsLoading(false)}
                src={"/images/logo.png"}
                priority
                alt="image"
                width={100}
                height={50}
                unoptimized
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="absolute h-full w-full bg-[#111111]/50 top-0 left-0 z-20 " />
            </div>
          </Link>
          <div className="h-[2px] w-[60vw] bg-[#1f1f1f] md:h-[15vh] md:w-0.5 md:mr-4  " />
          <h3 className="text-[#9d9d9d] font-light text-xl text-center md:text-start ">
            autafrika.com
          </h3>
        </div>
        <div className="flex flex-col gap-y-2 items-center w-full px-6 md:w-auto md:px-2 lg:px-0 md:flex-row ">
          <Link
            href={"https://www.h-action-africa.org"}
            className="h-[10vh] w-[50vw] rounded-md bg-[#1f1f1f] mr-4 lg:w-[10vw] "
          >
            <div className="flex-[1] h-full relative hover:flex-[4] ">
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
                className="object-cover flex-[1] bg-fixed rounded-sm transition-opacity duration-1000 hover:flex-[4]"
                onLoad={() => setIsLoading(false)}
                src={"/images/human.png"}
                priority
                alt="image"
                width={100}
                height={50}
                unoptimized
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="absolute h-full w-full bg-[#111111]/50 top-0 left-0 z-20 " />
            </div>
          </Link>
          {/* <div className="h-10 w-0.5 bg-[#1f1f1f] mr-4 " /> */}
          <div className="h-[2px] w-[60vw] bg-[#1f1f1f] md:h-[15vh] md:w-0.5 md:mr-4  " />
          <h3 className="text-[#9d9d9d]  text-center w-[50vw] font-light text-xl md:text-start lg:w-auto ">
            Humanitarian Action for Africa.org
          </h3>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center gap-6 mt-10 md:flex-row lg:mt-0 lg:lg:gap-10 ">
        <div className="flex flex-col gap-6 items-center lg:gap-8 ">
          <div className="flex items-center gap-4">
            <Link
              href={"https://www.linkedin.com/in/elie-mugisa-87609325a/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaLinkedin className="text-blue-600 text-xl md:text-3xl " />
            </Link>
            <Link
              href={"https://wa.me/+25779882175"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="text-green-600 text-xl md:text-2xl " />
            </Link>
            {/* <Link href={"/"}   target="_blank"
      rel="noopener noreferrer">
          <FaFacebook className="text-blue-500 text-xl md:text-2xl " />
        </Link> */}
            <Link
              href={"https://github.com/Elie-mugisa"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="text-white text-xl md:text-2xl " />
            </Link>
            <Link
              href={"mailto:eliemugisa777@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-white text-xl md:text-2xl " />
            </Link>
          </div>
          <p className="text-[#9d9d9d] text-center ">
            CopyRight &copy; 2025. All Right Reserved
          </p>
        </div>
        <div className="h-[2px] w-[60vw] bg-[#1f1f1f] md:h-[15vh] md:w-0.5 " />
        <div className="flex gap-4 justify-start flex-col">
          <Navlinks label="Home" url="/" />
          <Navlinks label="About me" url="/#about" />
          <Navlinks label="Services" url="/#services" />
          <Navlinks label="My works" url="/#realisation" />
          <Navlinks label="Contact me" url="/contact" />
        </div>
      </div>
    </div>
  );
}
