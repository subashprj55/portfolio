import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../contex";

const NumberLoader = () => {
  const { nightMood } = useGlobalContext();

  const [isopen, setIsOpen] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!isopen && inView) {
      setIsOpen(true);
    }
  }, [inView]);
  return (
    <div>
      <div ref={ref}></div>
      <div
        className={`${
          nightMood ? "bg-gray-700" : "bg-blue-100"
        }   md:p-20 mb-10 flex`}
      >
        {isopen && (
          <div className="md:ml-20 ml-5">
            <h1
              className={`text-4xl font-medium capitalize text-center tracking-wide mb-10 ${
                nightMood ? "text-white" : ""
              }`}
            >
              programming skills
            </h1>
            <div className="mt-auto mb-auto">
              <p className={`${nightMood ? "text-white" : ""} text-3xl`}>
                HTML
              </p>
              <div className="md:w-[250%] w-full h-2 bg-gray-600 rounded-lg mt-4 mb-7">
                <div className="h-2 bg-[#e91e63] w-[0%] rounded-lg animate-html">
                  <span className="text-sm -mt-3 -mr-4 h-[35px] w-[35px] rounded-full bg-blue-100 border border-spacing-2 border-[#00bcd4] float-right flex justify-center items-center">
                    {" "}
                    <CountUp end={93} duration={2} /> %
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto mb-auto">
              <p className={`${nightMood ? "text-white" : ""} text-3xl`}>CSS</p>
              <div className="md:w-[250%] w-full h-2 bg-gray-600 rounded-lg mt-4 mb-7">
                <div className="h-2 bg-yellow-400 w-[0%] rounded-lg animate-css">
                  <span className="text-sm -mt-3 -mr-4 h-[35px] w-[35px] rounded-full bg-blue-100 border border-spacing-2 border-red-600 float-right flex justify-center items-center">
                    {" "}
                    <CountUp end={88} duration={2} /> %
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-auto mb-auto">
              <p className={`${nightMood ? "text-white" : ""} text-3xl `}>
                JavaScript
              </p>
              <div className="md:w-[250%] w-full h-2 bg-gray-600 rounded-lg mt-4 mb-7">
                <div className="h-2 bg-green-500 w-[0%] rounded-lg animate-js">
                  <span className="text-sm -mt-3 -mr-4 h-[35px] w-[35px] rounded-full bg-blue-100 border border-spacing-2 border-yellow-500 float-right flex justify-center items-center">
                    {" "}
                    <CountUp end={70} duration={2} /> %
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-auto mb-auto">
              <p className={`${nightMood ? "text-white" : ""} text-3xl `}>
                React
              </p>
              <div className="md:w-[250%] w-full h-2 bg-gray-600 rounded-lg mt-4 mb-7">
                <div className="h-2 bg-[#00bcd4] w-[0%] rounded-lg animate-react">
                  <span className="text-sm -mt-3 -mr-4 h-[35px] w-[35px] rounded-full bg-blue-100 border border-spacing-2 border-green-600 float-right flex justify-center items-center">
                    {" "}
                    <CountUp end={65} duration={2} /> %
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberLoader;
