import React from 'react';

const TodoItem = ({ tarefa, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${tarefa.completada ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={tarefa.completada} 
        onChange={onToggle} 
      />
      <span>{tarefa.texto}</span>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default TodoItem;
