import Todos from "./components/Todos";

const items = [
  "book",
  "another book",
  "guess what? another book",
  "you guessed it, another book",
];

function App() {
  return (
    <div>
      <Todos items={items} />
    </div>
  );
}

export default App;
