import { useEffect, useRef } from "react";

type Props = {
  inputInfo: {
    name: string;
  }
  value: any;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function InputModal({ inputInfo, value, handleChange }: Props) {
  const inputRef = useRef<any>();
  const { name } = inputInfo;

  useEffect(() => {
    if (inputRef) inputRef.current.focus();
  }, [inputInfo]);

  return (
    <div className="input-modal">
      <textarea
        name={name}
        onChange={handleChange}
        value={value}
        ref={inputRef} />
    </div>
  )
}

export default InputModal
