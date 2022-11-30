import "./CardStrip.css";

function CardStrip(props) {
  return (
    <div className="card-Des">
      <p>☑{props.todo.title}</p>
      <p>✏{props.todo.desc}</p>
      <div className="myBtn">
        <button onClick={() => props.editHandler(props.todo.id)}>
          {props.todo.isDone ? "CAN" : "FIN"}
        </button>
        <button onClick={() => props.handleDelete(props.todo.id)}>DEL</button>
      </div>
    </div>
  );

  // const CardStrip = (props) => {
  //   const titling = props.titled.tiled;
  //   return <div>{titling}</div>;
}

export default CardStrip;
