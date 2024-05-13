import './css/speedometer.css'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart, plugins } from 'chart.js'
import { useEffect, useState } from 'react'
import { socket } from './socket-connection'

Chart.register(ArcElement)

const RPMmeter = () => {
  const max = 8000

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
  const [rpm, setRpm] = useState(0)

  const updateChart = (newRpm) => {
    setChartData({
      labels: ['Red', 'Yellow'],
      datasets: [
        {
          data: [newRpm, max - newRpm],
          backgroundColor: ['#2975f0', '#ccc'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56'],
        },
      ],
    })
  }

  useEffect(() => {
    socket.on('rpm', (msg) => {
      const rpmValue = parseInt(msg)
      // console.log(msg);
      updateChart(rpmValue)
      setRpm(rpmValue)
    })
  })

  const showChart = () => {
    return (
      <>
        <div className='char-center'>{rpm} rpm</div>
        <Doughnut data={charData} options={options} />
      </>
    )
  }

  return <div className='speedometer-container'>{showChart()}</div>
}

export default RPMmeter
