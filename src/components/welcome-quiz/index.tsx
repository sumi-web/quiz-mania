import {
	Box,
	Checkbox,
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Input,
	Text,
	VStack,
	useDisclosure,
} from "@chakra-ui/react";
import MyButton from "../common/Button";
import { QuizState, useHomeQuizStore } from "../../store/quizHomeStore";
import { categories } from "../../store/quizData.json";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuizRulesModal from "./QuizRules";

const WelcomeToQuiz = () => {
	const {
		participantName,
		selectedQuizId: topicSelectedId,
		changeSelectedQuizId,
		changeParticipantName,
		changeQuizState,
	} = useHomeQuizStore();

	const navigate = useNavigate();

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		changeParticipantName("");
		changeQuizState(QuizState.NotStarted);
	}, []);

	const handleModalClose = () => {
		onClose();
	};

	return (
		<>
			<Box maxW={{ base: "678px" }} margin={"0 auto"} pb={{ base: "203px" }}>
				<Heading
					textAlign="center"
					fontSize={{ base: "54px", xl: "64px" }}
					lineHeight={"80px"}
					mb="28px"
				>
					<Text as="span" fontWeight={500}>
						Welcome to{" "}
					</Text>
					<Text as="span" color="primary" fontWeight={"250"}>
						QUIZ
					</Text>
					<Text as="span" fontWeight={700} color="primary">
						Mania
					</Text>
				</Heading>
				<VStack
					align="left"
					spacing={1}
					bg="#D9D9D94D"
					maxW={{ base: "600px" }}
					margin={"0 auto"}
					mb={"28px"}
					px={"16px"}
					py="12px"
					borderRadius={"8px"}
				>
					<Text textAlign="left" color="gray.600">
						Please read all the rules about this quiz before you start.
					</Text>
					b
					<Text color="primary" cursor={"pointer"} onClick={onOpen}>
						Quiz rules
					</Text>
				</VStack>

				<VStack maxW={{ base: "600px" }} width={"100%"} align={"left"} margin={"0 auto"}>
					<form>
						<FormControl mb={"32px"}>
							<FormLabel>Full name</FormLabel>
							<Input
								placeholder="Full name"
								type="text"
								value={participantName}
								onChange={(e) => {
									changeParticipantName(e.target.value);
								}}
							/>
						</FormControl>
						<Text alignSelf="flex-start" fontSize={{ base: "16px" }} mb="16px">
							Please select topic to continue
						</Text>
						<Grid templateColumns="repeat(2, 1fr)" gap={4} mb={{ base: "40px" }}>
							{categories.map((topic) => (
								<GridItem
									key={topic.id}
									border={"1px solid #D9D9D9"}
									width={{ base: "284px" }}
									px="16px"
									py="18px"
									borderRadius={"8px"}
								>
									<Checkbox
										isChecked={topic.id === topicSelectedId}
										onChange={() => {
											if (topic.id === topicSelectedId) {
												changeSelectedQuizId(null);
											} else {
												changeSelectedQuizId(topic.id);
											}
										}}
									>
										{topic.name}
									</Checkbox>
								</GridItem>
							))}
						</Grid>
						<MyButton
							isDisabled={!topicSelectedId || participantName.length <= 3}
							onClick={() => {
								navigate("/quiz-screen");
								changeQuizState(QuizState.Started);
							}}
						>
							Start Quiz
						</MyButton>
					</form>
				</VStack>
			</Box>
			<QuizRulesModal isOpen={isOpen} handleModalClose={handleModalClose} />
		</>
	);
};

export default WelcomeToQuiz;
