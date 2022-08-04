import React, { useState } from "react";

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

  function handleClick(e) {
    if(answer  === mcqs[currentmcq].answer){
      alert("Correct Answer");
    }else{
      alert("Wrong Answer");
      
    }
    generateMcq();
  }

  const [currentmcq, setCurrentmcq] = useState(0);
  const [answer, setAnswer] = useState("");

  function generateMcq() {
    let newMcq = Math.floor(Math.random() * mcqs.length);

    setCurrentmcq(newMcq);
  }


  return (
    <div className="wrapper">
      <div className="quiz-container">
        <h1 className="question1">{mcqs[currentmcq].question}</h1>
        {mcqs[currentmcq].options.map((option) => {
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

        <button className="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default App;
