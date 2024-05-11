import { useEffect, useState } from 'react'
import ECTMeter from './EngineCooletntTemprature'
import RPMmeter from './RPMmeter'
import Speedometer from './Speedometer'
import ThrottlePositionMeter from './ThrottlePosition'
import './css/vehicleinfo.css'
import { socket } from './socket-connection'

const VehileInfo = () => {

  const [fuelStatus, setFuelStatus] = useState('---')
  const [engineLoad, setEngineLoad] = useState('---')

  useEffect(() => {
    socket.on('fuelStatus', (msg) => {
      // console.log("fuel status:",msg);
      setFuelStatus(msg)
    })
    socket.on('engineLoad', (msg) => {
      // console.log("engine load:",msg);
      setEngineLoad(msg)
    })
  })
  return (
    <div className='vehicle-info-container'>
      <div className='dials'>
        <div className='dial speed'>
          <Speedometer speed={120} />
          <span>Speed</span>
        </div>
        <div className='dial rpm'>
          <RPMmeter />
          <span>RPM</span>
        </div>
      </div>
      <div className='dials'>
        <div className='dial speed'>
          <ThrottlePositionMeter/>
          <span>Throttle Position</span>
        </div>
        <div className='dial rpm'>
          <ECTMeter />
          <span>Engine Coolent Temprature</span>
        </div>
      </div>
      <div className='info mt-4'>
        <h5>Fuel system status:</h5>
        <div className='info w-100 d-flex justify-content-center mb-4'>
          <b>{fuelStatus}</b>
        </div>
        <h5>Calculated engine load:</h5>
        <div className='info w-100 d-flex justify-content-center mb-3'>
          <b>{engineLoad}</b>
        </div>
      </div>
    </div>
  )
}

export default VehileInfo
