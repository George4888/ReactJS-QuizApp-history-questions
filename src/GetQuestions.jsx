import React, { useEffect, useState } from 'react';

const GetQuestions = () => {
    const API = 'https://opentdb.com/api.php?amount=25&category=23&type=multiple';

    useEffect(() => {
        fetchQuestions();
    }, [])

    const [questions, setQuestions] = useState([]);

    const fetchQuestions = async () => {
        const data = await fetch(API);
        const questions = await data.json();
        
        console.log(questions.results);
        setQuestions(questions.results);
    }

    return (
        <div>
            {questions.map(question => (
                <>
                <div className="question">
                <h1 key={question.correct_answer}>{question.question}</h1>
                </div>
                <div className="answer">
                    <p>{question.incorrect_answers[0]}</p>
                    <p>{question.correct_answer}</p>
                    <p>{question.incorrect_answers[1]}</p>
                    <p>{question.incorrect_answers[2]}</p>
                </div>
                </>
            ))}
        </div>
    )
}

export default GetQuestions
