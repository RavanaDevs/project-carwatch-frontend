import { Container } from 'react-bootstrap'
import NavBar from '../components/Navbar'
import '../App.css'
import DebugConsole from '../components/Debugconsole'

const Debug = () => {
  return (
    <>
      <NavBar />
      <Container className='body-container d-flex justify-content-center align-items-center'>
        <DebugConsole />
      </Container>
    </>
  )
}

export default Debug
