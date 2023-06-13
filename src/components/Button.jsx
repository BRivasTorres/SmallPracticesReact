import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage";

const Button = () => {
  const [inputs, setInputs] = useState({
    input1: { text: "" },
    input2: { text: "" },
  });
  const [valueSaved, setValueSaved] = useLocalStorage("key", {
    input1: { text: "" },
    input2: { text: "" },
  });

  useEffect(() => {
    setInputs(valueSaved);
  }, [valueSaved]);

  const handleSave = (val) => {
    setValueSaved(inputs[val].text.text);
    console.log(inputs[val].text.text);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: { text: value },
    }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputs.input1.text}
        onChange={handleChange}
        name="input1"
      />
      <button onClick={() => handleSave("input1")}>Guardar</button>
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter your name"
        value={inputs.input2.text}
        onChange={handleChange}
        name="input2"
      />
      <button onClick={() => handleSave("input2")}>Guardar</button>
    </div>
  );
};

export default Button;
