import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "../contex";

const NumberLoader = () => {
  const [isopen, setIsOpen] = useState(false);
  const { ref, inView } = useInView();

  //   console.log(myref.current);

  useEffect(() => {
    if (!isopen && inView) {
      setIsOpen(true);
    }
  }, [inView]);
  return (
    <>
      <div ref={ref}></div>
      <div className="bg-blue-100  p-20 mb-10 flex justify-around h-[230px]">
        {isopen && (
          <>
            <div>
              <h1 className="font-semibold text-5xl text-center">
                <CountUp end={5000} duration={2} />
              </h1>
              <p className="text-3xl text-center">Facebook</p>
            </div>
            <div>
              <h1 className="font-semibold text-5xl text-center">
                <CountUp end={527} duration={2} />
              </h1>
              <p className="text-3xl text-center">Instagram</p>
            </div>
            <div>
              <h1 className="font-semibold text-5xl text-center">
                <CountUp end={1323} duration={2} />
              </h1>
              <p className="text-3xl text-center">Twitter</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NumberLoader;
