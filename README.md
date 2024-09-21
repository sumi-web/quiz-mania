# Quiz App Project

This is a basic quiz application built with React and React Router DOM, allowing navigation between different screens such as the quiz start, quiz questions, and quiz completion.

## Getting Started

To get started with this project, follow the steps below to set up the environment and run the project:

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sumi-web/quiz-mania.git
   ```
2. **Navigate into the project directory**:  
   cd quiz-mania

3. **Install the dependencies:**:
   npm install

4. **Install the dependencies:**:
   npm run dev

**Problem Statement**
The goal of this project is to build a simple quiz application that includes:

A home screen to start the quiz.
A quiz screen where users can answer questions.
A quiz completion screen displayed after the quiz is completed.
The routing is managed using React Router DOM to navigate between these screens. The app also ensures that the URL changes appropriately without adding unnecessary routes to the history stack (e.g., using the replace option when necessary).

The following tasks have been completed:

**Project Setup**

Installed React and React Router DOM.
Created basic structure with components for Home, Quiz, and QuizCompleted screens.
Routing:

**Implemented routes for**
/ for the home screen.
/quiz-screen for the quiz screen.
/quiz-completed for the quiz completion screen.
Navigation:

Used navigate("/quiz-completed", { replace: true }) to navigate to the quiz completion screen without adding unnecessary entries to the browser history.
Basic Functionality:

Users can start the quiz from the home screen and are navigated to the quiz completion screen upon finishing.

**Completed**
I have completed all the functionality and desktop view only thing left was mobile view
