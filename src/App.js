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
			{isOpen ? (
				<button className="close" onClick={handleClose}>
					&times;
				</button>
			) : (
				<button className="close" onClick={handleClose}>
					&#43;
				</button>
			)}
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step === 1 ? "active" : ""}>1</div>
						<div className={step === 2 ? "active" : ""}>2</div>
						<div className={step === 3 ? "active" : ""}>3</div>
					</div>
					<StepMessage step={step}>
						{messages[step - 1]}
						{step === 3 ? (
							<div className="buttons">
								<Button
									bgColor="#e7e7e7"
									textColor="#333"
									onClick={() =>
										alert(
											`Sorry but you can never get bitches 😥`
										)
									}
								>
									Learn how
								</Button>
							</div>
						) : null}
					</StepMessage>

					<div className="buttons">
						<Button
							bgColor="#7950f2"
							textColor="#fff"
							onClick={handlePrevious}
						>
							Previous
						</Button>
						<Button
							bgColor="#7950f2"
							textColor="#fff"
							onClick={handleNext}
						>
							Next
						</Button>
					</div>
				</div>
			)}
		</>
	);
}

function StepMessage({ step, children }) {
	return (
		<p className="message">
			<h3>Step {step}</h3> {children}
		</p>
	);
}

function Button({ textColor, bgColor, onClick, children }) {
	return (
		<button
			style={{
				backgroundColor: bgColor,
				color: textColor,
			}}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
