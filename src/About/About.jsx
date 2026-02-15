import React from "react";
import { useOutletContext } from "react-router";
import { PartnersData } from "../Data/Data";

export default function About() {
  const theme = useOutletContext();
  return (
    <section
      className={`${theme === "dark" ? "bg-gray-600 text-white" : "bg-gray-200 text-black"}`}
    >
      {/* ! About La Lactiere */}
      <div className="flex flex-col md:flex-row md:justify-center items-center mx-4 my-10">
        <div className="md:w-[50%]">
          <h2 className="gradiant-title text-4xl lg:text-5xl font-bold my-3 ml-5">
            | About La Lactiere
          </h2>
          <p className="text-start lg:text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis vitae
            perferendis laudantium reiciendis harum modi numquam velit ipsa.
            Sint, repellat!
          </p>
        </div>
        <div className="md:w-[50%] flex items-center justify-center">
          <img
            src="./Images/Logo_Entreprise.jpg"
            className="size-80 mt-5 md:mt-0 lg:size-110 rounded-md shadow-md scale-102 shadow-gray-400"
            alt=""
          />
        </div>
      </div>
      {/* ! About La Lactiere */}
      {/* ! About Elixire lactee */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center mx-4 my-10">
        <div className="md:w-[50%]">
          <h2 className="gradiant-title text-4xl lg:text-5xl font-bold my-3 ml-5">
            | About Elixire lactee
          </h2>
          <p className="text-start lg:text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis vitae
            perferendis laudantium reiciendis harum modi numquam velit ipsa.
            Sint, repellat!
          </p>
        </div>
        <div className="md:w-[50%] flex items-center justify-center">
          <img
            src="./Images/fond.jpg"
            className="size-80 mt-5 md:mt-0 lg:size-110 rounded-md shadow-md scale-102 shadow-gray-400"
            alt=""
          />
        </div>
      </div>
      {/* ! About Elixire lactee */}
      {/* ! About Our Partners */}
      <div className="container my-5">
        <h2 className="gradiant-title text-4xl md:text-5xl font-bold my-3 ml-5">
          | About Our Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-5 gap-5 place-items-center">
          {PartnersData.map((partner) => (
            <div
              className={`flex flex-col justify-center items-center px-6.5 w-80 lg:w-100 h-100 backface-hidden rounded-3xl shadow-md shadow-gray-400 ${theme === "dark" ? "bg-gray-600 text-white/90" : "bg-gray-100 text-black/80"}`}
            >
              <img
                src={partner.img}
                className={`size-30 p-1 object-cover border-2 rounded-full mb-6.25 ${theme === "dark" ? "border-white" : "border-gray-400"}`}
              />
              <h2 className="mb-3.75 text-3xl font-bold">{partner.name}</h2>
              <p className="mb-4 text-[14px] text-justify">
                {partner.description}
              </p>
              <a
                href={partner.link}
                className={`${theme === "dark" ? "border-white hover:text-white" : "border-black hover:text-black"} text-[15px] font-bold py-2.5 px-5 rounded-[10px] border bg-transparent  transition-all duration-300 hover:scale-[1.1]`}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* ! About Our Partners */}
    </section>
  );
}
