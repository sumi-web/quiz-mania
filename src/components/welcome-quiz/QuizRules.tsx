import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
	Box,
	Text,
	List,
	ListItem,
} from "@chakra-ui/react";

interface Props {
	isOpen: boolean;
	handleModalClose: () => void;
}

const QuizRulesModal = ({ isOpen, handleModalClose }: Props) => {
	return (
		<>
			{/* Chakra Modal Component */}
			<Modal isOpen={isOpen} onClose={handleModalClose} isCentered>
				<ModalOverlay />
				<ModalContent
					maxW="808px"
					h="671px" // Fixed height
					p="32px 40px" // Padding
					borderRadius="8px 0 0 0" // Custom border radius
					opacity={1} // Set opacity to 1
					overflow="hidden" // Remove scrollbar
					className="card" // Add card class for styling
				>
					<ModalHeader
						display="flex"
						justifyContent="space-between" // Space between title and close button
						alignItems="center" // Center items vertically
						w="100%" // Full width
						fontSize="24px" // Increase font size for the title
						bg="transparent" // Transparent background
						borderBottomWidth="0" // Remove the border line
						paddingBottom={0} // Remove bottom padding
					>
						<Text>Quiz rules</Text>
						<Button
							onClick={handleModalClose}
							bg="lightgray" // Lightest grey background
							color="black" // Black text color
							borderRadius="full" // Circular button
							w="32px" // Smaller width for the button
							h="32px" // Smaller height for the button
							_hover={{ bg: "#d3d3d3" }} // No color change on hover
							_active={{ bg: "#d3d3d3" }} // No color change on active
							fontWeight="bold" // Bold text
							fontSize="24px" // Increased font size for "X"
						>
							&times; {/* Close button (cross) */}
						</Button>
					</ModalHeader>
					<ModalBody>
						<Box>
							{/* 10-Second Timer Section */}
							<Box mb={4}>
								<Text fontWeight="bold" bg="#F3F3E9" p={2} borderRadius="md">
									10-Second Timer
								</Text>
								<Box bg="white" p={4} borderRadius="md" mt={2}>
									<List spacing={2}>
										<ListItem>Each question comes with a 10-second timer.</ListItem>
										<ListItem>
											If you don't answer within the time limit, the app will automatically move to
											the next question.
										</ListItem>
									</List>
								</Box>
							</Box>

							{/* Manual Navigation Section */}
							<Box mb={4}>
								<Text fontWeight="bold" bg="#F3F3E9" p={2} borderRadius="md">
									Manual Navigation
								</Text>
								<Box bg="white" p={4} borderRadius="md" mt={2}>
									<List spacing={2}>
										<ListItem>
											You can navigate to the next question manually before the timer expires.
										</ListItem>
										<ListItem>
											Use the "Next" button to move ahead if you're ready before the timer runs out.
										</ListItem>
									</List>
								</Box>
							</Box>

							{/* Final Score and Performance Message Section */}
							<Box mb={4}>
								<Text fontWeight="bold" bg="#F3F3E9" p={2} borderRadius="md">
									Final Score and Performance Message
								</Text>
								<Box bg="white" p={4} borderRadius="md" mt={2}>
									<List spacing={2}>
										<ListItem>
											After all questions are answered, your final score will be displayed.
										</ListItem>
										<ListItem>
											Based on your performance, you will receive a personalized message:
										</ListItem>
										<List pl={4}>
											<ListItem>
												<span>Great job!: If you score </span>
												<span style={{ fontWeight: "bold" }}>above 80%</span>
											</ListItem>
											<ListItem>
												<span>Well done!: If you score </span>
												<span style={{ fontWeight: "bold" }}>between 60% and 80%</span>
											</ListItem>
											<ListItem>
												<span>Keep practicing!: If you score </span>
												<span style={{ fontWeight: "bold" }}>below 60%</span>
											</ListItem>
										</List>
									</List>
								</Box>
							</Box>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default QuizRulesModal;
