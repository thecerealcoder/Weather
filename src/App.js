import React, {useState} from 'react';
import Moment from "react-moment";
import Found from "./components/Found"
import NotFound from "./components/NotFound"


const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

const defaultBackground = "https://images.unsplash.com/photo-1537461992341-9a32ae2b0054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"


function App() {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const date = new Date();
  const momentDate = <Moment format="MMMM Do YYYY">{date}</Moment>;

  document.body.style.backgroundImage = `url(${defaultBackground})`

  function handleChange(evt) {
    if ((evt.key) === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery("")
          console.log(result)
        })
    }
  }

  return (
    <div className="app">
      <main> 
        <div className="searchBox">
          <input 
            type="text"
            id="searchBar"
            placeholder="Enter your location..."
            onChange={ev => setQuery(ev.target.value)}
            onKeyPress={handleChange}
            value={query}
            />
        </div>
    
        {Object.keys(weather).length !== 0 && 

        <div>
          {weather.cod === "404" ? 

          (
            <NotFound />
            ) : (
            <Found weather={weather} momentDate={momentDate} />
          )
        }
       </div>
    }
      </main>
    </div>
  );
}

export default App;
