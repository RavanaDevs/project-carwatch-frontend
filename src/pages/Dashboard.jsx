import { Container } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import Profile from '../components/Profile'
import '../App.css'
import VehileInfo from '../components/VahicleInfo'
import Map from '../components/Map'
import RpmChart from '../components/RpmChart'
import SpeedChart from '../components/SpeedChart copy'
import CarImage from '../components/CarImage'

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Container className='body-container d-flex'>
        <SideBar />
        <div className='dash-body p-2'>
          <Profile />
          <div className='row'>
            <div className='chart col-md-6'>
              <CarImage/>
              <VehileInfo />
            </div>
            <div className='map col-md-6'>
              <Map />
              <RpmChart/>
              <SpeedChart/>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard
