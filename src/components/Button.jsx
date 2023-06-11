import { useState, useEffect } from "react";

const [text, setText] = useState("");
const [valueSaved, setValueSaved] = useLocalStorage("key", "");

const Button = () => {
  useEffect(() => {
    setValueSaved(valueSaved);
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
      <button onClick={handleSave}>Gurdar</button>
    </div>
  );
};

export default Button;
