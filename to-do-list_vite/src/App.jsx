import React, { useState } from "react";
import TodoList from "./todoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [visivel, setVisivel] = useState(true);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [dataDia, setDataDia] = useState("");
  const [hora, setDataHora] = useState("");

  const addTarefa = () => {
    if (novaTarefa.trim() === "") return;
    const novoTodo = {
      id: Date.now(),
      text: novaTarefa,
      date: dataDia,
      hora: hora,
    };
    setTodos([...todos, novoTodo]);
    setNovaTarefa("");
    setDataDia("");
    setDataHora("");
  };

  const removerTarefa = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const verLista = () => {
    setVisivel(!visivel);
  };

  return (
    <div style={styles.container}>
      <h1>Lista de tarefas</h1>
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Nova Tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTarefa} style={styles.button}>
          Adicionar
        </button>
        <button onClick={verLista} style={styles.button}>
          {visivel ? "Mostrar" : "Ocultar"}
        </button>
      </div>
    </div>
  );
}
const styles = {
  container: {},
};
export default App;
