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
      <h3 className="bg-blue-500 text-white px-4 py-2 rounded">
        
        What do you need to do today
      </h3>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="">
        Add
      </button>
    </form>
  );
}
