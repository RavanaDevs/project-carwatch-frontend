import { Container } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import Profile from '../components/Profile'
import '../App.css'
import VehileInfo from '../components/VahicleInfo'

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Container className='body-container d-flex'>
        <SideBar />
        <div className='dash-body p-2'>
          <Profile />
          <div className='chart col-md-6'>
            <VehileInfo />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard
