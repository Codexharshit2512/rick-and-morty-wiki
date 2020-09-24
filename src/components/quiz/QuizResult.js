import React from "react";

const QuizResult = ({ score, resetQuiz }) => {
  return (
    <div className="quiz_result-container">
      <h1>Score:{score}/5</h1>
      <button type="button" onClick={resetQuiz}>
        Play Again
      </button>
    </div>
  );
};

export default QuizResult;
