import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Main from "./components/Main";
import { Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Policy from "./components/Policy";
import About from "./components/About";
import Contact from "./components/Contact";
import My404Component from "./components/My404Component";
import GenQuiz from "./components/GenQuiz";

function App() {
	let value = "DumbBitch";

	return (
		<React.Fragment>
			<Navbar questionType={value} />
			<Switch>
				{/* <Route
					exact
					path="/products/:id"
					render={(props) => (
						<ProductForm {...props} handleAddtoCart={handleAddtoCart} />
					)}
				/> */}
				<Route exact path="/" component={Main} />
				<Route exact path="/privacy-policy" component={Policy} />
				<Route
					exact
					path="/quizzes/:prompt"
					render={(props) => <GenQuiz {...props} />}
				/>
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route path="*" exact={true} component={My404Component} />
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
