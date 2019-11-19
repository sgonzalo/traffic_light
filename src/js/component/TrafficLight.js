import React from "react";

class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickLight: null
		};
	}

	render() {
		let redselect = "";
		let yellowselect = "";
		let greenselect = "";

		switch (this.state.clickLight) {
			case "red":
				redselect = "selected";
				break;
			case "yellow":
				yellowselect = "selected";
				break;
			case "green":
				greenselect = "selected";
				break;
		}

		return (
			<div>
				<div id="TrafficTop" />
				<div id="container">
					<div
						className={"red light " + redselect}
						onClick={() => this.setState({ clickLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowselect}
						onClick={() => this.setState({ clickLight: "yellow" })}
					/>
					<div
						className={"green light " + greenselect}
						onClick={() => this.setState({ clickLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
export default TrafficLight;
