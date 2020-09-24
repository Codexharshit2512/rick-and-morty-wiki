import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Question from "./Question";
import QuizResult from "./QuizResult";
import { ArrowForwardIos } from "@material-ui/icons";
import { questions } from "./questions";

const QuizContainer = () => {
  const [quizQuestions, setQuestions] = useState([]);
  const [answeredQuestions, setAnswered] = useState([]);
  const [score, setScore] = useState(0);
  const [answerCount, setCount] = useState(0);
  const [currentQuestion, setCurrent] = useState(0);

  useEffect(() => {
    let temp = [];
    questions.forEach((question, index) => {
      temp.push(question);
    });
    setQuestions(temp);
    setCurrent(1);
    console.log(temp);
  }, []);

  const resetQuiz = () => {
    setCurrent(1);
    setScore(0);
    setCount(0);
    setAnswered([]);
  };

  const passQuestion = () => {
    const current = quizQuestions[currentQuestion - 1].id;
    let savedAnswer = undefined;
    if (answeredQuestions[current])
      savedAnswer = answeredQuestions[current].selectedAnswer;
    return (
      <Question
        question={quizQuestions[currentQuestion - 1]}
        computeAnswer={computeAnswer}
        savedAnswer={savedAnswer}
      />
    );
  };

  const computeAnswer = (selectedAnswer, question) => {
    const { answer, id } = question;
    let temp;
    const answeredQues = { ...answeredQuestions[question.id] };
    if (Object.keys(answeredQues).length == 0) {
      let newQuestion = { ...question, selectedAnswer };
      temp = [...answeredQuestions];
      temp[question.id] = newQuestion;
      if (selectedAnswer == answer) setScore((prevScore) => prevScore + 1);
      setAnswered(temp);
      setCount((prevCount) => prevCount + 1);
      return;
    } else {
      if (selectedAnswer == answeredQues.selectedAnswer) return;
      else if (selectedAnswer == answer) setScore((prevScore) => prevScore + 1);
      else {
        if (answeredQues.selectedAnswer == answer)
          setScore((prevScore) => prevScore - 1);
      }
      temp = [...answeredQuestions];
      answeredQues.selectedAnswer = selectedAnswer;
      temp[question.id] = answeredQues;
      setAnswered(temp);
    }
  };

  if (answerCount == 6)
    return <QuizResult score={score} resetQuiz={resetQuiz} />;
  else {
    if (answerCount == 5) {
      setTimeout(() => setCount((prevCount) => prevCount + 1), 500);
    }
    return (
      <div className="quiz-container">
        <ProgressBar count={answerCount} />
        {currentQuestion != 0 ? passQuestion() : null}
        <div
          className="prev-btn control-btn"
          onClick={() => setCurrent((prevCount) => prevCount - 1)}
        >
          {currentQuestion != 1 ? <ArrowBackIosIcon /> : null}
        </div>
        <div
          className="next-btn control-btn"
          onClick={() => setCurrent((prevCount) => prevCount + 1)}
        >
          {currentQuestion != 5 ? <ArrowForwardIosIcon /> : null}
        </div>
      </div>
    );
  }
};

export default QuizContainer;
