import React from 'react'
import './SuggestedBlog.css'
import { Link } from 'react-router-dom'
import { blogs } from '../../assets/Blogs.js'
const SuggestedBlog = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <div className='suggested'>
      <div className="header">
        <span>More from Security Dispatch</span>
        <Link className='link' to={"/blog"}>View All</Link>
      </div>
      <div className="blog_container">
        {
            blogs.slice(0,3).map((item,index) => {
              return(
                   <Link key={index} to={`/detail/${item.id}`} className='blog' onClick={scrollToTop}>
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
  )
}

export default SuggestedBlog
