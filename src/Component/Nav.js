import React from "react";
import { useGlobalContext } from "../contex";
import { TbMoonOff, TbMoon } from "react-icons/tb";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const Nav = () => {
  const { footerLength, nightMood, setNightMood } = useGlobalContext();

  const [openSideBar, setOpenSideBar] = useState(false);

  const onTop = (toppos) => {
    window.scrollTo({
      top: toppos,
      left: 0,
      behavior: "smooth",
    });
  };

  const handelNightMood = () => {
    setNightMood(!nightMood);
  };

  const headerlogo =
    "capitalize text-5xl mt-3 md:ml-20 font-serif text-yellow-400 cursor-pointer";
  const linkDiv = " mt-1";
  const headerUl = ` text-2xl md:text-white  tracking-wide md:flex ${
    nightMood ? "text-white" : ""
  }`;
  const headerLi =
    "cursor-pointer capitalize mr-2 p-3  hover:bg-yellow-300 hover:text-blue-900 duration-700 rounded-none md:rounded-2xl";
  return (
    <>
      <div
        className={`pb-2 flex justify-between ${
          nightMood ? "bg-black " : "bg-[#659dbd] "
        }fixed w-[100%] z-50`}
      >
        <div className={`${headerlogo} ml-5`}>my-side</div>
        <div className={`${linkDiv} mr-5 md:mr-14 flex`}>
          <div
            className={`${
              openSideBar ? "translate-x-0 " : "translate-x-[260px]"
            } h-screen md:h-auto md:translate-x-0 absolute top-[67px] md:top-1 ${
              nightMood ? "bg-gray-500" : "bg-gray-200"
            } md:bg-transparent w-[45%] md:w-auto right-0 md:right-32 duration-500`}
          >
            <ul className={`${headerUl}`}>
              <li
                className={`${headerLi} capitalize `}
                onClick={(e) => {
                  onTop(0);
                }}
              >
                home
              </li>
              <li
                className={`${headerLi}`}
                onClick={(e) => {
                  onTop(footerLength);
                }}
              >
                about us
              </li>
              <li className={`${headerLi}`}>
                <a href="#contact"> contact</a>
              </li>
            </ul>
          </div>
          <div
            className={`cursor-pointer m-3 md:hover:-translate-y-1 duration-200`}
          >
            {nightMood ? (
              <TbMoon
                className="text-3xl text-white"
                onClick={handelNightMood}
              />
            ) : (
              <TbMoonOff
                className="text-3xl text-white"
                onClick={handelNightMood}
              />
            )}
          </div>
          <div className="cursor-pointer mr-2 pt-3 md:hidden">
            <GoThreeBars
              className="text-white text-3xl"
              onClick={(e) => setOpenSideBar(!openSideBar)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
