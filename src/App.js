import React, { useState } from "react";

const App = () => {
  const mcqs = [
    {
      id: 1,
      question: "Which language runs in a web browser",
      option1: "Java",
      option2: "C",
      option3: "python",
      option4: "Javascript",
    },
    {
      id: 2,
      question: "What does CSS stands for?",
      option1: "Central Style Sheets",
      option2: "Cascading Style Sheets",
      option3: " Cascading Simple Sheets",
      option4: "Cars SUVs Sailboats",
    },
    {
      id: 3,
      question: "What does HTML stands for>",
      option1: "Hypertext Markup Language  ",
      option2: "Hypertext Markdown Language",
      option3: " Hyperloop Machine Language",
      option4: "Helicopters Terminals Motorboats Lamboginis",
    },
    {
      id: 4,
      question: "What year was Javascript launched?",
      option1: 1996,
      option2: 1995,
      option3: 1994,
      option4: "none of the above",
    },
  ];

  const [currentmcq, setCurrentmcq] = useState(0);
  function generateMcq() {
    // btnClick.addEventListener("click", () => {
    let newMcq = Math.floor(Math.random() * mcqs.length);
    // });

    setCurrentmcq(newMcq);
  }
  // declaring a variable index
  return (
    <div className="wrapper">
      <div className="quiz-container">
        <h1 className="question1">{mcqs[currentmcq].question}</h1>
        <input type="radio" className="java" value="java" name="lang" />
        <label for="java">{mcqs[currentmcq].option1}</label>
        <br />
        <input type="radio" className="c" value="c" name="lang" />
        <label for="c">{mcqs[currentmcq].option2}</label>
        <br />
        <input type="radio" className="python" value="python" name="lang" />
        <label for="python">{mcqs[currentmcq].option3}</label>
        <br />
        <input
          type="radio"
          className="javascript"
          value="javascript"
          name="lang"
        />
        <label for="javascript">{mcqs[currentmcq].option4}</label>
        <br />
        <button className="submit" onClick={generateMcq}>
          Submit
        </button>
      </div>
      ;
    </div>
  );
};
export default App;
