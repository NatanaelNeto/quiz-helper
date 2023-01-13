import { Form, Syntax } from './components';
import './App.css'
import { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');

  const handleQuestion = (s: string) => {
    setQuestion(s);
  }
  return (
    <div className='main'>
      <header>
        <h1>Trybe Quiz Helper</h1>
        <p>Ferramenta para criar quizzes para a Trybe, versão CI-2023</p>
        <p>Em caso de dúvidas, consultar <a href='https://github.com/betrybe/conteudo-modular-desenvolvimento-web/wiki/Guia-de-Elabora%C3%A7%C3%A3o-de-Itens-de-M%C3%BAltipla-Escolha-(Quizzes)' target='_blank'>o guia de qualidade de quizzes</a> da Trybe.</p>
      </header>
      <div className='container'>
        <Form setQuestion={handleQuestion} />
        <Syntax question={question} />
      </div>
      <p>Feito por <a href='https://github.com/NatanaelNeto' target='_blank'>Natanael Neto</a></p>
    </div>
  );
}

export default App
