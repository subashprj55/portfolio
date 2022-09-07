import "./App.css";
import Slider from "./Component/Slider";
import Nav from "./Component/Nav";
import Service from "./Component/Service";
import NumberLoader from "./Component/NumberLoader";
import Projects from "./Component/Projects";
import YourPlan from "./Component/YourPlan";
import Footer from "./Component/Footer";
import { useGlobalContext } from "./contex";

function App() {
  const btn =
    " duration-700 border-2 border-white capitalize bottom-0 p-5 tracking-wide text-2xl rounded-2xl hover:underline hover:text-blue-900 cursor-pointer";
  return (
    <>
      <div className="mobile mt-5 hidden">
        <p className="text-center text-3xl capitalize font-bold">
          Not support in mobile
        </p>
        <p className="text-center capitalize">try in big-screen</p>
      </div>
      <div className="hidden-div">
        <Nav />

        <div className="flex">
          <div className="w-full bg-[#f1f1f1] pl-20">
            <div className="mt-56">
              <div className="uppercase font-bold text-yellow-400 text-xl">
                frontend developer
              </div>
              <div className="capitalize font-bold text-7xl mt-3 ">
                i'm subash prasad
              </div>
              <div className="capitalize font-bold text-7xl mt-5">parajuli</div>
              <div className="flex mt-5">
                <div className={`${btn} mr-4`}>click me</div>
                <div className={`${btn}`}>about me</div>
              </div>
            </div>
          </div>
          <div className=" w-full h-screen bg-[#f1f1f1]">
            {/* <Slider /> */}
          </div>
        </div>
        <Service />
        <NumberLoader />
        <Projects />
        <YourPlan />
        <Footer />
      </div>
    </>
  );
}

export default App;
