import './css/rpm-chart.css'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
  // Title,
  // Tooltip,
  // Legend
)

const RpmChart = () => {
  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23,
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'RPM',
        data: [
          820, 853, 840, 880, 950, 990, 1059, 1123, 1852, 2530, 2780, 2960,
          3152, 3200, 2520, 2150, 1560, 1000, 940, 853, 870, 920, 850,
        ],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className='chart-container d-flex flex-column align-items-center p-5'>
      <h4>RPM</h4>
      <div className='w-100 h-100'>
        <Line data={data} />
      </div>
    </div>
  )
}

export default RpmChart
