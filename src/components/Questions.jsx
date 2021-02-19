import React from "react";

const Button = ({ answer, className }) => {
  return <button className={className}>{answer}</button>;
};

const Questions = ({
  handleAnswer,
  data: { question, category, correct_answer, incorrect_answers },
}) => {
  // Place all answers in array
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
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
        <Button
          className={correct_answer === shuffledAnswer[0] ? "correct" : ""}
          onClick={() => handleAnswer(shuffledAnswer[0])}
          answer={shuffledAnswer[0]}
        />
        <Button
          className={correct_answer === shuffledAnswer[1] ? "correct" : ""}
          onClick={() => handleAnswer(shuffledAnswer[1])}
          answer={shuffledAnswer[1]}
        />
        <Button
          className={correct_answer === shuffledAnswer[2] ? "correct" : ""}
          onClick={() => handleAnswer(shuffledAnswer[2])}
          answer={shuffledAnswer[2]}
        />
        <Button
          className={correct_answer === shuffledAnswer[3] ? "correct" : ""}
          onClick={() => handleAnswer(shuffledAnswer[3])}
          answer={shuffledAnswer[3]}
        />
      </div>
    </>
  );
};

export default Questions;
