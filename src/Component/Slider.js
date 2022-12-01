import React, { useEffect, useState } from "react";
import images from "./data";
import "../App.css";

const Slider = () => {
  const [item, setItem] = useState(0);

  useEffect(() => {
    if (item > images.length - 1) {
      setItem(0);
    }
    const timer = setTimeout(() => {
      setItem(item + 1);
      return clearTimeout(timer);
    }, 3000);
  }, [item]);
  return (
    <div className="h-[90%] w-[80%] m-10 md:ml-20 md:mt-32 truncate relative">
      {images.map((image, index) => {
        let posi = "translate-x-[100%] opacity-0 ";
        if (index === item) {
          posi = "translate-x-[0%] opacity-[100%]";
        }
        if (index + 1 === item || (item === 0 && index === images.length - 1)) {
          posi = "translate-x-[-100%] opacity-0 ";
        }
        return (
          <div key={index} className={`absolute ${posi}  duration-[2000ms]`}>
            <img
              src={image}
              alt="my photo"
              className="border-spacing-5 h-[400px] w-[500px]  rounded-xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
