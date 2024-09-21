import { Avatar, Box, Image } from "@chakra-ui/react";
import MyButton from "../common/Button";
import { QuizState, useHomeQuizStore } from "../../store/quizHomeStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	const {
		selectedQuizId,
		quizState,
		participantName,
		changeParticipantName,
		changeQuizState,
		changeSelectedQuizId,
	} = useHomeQuizStore();

	const handleExistQuiz = () => {
		changeParticipantName("");
		changeQuizState(QuizState.NotStarted);
		changeSelectedQuizId(null);
		navigate("/", { replace: true });
	};

	return (
		<Box
			height={"80px"}
			px={{ base: "96px", xl: "108px" }}
			py={{ base: "28px", xl: "28px" }}
			borderBottom={"1px solid #D9D9D9"}
			mb={quizState === QuizState.End ? "20px" : "60px"}
		>
			<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} height={"25px"}>
				<Image src="/images/QUIZMania.svg" />
				{selectedQuizId && quizState === QuizState.Started && (
					<MyButton customVariant="secondary" onClick={handleExistQuiz}>
						Exit Quiz
					</MyButton>
				)}

				{quizState === QuizState.End && (
					<Box display={"flex"} alignItems={"center"} gap="14px">
						<Avatar name={participantName || "your name"} /> {participantName}{" "}
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default Navbar;
