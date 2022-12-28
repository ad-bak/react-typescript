import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("book"),
    new Todo("another book"),
    new Todo("guess what? another book"),
    new Todo("you guessed it, another book"),
  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
