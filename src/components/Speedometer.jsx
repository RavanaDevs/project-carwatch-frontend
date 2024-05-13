import './css/speedometer.css'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart, plugins } from 'chart.js'
import { useEffect, useState } from 'react'
import { socket } from './socket-connection'

Chart.register(ArcElement)

const Speedometer = () => {
  const max = 180

  const initialData = {
    labels: ['Red', 'Yellow'],
    datasets: [
      {
        data: [0, max - 0],
        backgroundColor: ['#2975f0', '#ccc'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56'],
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: 'black',
      },
    },

    tooltips: {
      enabled: true,
    },

    cutout: '85%',
    rotation: 225,
    circumference: 270,
  }

  const [charData, setChartData] = useState(initialData)
  const [spd, setSpd] = useState(0)

  const updateChart = (newSpd) => {
    setChartData({
      labels: ['Red', 'Yellow'],
      datasets: [
        {
          data: [newSpd, max - newSpd],
          backgroundColor: ['#2975f0', '#ccc'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56'],
        },
      ],
    })
  }

  useEffect(() => {
    socket.on('spd', (msg) => {
      const spdValue = parseInt(msg)
      // console.log("speed:",msg);
      updateChart(spdValue)
      setSpd(spdValue)
    })
  })

  const showChart = () => {
    return (
      <>
        <div className='char-center'>{spd} km/h</div>
        <Doughnut data={charData} options={options} />
      </>
    )
  }

  return <div className='speedometer-container'>{showChart()}</div>
}

export default Speedometer
