import "./styles.css";
import { useLocalStorage } from "./useLocalStorage";
export default function App() {
  const [text, setText] = useLocalStorage("key", "");
  const handleSave = (e) => {
    setText(e.target.value);
    console.log(text);
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
