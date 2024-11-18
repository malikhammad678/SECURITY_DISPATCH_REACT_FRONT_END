import React, { useEffect, useState } from 'react'
import './CodingBlog.css'
import { CodingBlogs } from '../../assets/CodingBlog'
import {  Link2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
const CodingBlog = () => {

    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
     setBlogs(CodingBlogs)
    },[])

  return (
    <div className='coding_blog'>
        <div className="box_container">
      {
        blogs.map((item,index) => {
          return(
            <Link to={`/codingDetail/${item.id}`} key={index} className='box'>
                <div className="image">
                    <img src={item.image} alt="" />
                   <Link to={"/#"}><Link2Icon size={32} className='icon' /></Link>
                </div>

                <div className="flex">
                    {
                        item.windows.map((window,index) => {
                            return(
                                <p key={index} className="window">
                                    {window}
                                </p>
                            )
                        })
                    }
                </div>

                <h2 className='title'>{item.title}</h2>
                
            </Link>
          )
        })
      }
      </div>
    </div>
  )
}

export default CodingBlog
