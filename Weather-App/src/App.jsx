import React, { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";

const App = () => {
  const key = '1159472b001a97d0d78be1777edf32a1'; // Verify this key
  const [city, setcity] = useState("");
  const [temp, settemp] = useState("");
  const [error, setError] = useState("");
  const [h2city, seth2city] = useState('')
  const [img, setimg] = useState('')

  const handleweather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    
    try {
      let data = await fetch(url).then((res) => res.json());
      
      if (data.cod === 200) {
        // Success: Set the temperature
        settemp(data.main.temp);
        setimg(data.weather[0].icon)
        console.log(data);
        seth2city(city)
        setError("");
      } else {
        // Error: City not found or invalid API key
        setError(data.message);
        settemp("");
      }
    } catch (error) {
      setError("Failed to fetch data");
    }
    
  };

  return (
    <div className="container flex w-full h-screen bg-blue-950 justify-center items-center">
      <div className="box w-[450px] bg-white p-4 rounded">
        <div className="input-area w-full flex gap-3">
          <input
            value={city}
            onChange={(e) => setcity(e.target.value)}
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
          <h3 className="text-9xl"><TiWeatherPartlySunny/></h3>
          </div>
          {error ? (
            <h2 className="text-xl font-bold text-center text-red-600">{error}</h2>
          ) : (
            <div>
               <h2 className="text-3xl font-bold text-center">{temp ? `${temp} °C` : ""}</h2>
               <h2 className="text-3xl font-bold text-center">{h2city.toUpperCase()}</h2>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;
