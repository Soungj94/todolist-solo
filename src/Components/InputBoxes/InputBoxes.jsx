import React, { useState } from "react";
import "./InputBoxes.css";

const InputBoxes = (props) => {
  const { todos, setTodos } = props;
  const [title, SetTitle] = useState("");
  const [desc, setDesc] = useState("");

  const TitleChangeHandler = (event) => {
    SetTitle(event.target.value);
  };
  const DescChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    const todo = { title, desc, id: todos.length + 1, isDone: false };
    setTodos([...todos, todo]);
  };

  return (
    <form onSubmit={onClick}>
      <div className="inputBoxes__head">
        <div className="inputBox__main">
          <label>Title</label>
          <input type="text" onChange={TitleChangeHandler} />
        </div>
        <div className="inputBox__main">
          <label>Desc</label>
          <input type="text" onChange={DescChangeHandler} />
        </div>
      </div>
      <div>
        <button className="inputBox__actions" type="submit">
          RECORD
        </button>
      </div>
    </form>
  );
};
export default InputBoxes;
