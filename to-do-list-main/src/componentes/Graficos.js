import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Graficos = ({ tarefas }) => {
  const completadas = tarefas.filter(tarefa => tarefa.completada).length;
  const total = tarefas.length;

  const data = {
    labels: ['Concluída', 'Em andamento'],
    datasets: [
      {
        data: [completadas, total - completadas],
        backgroundColor: ['#f5d547', '#db3069'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Progresso</h2>
      <Pie data={data} />
    </div>
  );
};

export default Graficos;
