import { useRef } from "react";

const NewTodo: React.FC<{}> = () => {
  const newTodoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newTodo = newTodoInputRef.current!.value;

    if (newTodo.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={newTodoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
