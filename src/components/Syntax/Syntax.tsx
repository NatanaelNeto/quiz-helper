import './syntax.css'
export default function Syntax({ question }: { question: string }) {
  const display = question.split('*******')
  return (
    <div className="syntax">
      <h2>Resultado</h2>
      {display.map(line => <p>{line}</p>)}
    </div>
  );
}