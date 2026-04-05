
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-16">
      {/* 🔵 STORY SECTION */}
      <div className="flex items-center justify-between lg:flex-row flex-col gap-10 mb-10">
        {/* TEXT */}
        <div className="w-full lg:w-1/2">
          <p className="bg-gray-400 text-xs sm:text-sm font-bold px-4 py-2 rounded-full text-white w-fit">
            OUR STORY
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pt-5 leading-snug">
            Redefining Seamless Relocation Across India!
          </h1>

          <p className="text-base sm:text-lg lg:text-xl pt-5 leading-relaxed">
            ShiftSmart is a modern relocation platform designed to make moving
            simple and stress-free. We handle home, office, and vehicle shifting
            with a focus on safety, speed, and affordability. With trusted
            partners and a growing presence across multiple cities, we ensure
            reliable service every time. Our goal is to make every move secure,
            efficient, and truly hassle-free.
          </p>

          <Link to={"/contact"}>
            <button className="uppercase flex items-center gap-x-2 hover:bg-gray-400 hover:text-white text-xs sm:text-sm cursor-pointer font-bold mt-6 pl-2 text-blue-700 transition">
              contact now
              <span className="bg-gray-700 text-white p-1 rounded">
                <ArrowUpRight strokeWidth={1.5} />
              </span>
            </button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-96">
          <img
            src="./package.jpg"
            alt="package"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* 🔵 FOUNDER SECTION */}
      <div className="text-center flex items-center justify-center flex-col lg:mt-16 gap-6">
        <p className="bg-gray-400 text-sm font-bold px-4 py-2 rounded-full text-white ">
          Our Founder & CEO
        </p>
        <div className="flex items-center justify-center lg:flex-row flex-col lg:h-96">
          {/* founder img */}
          <img
            src="./founder.jpg"
            alt="founder"
            className="w-64 shadow-2xl rounded-tr-3xl lg:rounded-bl-3xl"
          />
          <div className="bg-gray-200 w-64 h-full shadow-2xl rounded-bl-3xl lg:rounded-br-3xl text-left lg:rounded-tl-3xl p-5">
            <h1 className="text-sm font-semibold">Suraj Dubey</h1>
            <p className="text-xs pt-1 pb-3 border-black border-b">
              Founder & CEO
            </p>

            <p className="text-xs font-thin pt-5">
              With over 13 years of experience in Human Resources at companies
              like Nokia and Vodafone, Ajay Tiwari understands the challenges
              employees face during relocations.
            </p>

            <p className="text-xs text-blue-600 font-thin pt-5">
              “Relocations shouldn’t be stressful — they should be seamless,
              secure, and supported by technology.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
