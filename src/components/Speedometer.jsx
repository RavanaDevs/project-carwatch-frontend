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

    cutout: '95%',
    rotation: 225,
    circumference: 270,
  }

  const initialPlugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx
        ctx.restore()
        var fontSize = (height / 160).toFixed(2)
        ctx.font = fontSize + 'em sans-serif'
        ctx.textBaseline = 'top'
        var text = 0 + ' km/h',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2
        ctx.fillText(text, textX, textY)
        ctx.save()
      },
    },
  ]

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
      console.log("spd",msg);
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
