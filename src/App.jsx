import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import "./App.css";

function App() {
  const API = "https://opentdb.com/api.php?amount=25&category=23&type=multiple";
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsEnded, setQuestionsEnded] = useState(false);

  useEffect(() => {
    fetch(API).then((res) =>
      res.json().then((data) => {
        console.log(data.results);
        setQuestions(data.results);
      })
    );
  }, []);

  // check for answer, show another answer
  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    // Increase score
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
    // check for next question
    if (newIndex >= questions.length) {
      setQuestionsEnded(true);
    }
  };

  return questionsEnded ? (
    <div className="App">
      <h1>No more questions left!</h1>
      <h2>
        Your score was {score} out of {questions.length}
      </h2>
    </div>
  ) : questions.length > 0 ? (
    <div className="App">
      <div className="nrOfQuestions">
        <h3>
          {currentIndex} of {questions.length}
        </h3>
      </div>
      <Questions data={questions[currentIndex]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
