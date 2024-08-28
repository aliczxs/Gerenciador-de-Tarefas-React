import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tarefas, adicionarTarefa, alternarConclusaoTarefa, excluirTarefa }) => {
  const [novaTarefa, setNovaTarefa] = useState('');

  const handleAdicionarTarefa = () => {
    adicionarTarefa(novaTarefa);
    setNovaTarefa('');
  };

  return (
    <div className="todo-container">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={novaTarefa} 
          onChange={(e) => setNovaTarefa(e.target.value)} 
          placeholder="Adicionar tarefa" 
        />
        <button onClick={handleAdicionarTarefa}>Adicionar</button>
      </div>
      <div className="todo-list">
        {tarefas.map((tarefa, index) => (
          <TodoItem 
            key={index} 
            tarefa={tarefa} 
            onToggle={() => alternarConclusaoTarefa(index)} 
            onDelete={() => excluirTarefa(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
