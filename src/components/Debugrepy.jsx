const DebugReply = ({ cmd, msg }) => {
  return (
    <div className='reply'>
      <div className='head'>
        <span>
          <b>{cmd}</b>
        </span>
        <div className='body'>
          <span>{msg}</span>
        </div>
      </div>
    </div>
  )
}

export default DebugReply
