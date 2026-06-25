import { useState, useEffect } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  useEffect(() => {
    if (name && fruit) {
      console.log(`${name} selected ${fruit}`);
    }
  }, [fruit]);

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={(e) => setFruit(e.target.value)}
        value={fruit}
      >
        <option value="">-- Choose a fruit --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Watermelon">Watermelon</option>
      </select>
    </div>
  );
};
export default Exercise2;
