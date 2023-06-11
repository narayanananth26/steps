import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs and earn money 🤑",
	"Get bitches 😇",
];

export default function App() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step > 1) setStep((currStep) => currStep - 1);
	}

	function handleNext() {
		if (step < 3) setStep((currStep) => currStep + 1);
	}

	function handleClose() {
		setIsOpen((currState) => !currState);
	}

	return (
		<>
			<button className="close" onClick={handleClose}>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step === 1 ? "active" : ""}>1</div>
						<div className={step === 2 ? "active" : ""}>2</div>
						<div className={step === 3 ? "active" : ""}>3</div>
					</div>
					<p className="message">
						Step {step}: {messages[step - 1]}
					</p>

					<div className="buttons">
						<button
							style={
								step > 1
									? {
											backgroundColor: "#7950f2",
											color: "fff",
									  }
									: { cursor: "default" }
							}
							onClick={handlePrevious}
						>
							Previous
						</button>
						<button
							style={
								step < 3
									? {
											backgroundColor: "#7950f2",
											color: "fff",
									  }
									: { cursor: "default" }
							}
							onClick={handleNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}
