import './css/components.css'
import './css/profile.css'

import logo from '../assets/logo.png'
import { Button } from 'react-bootstrap'

const Profile = () => {
  return (
    <div className='profile-container bg-light p-2'>
      <div className='detail-1'>
        <div className='img-section'>
          <img src={logo} alt='logo' width={70} height={70} />
        </div>
        <div className='info-section'>
          <h5>Kavindu Sanjula</h5>
          <span>
            <span className='lable'>Group: </span>
            <b>Eng</b>
          </span>
          <span>
            <span className='lable'>User:</span> <b>sanju</b>
          </span>
          <Button variant='primary' className='btn-sm'>
            View
          </Button>
        </div>
      </div>
      <div className='m-bar'></div>
      <div className='detail-2'>
        <div className='left'>
          <span>
            <span className='lable'>Engine: </span>
            <b>82565895658</b>
          </span>
          <span>
            <span className='lable'>Chasses: </span>
            <b>m5df8e36df</b>
          </span>
          <span>
            <span className='lable'>Model: </span>
            <b>Toyota RD</b>
          </span>
        </div>
        <div className='right'>
          <span>
            <span className='lable'>ODO: </span>
            <b>15320km</b>
          </span>
          <span>
            <span className='lable'>Runtime: </span>
            <b>560h</b>
          </span>
          <span>
            <span className='lable'>Max Speed: </span>
            <b>122km/h</b>
          </span>
        </div>
      </div>
      <div className='m-bar'></div>
      <div className='detail-3'>
        <div className='detail-3-title'>
          <h6>Info</h6>
          <Button variant='primary' className='btn-sm'>
            Add
          </Button>
        </div>
        <div className='record'>
          <span className='info-title'>License Expire Data</span>
          {' | '}
          <span className='info-date'>2023/12/11</span>{' '}
          <span>
            <input type='checkbox' name='1' id='1' />
          </span>
        </div>
        <div className='record'>
          <span className='info-title'>License Expire Data</span>
          {' | '}
          <span className='info-date'>2023/12/11</span>{' '}
          <span>
            <input type='checkbox' name='1' id='1' />
          </span>
        </div>
        <div className='record'>
          <span className='info-title'>License Expire Data</span>
          {' | '}
          <span className='info-date'>2023/12/11</span>{' '}
          <span>
            <input type='checkbox' name='1' id='1' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Profile
