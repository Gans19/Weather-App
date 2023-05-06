import { WiAlien } from "react-icons/wi";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";
import { BsEmojiSunglasses } from "react-icons/bs/index";

import "./App.css";

function App() {
  return (
    <div className="App bg-slate-600  h-screen flex-col flex item-center justify-center ">
      {/* card container */}

      <div className=" bg-slate-600 w-[300px] h-[450px] m-auto rounded-3xl bg-Bg bg-auto bg-no-repeat bg-center">
        <div className="flex justify-between p-6">
          {/* Top container */}

          <h1 className="text-2xl font-bold text-white">
            <WiAlien className="text-white text-xl" />
            New York
          </h1>
          <BsEmojiSunglasses className="text-xl text-white " />
        </div>
        <div className="flex justify-between p-4 text-6xl text-white">
          <IoMdSunny />
        </div>

        {/* Mid container */}

        <div className="flex justify-center pt-6 text-6xl text-white text-center">
          <span className="font-bold">25</span>
          <p className="font-thin text-xl">°c</p>
        </div>
        <div className="flex justify-center  text-sm text-white text-center">
          22/08/1999
        </div>

        {/* Bottom container */}

        <div className="flex justify-between pt-8 p-4  text-sm text-white text-center">
          <div className="flex justify-around gap-2">
            <BsEye />
            <p>
              Visiblity <span>10Km</span>
            </p>
          </div>
          <div className="flex justify-around gap-2">
            <BsThermometer />
            <p>
              Feels Like <span>25°c</span>
            </p>
          </div>
        </div>

        {/* Bottom container 2 */}

        <div className="flex justify-between pt-6 p-4  text-sm text-white text-center">
          <div className="flex justify-around gap-2">
            <BsWater />
            <p>
              Humidity <span>57%</span>
            </p>
          </div>
          <div className="flex justify-around gap-2">
            <BsWind />
            <p>
              Wind <span>1.54 m/s</span>
            </p>
          </div>
        </div>
      </div>

      {/* Input container */}

      <div className="rounded-3xl w-[300px] h-[50px] bg-Bg m-auto -mt-12 border-b-white">
        <div className="flex justify-between p-[8px]  m-auto">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none placeholder:text-gray-400 pt-1
           text-white text-[15px] font-light pl-4 h-full border-b-white"
            placeholder="Search by city or country"
          />
          <button className="bg-blue-400 rounded-full p-1 w-10 text-center items-center flex justify-center border-b-white outline-white">
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
