import React from "react"

const weatherType = 
{
  Thunderstorm:"https://images.unsplash.com/photo-1504792001904-7a52bab2ec06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  Drizzle:"https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  Rain:"https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  Snow:"https://images.unsplash.com/photo-1550715512-4243118863f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  Mist:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Smoke:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Haze:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Dust:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Fog:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Sand:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Dust:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Ash:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Squall:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Tornado:"https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  Clear:"https://images.unsplash.com/photo-1537461992341-9a32ae2b0054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
  Clouds:"https://images.unsplash.com/photo-1527708676371-14f9a9503c95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
}

function Found(props) {

  document.body.style.backgroundImage = `url(${weatherType[props.weather.weather[0].main]})`

    return(
      <div class="flex">
        <div id="weatherBox">
        <div id="date">
          {props.momentDate}
        </div>
        <div id="location">
          <p>
            {props.weather.name}, {props.weather.sys.country}
          </p>
        </div>
        <div id="weather">
          <p id="temp">
            {Math.round(props.weather.main.temp)}
            <span>°</span>
          </p>
          <div id="weathertype">
            <p id="mainWeather">
              {props.weather.weather[0].main}
            </p>
              <img id="icon" src=
                {`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}>
              </img>
          </div>
          <p>
            <i className="fas fa-long-arrow-alt-down"></i>
            {Math.round(props.weather.main.temp_min) }°F 
            &#160;
            <i className="fas fa-long-arrow-alt-up"></i>
            {Math.round(props.weather.main.temp_max)}°F
          </p>
          <p>
            <i className="fas fa-wind"></i> 
            {Math.round(props.weather.wind.speed)}mph
          </p>
        </div>
      </div>
      </div>
        
    )
}

export default Found