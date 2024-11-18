import React from 'react'
import './HomeSection3.css'
import { CircleDollarSign, Flag, Globe, User2 } from 'lucide-react'
const HomeSection3 = () => {
  return (
    <div className='section_3' id='educate'>
      <div className="header">
        <span className='small'>Departments</span>
        <h2>Build. Educate. Innovate.</h2>
        <p>Blockchain at Berkeley drives innovation in the blockchain industry by building an ecosystem that empowers students to make an impact through practical education, consulting for enterprise companies, conducting open source research, and creating new ideas through human-centered design.</p>
      </div>
      <div className="container" data-aos='fade'>
        <div className="box">
            <User2 size={32} className='icon' /> <br />
            <h1>10+</h1>
            <hr />
            <span>Startups Founded</span>
        </div>
        <div className="box">
            <CircleDollarSign size={32} className='icon' /> <br />
            <h1>10+</h1>
            <hr />
            <span>Consulting Projects</span>
        </div>
        <div className="box">
            <Globe size={32} className='icon' /> <br />
            <h1>20+</h1>
            <hr />
            <span>Partners Worldwide</span>
        </div>
        <div className="box">
            <Flag size={32} className='icon' /> <br />
            <h1>20k+</h1>
            <hr />
            <span>SEdX Students</span>
        </div>
      </div>
    </div>
  )
}

export default HomeSection3
