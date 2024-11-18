import React from 'react'
import './News.css'
import BlogTitle from '../components/BlogTitle/BlogTitle'
import { Link } from 'react-router-dom'
import { LinkIcon } from 'lucide-react'
import Footer from '../components/Footer/Footer'
import { blogs } from '../assets/Blogs'
const News = () => {
  return (
    <>
    <div className="main" style={{color:'#fff'}}>
    <div style={{color:'#fff'}} className='news'>
     <BlogTitle title={"OUR"} title2={"NEWSLETTER"} />
     <div className="header">
     <h1>Security Dispatch, Cyber for everyone.</h1>
     </div>
    </div>
    <hr />

    <div className="main_flex1">
        <div className="left_box">
            <h2>News from Security dispatch industry</h2>
            <div className="first_heading">
                <a className='link' href="#">Dispatches Update - June 2023</a>
                <div className="main_f_flex">
                <div className="f_flex">
                    <p className='updated'>Last Upadated:</p>
                    <p className='yy'>2023-07-30</p>
                </div>
                <div>
                <p>Author: <a href="#" className='author'>Chris Farris <LinkIcon size={20} /> </a> </p>
                </div>
                </div>
            </div>
            <div className="first_heading">
                <a className='link' href="#">Welcome to Dispatches</a>
                <div className="main_f_flex">
                <div className="f_flex">
                    <p className='updated'>Last Upadated:</p>
                    <p className='yy'>2024-03-30</p>
                </div>
                <div>
                <p>Author: <a href='#' className='author'>Chris Farris <LinkIcon size={20} /> </a> </p>
                </div>
                </div>
            </div>
            <div className="previous">
            <h3 className='txt'>Previous Months News</h3>
        <div className="previuos_container">
        {
          blogs.slice(0,6).map((item, index) => {
            return (
              <Link key={index} to={`/detail/${item.id}`} className='blog'>
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="content">
                  <h2>{item.title}</h2>
                  <div className="flex">
                    <p className="name">{item.name}</p>
                    <p className="name">{item.date}</p>
                  </div>
                  <span className='author'>{item.author}</span>
                    <button>{item.btn}</button>
                </div>
              </Link>
            )
          })
        }
      </div>
        </div>
        </div>

     <div className="sidebar">
        <div className="social_links">
            <h2>Links</h2>
            <a className='social' href="#">GitHub</a>
            <a className='social' href="#">Twitter</a>
            <a className='social' href="#">PrimeHarbor</a>
            <a className='social' href="#">RSS</a>
        </div>
        <div className="resources">
            <h2>Resources</h2>
            <a className='social' href="#">AWS Customer incidents</a>
            <a className='social' href="#">TrailDiscover</a>
        </div>
        <div className="tags">
            <h2>Tags</h2>
            <p> <a className='social' href="#">Access Keys</a> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> |<Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> <Link className='social' to={"/#"}>Access Keys</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> |<Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> <Link className='social' to={"/#"}>Access Keys</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> |<Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> <Link className='social' to={"/#"}>Access Keys</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> |<Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> | <Link className='social' to={"/#"}>AWS</Link> </p>
        </div>
       
     </div>

    </div>
    </div>
    <Footer />
    </>
   
  )
}

export default News
