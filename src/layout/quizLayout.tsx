import { Box } from "@chakra-ui/react";
import React from "react";

const QuizLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box width={"100wh"} minHeight={"100vh"} bg={"bg"}>
			{children}
		</Box>
	);
};

export default QuizLayout;
