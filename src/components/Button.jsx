import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const Button = () => {
  const [text, setText] = useState("");
  const [inputs, setInputs] = useState({
    input1: { text: "" },
    input2: { text: "" },
  });
  const [valueSaved, setValueSaved] = useLocalStorage("key", "");

  useEffect(() => {
    setText(valueSaved);
  }, [valueSaved]);

  const handleSave = () => {
    setValueSaved(text);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: { text: value },
    }));
    console.log(name, value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default Button;
