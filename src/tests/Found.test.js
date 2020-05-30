import React from "react";
import ReactDOM from "react-dom";
import Moment from "react-moment";
import Found from "../components/Found.js";
import { shallow } from "enzyme";

const weather = {
	coord: {
		lon: -87.65,
		lat: 41.85,
	},
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01n",
		},
	],
	base: "stations",
	main: {
		temp: 279.38,
		feels_like: 273.85,
		temp_min: 278.71,
		temp_max: 280.15,
		pressure: 1011,
		humidity: 65,
	},
	visibility: 16093,
	wind: {
		speed: 5.1,
		deg: 80,
	},
	clouds: {
		all: 1,
	},
	dt: 1587344737,
	sys: {
		type: 1,
		id: 4861,
		country: "US",
		sunrise: 1587294184,
		sunset: 1587342942,
	},
	timezone: -18000,
	id: 4887398,
	name: "Chicago",
	cod: 200,
};

const weatherType = {
	Thunderstorm: "https://images.unsplash.com/photo-1504792001904-7a52bab2ec06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
	Drizzle: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
	Rain: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
	Snow: "https://images.unsplash.com/photo-1550715512-4243118863f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
	Mist: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Smoke: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Haze: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Dust: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Fog: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Sand: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Ash: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Squall: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Tornado: "https://images.unsplash.com/photo-1525747489694-0e01dd364620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
	Clear: "https://images.unsplash.com/photo-1537461992341-9a32ae2b0054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
	Clouds: "https://images.unsplash.com/photo-1527708676371-14f9a9503c95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
};

const date = new Date();
const momentDate = <Moment format="MMMM Do YYYY">{date}</Moment>;

describe("Found component", () => {
	it("Renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Found weather={weather} momentDate={momentDate} />, div);
	});

	it("Displays appropriate weather background", () => {
		expect(document.body.style.backgroundImage).toEqual(`url(${weatherType[weather.weather[0].main]})`);
	});
});
