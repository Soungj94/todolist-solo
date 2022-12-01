import "./App.css";
import InputBoxes from "./Components/InputBoxes/InputBoxes";
import CardStrip from "./Components/InputBoxes/CardStrap/CardStrp";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const onDeleteHandler = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  const onEditHandler = (id) => {
    const newTodoList = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(newTodoList);
  };
  return (
    <div className="header">
      <h1 className="colorN">Todo-List☑</h1>
      <InputBoxes todos={todos} setTodos={setTodos} />
      <section className="cardArr">
        work
        {todos.map((el) => {
          if (el.isDone === false)
            return (
              <CardStrip
                handleDelete={onDeleteHandler}
                editHandler={onEditHandler}
                todo={el}
                key={el.id}
              />
            );
        })}
      </section>
      <section className="cardArr">
        Done
        {todos.map((el) => {
          if (el.isDone === true)
            return (
              <CardStrip
                handleDelete={onDeleteHandler}
                editHandler={onEditHandler}
                todo={el}
                key={el.id}
              />
            );
        })}
      </section>
    </div>
  );
};
export default App;
