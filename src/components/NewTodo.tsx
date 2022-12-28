import { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const newTodoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo = newTodoInputRef.current!.value;

    if (newTodo.trim().length === 0) {
      return;
    }

    props.onAddTodo(newTodo);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={newTodoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
