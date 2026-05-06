import Item from "./Item";

export default function ParkingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  console.log(items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}
