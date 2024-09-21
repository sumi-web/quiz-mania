import { useEffect, useState } from "react";
import { Box, Progress, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { QuizState, useHomeQuizStore } from "../../store/quizHomeStore";
import { categories } from "../../store/quizData.json";
import MyButton from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useResultQuizStore } from "../../store/quizResultStore";

const QuizScreen = () => {
	const navigate = useNavigate();
	const { selectedQuizId, changeQuizState } = useHomeQuizStore();
	const [selectedAnswer, setSelectedAnswer] = useState("");
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	const [selectedQuiz, setSelectedQuiz] = useState<Quiz>();
	const [timeLeft, setTimeLeft] = useState(0);
	const [answers, setAnswers] = useState<string[]>([]); // Store selected answers

	const { setQuizResult } = useResultQuizStore();

	useEffect(() => {
		// Timer logic
		if (timeLeft > 0) {
			const timer = setTimeout(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
			return () => clearTimeout(timer);
		} else {
			handleNextQuestion(); // Move to the next question when time is up
		}
	}, [timeLeft]);

	useEffect(() => {
		if (selectedQuizId && !isNaN(selectedQuizId)) {
			const quiz = categories.find((quiz) => quiz.id === selectedQuizId);
			setSelectedQuiz(quiz);
			setTimeLeft(quiz?.questions[0].timeLimit || 0);
		}
	}, [selectedQuizId]);

	const selectedQuestion = selectedQuiz ? selectedQuiz.questions[currentQuestionIndex] : null;

	const handleAnswerChange = (value: string) => {
		setSelectedAnswer(value);
	};

	const handleNextQuestion = (skip?: boolean) => {
		if (!selectedQuiz) return;

		// Record the answer or mark as skipped
		const allTickedAnswers = [...answers, skip ? "skipped" : selectedAnswer || "skipped"];
		setAnswers(allTickedAnswers);
		if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedAnswer("");
			setTimeLeft(selectedQuiz.questions[currentQuestionIndex + 1].timeLimit);
		} else {
			calculateResults(allTickedAnswers);
			// Handle quiz completion here
		}
	};

	const calculateResults = (allTickedAnswers: string[]) => {
		if (!selectedQuiz) return;

		console.log("answers", answers);

		const allQuestions = selectedQuiz.questions;

		let correctCount = 0;
		let wrongCount = 0;

		let skippedCount = 0;

		allTickedAnswers.forEach((answer, index) => {
			if (answer === "skipped") {
				skippedCount = skippedCount + 1;
				return; // Skipped question, no need to check for correct/wrong
			}
			if (answer === allQuestions[index].correctAnswer) {
				correctCount += 1;
			} else {
				wrongCount += 1;
			}
		});

		const percentage = (correctCount / selectedQuiz.questions.length) * 100;

		const result = {
			correctAnswer: correctCount,
			wrongAnswer: wrongCount,
			skippedAnswer: skippedCount,
			percentage: Math.round(percentage),
		};

		setQuizResult(result);
		changeQuizState(QuizState.End);

		navigate("/quiz-completed", { replace: true });
	};

	return (
		<Box maxWidth={{ base: "1016px" }} mx="auto" mt="50px" padding="20px">
			<Box display="flex" justifyContent="space-between" mb={5}>
				{selectedQuiz && (
					<Text>
						<Text as={"span"} color={"primary"} fontWeight={500} fontSize={"18px"}>
							{currentQuestionIndex + 1}
						</Text>
						/ {selectedQuiz.questions.length}
					</Text>
				)}

				<Text bg="#E9E8E3" px="16px" py="8px" borderRadius={"8px"}>
					{timeLeft}
				</Text>
			</Box>
			{selectedQuiz && (
				<Progress
					bgColor={"#E9E8E3"}
					value={currentQuestionIndex + 1}
					max={selectedQuiz.questions.length}
					mb={5}
				/>
			)}

			<Box maxWidth={"808px"} mx={"auto"} mb="24px">
				{/* Question */}

				{selectedQuestion && (
					<>
						<Text fontSize="xl" fontWeight="bold" mb={5}>
							{currentQuestionIndex + 1}. {selectedQuestion.question}
						</Text>

						<RadioGroup onChange={handleAnswerChange} value={selectedAnswer}>
							<Stack direction="column">
								{selectedQuestion.options.map((option, i) => (
									<Radio key={i} value={String.fromCharCode(65 + i)}>
										{option}
									</Radio>
								))}
							</Stack>
						</RadioGroup>
					</>
				)}
			</Box>

			{/* Buttons */}
			<Box display="flex" alignItems={"center"} gap="40px" mt={5} maxWidth={"808px"} mx={"auto"}>
				<MyButton
					isDisabled={!selectedAnswer}
					onClick={() => {
						handleNextQuestion();
					}}
				>
					Next
				</MyButton>
				<Text
					fontWeight={500}
					fontSize={"20px"}
					color={"#373052"}
					onClick={() => {
						handleNextQuestion(true);
					}}
					cursor={"pointer"}
				>
					Skip this question
				</Text>
			</Box>
		</Box>
	);
};

export default QuizScreen;
