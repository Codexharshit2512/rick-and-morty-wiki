import React, { useState, useEffect } from "react";

const Question = (props) => {
  const [selected, setSelected] = useState(undefined);
  const { question, computeAnswer, savedAnswer } = props;

  useEffect(() => {
    setSelected(savedAnswer);
  }, [question]);

  useEffect(() => {
    if (selected) computeAnswer(selected, question);
  }, [selected]);

  return (
    <div className="question-container">
      <p className="question-text">{question.question}</p>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div
            className={
              selected == option
                ? "option option_selected"
                : "option option_deselected"
            }
            key={option}
            onClick={() => setSelected(option)}
          >
            <label htmlFor={question.id}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
