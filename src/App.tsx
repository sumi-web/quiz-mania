// import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import { theme } from "./theme";
import QuizCompleted from "./pages/QuizCompleted";
import Quiz from "./pages/QuizScreen";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/quiz-screen",
		element: <Quiz />,
	},
	{
		path: "/quiz-completed",
		element: <QuizCompleted />,
	},
]);

function App() {
	return (
		<>
			<ChakraProvider theme={theme}>
				<RouterProvider router={router} />
			</ChakraProvider>
		</>
	);
}

export default App;
