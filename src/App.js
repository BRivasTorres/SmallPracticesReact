import "./styles.css";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
export default function App() {
  const [text, setText] = useState("");
  const [textSaved, setTextSaved] = useLocalStorage("key", "");

  useEffect(() => {
    setText(textSaved);
  }, [textSaved]);

  const handleSave = (e) => {
    setTextSaved(text);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSave}>Gurdar</button>
    </div>
  );
}
