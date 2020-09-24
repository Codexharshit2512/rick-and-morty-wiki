import React from "react";
import QuizContainer from "../components/quiz/QuizContainer";

const QuizPage = () => {
  return (
    <div className="quiz-page-container">
      <h2 className="quiz-heading">Quiz</h2>
      <QuizContainer />
    </div>
  );
};

export default QuizPage;
