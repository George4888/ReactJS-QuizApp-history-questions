import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import "./App.css";

function App() {
  const API = "https://opentdb.com/api.php?amount=25&category=23&type=multiple";
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API).then((res) =>
      res.json().then((data) => {
        console.log(data.results);
        setQuestions(data.results);
      })
    );
  }, []);

  const handleAnswer = (answer) => {
    console.log("ok");
  };

  return questions.length > 0 ? (
    <div className="App">
      <Questions data={questions[0]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
