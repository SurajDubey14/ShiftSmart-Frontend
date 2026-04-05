import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

const Home = () => {
  const services = [
    {
      img: "./home.jpg",
      title: "Home Shifting",
      description: "Safe and secure relocation for your household items.",
    },
    {
      img: "./office.jpg",
      title: "Office Relocation",
      description: "Efficient office moves with minimal downtime.",
    },
    {
      img: "./transport.jpg",
      title: "Vehicle Transport",
      description: "Reliable transport for your cars and bikes.",
    },
  ];
  const choose = [
    {
      title: "Fast Service",
      description:
        "We ensure quick and timely shifting without unnecessary delays, saving your valuable time",
    },
    {
      title: "Affordable",
      description:
        "High-quality services at budget-friendly prices with no hidden charges",
    },
    {
      title: "Safe & Secure",
      description:
        "Your belongings are handled with care, ensuring secure packing and damage-free delivery every time",
    },
  ];
  const works = [
    {
      title: "Book Your Service",
      description: "Choose your shifting type and schedule your date easily.",
    },
    {
      title: "Packing & Pickup",
      description:
        "We pack your belongings safely and pick them up from your location.",
    },
    {
      title: "Safe Transportation",
      description:
        "Your items are transported securely with care and reliability.",
    },
    {
      title: "Delivery & Setup",
      description:
        "We deliver on time and place everything as per your instructions.",
    },
  ];

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start end", "center center"],
  // });

  // const clipPath = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"],
  // );

  return (
    <div className="">
      {/* 🔵 HERO SECTION */}
      <section className="h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./relocationbanner.jpg')] bg-cover bg-center text-white flex text-center items-center flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Move Smarter with ShiftSmart
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
          Hassle-free shifting services for homes, offices, and more.
        </p>
        <Link to="/booking">
          <button className="bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Book Your Slot
          </button>
        </Link>
      </section>

      {/* <motion.div ref={ref} style={{ clipPath }} >
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" className="bg-black" alt="Revealed image" />
      </motion.div> */}

      {/* ⚪ SERVICES */}
      <section className="py-16 px-3 lg:px-6 bg-[#F7F7F7] flex flex-col items-center justify-center">
        <p className="bg-white rounded-full px-4 py-2 font-medium text-sm">
          Trusted by thousand of people +
        </p>
        <h2 className="text-3xl text-blue-400 py-4 leading-snug text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 w-full lg:max-w-7xl lg:mx-auto lg:px-4">
          {services.map((items, index) => {
            return (
              <div key={index} className="bg-white p-5 rounded-xl">
                <div>
                  <img
                    src={items.img}
                    alt=""
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h1 className="text-md font-semibold ">{items.title}</h1>
                  <p className="text-gray-500 py-1 "> {items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 🔵 FEATURES */}
      <section className=" bg-black py-16 px-3 lg:px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">
          Why Choose <span className="text-blue-600">ShiftSmart?</span>
        </h2>

        <div className="flex items-center justify-center lg:flex-row flex-col gap-x-4">
          {/* Right side */}
          <div className="hidden lg:block">
            <img
              src="./package.jpg"
              alt=""
              className="w-84 h-96 object-cover rounded-xl"
            />
          </div>

          {/* Left side */}
          <div className="flex flex-col justify-center gap-y-8">
            {choose.map((items, index) => {
              return (
                <div className="pl-5  pt-5 lg:p-0 flex  items-start lg:items-center text-white justify-center gap-x-4">
                  <div className="bg-white text-sm px-3 py-1.5 text-black rounded-full font-bold">
                    {index + 1}
                  </div>
                  <div className="data text-left">
                    <h1 className="text-md font-bold ">{items.title}</h1>
                    <p className=" py-1 w-full lg:w-96 text-gray-400">
                      {" "}
                      {items.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ⚪ HOW IT WORKS */}
      <section className="py-16 px-3 lg:px-6 text-center ">
        <h2 className="text-3xl font-bold mb-10">
          How It <span className="text-blue-600">Works?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {works.map((items, index) => {
            return (
              <div className="bg-gray-300 group hover:bg-blue-700 hover:text-white flex items-start justify-center gap-x-4 p-4 lg:py-5 rounded-2xl">
                <div className="bg-white group-hover:text-blue-700  text-sm px-3 py-1.5  font-bold rounded-full">
                  {index + 1}
                </div>
                <div className="data text-left">
                  <h1 className="text-md font-bold ">{items.title}</h1>
                  <p className=" py-1 w-full lg:w-96 font-thin">
                    {" "}
                    {items.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Home;
