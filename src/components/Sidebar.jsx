import { Nav } from 'react-bootstrap'
import { FaCarAlt } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { ImProfile } from 'react-icons/im'
import '../App.css'

const SideBar = () => {
  return (
    <Nav className='col-md-2 d-none d-md-block bg-light sidebar'>
      <div className='sidebar-sticky'>
        <Nav.Item>
          <Nav.Link href='#home'>
            <FaCarAlt />
            &nbsp; Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#link1'>
            <ImProfile />
            &nbsp;Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#link2'>
            <IoMdSettings />
            &nbsp;Settings
          </Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  )
}

export default SideBar
