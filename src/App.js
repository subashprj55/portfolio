import "./App.css";
import "./index.css";
import Slider from "./Component/Slider";
import Nav from "./Component/Nav";
import Service from "./Component/Service";
import NumberLoader from "./Component/NumberLoader";
import Projects from "./Component/Projects";
import YourPlan from "./Component/YourPlan";
import Footer from "./Component/Footer";
import { useGlobalContext } from "./contex";

function App() {
  const { nightMood } = useGlobalContext();

  const btn =
    " duration-700 capitalize bottom-0 p-5 tracking-wide text-2xl rounded-2xl hover:underline cursor-pointer";
  return (
    <>
      <div className={`${nightMood ? "bg-gray-800" : ""} overflow-hidden`}>
        <Nav />

        <div className="flex flex-wrap md:max-h-[600px]">
          <div className={`md:w-[50%] w-full md:pl-20 pl-5`}>
            <div className="md:mt-56 mt-36">
              <div className="uppercase font-bold text-yellow-400 text-xl">
                frontend developer
              </div>
              <div
                className={`capitalize font-bold md:text-7xl text-3xl mt-3 ${
                  nightMood ? "text-white" : ""
                }`}
              >
                i'm subash prasad
              </div>
              <div
                className={`capitalize font-bold md:text-7xl text-3xl mt-5 ${
                  nightMood ? "text-white" : ""
                }`}
              >
                parajuli
              </div>

              {/* <div className="md:flex mt-5 hidden">
                <div
                  className={`${btn} mr-4 ${
                    nightMood ? "text-white " : "hover:text-blue-900 "
                  }`}
                >
                  click me
                </div>
                <div
                  className={`${btn} ${
                    nightMood ? "text-white " : "hover:text-blue-900 "
                  }`}
                >
                  about me
                </div>
              </div> */}
            </div>
          </div>
          <div className={`md:w-[50%] w-full h-screen md:block`}>
            <Slider />
          </div>
        </div>
        <Service />
        <NumberLoader />
        <Projects />
        {/* <YourPlan /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
