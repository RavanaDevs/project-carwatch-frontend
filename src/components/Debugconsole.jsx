import { Form } from 'react-bootstrap'
import './css/components.css'
// import DebugReply from './Debugrepy'
import { useEffect, useRef, useState } from 'react'
import { socket } from './socket-connection'

import axios from 'axios'



const DebugConsole = () => {
  const [replies, setReplies] = useState([])
  const inputRef = useRef()

  useEffect(() => {

    socket.on("debug",msg=>{
      console.log(msg)
    })

    // socket.on('debug-msg', (msg) => {
    //   console.log(msg)
    //   if (msg) {
    //     Object.entries(msg).forEach(([key, value]) => {
    //       const new_replies = [<DebugReply msg={value} cmd={key} />, ...replies]
    //       setReplies(new_replies)
    //     })
    //   }
    // })
  }, [])

  const sendMessage = async (msg) => {
    await axios.get('/api/debug', {
      params: {
        msg: msg,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = inputRef.current.value

    if (!msg) return
    if (msg === 'clear') {
      setReplies([])
      inputRef.current.value = ''
      return
    }

    sendMessage(msg)
    inputRef.current.value = ''
  }

  return (
    <div className='debug-console-container'>
      <div className='text-section'>
        {replies.map((reply) => {
          return reply
        })}
      </div>
      <div className='input-section'>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            ref={inputRef}
            type='text'
            placeholder='Send Debug Command'
          />
        </Form>
      </div>
    </div>
  )
}

export default DebugConsole
