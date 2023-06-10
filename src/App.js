import "./styles.css";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
export default function App() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [valueSaved, setValueSaved] = useLocalStorage("key", "");

  useEffect(() => {
    setValueSaved(valueSaved);
  }, [valueSaved]);

  const handleSave = (val) => {
    setValueSaved(val);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleSave(text)}>Gurdar</button>
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/*<button onClick={handleSave}>Gurdar</button>*/}
    </div>
  );
}
