import React, { useState } from "react";
import { useGlobalContext } from "../contex";
import { myProject } from "./data";

const Projects = () => {
  const { nightMood } = useGlobalContext();
  const [items, setItems] = useState("all");

  const proBtn = `p-5 capitalize text-2xl  hover:underline hover:underline-offset-2 `;
  const activeBtn = `${nightMood ? "text-white" : "text-blue-500"}`;

  const showProject = (name, type, img, link) => {
    return (
      <div className="mb-14 md:mb-5 md:pl-10 md:ml-20 ">
        <div className="flex justify-center">
          <a href={link}>
            <img
              src={img}
              alt=""
              className="border rounded-3xl w-[350px] h-[280px] object-cover hover:cursor-pointer hover:scale-105 duration-300"
            />
          </a>
        </div>
        <h1
          className={`${
            nightMood ? "text-white" : ""
          } text-center text-2xl capitalize mt-3 tracking-wide font-medium`}
        >
          {name}{" "}
        </h1>
        <p
          className={`text-center text-xl ${
            nightMood ? "text-gray-300" : "text-gray-500"
          } `}
        >
          {type}{" "}
        </p>
      </div>
    );
  };
  return (
    <>
      <div className="md:m-20">
        <div
          className={`${
            nightMood ? "text-white" : ""
          } font-semibold text-4xl text-center md:pt-10 capitalize`}
        >
          my projects
        </div>
        <div className="flex justify-around md:justify-end md:pt-10 ml-5 md:ml-0 mr-5 md:mr-0">
          <button
            className={`${proBtn} ${
              items === "all"
                ? activeBtn
                : `${nightMood ? "text-blue-500" : ""}`
            } `}
            onClick={() => setItems("all")}
          >
            all
          </button>
          <button
            className={`${proBtn} ${
              items === "js" ? activeBtn : `${nightMood ? "text-blue-500" : ""}`
            }`}
            onClick={() => setItems("js")}
          >
            js
          </button>
          <button
            className={`${proBtn} ${
              items === "react"
                ? activeBtn
                : `${nightMood ? "text-blue-500" : ""}`
            }`}
            onClick={() => setItems("react")}
          >
            react basic
          </button>
          <button
            className={`${proBtn} ${
              items === "" ? activeBtn : `${nightMood ? "text-blue-500" : ""}`
            }`}
            onClick={() => setItems("")}
          >
            advance
          </button>
        </div>
        <div className="flex flex-wrap pt-10 relative">
          {myProject.map((data) => {
            const { id, name, type, img, link } = data;
            if (type === items) {
              return (
                <div className="ml-auto mr-auto md:mr-0 md:ml-0" key={id}>
                  {showProject(name, type, img, link)}
                </div>
              );
            }
            if (items === "all") {
              return (
                <div className="ml-auto mr-auto md:mr-0 md:ml-0" key={id}>
                  {showProject(name, type, img, link)}
                </div>
              );
            }
          })}
          {items === "" ? (
            <h1
              className={`${nightMood ? "text-white" : ""} capitalize text-6xl`}
            >
              working on it...
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;

// myProject.forEach((item) => {
//     if (item.type === items) {
//       const { id, type, name } = item;
//       console.log(id, type, name);
//     }
//     if (items === "all") {
//       const { id, type, name } = item;
//       console.log(id, type, name);
//     }
//   });
