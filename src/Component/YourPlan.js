import React from "react";

const YourPlan = () => {
  const proDiv =
    "w-[33.33%] p-10 bg-[#f1f1f1] hover:scale-105 cursor-pointer duration-500 hover:bg-gray-600 hover:text-white hover:z-10 ";
  const proh1 = "text-center mt-5 font-semibold text-2xl";
  const divFlex = "flex justify-center items-center";
  const proCir =
    "w-28 h-28 rounded-full border-8  border-blue-200 flex justify-center items-center";
  const divP = "text-3xl font-medium";
  const desP = "pb-3 pt-3 border-b-4 border-white text-lg";

  return (
    <>
      <div className=" p-20 pt-0 capitalize">
        <h1 className="font-semibold text-4xl text-center pt-10">
          choose your plan
        </h1>
        <p className="text-center">This is only for sample</p>
        <div className="flex mt-10 relative gap-3">
          <div className={`${proDiv} group`}>
            <div className={`${divFlex} `}>
              <div className={`${proCir} `}>
                <p className={`${divP}`}>01</p>
              </div>
            </div>
            <h1 className={`${proh1} `}>small range</h1>
            <div className="mt-5">
              <p className={`${desP} `}>desktop only</p>
              <p className={`${desP} `}>scurity level : 10%</p>
              <p className={`${desP} `}>design : not bad</p>
              <p
                className={` text-center uppercase mt-5 p-3 text-2xl font-medium group-hover:hidden`}
              >
                rs-75,000
              </p>
              <div className="flex justify-center">
                <button className="hidden text-center capitalize mt-5 p-3 text-2xl font-medium group-hover:block group-hover:text-black bg-yellow-400  rounded-md active:bg-yellow-500">
                  apply now
                </button>
              </div>
            </div>
          </div>
          <div className={`${proDiv} group`}>
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
              <p
                className={` text-center uppercase mt-5 p-3 text-2xl font-medium group-hover:hidden`}
              >
                rs-2,00,000
              </p>
              <div className="flex justify-center">
                <button className="hidden text-center capitalize mt-5 p-3 text-2xl font-medium group-hover:block group-hover:text-black bg-yellow-400  rounded-md active:bg-yellow-500">
                  apply now
                </button>
              </div>
            </div>
          </div>
          <div className={`${proDiv} group`}>
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
              <p
                className={` text-center uppercase mt-5 p-3 text-2xl font-medium group-hover:hidden`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourPlan;
