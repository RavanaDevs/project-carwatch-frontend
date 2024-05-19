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
  LineElement,
  // Title,
  // Tooltip,
  // Legend
)

const RpmChart = () => {
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
          850, 860, 855, 865, 875, 890, 920, 940, 950, 970, 990, 1010, 1050,
          1085, 1120, 1150, 1190, 1230, 1265, 1300, 1340, 1385, 1430, 1475,
          1520, 1570, 1620, 1670, 1725, 1770, 1830, 1890, 1950, 2020, 2100,
          2180, 2260, 2340, 2425, 2510, 2600, 2700, 2780, 2880, 2980, 3080,
          3180, 3280, 3380, 3490, 3600, 3710, 3820, 3930, 4000, 4050, 4000,
          4005, 4000, 4100, 4000, 4000, 4050, 4000, 3900, 3880, 3785, 3680,
          3580, 3485, 3390, 3300, 3205, 3110, 3020, 2950, 2830, 2735, 2700,
          2640, 2550, 2460, 2370, 2280, 2190, 2110, 2030, 1950, 2000, 1895,
          1830, 1770, 1710, 1650, 1600, 1545, 1490, 1440, 1390, 1340, 1290,
          1245, 1200, 1160, 1120, 1080, 1040, 1010, 980, 950, 920, 890, 870,
          860, 850,
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
          text: 'RPM'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    }     
  }

  return (
    <div className='chart-container d-flex flex-column align-items-center p-5'>
      <h4>RPM</h4>
      <div className='w-100 h-100'>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default RpmChart
