import React, { useRef, useEffect } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useGlobalContext } from "../contex";

const Footer = () => {
  const { setFooterLenght, nightMood } = useGlobalContext();
  const myref = useRef();

  useEffect(() => {
    setFooterLenght(myref.current.getBoundingClientRect().y);
  }, [myref.current]);

  return (
    <section id="contact">
      <div
        className={`md:flex md:p-20 pt-5 pb-5 mt-10 mb-5 md:justify-around ${
          nightMood ? "bg-gray-700" : "bg-[#659dbd]"
        } text-white`}
      >
        <div className="">
          <h1 className="text-2xl font-medium tracking-wide capitalize md:mb-6 text-center">
            about me
          </h1>
          <p className="font-mono text-center">I am frontend developer</p>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="text-2xl font-medium capitalize md:mb-6 tracking-wide text-center">
            Newsletter
          </h1>
          <p className="text-center md:text-left">
            Stay updated with our latest trends
          </p>
          <div className="flex justify-center">
            <input
              type="gmail"
              className="border-0 outline-none  h-12 text-black text-xl mt-2 pl-3"
              placeholder="enter your gamil"
            />
            <div className="bg-yellow-400 mt-2 flex items-center cursor-pointer">
              <FaArrowRight className="w-12 h-6 " />
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <h1 className="text-2xl font-medium capitalize md:mb-6 tracking-wide text-center">
            follow me
          </h1>
          <div className="flex -ml-4 justify-center">
            <FaFacebookF className="w-12 h-7 cursor-pointer hover:scale-125 duration-200" />
            <FaInstagram className="w-12 h-7 cursor-pointer hover:scale-125 duration-200" />
            <FaTwitter className="w-12 h-7 cursor-pointer hover:scale-125 duration-200" />
          </div>
        </div>
      </div>
      <div ref={myref}></div>
    </section>
  );
};

export default Footer;
