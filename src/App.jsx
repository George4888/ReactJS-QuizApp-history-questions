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

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    // check for answer
    if (answer === questions[currentIndex].correct_answer) {
      // Increase score
      setScore(score + 1);
    }
    if (newIndex >= questions.length) {
      setQuestionsEnded(true);
    }
    // show another answer
  };

  return questionsEnded ? (
    <h1>
      Your score was {score} out of {questions.length}
    </h1>
  ) : questions.length > 0 ? (
    <div className="App">
      <Questions data={questions[currentIndex]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
