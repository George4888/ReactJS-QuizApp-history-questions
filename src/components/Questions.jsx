import React from "react";

const Questions = ({
  handleAnswer,
  showAnswers,
  nextQuestion,
  data: { question, category, correct_answer, incorrect_answers },
}) => {
  // Place all answers in array, Shuffle the answers
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <>
      <div className="question">
        <h2>{category}</h2>
        <br />
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="answers">
        {shuffledAnswers.map((answer, idx) => {
          const validationColor = showAnswers
            ? answer === correct_answer
              ? "ok"
              : "notOk"
            : "normal";
          return (
            <>
              <p
                className="btn"
                key={idx}
                className={`${validationColor}`}
                onClick={() => handleAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </>
          );
        })}
        <div className="btn" onClick={nextQuestion}>
          <p className="normal">Next Question</p>
        </div>
      </div>
    </>
  );
};

export default Questions;
