export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => !item.packed).length;
  return (
    <footer className="p-20">
      Your remaining todo:
      {numPacked}
    </footer>
  );
}
