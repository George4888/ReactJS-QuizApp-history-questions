import React from "react";

const Questions = ({
  data: { question, category, correct_answer, incorrect_answers },
}) => {
  return (
    <>
      <div className="question">
        <h2>Category: {category}</h2>
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className="answers">
        <button>{correct_answer}</button>
        <button>{incorrect_answers[0]}</button>
        <button>{incorrect_answers[1]}</button>
        <button>{incorrect_answers[2]}</button>
      </div>
    </>
  );
};

export default Questions;
