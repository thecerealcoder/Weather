import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";
import { shallow } from "enzyme";

describe("App component", () => {
	it("Renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
	});

	it("Search bar onChange value is accurate", () => {
		const wrapper = shallow(<App />);
		const form = wrapper.find("#searchBar");

		form.props().onChange({
			target: {
				value: "Chicago",
			},
		});
		expect(wrapper.find("#searchBar").props().value).toEqual("Chicago");
	});
});
