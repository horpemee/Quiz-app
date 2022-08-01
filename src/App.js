import React, { useState } from "react";

const App = () => {
  const mcqs = [
    {
      id: 1,
      question: "Which language runs in a web browser",
      options: ["Java", "C", "python", "Javascript"],
      // option1: "Java",
      // option2: "C",
      // option3: "python",
      // option4: "Javascript",
      answer: "Javascript",
    },
    {
      id: 2,
      question: "What does CSS stands for?",
      // option1: "Central Style Sheets",
      // option2: "Cascading Style Sheets",
      // option3: " Cascading Simple Sheets",
      // option4: "Cars SUVs Sailboats",
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
      // option1: "Hypertext Markup Language  ",
      // option2: "Hypertext Markdown Language",
      // option3: " Hyperloop Machine Language",
      // option4: "Helicopters Terminals Motorboats Lamboginis",
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
    //   option1: 1996,
    //   option2: 1995,
    //   option3: 1994,
    //   option4: "none of the above",
    // answer: `${option2}`,
  ];

  const [currentmcq, setCurrentmcq] = useState(0);
  function generateMcq() {
    let newMcq = Math.floor(Math.random() * mcqs.length);

    setCurrentmcq(newMcq);
  }

  const [option, setOptions] = useState("");
  setOptions(option);
  // const [answer, setAnswer] = useState("");
  // const [clickanswer, setClickAnswer] = useState(false);
  // const checkAnswer = (option1, option2, option3, option4) => {
  //   setAnswer(answer);
  //   setClickAnswer(true);
  // };
  return (
    <div className="wrapper">
      <div className="quiz-container">
        <h1 className="question1">{mcqs[currentmcq].question}</h1>
        mcqs.options.map((option)=>
        {
          <input
            type="radio"
            className="java"
            value={mcqs.options}
            name={mcqs.options}
          >
            <label for=""> {mcqs.options} </label>
          </input>
        }
        );
        {/*
        <input type="radio" className="java" value="java" name="lang" />
        <label for="option1">{mcqs[currentmcq].option1}</label>
        <br />
        <input type="radio" className="c" value="c" name="lang" />
        <label for="option2">{mcqs[currentmcq].option2}</label>
        <br />
        <input type="radio" className="python" value="python" name="lang" />
        <label for="option3">{mcqs[currentmcq].option3}</label>
        <br />
        <input
        //   type="radio"
        //   className="javascript"
        //   value="javascript"
        //   name="lang"
        // /
        // <label for="option4">{mcqs[currentmcq].option4}</label>
        // <br />
      */}
        <button className="submit" onClick={generateMcq}>
          Submit
        </button>
      </div>
      ;
    </div>
  );
};
export default App;
