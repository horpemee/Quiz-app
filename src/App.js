const Content = () => {
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
};

const App = ({ mcq }) => {
  const { question, option1, option2, option3, option4 } = mcq;

  return (
    <div className="wrapper">
      {mcqs.map((mcq) => (
        <div className="quiz-container">
          <h1 className="question1">{question}</h1>
          <input type="radio" className="java" value="java" name="lang" />
          <label for="java">Java{option1}</label>
          <br />
          <input type="radio" className="c" value="c" name="lang" />
          <label for="c">{option2}</label>
          <br />
          <input type="radio" className="python" value="python" name="lang" />
          <label for="python">{option3}</label>
          <br />
          <input
            type="radio"
            className="javascript"
            value="javascript"
            name="lang"
          />
          <label for="javascript">{option4}</label>
          <br />
        </div>
      ))}
      ;
    </div>
  );
};

export default App;
