import React from "react";
import TodoItem from "./todoItem";

export default function TodoList({ todos, removerTarefa }) {
  return (
    <ul style={styles}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} removerTarefa={removerTarefa} />
      ))}
    </ul>
  );
}

const styles = {
  listStyle: "none",
  padding: 0,
};
