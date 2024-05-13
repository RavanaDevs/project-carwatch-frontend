import './css/rpm-chart.css'
import { Line } from 'react-chartjs-2'
import { CategoryScale, Chart, LineElement, LinearScale } from 'chart.js'

Chart.register(CategoryScale)
Chart.register(LinearScale)
const RpmChart = () => {
  const labels = [1, 2, 3, 4, 5, 6, 7]
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  return (
    <div className='chart-container d-flex flex-column align-items-center'>
      <div>
        <Line data={data} />
      </div>
    </div>
  )
}

export default RpmChart
