import Navbar from "../components/navbar";
import WelcomeToQuiz from "../components/welcome-quiz";
import QuizLayout from "../layout/quizLayout";

const Home = () => {
	return (
		<QuizLayout>
			<Navbar />
			<WelcomeToQuiz />
		</QuizLayout>
	);
};

export default Home;
