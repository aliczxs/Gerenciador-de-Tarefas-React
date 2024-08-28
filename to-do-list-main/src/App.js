import React, { useState } from 'react';
import TodoList from './componentes/TodoList';
import Graficos from './componentes/Graficos';
import './App.css';

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  
  const adicionarTarefa = (tarefa) => {
    if (tarefa) {
      setTarefas([...tarefas, { texto: tarefa, completada: false }]);
    }
  };

  const alternarConclusaoTarefa = (index) => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === index ? { ...tarefa, completada: !tarefa.completada } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const excluirTarefa = (index) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== index);
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="main-container">
        <div className="todo-container">
          <TodoList 
            tarefas={tarefas} 
            adicionarTarefa={adicionarTarefa} 
            alternarConclusaoTarefa={alternarConclusaoTarefa} 
            excluirTarefa={excluirTarefa} 
          />
        </div>
        <div className="chart-container">
          <Graficos tarefas={tarefas} />
        </div>
      </div>
    </div>
  );
};

export default App;
