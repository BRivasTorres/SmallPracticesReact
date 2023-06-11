import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const Button = () => {
  const [text, setText] = useState("");
  const [valueSaved, setValueSaved] = useLocalStorage("key", "");

  useEffect(() => {
    setText(valueSaved);
  }, [valueSaved]);

  const handleSave = () => {
    setValueSaved(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default Button;
