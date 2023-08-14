import axios from "axios";
import React, { Component } from "react";

class Main extends Component {
	state = {
		res: "",
		questions: [],
		answers: [],
		start: 0,
		placeholder: "",
		txt: "",
	};

	componentDidMount = async () => {
		// this.formatResponse();
		if (localStorage.getItem("questions")) {
			let questions = JSON.parse(localStorage.getItem("questions"));
			this.setState({ questions });
		}
		let start = 0;
		let placeholder = "";
		const txt = "Ex: The Wire season four";
		this.type(start, placeholder, txt);
	};

	constructor(props) {
		super(props);
		this.state = { topic: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ topic: e.target.value });
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		localStorage.removeItem("questions");
		let prompt = this.state.topic;

		let generatedQuiz = prompt;

		window.location.href = `/quizzes/${generatedQuiz}`;

		//call chatgpt api and return the respose, stringify it and create an object for it, then display the trivia quiz properly
	};

	type = (start, placeholder, txt) => {
		for (let i = 0; i < txt.length; i++) {
			setTimeout(() => {
				placeholder += txt.charAt(i);
				document
					.getElementById("createQuiz")
					.setAttribute("placeholder", placeholder);
			}, 120 * (i + 1));
		}
	};

	resetParameters = () => {
		document.getElementById("createQuiz").setAttribute("placeholder", "");
		// let start = 0;
		// let placeholder = "";
		// const txt = "Ex: The Wire season four";
		// this.setState({ start, placeholder, txt });
	};

	render() {
		const { questions } = this.state;

		return (
			<React.Fragment>
				<div className="offwhite min-h-screen justify-center">
					<div className="borderTEst">
						<h1 className="text-center mainHeader font-semibold">
							Create your own <br></br> Trivia Quiz using AI
						</h1>
						<h1 className="text-center font-semibold opacity-80">
							All you have to do is enter a topic that you want to be quizzed on
						</h1>
					</div>
					<div className="mb-1">
						<form onSubmit={this.handleSubmit}>
							<div className="relative mb-4 flex flex-wrap items-stretch searchBar">
								<input
									type="text"
									id="createQuiz"
									topic={this.state.topic}
									onChange={this.handleChange}
									onFocus={() => this.resetParameters()}
									className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:border-primary"
									aria-label="Search"
									aria-describedby="button-addon3"
								/>

								<input
									className="relative createButton z-[2] cherryBack text-white rounded-r border-solid border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-80 focus:outline-none focus:ring-0"
									type="submit"
									value="Create"
									id="button-addon3"
									data-te-ripple-init
								/>
							</div>
						</form>
					</div>

					<section className="relative  bg-blueGray-20 FirstSection">
						<div className="relative  pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
							<div className="absolute top-0 w-full h-full bg-center bg-cover">
								<span
									id="blackOverlay"
									className="w-full h-full absolute purpleBack"
								></span>
							</div>
							<div className="container relative mx-auto">
								<div className="items-center flex flex-wrap">
									<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
										<div className="pr-12">
											<h1 className="text-white font-semibold text-5xl">
												Unleash your creativity and make cool quizzes.
											</h1>
											<p className="mt-4 text-lg text-white">
												This is a web application that uses{" "}
												<a className="ChatGPt" href="https://chat.openai.com/">
													ChatGPT
												</a>
												's API to generate a trivia quiz based on whichever
												topic you choose. You can create quizzes and share them
												for a brief 24 hours before the quiz gets removed.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="transf top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
								<svg
									className="absolute bottom-0 overflow-hidden"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="none"
									version="1.1"
									viewBox="0 0 2560 100"
									x="0"
									y="0"
								>
									<polygon
										className="text-blueGray-200 fill-current"
										points="2560 0 2560 100 0 100"
									></polygon>
								</svg>
							</div>
						</div>
						<section className="pb-10 bg-blueGray-200 -mt-24">
							<div className="container mx-auto px-4">
								<div className="flex flex-wrap">
									<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
										<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
											<div className="px-4 py-5 flex-auto">
												<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full cherryBack">
													<i className="fas fa-award"></i>
												</div>
												<h6 className="text-xl font-semibold">
													Limited number of quizzes
												</h6>
												<p className="mt-2 mb-4 text-blueGray-500">
													You'll get to make 10 quizzes per day, and share the
													quiz link with your friends!
												</p>
											</div>
										</div>
									</div>
									<div class="w-full md:w-4/12 px-4 text-center">
										<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
											<div class="px-4 py-5 flex-auto">
												<div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
													<i class="fas fa-retweet"></i>
												</div>
												<h6 class="text-xl font-semibold">
													Create your own DropTrivia
												</h6>
												<p class="mt-2 mb-4 text-blueGray-500">
													You can create your own trivia quiz and share it
													wherever you like.
												</p>
											</div>
										</div>
									</div>
									<div class="pt-6 w-full md:w-4/12 px-4 text-center">
										<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
											<div class="px-4 py-5 flex-auto">
												<div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full limeBack">
													<i class="fas fa-fingerprint"></i>
												</div>
												<h6 class="text-xl font-semibold">AI responses</h6>
												<p class="mt-2 mb-4 text-blueGray-500">
													Some quizzes may or may not have incorrect answers
													because AI isn't perfect yet. For testing purposes
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default Main;
