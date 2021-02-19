import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import "./App.css";

function App() {
  const API = "https://opentdb.com/api.php?amount=25&category=23&type=multiple";
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);

  useEffect(() => {
    fetch(API).then((res) =>
      res.json().then((data) => {
        console.log(data.results);
        setQuestions(data.results);
        setCurrentQuestion(data.results[0]);
      })
    );
  }, []);

  const handleAnswer = (answer) => {
    // check for answer
    // show another answer
  };

  return questions.length > 0 ? (
    <div className="App">
      {currentQuestion && (
        <Questions data={currentQuestion} handleAnswer={handleAnswer} />
      )}
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
