import React from 'react'
import './AppSection.css'
import { Link } from 'react-router-dom'
import blockchain from '../../assets/blockchain.png'
const AppSection = () => {
  return (
    <div className='app_section'>
      <div className="flex_dep">
        <div className="image" data-aos='fade'>
           <img src={blockchain} alt="" />
        </div>
<div className="content" data-aos='fade'>
         
         <h1>SimpleFi: DeFi app for crypto newbies</h1>
         <p>SimpleFi is a decentralized finance app for beginners and non-technical users. The app integrates gesture-based shortcuts and context-aware AI assistants to ensure a smooth onramp for DeFi users who new to the crypto space. The platform supports trading and swapping various tokens, and provides a simple wallet for managing assets.</p>
         <Link to={"/"} className='btn2'>Case Study</Link>
        </div>
       
      </div>
    </div>
  )
}

export default AppSection
