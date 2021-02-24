import React from "react";

const Questions = ({
  handleAnswer,
  showAnswers,
  nextQuestion,
  data: { question, category, correct_answer, answers },
}) => {
  return (
    <>
      <div className="question">
        <h2>{category}</h2>
        <br />
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="answers">
        {answers.map((answer, idx) => {
          console.log(idx);
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
