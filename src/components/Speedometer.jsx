import './css/speedometer.css'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart } from 'chart.js'
import { useEffect, useState } from 'react'

Chart.register(ArcElement)

const Speedometer = ({ speed }) => {
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

  const [chartData, setChartData] = useState(null)
  const [chartPlugins, setChartPlugins] = useState(null)

  useEffect(() => {
    const max = 200

    setChartData({
      labels: ['Red', 'Yellow'],
      datasets: [
        {
          data: [speed, max - speed],
          backgroundColor: ['#2975f0', '#ccc'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56'],
        },
      ],
    })

    setChartPlugins([
      {
        beforeDraw: function (chart) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx
          ctx.restore()
          var fontSize = (height / 160).toFixed(2)
          ctx.font = fontSize + 'em sans-serif'
          ctx.textBaseline = 'top'
          var text = speed + ' km/h',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2
          ctx.fillText(text, textX, textY)
          ctx.save()
        },
      },
    ])
  }, [speed])

  const showChart = () => {
    if (chartData) {
      return (
        <Doughnut data={chartData} options={options} plugins={chartPlugins} />
      )
    } else {
      return 'loading'
    }
  }

  return <div className='speedometer-container'>{showChart()}</div>
}

export default Speedometer
