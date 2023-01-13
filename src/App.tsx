import { Form, Syntax, Question } from './components';
import './App.css'
import { useState } from 'react';

const INITIAL_QUESTION = {
  question: 'Insira o enunciado da pergunta aqui',
  answers: [
    { text: 'Alternativa A', correct: false, justification: 'Insira a justificativa da alternativa aqui' },
    { text: 'Alternativa B', correct: false, justification: 'Insira a justificativa da alternativa aqui' },
    { text: 'Alternativa C', correct: false, justification: 'Insira a justificativa da alternativa aqui' },
    { text: 'Alternativa D', correct: false, justification: 'Insira a justificativa da alternativa aqui' },
    { text: 'Alternativa E', correct: false, justification: 'Insira a justificativa da alternativa aqui' },
  ],
};

function App() {
  const [questions, setQuestions] = useState([INITIAL_QUESTION]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const currentQuestionNumber = currentQuestion + 1;

  const handleAddQuestion = () => {
    setQuestions([...questions, INITIAL_QUESTION]);
    setCurrentQuestion(questions.length);
  }

  const changeCurrentQuestion = (index: number) => {
    setCurrentQuestion((curr) => curr + index);
  }

  const handleChangeQuestion = (question: any) => {
    const newQuestions = [...questions];
    newQuestions[currentQuestion] = question;
    setQuestions(newQuestions);
  }

  return (
    <div className='main'>
      <header>
        <h1>Trybe Quiz Helper</h1>
        <p>Ferramenta para criar quizzes para a Trybe, versão CI-2023</p>
        <p>Em caso de dúvidas, consultar <a href='https://github.com/betrybe/conteudo-modular-desenvolvimento-web/wiki/Guia-de-Elabora%C3%A7%C3%A3o-de-Itens-de-M%C3%BAltipla-Escolha-(Quizzes)' target='_blank'>o guia de qualidade de quizzes</a> da Trybe.</p>
      </header>
      <div className='container'>
        <h1 className="container-title">Quiz Creator v1</h1>
        <strong id="questions-counter" className="counter">{currentQuestionNumber} de {questions.length}</strong>
        <Question {...questions[currentQuestion]} index={currentQuestionNumber} handleChange={handleChangeQuestion} />
        <div className="btn-container">
          <button
            className="button"
            disabled={!currentQuestion}
            onClick={() => changeCurrentQuestion(-1)}
          >
            Anterior
          </button>
          <button
            className="button"
            disabled={questions.length <= currentQuestionNumber}
            onClick={() => changeCurrentQuestion(1)}
          >
            Próxima
          </button>
          <button className="button" onClick={handleAddQuestion}>Criar nova pergunta</button>
          <button className="button copy">Copiar resultado</button>
        </div>
      </div>
      <p>Feito por <a href='https://github.com/NatanaelNeto' target='_blank'>Natanael Neto</a></p>
    </div>
  );
}

export default App
