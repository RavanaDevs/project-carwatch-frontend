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
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  zoomPlugin
  // Title,
  // Tooltip,
  // Legend
)

const SpeedChart = () => {
  const labels = [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
    41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77,
    79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 111,
    113, 115, 117, 119, 121, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141,
    143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171,
    173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201,
    203, 205, 207, 209, 211, 213, 215, 217, 219, 221, 223,
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'RPM',
        data: [
          0, 2, 3, 4, 5, 6, 9, 12, 13, 15, 17, 20, 22, 24, 26, 28,
30, 32, 34, 36, 38, 40, 43, 46, 48, 52, 54, 57, 60, 62, 64, 68,
71, 74, 78, 82, 85, 88, 91, 95, 99, 103, 107, 108, 108, 109, 111, 111,
108, 104, 103, 105, 106, 104, 100, 90, 85, 85, 84, 85, 85, 85, 85, 85,
83, 82, 79, 77, 74, 72, 70, 67, 65, 63, 60, 58, 56, 53, 52, 50,
48, 46, 43, 41, 39, 37, 35, 33, 34, 32, 30, 28, 26, 24, 23, 22,
20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Speed'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
    }     
  }

  return (
    <div className='chart-container d-flex flex-column align-items-center p-5'>
      <h4>Speed (km/h)</h4>
      <div className='w-100 h-100'>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default SpeedChart
