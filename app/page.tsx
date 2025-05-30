import NavContainer from "@/components/navigation/nav_container";
import AboutSection from "@/components/ui/about_section";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen  ">
      <NavContainer />
      <Hero />
      <AboutSection />
    </div>
  );
}
