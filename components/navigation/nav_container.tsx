"use client";

import { FaFacebook, FaGithubSquare, FaLaptopCode } from "react-icons/fa";
import Navlinks from "./nav_link";
import Link from "next/link";
import { LiaLinkedin } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function NavContainer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="backdrop-blur-md bg-[#111111]/30 w-[90vw] z-50 border border-white/30 rounded-md flex start items-center justify-between px-4 py-1 fixed top-5 md:w-[80vw] ">
      {/* logo */}
      <Link href={"/"} className="logo  ">
        <FaLaptopCode className="inline font-black text-4xl text-[#9d9d9d] md:text-6xl" />
      </Link>
      {/* menu */}
      <div className="hidden items-center gap-12 md:flex">
        <Navlinks label="Home" url="/" />
        <Navlinks label="About me" url="/#about" />
        <Navlinks label="Services" url="/#services" />
        <Navlinks label="My works" url="/#realisation" />
        <Navlinks label="Contact me" url="/contact" />
      </div>

      {/* social links */}
      <div className="flex items-center gap-4 md:gap-6">
        <Link href={"/"}>
          <LiaLinkedin className="text-blue-600 text-xl md:text-3xl " />
        </Link>
        <Link href={"/"}>
          <BsWhatsapp className="text-green-600 text-xl md:text-2xl " />
        </Link>
        <Link href={"/"}>
          <FaFacebook className="text-blue-500 text-xl md:text-2xl " />
        </Link>
        <Link href={"/"}>
          <FaGithubSquare className="text-white text-xl md:text-2xl " />
        </Link>
        <Link href={"/"}>
          <MdEmail className="text-white text-xl md:text-2xl " />
        </Link>
        <div className="flex items-center gap-4 md:hidden">
          <div className="h-6 w-0.5 bg-white/30 " />
          <MenuIcon
            onClick={() => setOpenModal(!openModal)}
            className="text-white text-3xl "
          />
        </div>
      </div>

      {/* MODAL */}
      <div
        onClick={(e) => {
          if (e.currentTarget == e.target) {
            setOpenModal(!openModal);
          }
        }}
        className={`fixed left-0 top-[7vh] backdrop-blur-lg  w-full h-screen bg-[#111111]/80 transition-all duration-500  ${
          openModal ? "  opacity-100  " : " opacity-0 pointer-events-none "
        } `}
      >
        <div
          className={`bg-black h-[60vh] flex flex-col gap-4 px-6 py-10 w-[60vw] ml-auto rounded-bl-lg  transition-all duration-300 ${
            openModal ? " translate-x-0 " : "translate-x-full"
          } `}
        >
          <div onClick={() => setOpenModal(!openModal)}>
            <Navlinks label="Home" url="/" />
          </div>
          <div onClick={() => setOpenModal(!openModal)}>
            <Navlinks label="About me" url="/#about" />
          </div>
          <div onClick={() => setOpenModal(!openModal)}>
            <Navlinks label="Services" url="/#services" />
          </div>
          <div onClick={() => setOpenModal(!openModal)}>
            <Navlinks label="My works" url="/#realisation" />
          </div>
          <div onClick={() => setOpenModal(!openModal)}>
            <Navlinks label="Contact me" url="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
