import React, { useRef, useEffect } from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useGlobalContext } from "../contex";

const Footer = () => {
  const { setFooterLenght } = useGlobalContext();
  const myref = useRef();

  useEffect(() => {
    setFooterLenght(myref.current.getBoundingClientRect().y);
  }, [myref.current]);

  return (
    <>
      <div className="flex p-20 justify-around bg-[#659dbd] text-white ">
        <div className="">
          <h1 className="text-2xl font-medium tracking-wide capitalize mb-6">
            about me
          </h1>
          <p className="font-mono">I am frontend developer</p>
        </div>
        <div className="">
          <h1 className="text-2xl font-medium capitalize mb-6 tracking-wide">
            Newsletter
          </h1>
          <p>Stay updated with our latest trends</p>
          <div className="flex">
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
        <div className="">
          <h1 className="text-2xl font-medium capitalize mb-6 tracking-wide">
            follow me
          </h1>
          <div className="flex -ml-4">
            <FaFacebookF className="w-12 h-7 cursor-pointer hover:scale-125 duration-200" />
            <FaInstagram className="w-12 h-7 cursor-pointer hover:scale-125 duration-200" />
            <FaTwitter className="w-12 h-7 cursor-pointer hover:scale-125 duration-200" />
          </div>
        </div>
      </div>
      <div ref={myref}></div>
    </>
  );
};

export default Footer;
