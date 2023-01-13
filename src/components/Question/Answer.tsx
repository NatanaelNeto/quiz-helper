import React from 'react'

type Props = {
  text: string;
};

function Answer({text}: Props) {
  return (
    <p>
      {text}
      <input type="radio" name="answer" className="answer-radio" />
    </p>
  )
}

export default Answer
