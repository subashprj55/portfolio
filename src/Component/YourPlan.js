import React from "react";
import { useGlobalContext } from "../contex";

const YourPlan = () => {
  const { nightMood } = useGlobalContext();
  const proDiv = `${
    nightMood ? "bg-gray-700" : "bg-[#f1f1f1]"
  } md:min-w-[33.33%] p-10 md:hover:scale-105 cursor-pointer duration-500 hover:bg-gray-600 hover:text-white hover:z-10 `;
  const proh1 = `${
    nightMood ? "text-gray-300" : ""
  } text-center mt-5 font-semibold text-2xl group-hover:text-white`;
  const divFlex = "flex justify-center items-center";
  const proCir =
    "w-28 h-28 rounded-full border-8  border-blue-200 flex justify-center items-center";
  const divP = `${
    nightMood ? "text-gray-300" : ""
  } text-3xl font-medium group-hover:text-white`;
  const desP = `${
    nightMood ? "text-gray-400" : ""
  } pb-3 pt-3 border-b-4 border-white text-lg group-hover:text-white`;

  return (
    <>
      <div className=" md:p-20 pt-0 capitalize">
        <h1
          className={`${
            nightMood ? "text-white" : ""
          } t-semibold text-4xl text-center md:pt-10`}
        >
          choose your plan
        </h1>
        <p className={`${nightMood ? "text-white" : ""} text-center`}>
          This is only for sample
        </p>
        <div className="flex flex-row mt-10 relative gap-3 overflow-x-scroll md:overflow-hidden">
          <div className={`min-w-[90%] ${proDiv} group`}>
            <div className={`${divFlex} `}>
              <div className={`${proCir} `}>
                <p className={`${divP}`}>64%</p>
              </div>
            </div>
            <h1 className={`${proh1}`}>secondary education</h1>
            <div className="mt-5">
              <p className={`${desP} `}>optional math</p>
              <p className={`${desP} `}>account</p>
              <p className={`${desP} `}>...other subject</p>
              {/* <p
                className={` text-center uppercase mt-5 p-3 text-2xl font-medium group-hover:hidden ${
                  nightMood ? "text-gray-300" : ""
                }`}
              >
                rs-75,000
              </p>
              <div className="flex justify-center">
                <button className="hidden text-center capitalize mt-5 p-3 text-2xl font-medium group-hover:block group-hover:text-black bg-yellow-400  rounded-md active:bg-yellow-500">
                  apply now
                </button>
              </div> */}
            </div>
          </div>
          <div className={`min-w-[90%] ${proDiv} group`}>
            <div className={`${divFlex}`}>
              <div className={`${proCir}`}>
                <p className={`${divP}`}>02</p>
              </div>
            </div>
            <h1 className={`${proh1}`}>Mid range</h1>
            <div className="mt-5">
              <p className={`${desP} `}>desktop + mobile</p>
              <p className={`${desP}`}>scurity level : 40%</p>
              <p className={`${desP}`}>design : good</p>
              {/* <p
                className={` text-center uppercase mt-5 p-3 text-2xl font-medium group-hover:hidden  ${
                  nightMood ? "text-gray-300" : ""
                }`}
              >
                rs-2,00,000
              </p>
              <div className="flex justify-center">
                <button className="hidden text-center capitalize mt-5 p-3 text-2xl font-medium group-hover:block group-hover:text-black bg-yellow-400  rounded-md active:bg-yellow-500">
                  apply now
                </button>
              </div> */}
            </div>
          </div>
          <div className={`min-w-[90%] ${proDiv} group`}>
            <div className={`${divFlex}`}>
              <div className={`${proCir}`}>
                <p className={`${divP}`}>03</p>
              </div>
            </div>
            <h1 className={`${proh1}`}>high range</h1>
            <div className="mt-5">
              <p className={`${desP} `}>all divices</p>
              <p className={`${desP}`}>scurity level : 100%</p>
              <p className={`${desP}`}>design : excellent</p>
              {/* <p
                className={` text-center uppercase mt-5 p-3 text-2xl font-medium group-hover:hidden  ${
                  nightMood ? "text-gray-300" : ""
                }`}
              >
                rs-4,00,000
              </p>
              <div className="flex justify-center">
                <button
                  className="hidden text-center capitalize mt-5 p-3 text-2xl font-medium group-hover:block group-hover:text-black bg-yellow-400  rounded-md active:bg-yellow-500
                "
                >
                  apply now
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourPlan;
