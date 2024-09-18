import React, { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";

const App = () => {
  const key = "1159472b001a97d0d78be1777edf32a1"; // Verify this key
  const [weather, setweather] = useState("");
  const [city, setcity] = useState("");
  const [temp, settemp] = useState("");
  const [error, setError] = useState("");
  const [h2city, seth2city] = useState("");
  const [img, setimg] = useState("");
  const [eventkey, setkey] = useState("");
  const [errorimg, seterrorimg] = useState('')
  const [wind, setwind] = useState('')
  const [state, setstate] = useState(false)
  const [humidity, sethumidity] = useState('')
  
  const handleevent = (e) => {    
    if (e.key === 'Enter') {
      handleweather()
    }
    
  }
  const handleweather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    // setimg("/Images/404.png");
    try {
      
      let data = await fetch(url).then((res) => res.json());

      if (data.cod === 200) {
        // Success: Set the temperature
        setweather(data.weather[0].description);
        console.log(weather);
        settemp(data.main.temp);
        setimg(data.weather[0].icon);
        sethumidity(data.main.humidity)
        setwind(data.wind.speed)
        console.log(data);
        seth2city(city);
        setstate(true)
        setError("");
        setcity('')
      }
       else {
        // Error: City not found or invalid API key
        setimg("/Images/404.png")
        setError(data.message);
        settemp("");
        console.log(weather);
        setcity('')
        
      }
    } catch (error) {
      setimg("/Images/404.png")
      setError("Failed to fetch data");
      console.log(img);
      setcity('')
    }

  };
  useEffect(() => {
    switch (weather) {
      case "haze":
        setimg("/Images/mist.png");

        break;
      case "mist":
        setimg("/Images/mist.png");

        break;
      case "smoke":
        setimg("/Images/cloud.png");

        break;
      case "rain":
        setimg("/Images/rain.png");

        break;
      case "snow":
        setimg("/Images/snow.png");

        break;
      case "clear sky":
        setimg("/Images/clear.png");

        break;
      case "broken clouds":
        setimg("/Images/default.png");

        break;
        case "error":
        setimg("/Images/404.png");

        break;
      
      default:
        break;
    }
  }, [temp]);
  

  return (
    <div className="container flex w-full h-screen bg-blue-950 justify-center items-center">
      <div className="box w-[450px] bg-white p-6 rounded-lg">
        <div className="input-area w-full flex gap-3">
          <input
            value={city}
            onChange={(e) => setcity(e.target.value)} onKeyDown={handleevent}
            className="w-[80%] border border-1 rounded border-gray-800 p-1"
            type="text"
            placeholder="Enter City Name"
          />
          <button
            className="p-1 px-3 rounded bg-blue-800 text-white"
            onClick={handleweather}
          >
            Search
          </button>
        </div>
        <div className="result-sec">
          <div className="div w-full flex justify-center">
            <img className="w-[220px] mb-4" src={img ? img : errorimg } alt="" />
          </div>
          {error ? (
            <h2 className="text-xl font-bold text-center text-red-600">
              {error}
            </h2>
          ) : (
            <div>
              <h2 className="text-3xl font-bold text-center">
                {temp ? `${temp} °C` : ""}
              </h2>
              <h2 className="text-3xl font-bold text-center">
                {h2city.toUpperCase()}
              </h2>
              {state ? <div className="ex-data flex justify-between mt-8">
                <div className="humadity flex items-center">
                  <h2 className="text-7xl"><WiHumidity/></h2>
                  <div className="data flex flex-col">
                  <h3 className="text-xl font-bold">{humidity}%</h3>
                  <h3>Humidity</h3>
                  </div>
                </div>
                <div className="wind flex items-center gap-3">
                  <h2 className="text-5xl"><FaWind/></h2>
                  <div className="data flex flex-col">
                    <h3 className="text-xl font-bold">{wind}.km/H</h3>
                    <h3>Wind</h3>
                  </div>
                </div>
              </div> : ''}
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
