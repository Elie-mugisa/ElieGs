import { PiBagSimpleFill, PiDevices } from "react-icons/pi";
// import ServiceCard from "./box/service_card";
import { MdDevicesOther, MdSpaceDashboard } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";

export default function ServiceSection() {
  return (
    <div
      id="services"
      className="service py-6 px-2 w-full flex flex-col justify-center items-center gap-6 md:gap-8 md:py-10 md:px-24 "
    >
      <HeaderSection />
      <ServiceGrid />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="py-4 w-full flex flex-col">
      <h1 className="text-3xl font-bold text-white md:text-6xl">
        Looking for a developer to bring your project to life?
      </h1>
      <p className="text-xl font-semibold text-[#9d9d9d] mt-6 md:text-2xl">
        Let’s build something great together.
      </p>
      <p className="text-base  text-[#9d9d9d] mt-6 md:text-xl">
        As a software developer, I can turn your idea into several digital
        solution
      </p>
    </div>
  );
}

function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      <div className="bg-black flex flex-col gap-2 justify-center items-center rounded-md p-2 md:p-4">
        <PiDevices className="text-[#9d9d9d] text-9xl " />
        <div className="text-white text-center flex flex-col justify-center items-center gap-6 text-xl p-4 md:text-2xl ">
          <h2 className="text-2xl font-bold leading-12 md:leading-14  md:text-2xl ">
            Crafting Modern,{" "}
            <span className="relative">
              Responsive Websites{" "}
              <div className="absolute left-0 -bottom-6  w-full h-6 bg_line " />{" "}
            </span>{" "}
            That Drive Results
          </h2>
          <p className="text-lg text-justify font-light text-[#9d9d9d] ">
            I specialize in designing and developing high-performance websites
            that are fast, responsive, and built with clean, scalable code.
            Whether you're a startup, small business, or enterprise, I create
            digital experiences that not only look great but also work
            seamlessly across all devices.
          </p>
        </div>
      </div>

      <div className="bg-black flex flex-col gap-2 justify-center items-center rounded-md p-2 md:p-4">
        <MdDevicesOther className="text-[#9d9d9d] text-9xl " />
        <div className="text-white text-center flex flex-col justify-center items-center gap-6 text-xl p-4 md:text-2xl ">
          <h2 className="text-2xl font-bold leading-12 md:leading-14  md:text-2xl ">
            Building Powerful{" "}
            <span className="relative">
              Web Applications{" "}
              <div className="absolute left-0 -bottom-6  w-full h-6 bg_line2 " />{" "}
            </span>{" "}
            for Modern Business Needs
          </h2>
          <p className="text-lg text-justify font-light text-[#9d9d9d] ">
            I design and develop custom web applications that are fast, secure,
            and scalable — built to solve real-world problems and support your
            business goals. Whether you're launching a new product, automating
            internal workflows, or enhancing customer engagement, I deliver
            solutions that are tailored to your vision.
          </p>
        </div>
      </div>

      <div className="bg-black flex flex-col gap-2 justify-center items-center rounded-md p-2 md:p-4">
        <FaMobileAlt className="text-[#9d9d9d] text-9xl " />
        <div className="text-white text-center flex flex-col justify-center items-center gap-6 text-xl p-4 md:text-2xl ">
          <h2 className="text-2xl font-bold leading-12 md:leading-14 md:text-2xl ">
            Creating Intuitive, High-Performance{" "}
            <span className="relative">
              Mobile Apps{" "}
              <div className="absolute left-0 -bottom-6  w-full h-6 bg_line3 " />{" "}
            </span>{" "}
          </h2>
          <p className="text-lg text-justify font-light text-[#9d9d9d] ">
            I develop custom mobile applications that are fast, reliable, and
            designed to deliver seamless experiences on both iOS and Android.
            Whether you need a native app, a cross-platform solution, or a
            mobile-first MVP, I help bring your vision to users’ fingertips.
          </p>
          <p className="text-lg text-justify font-light text-[#9d9d9d] ">
            From idea to launch — and beyond — I focus on clean code, modern
            UI/UX, and smooth performance to ensure your app not only works
            great, but truly connects with your users.
          </p>
        </div>
      </div>

      <div className="bg-black flex flex-col gap-2 justify-center items-center rounded-md p-2 md:p-4">
        <MdSpaceDashboard className="text-[#9d9d9d] text-9xl " />
        <div className="text-white text-center flex flex-col justify-center items-center gap-6 text-xl p-4 md:text-2xl ">
          <h2 className="text-2xl font-bold leading-12 md:leading-14 md:text-2xl ">
            <span className="relative">
              Designing{" "}
              <div className="absolute left-0 -bottom-6  w-full h-6 bg_line2 " />{" "}
            </span>{" "}
            Beautiful, User-Centered Websites That Make an Impact
          </h2>
          <p className="text-lg text-justify font-light text-[#9d9d9d] ">
            I create modern, visually engaging web designs that are not only
            beautiful — but purposeful. Every design is crafted with the user in
            mind, combining aesthetics with functionality to deliver seamless
            experiences across all devices.
          </p>
        </div>
      </div>

      <div className="bg-black flex flex-col gap-2 justify-center items-center rounded-md p-2 md:p-4">
        <PiBagSimpleFill className="text-[#9d9d9d] text-9xl " />
        <div className="text-white text-center flex flex-col justify-center items-center gap-6 text-xl p-4 md:text-2xl ">
          <h2 className="text-2xl font-bold leading-12 md:leading-14 md:text-2xl ">
            <span className="relative">
              Leading Software Projects{" "}
              <div className="absolute left-0 -bottom-6  w-full h-6 bg_line3 " />{" "}
            </span>{" "}
            from Idea to Execution
          </h2>
          <h3 className="text-xl font-bold  md:text-2xl">
            On Time, On Budget, On Point
          </h3>
          <p className="text-lg text-justify font-light text-[#9d9d9d] ">
            I specialize in managing software projects with clarity, precision,
            and a focus on results. From initial planning to final deployment, I
            coordinate teams, timelines, and technology to ensure your project
            stays aligned with your vision and business goals.
          </p>
          <p className="text-lg text-justify font-light text-[#9d9d9d] ">
            Whether it’s a startup MVP or a large-scale enterprise platform, I
            bridge the gap between technical execution and strategic direction —
            keeping stakeholders informed, developers focused, and progress
            measurable.
          </p>
        </div>
      </div>
    </div>
  );
}
