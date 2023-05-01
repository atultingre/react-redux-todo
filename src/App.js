import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./store/actions/TodoActions";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeTodo = (t) => {
    dispatch(RemoveTodoAction(t));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a Todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="btn-add">
            Add
          </button>
        </form>
        <ul className="allTodo">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todo-text">{t.todo}</span>
                <button className="btn-del" onClick={() => removeTodo(t)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
