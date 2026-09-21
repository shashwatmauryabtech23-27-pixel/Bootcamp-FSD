import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

const STORAGE_KEY = "bootcamp-fsd-todos";

function App() {
  const [todos, setTodos] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []; }
    catch { return []; }
  });
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)), [todos]);

  const visibleTodos = useMemo(() => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }, [filter, todos]);

  const remaining = todos.filter((todo) => !todo.completed).length;

  function addTodo(event) {
    event.preventDefault();
    const text = title.trim();
    if (!text) return;
    setTodos((current) => [
      { id: crypto.randomUUID(), title: text, completed: false },
      ...current,
    ]);
    setTitle("");
  }

  const toggleTodo = (id) => setTodos((current) => current.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  const deleteTodo = (id) => setTodos((current) => current.filter((todo) => todo.id !== id));
  const clearCompleted = () => setTodos((current) => current.filter((todo) => !todo.completed));

  return (
    <div className="app-shell" id="top">
      <Navbar />
      <main className="todo-container">
        <section className="hero-section">
          <p className="eyebrow">Plan your day</p>
          <h1>Stay focused. Get things done.</h1>
          <p>Add tasks, mark them complete, and keep your day organised.</p>
        </section>

        <section className="todo-card">
          <form className="todo-form" onSubmit={addTodo}>
            <label className="sr-only" htmlFor="new-todo">New task</label>
            <input id="new-todo" value={title} onChange={(event) => setTitle(event.target.value)}
              placeholder="What do you need to do?" autoComplete="off" />
            <button type="submit">Add task</button>
          </form>

          <div className="todo-toolbar">
            <span>{remaining} task{remaining === 1 ? "" : "s"} remaining</span>
            <div className="filters" aria-label="Filter tasks">
              {["all", "active", "completed"].map((item) => (
                <button key={item} type="button" className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}>{item}</button>
              ))}
            </div>
          </div>

          {visibleTodos.length === 0 ? (
            <div className="empty-state">
              <span aria-hidden="true">✓</span><h2>No tasks here</h2>
              <p>Add a task or choose another filter.</p>
            </div>
          ) : (
            <ul className="todo-list">
              {visibleTodos.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                  <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}
                    aria-label={`Mark ${todo.title} as ${todo.completed ? "active" : "completed"}`} />
                  <span>{todo.title}</span>
                  <button type="button" className="delete-button" onClick={() => deleteTodo(todo.id)}
                    aria-label={`Delete ${todo.title}`}>Delete</button>
                </li>
              ))}
            </ul>
          )}

          {todos.some((todo) => todo.completed) && (
            <button type="button" className="clear-button" onClick={clearCompleted}>Clear completed tasks</button>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
