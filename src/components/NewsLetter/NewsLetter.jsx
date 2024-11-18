import React, { useState } from 'react'
import './NewsLetter.css'
const NewsLetter = () => {

  const [input,setInput] = useState("");

  const getInputValue = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className='newsletter'>
      <div className="content">
       <h4>Subscribe to Security Dispatch</h4>
       <p>Receive the latest updates directly to your inbox.</p>
      </div>
      <div className="input">
        <input type="text" onChange={getInputValue} value={input} placeholder='Email' />
        <button type='submit'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
