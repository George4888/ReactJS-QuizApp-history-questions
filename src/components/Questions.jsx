import React from "react";

const Questions = ({
  handleAnswer,
  data: { question, category, correct_answer, incorrect_answers },
}) => {
  // Place all answers in array
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  // Shuffle the answers
  return (
    <>
      <div className="question">
        <h2>Category: {category}</h2>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="answers">
        {shuffledAnswers.map((answer) => {
          return (
            <>
              <button
                className={`${correct_answer === answer ? "correct" : ""}`}
                onClick={() => handleAnswer(answer)}
              >
                {answer}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Questions;
