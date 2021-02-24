import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import "./App.css";

function App() {
  const API = "https://opentdb.com/api.php?amount=10&category=23&type=multiple";
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API).then((res) =>
      res.json().then((data) => {
        console.log(data.results);
        const questions = data.results.map((question) => ({
          ...question,
          // create array with correct and incorrect answers and shuffle
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      })
    );
  }, []);

  // check for answer, show another question
  const handleAnswer = (answer) => {
    if (!showAnswers) {
      // Increase score
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
      setShowAnswers(true);
    }
  };

  const nextQuestion = () => {
    setShowAnswers(false);
    if (showAnswers) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  return questions.length > 0 ? (
    <div className="App">
      {currentIndex >= questions.length ? (
        <>
          <h1>No more questions left!</h1>
          <h2>
            Your score was {score} out of {questions.length}
          </h2>
          <p className="normal" onClick={() => window.location.reload(false)}>
            Start new Quiz
          </p>
        </>
      ) : (
        <>
          <div className="nrOfQuestions">
            <h3>
              {currentIndex + 1} of {questions.length}
            </h3>
          </div>
          <Questions
            data={questions[currentIndex]}
            showAnswers={showAnswers}
            handleAnswer={handleAnswer}
            nextQuestion={nextQuestion}
          />
        </>
      )}
    </div>
  ) : (
    <div className="App">
      <h1>Loading...</h1>
    </div>
  );
}

export default App;
