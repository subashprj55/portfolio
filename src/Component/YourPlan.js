import React, { useState } from "react";

const YourPlan = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  // console.log(isBoxOpen);

  const boxOpen = () => {
    setIsBoxOpen(true);
  };
  const boxClose = () => {
    setIsBoxOpen(false);
  };

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
      <div className=" m-20 capitalize">
        <h1 className="font-semibold text-4xl text-center pt-10">
          choose your plan
        </h1>
        <p className="text-center">This is only for sample</p>
        <div className="flex mt-10">
          <div className={`${proDiv}`}>
            <div className={`${divFlex}`}>
              <div className={`${proCir}`}>
                <p className={`${divP}`}>01</p>
              </div>
            </div>
            <h1 className={`${proh1} `}>small range</h1>
            <div className="mt-5">
              <p className={`${desP} `}>desktop only</p>
              <p className={`${desP}`}>scurity level : 10%</p>
              <p className={`${desP}`}>design : not bad</p>
              <p className={`text-center uppercase pt-5 text-2xl font-medium`}>
                rs-75,000{" "}
              </p>
            </div>
          </div>
          <div className={`${proDiv} `}>
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
              <p className={`text-center uppercase pt-5 text-2xl font-medium`}>
                rs-2,00,000{" "}
              </p>
            </div>
          </div>
          <div className={`${proDiv}`}>
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
              <p className={`text-center uppercase pt-5 text-2xl font-medium`}>
                rs-5,00,000{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourPlan;
