import React from 'react'
import './CodingSidebar.css'
import { Link } from 'react-router-dom'

import privilage from '../../assets/privilage.jpg'
import dooker from '../../assets/Dooker.png'

import blog1 from '../../assets/b-1.jpeg'

const CodingSidebar = () => {
  return (
    <div className='code_sidebar' style={{color:'#d2d2d2'}}>
      <div className="newsletter_box">
        <h2>Subscribe to our free cybersecurity newsletter.</h2>
        <form action="#">
            <input type="text" placeholder='Enter email' />
            <button type='submit'>SIGN UP</button>
            <p>Don't worry, we don't spam</p>
        </form>
      </div>
      <div className="privilage_box">
        <h1>Privilege Escalation Techniques</h1>
        <Link to={"/#"}>
         <img className='img' src={privilage} alt="" />
        </Link>
      </div>
      <div className="privilage_box">
        <h1>Docker Security eBook</h1>
        <Link to={"/#"}>
         <img className='img' src={dooker} alt="" />
        </Link>
      </div>

     {/* <div className="follow_box">
        <h2>Follow Us</h2>
        <div className="container">
            <Link  className='link' to={"/#"}><i  style={{color:'#fff'}} className='icon1' class='bx bxl-instagram-alt'></i></Link>
            <Link className='link' to={"/#"}><i className='icon1' class='bx bxl-twitter'></i></Link>
            <Link className='link' to={"/#"}><i className='icon1' class='bx bxl-github' ></i></Link>
            <Link className='link' to={"/#"}><i className='icon1' class='bx bxl-youtube' ></i></Link>
        </div>
     </div> */}
     <div className="follow_box">
        <h2>Subscribe to the CyberTalk Podcast</h2>
        <div className="container">
            <Link  className='link' to={"/#"}><i className='icon1' class='bx bx-signal-5'></i> </Link>
            <Link className='link' to={"/#"}><i class='bx bxl-android'></i></Link>
            <Link className='link' to={"/#"}><i class='bx bxs-message-rounded-dots' ></i></Link>
            <Link className='link' to={"/#"}><i class='bx bx-wifi' ></i></Link>
        </div>
     </div>

     <div className="categories">
        <h2>Categories</h2>
        <div className="links">
            <Link className='link' to={"/#"}>> Security</Link>
            <Link className='link' to={"/#"}>> Course</Link>
            <Link className='link' to={"/#"}>> Coding</Link>
            <Link className='link' to={"/#"}>> Add the items you want :)</Link>
        </div>
     </div>

     <div className="training">
        <h3>Free Training</h3>
        <div className="cont">
            <h2>Red Team Training</h2>
            <Link to={"/#"}> <img className='img' src={blog1} alt="" /></Link>
        </div>
        <div className="cont">
            <h2>Blue Team Training</h2>
           <Link to={"/#"}> <img className='img' src={blog1} alt="" /> </Link>
        </div>
        <div className="cont">
            <h2>Linux Server Security</h2>
           <Link to={"/#"}><img className='img' src={blog1} alt="" /></Link>
        </div>
     </div>

    </div>
  )
}

export default CodingSidebar
