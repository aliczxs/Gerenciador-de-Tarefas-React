import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Graficos = ({ tarefas }) => {
  const completadas = tarefas.filter(tarefa => tarefa.completada).length;
  const total = tarefas.length;

  const data = {
  labels: [
    'CONCLUÍDO',
    'ANDAMENTO'  
  ],
  datasets: [{
    label: 'Tarefas',
    data: [completadas, total - completadas],
    backgroundColor: [
      '#1c7f13',
      '#fad75f'
    ],
    hoverOffset: 4
  }]
};

  return (
    <div className="chart-container">
      <h2>Progresso</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Graficos;
