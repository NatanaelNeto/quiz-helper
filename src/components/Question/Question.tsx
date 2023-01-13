import { marked } from "marked";
import { useEffect, useState } from "react";
import Answer from "./Answer";
import InputModal from "./InputModal";

marked.setOptions({
  headerIds: false,
});

type Props = {
  question: string;
  answers: {
    text: string;
    correct: boolean;
    justification: string;
    [key: string]: string | boolean;
  }[],
  questionIndex: number;
  handleChange: (question: any) => void;
};

const INITIAL_SELECTED = { name: '', answerIndex: undefined };

function Question({ question, answers, questionIndex, handleChange }: Props) {
  const [selectedInput, setSelectedInput] = useState<{ name: string, answerIndex: number | undefined }>(INITIAL_SELECTED);
  const selectedValue = selectedInput.answerIndex !== undefined
    ? answers[selectedInput.answerIndex][selectedInput.name]
    : question;

  useEffect(() => {
    setSelectedInput(INITIAL_SELECTED);
  }, [questionIndex]);

  const handleQuestionChange = (event: React.ChangeEvent<any>) => {
    const { name, value, checked, id } = event.target;
    const { answerIndex } = selectedInput;

    if (answerIndex !== undefined || name === 'correct') {
      const newAnswers = answers.map((answer, index) => {
        if (name === 'correct') {
          return { ...answer, correct: index === parseInt(id) ? checked : false };
        }
        if (index === Number(answerIndex)) {
          return { ...answer, [name]: value };
        }
        return answer;
      });

      handleChange({ answers: newAnswers });
      return;
    }

    handleChange({ [name]: value });
  }

  const handleSelectInput = (name: string, answerIndex?: number) => {
    setSelectedInput({ name, answerIndex });
  }

  return (
    <>
      <div className="container-question">
        <strong id="question-number" className="question-number">{questionIndex}.</strong>
        <p
          className="question-title"
          onClick={() => handleSelectInput('question')}
          dangerouslySetInnerHTML={{ __html: marked.parse(question) }}
        />
      </div>
      <div id="question-answers" className="question-answers">
        {answers.map((answer, index) => (
          <Answer key={index} {...answer} answerIndex={index} handleSelectInput={handleSelectInput} handleChange={handleQuestionChange} />
        ))}
      </div>
      {selectedInput.name && (<InputModal inputInfo={selectedInput} value={selectedValue} handleChange={handleQuestionChange} />)}
    </>
  )
}

export default Question
