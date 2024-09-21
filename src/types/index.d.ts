interface Quiz {
	id: number;
	name: string;
	questions: Question[];
}

interface Question {
	id: string;
	question: string;
	options: string[];
	correctAnswer: string;
	timeLimit: number;
}
