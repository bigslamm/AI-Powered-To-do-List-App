import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      description,

      packed: false,
      id: crypto.randomUUID(),
    };
    onAddItems(newItem);

    setDescription("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="">What do you need to do today</h3>
      <div className="form-box">
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="button-add">+</button>
      </div>
    </form>
  );
}
