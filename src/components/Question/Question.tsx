import { useState } from "react";
import Answer from "./Answer";
import InputModal from "./InputModal";

type Props = {
  question: string;
  answers: {
    text: string;
    correct: boolean;
    justification: string;
  }[],
  index: number;
  handleChange: (question: any) => void;
};

function Question({ question, answers, index, handleChange }: Props) {
  const [selectedInput, setSelectedInput] = useState('');

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    handleChange({ question, answers, [name]: value });
  }

  return (
    <>
      <div className="container-question">
        <strong id="question-number" className="question-number">{index}.</strong>
        <p className="question-title" onClick={() => setSelectedInput('question')}>{question}</p>
      </div>
      <div id="question-answers" className="question-answers">
        {answers.map((answer, index) => (
          <Answer key={index} text={answer.text} />
        ))}
      </div>
      {selectedInput && (<InputModal name={selectedInput} handleChange={handleQuestionChange} />)}
    </>
  )
}

export default Question
