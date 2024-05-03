import RPMmeter from './RPMmeter'
import Speedometer from './Speedometer'
import './css/vehicleinfo.css'

const VehileInfo = () => {


  return (
    <div className='vehicle-info-container'>
      <div className='dials'>
        <div className='dial speed'>
          <Speedometer speed={120} />
          <span>Speed</span>
        </div>
        <div className='dial rpm'>
        <RPMmeter/>
          <span>RPM</span>
        </div>
      </div>
      <div className='info'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
        blanditiis quod porro! Officiis a quis dolorem minima doloremque,
        officia molestiae asperiores adipisci libero ullam. Dolore nulla saepe
        ratione temporibus facere.
      </div>
    </div>
  )
}

export default VehileInfo
