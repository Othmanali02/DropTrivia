import React, { Component } from "react";
import axios from "axios";

class GenQuiz extends Component {
	state = {
		questions: [],
		topic: "",
		clientAnswers: [],
		score: 0,
		done: false,
	};
	componentDidMount = async () => {
		if (!localStorage.getItem("questions")) {
			let response = "Trivia Quiz\n";
			const prompt = this.props.match.params.prompt;
			let questionsType = "";
			let questionsLength = "";

			if (!localStorage.getItem("Type") && !localStorage.getItem("Length")) {
				localStorage.setItem("Type", "True or False");
				localStorage.setItem("Length", "10");
				questionsType = "True or False";
				questionsLength = "10";
			} else {
				questionsType = localStorage.getItem("Type");
				questionsLength = localStorage.getItem("Length");
			}

			let modifiedPrompt =
				questionsType +
				" othmanisthefuckinggreatestprogrammerofalltime " +
				questionsLength +
				" othmanisthefuckinggreatestprogrammerofalltime " +
				prompt;

			try {
				await axios
					.post("http://localhost:8000/chat", { modifiedPrompt })
					.then((res) => {
						console.log(res);
						let { data } = res;
						response += data.content;
					})
					.catch((err) => {
						console.log(err);
					});
			} catch (error) {
				console.log(error);
			}
			let { questions } = this.formatResponse(response);

			localStorage.setItem("questions", JSON.stringify(questions));
			localStorage.setItem("topic", prompt);

			this.setState({ questions });
		} else {
			let questions = JSON.parse(localStorage.getItem("questions"));
			let topic = localStorage.getItem("topic");

			this.setState({ questions, topic });
		}
	};

	formatResponse = (response) => {
		// remove one line, starting at the first position
		// join the array back into a single string

		var lines = response.split("[");
		// remove one line, starting at the first position
		// join the array back into a single string
		var linees = lines[1].split("]");

		let jsonObject = linees[0];

		let modded = "[" + jsonObject + "]";

		let newArr = JSON.parse(modded);
		console.log(newArr);

		let questions = [];

		for (let i = 0; i < newArr.length; i++) {
			questions.push({
				text: newArr[i].question,
				answer: newArr[i].answer,
			});
		}
		this.setState({ questions });
		localStorage.setItem("questions", JSON.stringify(questions));
		return { questions };
	};

	setClientAnswer = (index, answer) => {
		let clientAnswers = this.state.clientAnswers;
		clientAnswers[index] = answer;
		// var button = document.getElementsByClassName("button-5");
		// button.setAttribute("");
		this.setState({ clientAnswers });
	};

	submitCheck = () => {
		let clientAnswers = this.state.clientAnswers;
		let questions = this.state.questions;
		let score = 0;
		let done = this.state.done;
		if (Object.values(clientAnswers).length !== questions.length) {
			alert("Must answer all questions");
		} else {
			for (let i = 0; i < questions.length; i++) {
				if (
					clientAnswers[i].toString() ===
					questions[i].answer.toString().toLowerCase()
				) {
					score++;
				}
			}
			done = true;
		}
		this.setState({ score, done });
	};

	render() {
		var { questions } = this.state;

		return (
			<React.Fragment>
				{this.state.questions.length < 1 ? (
					<h1 className="font-semibold min-h-screen text-center my-12">
						Cooking your quiz...
					</h1>
				) : (
					<React.Fragment>
						<h1 className="text-left topicHeader font-semibold my-12 ">
							{this.state.topic}
						</h1>
						<div className="grid my-12 place-items-center gap-5">
							{questions != undefined &&
								questions.map((q, index) => (
									<div className="block p-9 bg-white border border-gray-200 card rounded-lg shadow ">
										<h5 className="mb-2 font-regular tracking-tight text-gray-900 dark:text-black">
											{index + 1}.{" "}
											<span className="font-semibold">True or False</span>
										</h5>
										<p className="font-normal text-black"> {q.text}</p>

										<div className="tfButtons">
											{" "}
											<button
												onClick={() => this.setClientAnswer(index, true)}
												className="button-5 "
											>
												True
											</button>
											<button
												onClick={() => this.setClientAnswer(index, false)}
												className="button-5 "
											>
												False
											</button>
										</div>
									</div>
								))}
						</div>{" "}
						<div className="centerShit">
							<button
								onClick={() => this.submitCheck()}
								className="bg-blue-500 text-center text-white my-12 submitBtn"
							>
								{" "}
								Submit your answers
							</button>
						</div>
						{this.state.done && (
							<h2 className="my-5 text-center font-semibold">
								You scored {this.state.score} out of{" "}
								{this.state.questions.length}{" "}
							</h2>
						)}
					</React.Fragment>
				)}
			</React.Fragment>
		);
	}
}

export default GenQuiz;
