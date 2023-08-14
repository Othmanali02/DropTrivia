import React, { Component } from "react";
import logo from "./images/2.png";

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="bg-white shadow footerBack m-0">
				<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
					<div className="sm:flex sm:items-center sm:justify-between">
						<a href="/" className="flex items-center ">
							<img src={logo} className="h-24" alt="DropTrivia Logo" />
						</a>
						<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
							<li>
								<a href="/about" className="mr-4 hover:underline md:mr-6 ">
									About
								</a>
							</li>

							<li>
								<a href="/contact" className="mr-4 hover:underline md:mr-6 ">
									Contact
								</a>
							</li>
							<li>
								<a href="/policy" className="mr-4 hover:underline md:mr-6">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023{" "}
						<a href="/" className="hover:underline">
							DropTrivia™
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
