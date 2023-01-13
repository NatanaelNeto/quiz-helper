// @ts-nocheck
import MDEditor, { commands } from "@uiw/react-md-editor";
import { ChangeEvent, useEffect, useState } from "react";

import './form.css'
export default function Form({ setQuestion }: { setQuestion: (s: string) => void }) {
  const [enunciado, setEnunciado] = useState('Digite o enunciado da questão');
  const [correct, setCorrect] = useState('A');

  const [alterA, setAlterA] = useState('Digite a alternativa A');
  const [justA, setJustA] = useState('Digite a justificativa da alternativa A');
  const [alterB, setAlterB] = useState('Digite a alternativa B');
  const [justB, setJustB] = useState('Digite a justificativa da alternativa B');
  const [alterC, setAlterC] = useState('Digite a alternativa C');
  const [justC, setJustC] = useState('Digite a justificativa da alternativa C');
  const [alterD, setAlterD] = useState('Digite a alternativa D');
  const [justD, setJustD] = useState('Digite a justificativa da alternativa D');
  const [alterE, setAlterE] = useState('Digite a alternativa E');
  const [justE, setJustE] = useState('Digite a justificativa da alternativa E');

  useEffect(() => {
    setQuestion(`>>${enunciado}<<*******
    (${correct === 'A' ? 'X' : ' '})${alterA}{{${justA}}}*******
    (${correct === 'B' ? 'X' : ' '})${alterB}{{${justB}}}*******
    (${correct === 'C' ? 'X' : ' '})${alterC}{{${justC}}}*******
    (${correct === 'D' ? 'X' : ' '})${alterD}{{${justD}}}*******
    (${correct === 'E' ? 'X' : ' '})${alterE}{{${justE}}}*******`);
  }, [
    enunciado, correct,
    alterA, justA,
    alterB, justB,
    alterC, justC,
    alterD, justD,
    alterE, justE
  ]);

  const handleChange = (e: ChangeEvent) => {
    setCorrect(e.currentTarget.id);
  }

  return (
    <div className="form">
      <div className="form-block">
        <div className="form-header">
          <h2>Enunciado</h2>
        </div>
        <MDEditor
          value={enunciado}
          onChange={setEnunciado}
          preview="edit"
          commands={[commands.codeEdit, commands.codePreview]}
        />
      </div>
      <div className="form-block">
        <div className="form-header">
          <input
            type="checkbox"
            id="A"
            checked={correct === 'A'}
            onChange={handleChange}
          />
          <h2>Alternativa A</h2>
        </div>
        <div className="form-md-block">
          <MDEditor
            value={alterA}
            onChange={setAlterA}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
          <MDEditor
            value={justA}
            onChange={setJustA}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
        </div>
      </div>
      <div className="form-block">
        <div className="form-header">
          <input
            type="checkbox"
            id="B"
            checked={correct === 'B'}
            onChange={handleChange}
          />
          <h2>Alternativa B</h2>
        </div>
        <div className="form-md-block">
          <MDEditor
            value={alterB}
            onChange={setAlterB}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
          <MDEditor
            value={justB}
            onChange={setJustB}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
        </div>
      </div>
      <div className="form-block">
        <div className="form-header">
          <input
            type="checkbox"
            id="C"
            checked={correct === 'C'}
            onChange={handleChange}
          />
          <h2>Alternativa C</h2>
        </div>
        <div className="form-md-block">
          <MDEditor
            value={alterC}
            onChange={setAlterC}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
          <MDEditor
            value={justC}
            onChange={setJustC}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
        </div>
      </div>
      <div className="form-block">
        <div className="form-header">
          <input
            type="checkbox"
            id="D"
            checked={correct === 'D'}
            onChange={handleChange}
          />
          <h2>Alternativa D</h2>
        </div>
        <div className="form-md-block">
          <MDEditor
            value={alterD}
            onChange={setAlterD}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
          <MDEditor
            value={justD}
            onChange={setJustD}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
        </div>
      </div>
      <div className="form-block">
        <div className="form-header">
          <input
            type="checkbox"
            id="E"
            checked={correct === 'E'}
            onChange={handleChange}
          />
          <h2>Alternativa E</h2>
        </div>
        <div className="form-md-block">
          <MDEditor
            value={alterE}
            onChange={setAlterE}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
          <MDEditor
            value={justE}
            onChange={setJustE}
            preview="edit"
            commands={[commands.codeEdit, commands.codePreview]}
          />
        </div>
      </div>
    </div>
  );
}