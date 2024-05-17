import './css/rpm-chart.css'
import car from '../assets/car.jpg'


const CarImage = () => {

  return (
    <div className='image-container d-flex flex-column align-items-center p-5'>
      <h5>Auto-Doc Vehicle Scanner</h5>
        <img src={car} alt='car' className='w-100 mt-3'/>
    </div>
  )
}

export default CarImage
