import { create } from "zustand";

export enum QuizState {
	NotStarted = "NotStarted",
	Started = "Started",
	End = "End",
}

type Store = {
	quizState: QuizState; // 0:- not started
	isQuizStarted: boolean;
	selectedQuizId: number | null;
	participantName: string;
	changeQuizState: (state: QuizState) => void;
	changeParticipantName: (name: string) => void;
	changeSelectedQuizId: (id: number | null) => void;
	changeQuizStartedState: (quizState: boolean) => void;
};

export const useHomeQuizStore = create<Store>()((set) => ({
	quizState: QuizState.End,
	isQuizStarted: false,
	participantName: "",
	selectedQuizId: null,
	changeQuizState: (state) => set(() => ({ quizState: state })),
	changeParticipantName: (name) => set(() => ({ participantName: name })),
	changeSelectedQuizId: (id) => set(() => ({ selectedQuizId: id })),
	changeQuizStartedState: (quizState) => set(() => ({ isQuizStarted: quizState })),
}));
