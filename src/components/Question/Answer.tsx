import { marked } from 'marked';
import React from 'react'

type Props = {
  text: string;
  justification: string;
  answerIndex: number;
  correct: boolean;
  handleSelectInput: (name: string, index: number) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Answer({ text, justification, answerIndex, correct, handleSelectInput, handleChange }: Props) {
  return (
    <div className="question-answer">
      <p
        onClick={() => handleSelectInput('text', answerIndex)}
        className="answer-text"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      />
      <input
        type="radio"
        name="correct"
        id={`${answerIndex}-correct`}
        className="answer-correction"
        checked={correct}
        onChange={handleChange}
      />
      <p
        onClick={() => handleSelectInput('justification', answerIndex)}
        className="answer-justification"
        dangerouslySetInnerHTML={{ __html: marked.parse(justification) }}
      />
    </div>
  )
}

export default Answer
