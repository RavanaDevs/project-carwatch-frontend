import { useEffect, useState } from 'react'
import '../App.css'
import { socket } from './socket-connection'
import warning_sign from '../assets/warning_sign.webp'

const Hazzard = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    socket.on('hzd', (msg) => {
      console.log(msg)
      setShow(true)
    })
  }, [])

  const showHazzard = () => {
    if (show) {
      return (
        <div className='hazzard-container p-5'>
          <div className='top-row d-flex justify-content-end'>
            <button
              className='close-btn'
              onClick={() => {
                setShow(false)
              }}
            >
              X
            </button>
          </div>
          <div className='hazzard-body'>
            <img src={warning_sign} alt='warning' />
            <h2>Your vehicle in a Hazard!</h2>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
  return <>{showHazzard()}</>
}

export default Hazzard
