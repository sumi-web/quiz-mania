import { create } from "zustand";

type Store = {
	quizResult: {
		correctAnswer: number;
		wrongAnswer: number;
		skippedAnswer: number;
		percentage: number;
	};
	setQuizResult: (result: Store["quizResult"]) => void;
};

export const useResultQuizStore = create<Store>()((set) => ({
	quizResult: {
		correctAnswer: 0,
		wrongAnswer: 0,
		skippedAnswer: 0,
		percentage: 0,
	},
	setQuizResult: (result) => set(() => ({ quizResult: result })),
}));
