import React from 'react'
import './HomeSection2.css'
import { Link } from 'react-router-dom'
import blockChain from '../../assets/blockchain.png'
import { ArrowDown } from 'lucide-react'

const HomeSection2 = () => {
  return (
    <div className="section_2">
      <div className='section_2_home'>
        <div
        data-aos="fade"
          className="left_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className='sub_head'>Security Dispatch</span>
          <h1>Dispatch's Hub for Blockchain Innovation.</h1>
          <p>We're a student-run organization at UC Dispatch focused on blockchain innovation via consulting, education, design, and research.</p>
          <Link className="btn">Explore</Link>
        </div>
        <div className="right_container" data-aos="fade">
          <img src={blockChain} alt="" />
        </div>
      </div>
      <div className='arrow_con'>
        <a href="#educate"><ArrowDown style={{color:'#d2d2d2'}} className='arrow_btn' size={24} /></a>
      </div>
    </div>
  )
}

export default HomeSection2
