import Navbar from "../components/navbar";
import QuizScreen from "../components/quiz-screen";
import QuizLayout from "../layout/quizLayout";

const Quiz = () => {
	return (
		<QuizLayout>
			<>
				<Navbar />
				<QuizScreen />
			</>
		</QuizLayout>
	);
};

export default Quiz;
