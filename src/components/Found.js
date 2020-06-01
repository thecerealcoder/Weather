import React from "react";
import Moment from "react-moment";
import Dragger from "react-physics-dragger";
import { clear, cloudy, drizzle, rain, snow, thunder } from "../svgLoader";

const date = new Date();
const momentDate = <Moment format="MMMM Do YYYY">{date}</Moment>;

const airConditionURL = "http://openweathermap.org/img/wn/50d@2x.png"; //URL for certain weather conditions

//Images for each forecast
const weatherType = {
	Thunderstorm: <object id="svgObject" data={thunder} type="image/svg+xml"></object>,
	Drizzle: <object id="svgObject" data={drizzle} type="image/svg+xml"></object>,
	Rain: <object id="svgObject" data={rain} type="image/svg+xml"></object>,
	Snow: <object id="svgObject" data={snow} type="image/svg+xml"></object>,
	Mist: <img src={airConditionURL}></img>,
	Smoke: <img src={airConditionURL}></img>,
	Haze: <img src={airConditionURL}></img>,
	Dust: <img src={airConditionURL}></img>,
	Fog: <img src={airConditionURL}></img>,
	Sand: <img src={airConditionURL}></img>,
	Ash: <img src={airConditionURL}></img>,
	Squall: <img src={airConditionURL}></img>,
	Tornado: <img src=""></img>,
	Clear: <object id="svgObject" data={clear} type="image/svg+xml"></object>,
	Clouds: <object id="svgObject" data={cloudy} type="image/svg+xml"></object>,
};

function Found(props) {
	let forecasts = [];

	//Creates array of JSX representing a forecast for each weekday
	function forecastBuilder() {
		let forecastArray = props.forecast.daily;
		let forecastHolder = "";

		for (let i = 0; i < forecastArray.length; i++) {
			let forecastDate = (
				<Moment format="dddd" add={{ days: i }}>
					{" "}
					{/*Increments date per day in forecast */}
					{date}
				</Moment>
			);

			forecastHolder = (
				<div className="flex">
					<div className="weatherBox">
						<div id="date">{i == 0 ? "Today" : forecastDate}</div>
						<div id="location">
							<p>
								{props.weather.name}, {props.weather.sys.country}
							</p>
						</div>
						<div id="weather">
							<p id="temp">
								{Math.round(forecastArray[i].temp.day)}
								<span>°</span>
							</p>
							<div id="weathertype">
								{weatherType[`${forecastArray[i].weather[0].main}`]}
								<p id="mainWeather">{forecastArray[i].weather[0].main}</p>
							</div>
							<p>
								<i className="fas fa-long-arrow-alt-down"></i>
								{Math.round(forecastArray[i].temp.min)}
								{props.checked ? "°C" : "°F"}
								&#160;
								<i className="fas fa-long-arrow-alt-up"></i>
								{Math.round(forecastArray[i].temp.max)}
								{props.checked ? "°C" : "°F"}
							</p>
							<p>
								<i className="fas fa-wind"></i>
								{Math.round(forecastArray[i].wind_speed)}
								{props.checked ? "m/s" : "mph"}
							</p>
						</div>
					</div>
				</div>
			);
			forecasts.push(forecastHolder);
		}
	}

	if (props.format) forecastBuilder();

	//Encapsulates forecasts JSX in Dragger component for sliding through forecasts
	let forecastDisplay = (
		<Dragger className="dragger">
			{forecasts.map((forecast, key) => (
				<div className="forecastContainer">{forecast}</div>
			))}
		</Dragger>
	);

	//Defines current forecast
	let current = (
		<div className="flex">
			<div className="weatherBox">
				<div id="date">{momentDate}</div>
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
						<object id="svgObject" data={cloudy} type="image/svg+xml"></object>
						<p id="mainWeather">{props.weather.weather[0].main}</p>
					</div>
					<p>
						<i className="fas fa-long-arrow-alt-down"></i>
						{Math.round(props.weather.main.temp_min)}
						{props.checked ? "°C" : "°F"}
						&#160;
						<i className="fas fa-long-arrow-alt-up"></i>
						{Math.round(props.weather.main.temp_max)}
						{props.checked ? "°C" : "°F"}
					</p>
					<p>
						<i className="fas fa-wind"></i>
						{Math.round(props.weather.wind.speed)}
						{props.checked ? "m/s" : "mph"}
					</p>
				</div>
			</div>
		</div>
	);

	return <div>{props.format ? forecastDisplay : current}</div>;
}

export default Found;
