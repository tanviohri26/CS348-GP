import React from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export default function UserExpenditure() {
    const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Expenditure over the past',
          },
        },
      };
    
    const data = {
        labels:[1,2,3,4,5,6],
        datasets: [
          {
            label: '',
            data: [2,3,4,5,6,7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
      
  return <Bar options={options} data={data} />;
}
