import React, { useState } from "react";





const ShowResult = (score) => {

  return (
    <div className="result-container">
      <h1>Your Score is {score}</h1>
    </div>
  )
}

const Question = (mcqs, handleClick, setAnswer, count) => {
 {
  console.log(mcqs)
  console.log(count)
 }
  <h1 className="question1">{mcqs[count].question}</h1>
        
  {mcqs[count].options.map((option) => {
    return (
      <div>
        <input
          type="radio"
          className="java"
          name="options"
          onClick={(e) => setAnswer(option)}

        />
        {option}
      </div>
    );
  })}

  <button className="submit" onClick={handleClick(count)}>
    Submit
  </button>

}
const App = () => {

  const mcqs = [
    {
      id: 1,
      question: "Which language runs in a web browser",
      options: ["Java", "C", "python", "Javascript"],
      answer: "Javascript",
    },
    {
      id: 2,
      question: "What does CSS stands for?",

      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      id: 3,
      question: "What does HTML stands for>",

      options: [
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hyperloop Machine Language",
        "Helicopters Terminals Motorboats Lamboginis",
      ],
      answer: "Hypertext Markup Language",
    },
    {
      id: 4,
      question: "What year was Javascript launched?",
      options: [1996, 1995, 1994, "none of the above"],
      answer: 1996,
    },
  ];

  function generateMcq() {
    setCount(count + 1);
  
    if (count === mcqs.length) {
      setCount(0);
    }
  }
  function handleClick(count) {
    if(answer  === mcqs[count].answer){
      setScore(score + 1)
    }else{
      alert("Wrong Answer");
    }
    generateMcq();
  }
const [score, setScore] = useState(0);
const [answer, setAnswer] = useState("");
const [count, setCount] = useState(1);

  return (
    <div className="wrapper">
      <div className="quiz-container">
        <h1>Ope's Quiz App</h1>
       {
        count === 0 ? <ShowResult score={score} /> :  <Question mcqs={mcqs} handleClick={handleClick} setAnswer={setAnswer} count={count}/>
       }
       
      </div>
    </div>
  );

      
};
export default App;
