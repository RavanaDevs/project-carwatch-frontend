import './css/speedometer.css'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart, plugins } from 'chart.js'
import { useEffect, useState } from 'react'
import { socket } from './socket-connection'

Chart.register(ArcElement)

const ThrottlePositionMeter = () => {
  const max = 100

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

    cutout: '95%',
    rotation: 225,
    circumference: 270,
  }


  const [charData, setChartData] = useState(initialData)
  const [position, setPosition] = useState(0)

  const updateChart = (newPosition) => {
    setChartData({
      labels: ['Red', 'Yellow'],
      datasets: [
        {
          data: [newPosition, max - newPosition],
          backgroundColor: ['#2975f0', '#ccc'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56'],
        },
      ],
    })
  }

  useEffect(() => {
    socket.on('tp', (msg) => {
      const throttleValue = parseFloat(msg)
      // console.log("throttle position:",msg);
      updateChart(throttleValue)
      setPosition(throttleValue)
    })
  })

  const showChart = () => {
    return (
      <>
        <div className='char-center'>{position.toFixed(2)} %</div>
        <Doughnut data={charData} options={options} />
      </>
    )
  }

  return <div className='speedometer-container'>{showChart()}</div>
}

export default ThrottlePositionMeter
