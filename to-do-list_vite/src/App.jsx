import React, { useState, useEffect} from "react";
import TodoList from "./todoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const tarefas = localStorage.getItem("tarefas");
    return tarefas ? JSON.parse(tarefas) : [];
  });
  const [visivel, setVisivel] = useState(true);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [dataDia, setDataDia] = useState("");
  const [hora, setHora] = useState("");

  const addTarefa = () => {
    if (
      novaTarefa.trim() === "" ||
      dataDia.trim() === "" ||
      hora.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const novoTodo = {
      id: Date.now(),
      text: novaTarefa,
      date: dataDia,
      hora: hora,
    };
    setTodos([...todos, novoTodo]);
    setNovaTarefa("");
    setDataDia("");
    setHora("");
  };

  const removerTarefa = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const verLista = () => {
    setVisivel(!visivel);
  };

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(todos));
  }, [todos]);

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
          {visivel ? "Ocultar" : "Mostrar"}
        </button>
      </div>
      <div marginTop="20">
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          style={styles.inputADataHora}
        />
        <input
          type="date"
          value={dataDia}
          onChange={(e) => setDataDia(e.target.value)}
          style={styles.inputDataHora}
        />
        <div
          style={{
            height: "500px",
            overflowY: "scroll",
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          {visivel && <TodoList todos={todos} removerTarefa={removerTarefa} />}
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {},
};
export default App;
