import NavContainer from "@/components/navigation/nav_container";
import Hero from "@/components/ui/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center relative min-h-screen  ">
      <NavContainer />
      <Hero />
    </div>
  );
}
