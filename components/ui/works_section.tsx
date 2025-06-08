"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

export default function WorksSection() {
  return (
    <div
      id="realisation"
      className="py-6 px-6 w-full flex flex-col gap-8 bg-[#111111] md:gap-10 md:px-8 lg:px-24  md:py-10"
    >
      <HeaderWorksSection />
      <WorksGrid />
      <h2 className="text-[#9d9d9d] font-semibold text-xl md:text-2xl ">
        Contributions
      </h2>
      <ContributionsGrid />
    </div>
  );
}

function HeaderWorksSection() {
  return (
    <div className="py-4 w-full flex flex-col">
      <h1 className="text-3xl font-bold text-white md:text-6xl">
        Check my works
      </h1>
      <p className="text-base font-light text-[#9d9d9d] mt-6 md:text-xl">
        A showcase of recent projects where I’ve applied my skills in design,
        development, and problem-solving to build effective digital solutions
      </p>
    </div>
  );
}

function WorksGrid() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Link
        href={"https://www.h-action-africa.org"}
        className="p-2 rounded-md bg-[#161616] flex flex-col md:p-4"
      >
        <div className="w-full h-[20vh] relative ">
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
            className="object-cover bg-fixed rounded-sm transition-opacity duration-1000"
            onLoad={() => setIsLoading(false)}
            src={"/images/haa.png"}
            priority
            alt="image"
            width={100}
            height={50}
            unoptimized
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="pt-2 flex flex-col gap-y-4
        "
        >
          <h1 className="text-[#9d9d9d] font-semibold text-xl md:text-2xl ">
            Humanitarian Action for Africa
          </h1>
          <p className="text-base text-[#9d9d9d] ">
            A humanitarian organization founded on Christian values, working to
            meet urgent and development needs in the DRC...
          </p>
          <div className="pt-2 p-2 flex justify-between items-center bg-black text-[#9d9d9d] ">
            <p className="text-white text-base ">Web application</p>
            <FaExternalLinkAlt />
          </div>
        </div>
      </Link>

      <Link
        href={"https://fongolab.com/"}
        className="p-2 rounded-md bg-[#161616] flex flex-col md:p-4"
      >
        <div className="w-full h-[20vh] relative ">
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
            className="object-cover bg-fixed rounded-sm transition-opacity duration-1000"
            onLoad={() => setIsLoading(false)}
            src={"/images/fongo.png"}
            priority
            alt="image"
            width={100}
            height={50}
            unoptimized
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="pt-2 flex flex-col gap-y-4
        "
        >
          <h1 className="text-[#9d9d9d] text-xl font-semibold md:text-2xl ">
            Fongolab
          </h1>
          <p className="text-base text-[#9d9d9d] ">
            A Tech-laboratory where students learn coding, a prototype version
            of web application serving also as a didactic material to guide
            learners.
          </p>
          <div className="pt-2 p-2 flex justify-between items-center bg-black text-[#9d9d9d] ">
            <p className="text-white text-base ">Web application</p>
            <FaExternalLinkAlt />
          </div>
        </div>
      </Link>

      <Link
        href={"https://template-eglise.vercel.app/"}
        className="p-2 rounded-md bg-[#161616] flex flex-col md:p-4"
      >
        <div className="w-full h-[20vh] relative ">
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
            className="object-cover bg-fixed rounded-sm transition-opacity duration-1000"
            onLoad={() => setIsLoading(false)}
            src={"/images/template.png"}
            priority
            alt="image"
            width={100}
            height={50}
            unoptimized
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="pt-2 flex flex-col gap-y-4
        "
        >
          <h1 className="text-[#9d9d9d] text-xl font-semibold md:text-2xl ">
            Tabernacle Chretien Kalemi
          </h1>
          <p className="text-base text-[#9d9d9d] ">
            Prototype version of the web application for &quot;Eglise Tabernacle
            Chretien de Kalemi&quot;
          </p>
          <div className="pt-2 p-2 flex justify-between items-center bg-black text-[#9d9d9d] ">
            <p className="text-white text-base ">Web application</p>
            <FaExternalLinkAlt />
          </div>
        </div>
      </Link>
    </div>
  );
}

function ContributionsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Link
        href={"https://autafrika.com/"}
        className="p-2 rounded-md bg-[#161616] flex flex-col md:p-4"
      >
        <div className="w-full h-[20vh] relative ">
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
            className="object-cover bg-fixed rounded-sm transition-opacity duration-1000"
            onLoad={() => setIsLoading(false)}
            src={"/images/autafrika.png"}
            priority
            alt="image"
            width={100}
            height={50}
            unoptimized
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="pt-2 flex flex-col gap-y-4
        "
        >
          <h1 className="text-[#9d9d9d] text-xl font-semibold md:text-2xl ">
            Autafrika
          </h1>
          <p className="text-base text-[#9d9d9d] ">
            A technology company dedicated to developing innovative digital
            solutions tailored to address real challenges faced by African
          </p>
          <p className="text-base text-[#9d9d9d] ">
            Contributed as web app developer
          </p>
          <div className="pt-2 p-2 flex justify-between items-center bg-black text-[#9d9d9d] ">
            <p className="text-white text-base ">Web application</p>
            <FaExternalLinkAlt />
          </div>
        </div>
      </Link>

      <Link
        href={"https://agroflex.vercel.app/"}
        className="p-2 rounded-md bg-[#161616] flex flex-col md:p-4"
      >
        <div className="w-full h-[20vh] relative ">
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
            className="object-cover bg-fixed rounded-sm transition-opacity duration-1000"
            onLoad={() => setIsLoading(false)}
            src={"/images/agro.png"}
            priority
            alt="image"
            width={100}
            height={50}
            unoptimized
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="pt-2 flex flex-col gap-y-4
        "
        >
          <h1 className="text-[#9d9d9d] text-xl font-semibold md:text-2xl ">
            AgroFlex
          </h1>
          <p className="text-base text-[#9d9d9d] ">
            A platform serving as a demo for the mobile application, agroflex is
            digital solution for optimizing the agriculcuture&apos;s sector.
          </p>
          <p className="text-base text-[#9d9d9d] ">
            Contributed as mobile developer on the mobile app AgroFlex
          </p>
          <div className="pt-2 p-2 flex justify-between items-center bg-black text-[#9d9d9d] ">
            <p className="text-white text-base ">Mobile app</p>
            <FaExternalLinkAlt />
          </div>
        </div>
      </Link>

      <Link
        href={"https://ihela.bi/"}
        className="p-2 rounded-md bg-[#161616] flex flex-col md:p-4"
      >
        <div className="w-full h-[20vh] relative ">
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
            className="object-cover bg-fixed rounded-sm transition-opacity duration-1000"
            onLoad={() => setIsLoading(false)}
            src={"/images/ihela.png"}
            priority
            alt="image"
            width={100}
            height={50}
            unoptimized
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="pt-2 flex flex-col gap-y-4
        "
        >
          <h1 className="text-[#9d9d9d] text-xl font-semibold md:text-2xl ">
            iHelá Ryanje
          </h1>
          <p className="text-base text-[#9d9d9d] ">
            iHelá Ryanje is a Platform for digital financial services and new
            means of payments located in Bujumbura/BURUNDI
          </p>
          <p className="text-base text-[#9d9d9d] ">
            Contributed as mobile developer on the app iHelá Ryanje
          </p>
          <div className="pt-2 p-2 flex justify-between items-center bg-black text-[#9d9d9d] ">
            <p className="text-white text-base ">Mobile app</p>
            <FaExternalLinkAlt />
          </div>
        </div>
      </Link>
    </div>
  );
}
