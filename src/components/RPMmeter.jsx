import { useState, useEffect } from 'react'
import './css/speedometer.css' // Import CSS file for styling

const RPMmeter = ({ speed }) => {
  const [rotation, setRotation] = useState(0)

  // Update rotation angle based on speed
  useEffect(() => {
    const maxSpeed = 8000 // Maximum speed for full rotation (adjust as needed)
    const maxRotation = 180 // Maximum rotation angle for full rotation (adjust as needed)
    const newRotation = (speed / maxSpeed) * maxRotation // Calculate new rotation
    setRotation(newRotation)
  }, [speed])

  return (
    <div className='speedometer-container'>
      <svg
        className='speedometer'
        width='200'
        height='200'
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='100'
          cy='100'
          r='90'
          fill='none'
          stroke='#ccc'
          strokeWidth='10'
        />
        <path
          className='speedometer-pointer'
          transform={`rotate(${rotation} 100 100)`}
          d='M100,20 L98,100 L102,100 Z'
          fill='#ccc'
          stroke='#ccc'
        />
        <text x='100' y='150' textAnchor='middle' fontSize='20' fill='#000'>
          {speed} rpm
        </text>
      </svg>
    </div>
  )
}

export default RPMmeter
