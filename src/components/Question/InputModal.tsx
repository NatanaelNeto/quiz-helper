type Props = {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputModal({ name, handleChange }: Props) {
  return (
    <div className="input-modal">
      <input type="text" name={name} onChange={handleChange} />
    </div>
  )
}

export default InputModal
