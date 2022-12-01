import React from "react";
import {
  FaCamera,
  FaLaptop,
  FaBrush,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useGlobalContext } from "../contex";
import svg from "../img/a.png";

const Service = () => {
  const { nightMood } = useGlobalContext();
  return (
    <div className="md:pb-20 md:pt-20 ">
      {/* {nightMood ? (
        ""
      ) : (
        <div className="md:ml-10 md:mr-10 ">
          <img src={svg} className="min-w-full h-36"></img>
        </div>
      )} */}

      <div
        className={`${
          nightMood ? "mt-20" : ""
        } md:mr-10 md:ml-10 mb-10 p-5 pb-10 ${
          nightMood ? "bg-gray-700 " : "bg-[#f1f1f1]"
        } `}
      >
        <div className="flex justify-center ">
          <div className="w-[700px] p-5 ">
            <h1
              className={`text-4xl font-medium capitalize text-center tracking-wide ${
                nightMood ? "text-white" : ""
              }`}
            >
              About Me
            </h1>
            <p
              className={`text-center md:m-4 mb-5 text-xl ${
                nightMood ? "text-white" : ""
              }`}
            >
              I'm a Front-end developer based on Chitwan,who specialize in
              javascript techinologies.It's been more than a year, I have been
              working as a Front-end developer mainly on React. <br />
              <br /> I have a good understanding of web standards and best
              practices. I am passionate about creating websites that are user
              friendly and visually appealing. I love to writing clean readable
              code that's easy to maintain over time.I constantly work on
              improving myself seeking to achive the best version of myself.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className=" md:w-[25%] mb-7 md:mb-0">
            <div className="hover:text-blue-900 cursor-pointer">
              <div className="flex justify-center md:mb-7">
                <FaHtml5 className="text-blue-500 text-9xl animate-[pulse_5s_ease-in-out_infinite]" />
              </div>
              <p
                className={`${
                  nightMood ? "text-white" : ""
                } capitalize font-semibold text-2xl text-center`}
              >
                HTML
              </p>
            </div>
          </div>
          <div className=" md:w-[25%] md:mb-0 mb-7">
            <div className="hover:text-blue-900 cursor-pointer">
              <div className="flex justify-center md:mb-7">
                <FaCss3Alt className="text-blue-500 text-9xl animate-scall" />
              </div>
              <p
                className={`${
                  nightMood ? "text-white" : ""
                } capitalize font-semibold text-2xl text-center`}
              >
                CSS
              </p>
            </div>
          </div>
          <div className=" md:w-[25%]">
            <div className="hover:text-blue-900 cursor-pointer">
              <div className="flex justify-center md:mb-7">
                <FaReact className="text-blue-500 text-9xl animate-[spin_50s_linear_infinite]" />
              </div>
              <p
                className={`${
                  nightMood ? "text-white" : ""
                } capitalize font-semibold text-2xl text-center`}
              >
                React
              </p>
            </div>
          </div>
          <div className=" md:w-[25%]">
            <div className="hover:text-blue-900 cursor-pointer">
              <div className="flex justify-center md:mb-7">
                <SiTailwindcss className="text-blue-500 text-9xl  animate-[bounce_5s_linear_infinite]" />
              </div>
              <p
                className={`${
                  nightMood ? "text-white" : ""
                } capitalize font-semibold text-2xl text-center`}
              >
                Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
