import React from "react";
import Calculator from "../assets/portfolio/Calculator.png";
import to_do_list from "../assets/portfolio/To_do_list.png";
import searching from "../assets/portfolio/Searching.png";
import weather from "../assets/portfolio/Weather.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Calculator,
    },
    {
      id: 2,
      src: to_do_list,
    },
    {
      id: 3,
      src: searching,
    },
    {
      id: 4,
      src: weather,
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" px-2 py-2 m-2 duration-100 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
