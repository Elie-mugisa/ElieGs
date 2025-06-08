import React from "react";
import NavContainer from "@/components/navigation/nav_container";
import AboutSection from "@/components/ui/about_section";
import Footer from "@/components/ui/footer";
import GallerySection from "@/components/ui/gallery_section";
import Hero from "@/components/ui/hero";
import ServiceSection from "@/components/ui/service_section";
import WorksSection from "@/components/ui/works_section";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen  bg-[#111111] ">
      <NavContainer />
      <Hero />
      <AboutSection />
      <ServiceSection />
      <WorksSection />
      <div className="flex flex-col items-center justify-center bg-black mt-6 w-full  ">
        <div className="py-4  w-full flex justify-center pt-6 lg:pt-10 ">
          <h2 className="text-[#9d9d9d] font-bold text-2xl lg:text-6xl   ">
            Gallery
          </h2>
        </div>
        <GallerySection />
      </div>
      <Footer />
    </div>
  );
}
