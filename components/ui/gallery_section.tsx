import GalleyCard from "./gallery_card";
import React from "react";

export default function GallerySection() {
  return (
    <div className="min-h-[68vh] w-full  px-4  py-14 bg-black flex justify-center items-center gap-4 lg:px-24 lg:gap-10 ">
      <div className="h-[28vh] flex-[1]  cursuor-auto border border-[#9d9d9d]/60 rounded-md overflow-hidden transition-all duration-500 hover:flex-[4] ">
        <GalleyCard imagePath="/images/cof.jpg" />
      </div>
      <div className="h-[40vh] flex-[1]  cursuor-auto border border-[#9d9d9d]/60 rounded-md overflow-hidden transition-all duration-500 hover:flex-[4] ">
        <GalleyCard imagePath="/images/pic2.jpeg" />
      </div>
      <div className="h-[58vh] flex-[1]  cursuor-auto border border-[#9d9d9d]/60 rounded-md overflow-hidden transition-all duration-500 hover:flex-[4] ">
        <GalleyCard imagePath="/images/pic1.JPG" />
      </div>
      <div className="h-[40vh] flex-[1]  cursuor-auto border border-[#9d9d9d]/60 rounded-md overflow-hidden transition-all duration-500 hover:flex-[4] ">
        <GalleyCard imagePath="/images/pic3.jpg" />
      </div>
      <div className="h-[28vh] flex-[1]  cursuor-auto border border-[#9d9d9d]/60 rounded-md overflow-hidden transition-all duration-500 hover:flex-[4] ">
        <GalleyCard imagePath="/images/sky.jpg" />
      </div>
    </div>
  );
}
