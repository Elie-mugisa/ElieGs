import NavContainer from "@/components/navigation/nav_container";
import AboutSection from "@/components/ui/about_section";
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
    </div>
  );
}
