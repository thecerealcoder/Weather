import React, { useEffect, useState } from 'react';
import Found from "./components/Found";
import NotFound from "./components/NotFound";
import Switch from "react-switch";



const api = {
  key: process.env.REACT_APP_API_KEY,
  weather: "https://api.openweathermap.org/data/2.5/weather?q=",
  forecast: "https://api.openweathermap.org/data/2.5/onecall?"
}


function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [checked, setChecked] = useState(false);
  const [format, setFormat] = useState(false);

  let linearGradient = `linear-gradient(to bottom, rgba(${getRandomValue()},${getRandomValue()},${getRandomValue()},1), 
                        rgba(${getRandomValue()},${getRandomValue()},${getRandomValue()},1))`;

  useEffect(() => {
    if (query) {
      fetchData();
    } else {
      document.body.style.backgroundImage = linearGradient;
    }
  }, [checked]);

  function fetchData() {
    let coord = {};
    fetch(`${api.weather}${query}&units=${checked ? "metric" : "imperial"}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        if (result.cod === "404") {
          setWeather(result);
          return;
        }
        coord = result.coord;
        setWeather(result);
        fetch(`${api.forecast}lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly,current&units=${checked ? "metric" : "imperial"}&appid=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setForecast(result);
          });
      });
  }

  function getRandomValue() {
    let randomValue = Math.floor(Math.random() * 100) + 155;
    return randomValue;
  }

  function handleChange(evt) {
    if ((evt.key) === "Enter") {
      if(document.getElementById("welcome")) document.getElementById("welcome").style.display = "none";
      document.body.style.backgroundImage = linearGradient;
      fetchData();
    }
  }
  
  function handleTemp(evt) {
    setChecked(!checked);
  }

  function handleFormat(evt) {
    setFormat(!format);
  }

  return (
    <div className="app">
      <main>
        <div className="searchBox">
          <input
            type="text"
            id="searchBar"
            placeholder="Enter your city..."
            onChange={ev => setQuery(ev.target.value)}
            onKeyPress={handleChange}
            value={query}
          />
        </div>

        <div id="welcome">
          <h1>Welcome to Flowly!</h1>
          <h2>Search for your city to get real time weather as well as a weekly forecast for your location.</h2>
        </div>


        {Object.keys(weather).length !== 0 &&

          <div>

            <div className="sliderContainer">
              <div className="units">
                <p>Units</p>
                <Switch onChange={handleTemp} checked={checked}
                  uncheckedIcon={<div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 16,
                    color: "white",
                    paddingRight: 2
                  }}>°F</div>}
                  checkedIcon={<div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 16,
                    color: "white",
                    paddingRight: 2
                  }}>°C</div>}
                />
              </div>
              <div className="format">
                <p>Forecast</p>
                <Switch onChange={handleFormat} checked={format}
                  uncheckedIcon={<div></div>}
                  checkedIcon={<div></div>}
                />
              </div>
            </div>


            {weather.cod === "404" ?

              (
                <NotFound />
              ) : (
                <Found weather={weather} checked={checked} forecast={forecast} format={format} />
              )
            }
          </div>
        }
      </main>
    </div>
  );
}

export default App;
