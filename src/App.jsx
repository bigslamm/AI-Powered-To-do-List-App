import React from "react";
import { useState } from "react";
import Form from "./Forms";
import Item from "./Item";
import ParkingList from "./ParkingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const numItems = items.length;

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="main">
      <Header />
      <Form onAddItems={handleAddItem} />
      <ParkingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        // onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

function Header() {
  return (
    <div>
      <p className="">
        Doing what you love is the cornerstone of having abundance in your
        life"; Wayne Dyer
      </p>
      <h1 className="text-xl p-20">The first AI-powered The To Do List</h1>
      {/* <ul className="list-style">
        <li>bottle</li>
        <li>mother </li>
        <li>father</li>
      </ul> */}
    </div>
  );
}
