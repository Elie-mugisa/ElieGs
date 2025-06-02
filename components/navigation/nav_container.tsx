import { FaFacebook, FaGithubSquare, FaLaptopCode } from "react-icons/fa";
import Navlinks from "./nav_link";
import Link from "next/link";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function NavContainer() {
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
      </div>
    </div>
  );
}
