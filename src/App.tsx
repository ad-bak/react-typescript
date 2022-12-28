import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  /*const todos = [
    new Todo("book"),
    new Todo("another book"),
    new Todo("guess what? another book"),
    new Todo("you guessed it, another book"),
  ];
*/
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
