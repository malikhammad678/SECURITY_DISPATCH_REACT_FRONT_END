import React from 'react'
import './Terminal.css'
import Code1 from '../Codes/Code1'
const Terminal = ({text1,text2}) => {
  return (
    <div className='terminal'>
      <div className="header">
        <div className='dots'>
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
    </div>
    <p className="name">Terminal</p>
      </div>
      <div className="terminal_body">
        <p className='code'> <Code1 text={text1} /> </p>
        <p className='code'> <Code1 text={text2} /> </p>
      </div>
    </div>
  )
}

export default Terminal
