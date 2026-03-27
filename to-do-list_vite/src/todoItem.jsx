import React from "react";
export default function todoItem({ todo, removerTarefa }) {
  return (
    <li>
      {todo.date} -- {todo.hora} -- {todo.text}
      <button style={styles.button} onClick={() => removerTarefa(todo.id)}>
        X
      </button>
    </li>
  );
}

const styles = {
  item: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};
