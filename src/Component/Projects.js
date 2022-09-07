import React, { useState } from "react";
import { myProject } from "./data";

const Projects = () => {
  const [items, setItems] = useState("all");

  const proBtn =
    "p-5 capitalize text-2xl  hover:underline hover:underline-offset-2";
  const activeBtn = "text-blue-400";

  const showProject = (id, name, type, img) => {
    return (
      <div key={id} className="w-[33.33%] mb-5 pl-10 ">
        <div className="flex justify-center">
          <img
            src={img}
            alt=""
            className="border rounded-3xl w-[350px] h-auto object-cover hover:cursor-pointer hover:scale-105 duration-300"
          />
        </div>
        <h1 className="text-center text-2xl capitalize mt-3 tracking-wide font-medium">
          {name}{" "}
        </h1>
        <p className="text-center text-xl text-gray-500">{type} </p>
      </div>
    );
  };
  return (
    <>
      <div className="m-20">
        <div className="font-semibold text-4xl text-center pt-10 capitalize">
          our projects
        </div>
        <div className="flex justify-end pt-10">
          <button
            className={`${proBtn} ${items === "all" ? activeBtn : ""} `}
            onClick={() => setItems("all")}
          >
            all
          </button>
          <button
            className={`${proBtn} ${items === "js" ? activeBtn : ""}`}
            onClick={() => setItems("js")}
          >
            js
          </button>
          <button
            className={`${proBtn} ${items === "react" ? activeBtn : ""}`}
            onClick={() => setItems("react")}
          >
            react basic
          </button>
          <button
            className={`${proBtn} ${items === "" ? activeBtn : ""}`}
            onClick={() => setItems("")}
          >
            advance
          </button>
        </div>
        <div className="flex flex-wrap pt-10 ">
          {myProject.map((data) => {
            const { id, name, type, img } = data;
            if (type === items) {
              return <>{showProject(id, name, type, img)}</>;
            }
            if (items === "all") {
              return <>{showProject(id, name, type, img)}</>;
            }
          })}
          {items === "" ? (
            <h1 className="capitalize text-6xl">working on it...</h1>
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
