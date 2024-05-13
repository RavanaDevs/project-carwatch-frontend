import './css/speedometer.css'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart, plugins } from 'chart.js'
import { useEffect, useState } from 'react'
import { socket } from './socket-connection'

Chart.register(ArcElement)

const ECTMeter = () => {
  const max = 300

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
  const [temp, setTemp] = useState(0)

  const updateChart = (newTemp) => {
    setChartData({
      labels: ['Red', 'Yellow'],
      datasets: [
        {
          data: [newTemp, max - newTemp],
          backgroundColor: ['#2975f0', '#ccc'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56'],
        },
      ],
    })
  }

  useEffect(() => {
    socket.on('ect', (msg) => {
      const throttleValue = parseInt(msg)
      // console.log("coolent temprature:",msg)
      updateChart(throttleValue)
      setTemp(throttleValue)
    })
  })

  const showChart = () => {
    return (
      <>
        <div className='char-center'>
          {temp} {"'C"}
        </div>
        <Doughnut data={charData} options={options} />
      </>
    )
  }

  return <div className='speedometer-container'>{showChart()}</div>
}

export default ECTMeter
