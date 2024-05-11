import './css/components.css'
import './css/profile.css'

import logo from '../assets/logo.png'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../axiosConfig'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [formData, setFormData] = useState({
    username: '',
    group: '',
    nickname: '',
    engine: '',
    ODO: '',
    chasses: '',
    runtime: '',
    model: '',
    maxSpeed: '',
  })

  useEffect(() => {
    const getData = async () => {
      const profile = await axios.get('/api/profile', {
        params: { id: '663efc15aa4dbc71275ba4ea' },
      })

      setFormData(profile.data)
    }
    getData()
  }, [])
  return (
    <div className='profile-container bg-light p-2'>
      <div className='detail-1'>
        <div className='img-section'>
          <img src={logo} alt='logo' width={70} height={70} />
        </div>
        <div className='info-section'>
          <h5>{formData.username}</h5>
          <span>
            <span className='lable'>Group: </span>
            <b>{formData.group}</b>
          </span>
          <span>
            <span className='lable'>User:</span> <b>{formData.nickname}</b>
          </span>
          <Button as={Link} to={'/profile'} variant='primary' className='btn-sm'>
            View
          </Button>
        </div>
      </div>
      <div className='m-bar'></div>
      <div className='detail-2'>
        <div className='left'>
          <span>
            <span className='lable'>Engine: </span>
            <b>{formData.engine}</b>
          </span>
          <span>
            <span className='lable'>Chasses: </span>
            <b>{formData.chasses}</b>
          </span>
          <span>
            <span className='lable'>Model: </span>
            <b>{formData.model}</b>
          </span>
        </div>
        <div className='right'>
          <span>
            <span className='lable'>ODO: </span>
            <b>{formData.ODO}km</b>
          </span>
          <span>
            <span className='lable'>Runtime: </span>
            <b>{formData.runtime}h</b>
          </span>
          <span>
            <span className='lable'>Max Speed: </span>
            <b>{formData.maxSpeed}km/h</b>
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
