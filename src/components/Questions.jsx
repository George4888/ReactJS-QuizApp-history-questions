import React from "react";

const Questions = ({
  handleAnswer,
  data: { question, category, correct_answer, incorrect_answers },
}) => {
  // Place all answers in array, Shuffle the answers
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <>
      <div className="question">
        <h2>Category: {category}</h2>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="answers">
        {shuffledAnswers.map((answer, idx) => {
          return (
            <>
              <button
                key={idx}
                className={`${correct_answer === answer ? "correct" : ""}`}
                onClick={() => handleAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Questions;
