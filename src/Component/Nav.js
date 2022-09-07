import React from "react";
import { useGlobalContext } from "../contex";

// #242582
//553D67
//99738E
//7beec1
const Nav = () => {
  const { footerLength } = useGlobalContext();

  const onTop = () => {
    window.scrollTo({
      top: footerLength,
      left: 0,
      behavior: "smooth",
    });
  };

  const headerDiv = "bg-[#659dbd] pb-3";
  const headerlogo =
    "capitalize text-6xl mt-5 ml-20 font-serif text-yellow-400 cursor-pointer";
  const linkDiv = "mr-20 mt-5";
  const headerUl = " text-2xl text-white tracking-wide flex";
  const headerLi =
    "cursor-pointer capitalize mr-2 p-5  hover:bg-yellow-300 hover:text-blue-900 duration-700 rounded-2xl";
  return (
    <>
      <div className={` flex justify-between ${headerDiv}`}>
        <div className={`${headerlogo}`}>my-side</div>
        <div className={`${linkDiv}`}>
          <ul className={`${headerUl}`}>
            <li className={`${headerLi}`}>
              <button className="capitalize"> home</button>
            </li>
            <li className={`${headerLi}`} onClick={onTop}>
              about us
            </li>
            <li className={`${headerLi}`}>contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
