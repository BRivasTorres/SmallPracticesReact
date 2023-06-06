import "./styles.css";
import {useState, useEffect} from "react"
export default function App() {
  const [data, setData] = useState("")
  
  useEffect(() => {
    const datos = window.localStorage.getItem("My data")
    if (datos !== null) setData(JSON.parse(datos))
  }, [])
  
  useEffect(() => {
    window.localStorage.setItem("My data", JSON.stringify(data))
  }, [data])
  
  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={data} 
        onChange={e => setData(e.target.value)} 
      />
      <button onClick={() => setData(data)}>Gurdar</button>
    </div>
  );
}
