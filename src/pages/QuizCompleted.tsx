import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import QuizLayout from "../layout/quizLayout";
import { useResultQuizStore } from "../store/quizResultStore";
import MyButton from "../components/common/Button";
import { QuizState, useHomeQuizStore } from "../store/quizHomeStore";
import { useNavigate } from "react-router-dom";

const QuizCompleted = () => {
	const { quizResult } = useResultQuizStore();
	const { changeQuizState } = useHomeQuizStore();
	const navigate = useNavigate();

	const isQuizSuccess = quizResult.percentage > 60;

	return (
		<QuizLayout>
			<>
				<Navbar />

				<Flex justify="center" align="center" direction="column">
					{/* Conditionally render the image only if imageUrl is provided */}

					<Box mb={2}>
						<Image
							src={!isQuizSuccess ? "/images/sad-emoji.svg" : "/images/tick.svg"}
							alt="Congratulations"
							borderRadius="full"
							boxSize="100px"
						/>
					</Box>
					{isQuizSuccess && (
						<Text
							fontSize={{ base: "40px" }}
							lineHeight={"50px"}
							letterSpacing={"0.5em"}
							fontWeight={300}
							textAlign="center"
							mb={2}
							color={"#373052"}
						>
							CONGRATULATIONS
						</Text>
					)}

					<Text fontSize="md" textAlign="center">
						You successfully completed the Quiz and holds
					</Text>

					{!isQuizSuccess && (
						<Text
							fontSize={{ base: "40px" }}
							lineHeight={"50px"}
							letterSpacing={"0.5em"}
							fontWeight={300}
							textAlign="center"
							mb={2}
							color={"#373052"}
						>
							Keep <br /> practicing!
						</Text>
					)}
					{isQuizSuccess ? (
						<Text fontSize="5xl" color="black" mb={"8px"}>
							Your Score
						</Text>
					) : (
						<Box
							width={"150px"}
							height={"150px"}
							border={"1px solid #D2829A"}
							borderRadius={"50%"}
							display={"flex"}
							alignItems={"center"}
							justifyContent={"center"}
							flexDirection={"column"}
						>
							<Text fontWeight={300} fontSize={"20px"}>
								Your score
							</Text>
							<hr />
							<Text fontWeight={700} color={"#AF9B06"} fontSize={"38px"}>
								{" "}
								{quizResult.percentage}%
							</Text>
						</Box>
					)}

					{isQuizSuccess && (
						<Text fontSize={"56px"} fontWeight={700} color="green.500" mb={"8px"}>
							{quizResult.percentage}%
						</Text>
					)}

					{isQuizSuccess && (
						<Text fontSize="lg" fontWeight="bold" textAlign="center" mb={4}>
							{quizResult.percentage > 80 ? "Great job!" : "Well done!"}
						</Text>
					)}

					{/* Box for Correct, Incorrect, Not Answered */}
					<Box
						maxWidth={"442px"}
						borderWidth="1px"
						borderRadius="md"
						p={4}
						w="100%"
						textAlign="center"
						background="#F3F3E9"
						mt="28px"
						mb={"48px"}
					>
						<Text fontSize={"24px"} fontWeight={500} mb={2} color={"#373052"}>
							Out of {12} questions:
						</Text>
						<Flex justify="space-around" align="center" mb={2}>
							<Text color="green.500" fontSize={"14px"} fontWeight="bold">
								{quizResult.correctAnswer}{" "}
								<Text as={"span"} color={"#373052"}>
									Correct
								</Text>
							</Text>
							<Text color="red.500" fontSize={"14px"} fontWeight="bold">
								{quizResult.wrongAnswer}{" "}
								<Text as={"span"} color={"#373052"}>
									Incorrect
								</Text>
							</Text>
							<Text color="gray.500" fontSize={"14px"} fontWeight="bold">
								{quizResult.skippedAnswer}{" "}
								<Text as={"span"} color={"#373052"}>
									Not Answered
								</Text>
							</Text>
						</Flex>
					</Box>
					<MyButton
						customVariant="secondary"
						mb="100px"
						onClick={() => {
							changeQuizState(QuizState.Started);
							navigate("/quiz-screen", { replace: true });
						}}
					>
						Retake Quiz
					</MyButton>
				</Flex>
			</>
		</QuizLayout>
	);
};

export default QuizCompleted;
