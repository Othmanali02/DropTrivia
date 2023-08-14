import React, { Component } from "react";
import logo from "./images/2.png";
import sett from "./images/sett.png";

class Navbar extends Component {
	state = { MCQActive: false, TFActive: true, sliderValue: 1 };

	componentDidMount = () => {
		if (localStorage.getItem("Type")) {
			if (localStorage.getItem("Type") === "Multiple Choice Questions") {
				this.setState({ MCQActive: true, TFActive: false });
			} else if (localStorage.getItem("Type") === "True or False") {
				this.setState({ TFActive: true, MCQActive: false });
			}
		}
		if (localStorage.getItem("Length")) {
			if (localStorage.getItem("Length") === "5") {
				this.setState({ sliderValue: 0 });
			} else if (localStorage.getItem("Length") === "10") {
				this.setState({ sliderValue: 1 });
			} else if (localStorage.getItem("Length") === "15") {
				this.setState({ sliderValue: 2 });
			}
		}
	};
	componentDidUpdate = () => {
		if (this.state.MCQActive) {
			localStorage.removeItem("Type");
			localStorage.setItem("Type", "Multiple Choice Questions");
		} else {
			localStorage.removeItem("Type");

			localStorage.setItem("Type", "True or False");
		}
		console.log(this.state.sliderValue);
		if (this.state.sliderValue == 1) {
			localStorage.removeItem("Length");
			localStorage.setItem("Length", "10");
		} else if (this.state.sliderValue == 2) {
			localStorage.removeItem("Length");
			localStorage.setItem("Length", "15");
		} else if (this.state.sliderValue == 0) {
			localStorage.removeItem("Length");
			localStorage.setItem("Length", "5");
		}
	};

	openPopup = () => {
		document.getElementById("popup").style.display = "block";
	};
	closePopUp = () => {
		document.getElementById("popup").style.display = "none";
	};

	MCQ = () => {
		console.log("MCQ");
		let MCQActive = true;
		let TFActive = false;
		this.setState({ MCQActive, TFActive });
	};

	TF = () => {
		console.log("TF");
		let MCQActive = false;
		let TFActive = true;
		this.setState({ MCQActive, TFActive });
	};

	changeValue = (event) => {
		console.log(event.target.value);
		let sliderValue = event.target.value;
		this.setState({ sliderValue });
	};

	render() {
		return (
			<React.Fragment>
				<nav className="bg-white border-gray-200 cherryBack nav">
					<div className=" p-6">
						<a className="text-center" href="/">
							<img className="logo" src={logo} alt="droptrivialogo" />
						</a>

						<div className="settingsButton">
							{" "}
							<h3 className="version">v1.0.0</h3>
							<button onClick={() => this.openPopup()}>
								<img className="settings h-6" src={sett} alt="settings" />
							</button>
						</div>

						<div className="centerShit">
							<div className="popup" id="popup">
								<h1 className="text-center font-semibold h-8">Settings</h1>

								<div className="">
									<h3 className="text-center font-semibold">Quiz Length:</h3>

									<input
										type="range"
										list="tickmarks"
										value={this.state.sliderValue}
										min="0"
										max="2"
										class="range w-60"
										onChange={this.changeValue}
									/>
									<datalist id="tickmarks">
										<option value="0">5</option>
										<option value="1">10</option>
										<option value="2">15</option>
									</datalist>

									<h3 className="text-center font-semibold">Quiz Type:</h3>
									<div className="p-2 text-center">
										{this.state.MCQActive ? (
											<button
												data-modal-hide="popup-modal"
												type="button"
												onClick={() => this.MCQ()}
												className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
											>
												Multiple Choice
											</button>
										) : (
											<button
												data-modal-hide="popup-modal"
												type="button"
												onClick={() => this.MCQ()}
												className="text-white bg-gray-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
											>
												Multiple Choice
											</button>
										)}
										{this.state.TFActive ? (
											<button
												data-modal-hide="popup-modal"
												type="button"
												onClick={() => this.TF()}
												className="text-white dark:bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-200 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 dark:bg-red-700 dark:text-white dark:border-red-800 dark:hover:text-white dark:hover:bg-red-800 dark:focus:ring-red-800"
											>
												True or False
											</button>
										) : (
											<button
												data-modal-hide="popup-modal"
												type="button"
												onClick={() => this.TF()}
												className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
											>
												True or False
											</button>
										)}
									</div>
								</div>

								<button
									className="close"
									type="button"
									onClick={() => this.closePopUp()}
								>
									Done
								</button>
							</div>
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;
