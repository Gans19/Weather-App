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

import {TbMist} from 'react-icons/tb/index'

import { BsEmojiSunglasses } from "react-icons/bs/index";
import { ImSpinner8 } from "react-icons/im";

import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const APIkey = "3fa86d56099b23e1fe0b983232c1ea80";
  const date = new Date();
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("coimbatore");
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false)


  const handleInput = (e)=>{
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(inputValue);
    if(inputValue !== ""){
setLocation(inputValue);
    }

    // select Input
    const input = document.querySelector('input');

    // clear Input
input.value = '';

// if value is empty
    if(inputValue === ""){
      setAnimate(true);
      
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }


    e.preventDefault();
  }

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);
  console.log(data);

  if (!data) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div>
          <ImSpinner8 className="text-5xl animate-spin text-blue-400" />
        </div>
      </div>
    );
  }

  // icon according to the weather
  let icon;

  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />;
      break;
    case "Haze":
      icon = <BsCloudHaze2Fill />;
      break;
    case "Rain":
      icon = <IoMdRainy className="text-white" />;
      break;
    case "Clear":
      icon = <IoMdSunny className="text-yellow-300" />;
      break;
    case "Drizzle":
      icon = <BsCloudDrizzleFill className="text-white" />;
      break;
    case "Snow":
      icon = <IoMdSnow className="text-white" />;
      break;
    case "Thunderstorm":
      icon = <IoMdThunderstorm className="text-white" />;
      break;
      case "Mist":
      icon = <TbMist className="text-white"/>;
      break;

  };

  return (
    <div className="App bg-slate-600  h-screen flex-col flex item-center justify-center ">
      {/* card container */}

      <div className=" bg-slate-600 w-[300px] h-[450px] m-auto rounded-3xl bg-Bg bg-auto bg-no-repeat bg-center">
        <div className="flex justify-between p-6">
          {/* Top container */}

          <h1 className="text-2xl font-bold text-white">
            <WiAlien className="text-white text-xl" />
            {data.name}, {data.sys.country}
          </h1>
          <BsEmojiSunglasses className="text-xl text-white " />
        </div>
        <div className="flex justify-between p-4 text-6xl text-white">
        {icon}
          <div className="flex justify-between p-4 pl-4 text-sm text-white">
            {data.weather[0].main}
          </div>
        </div>
        {/* Mid container */}

        <div className="flex justify-center pt-4 text-6xl text-white text-center">
          <span className="font-bold">{parseInt(data.main.temp)/10}</span>
          <p className="font-thin text-xl">°c</p>
        </div>
        <div className="flex justify-center  text-sm text-white text-center">
          {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
        </div>

        {/* Bottom container */}

        <div className="flex justify-between pt-8 p-4  text-sm text-white text-center">
          <div className="flex justify-around gap-2">
            <BsEye />
            <p>
              Visiblity <span>{data.visibility / 1000} Km</span>
            </p>
          </div>
          <div className="flex justify-around gap-2">
            <BsThermometer />
            <p>
              Feels Like <span>{parseInt(data.main.temp)/10}°c</span>
            </p>
          </div>
        </div>

        {/* Bottom container 2 */}

        <div className="flex justify-between pt-6 p-4  text-sm text-white text-center">
          <div className="flex justify-around gap-2">
            <BsWater />
            <p>
              Humidity <span>{data.main.humidity}%</span>
            </p>
          </div>
          <div className="flex justify-around gap-2">
            <BsWind />
            <p>
              Wind <span>{data.wind.speed} m/s</span>
            </p>
          </div>
        </div>
      </div>

      {/* Input container */}

      <div className={`${animate ? 'animate-shake' : 'animate-none'} rounded-3xl w-[300px] h-[50px] bg-Bg m-auto -mt-12 border-b-white`}>
        <div className="flex justify-between p-[8px]  m-auto">
          <input
            type="text"
            onChange={(e)=>handleInput(e)}
            className="flex-1 bg-transparent outline-none placeholder:text-gray-400 pt-1
           text-white text-[15px] font-light pl-4 h-full border-b-white"
            placeholder="Search by city or country"
          />
          <button
          onClick={(e)=>handleSubmit(e)}
           className="bg-blue-400 rounded-full p-1 w-10 text-center items-center flex justify-center border-b-white outline-white">
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
