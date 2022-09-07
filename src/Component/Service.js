import React from "react";
import { FaCamera, FaLaptop, FaBrush } from "react-icons/fa";

const Service = () => {
  return (
    <div className="m-20 bg-[#f1f1f1]">
      <div className="flex justify-center ">
        <div className="w-[600px] p-5 ">
          <h1 className="text-4xl font-medium capitalize text-center tracking-wide ">
            our service
          </h1>
          <p className="text-center m-4 ">
            At about this time of year, some months after New Year’s resolutions
            have been made and kept, or made and neglected.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="ml-10 ">
          <div className="hover:text-blue-900 cursor-pointer">
            <div className="flex justify-center mb-7">
              <FaCamera className="text-blue-400 text-5xl " />
            </div>
            <p className="capitalize font-semibold text-2xl text-center">
              camera
            </p>
          </div>
          <p className="text-center mt-4">
            If you are an entrepreneur, you know that your success cannot depend
            on the opinions of others. Like the wind, opinions.
          </p>

          {/* <CountUp end={100} duration={1} />   */}
        </div>
        <div className="ml-10 ">
          <div className="hover:text-blue-900 cursor-pointer">
            <div className="flex justify-center mb-7">
              <FaLaptop className="text-blue-400 text-5xl " />
            </div>
            <p className="capitalize font-semibold text-2xl text-center">
              web development
            </p>
          </div>
          <p className="text-center mt-4">
            If you are an entrepreneur, you know that your success cannot depend
            on the opinions of others. Like the wind, opinions.
          </p>
        </div>
        <div className="ml-10 ">
          <div className="hover:text-blue-900 cursor-pointer">
            <div className="flex justify-center mb-7">
              <FaBrush className="text-blue-400 text-5xl " />
            </div>
            <p className="capitalize font-semibold text-2xl text-center">
              web designing
            </p>
          </div>
          <p className="text-center mt-4">
            If you are an entrepreneur, you know that your success cannot depend
            on the opinions of others. Like the wind, opinions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
