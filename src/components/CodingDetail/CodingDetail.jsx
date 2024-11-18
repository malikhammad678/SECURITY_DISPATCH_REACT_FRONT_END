import React, { useEffect, useState } from 'react'
import './CodingDetail.css'
import { useParams } from 'react-router-dom'
import { CodingBlogs } from '../../assets/CodingBlog.js'
import Terminal from '../Terminal/Terminal.jsx'
import CodingBlog from '../CodingBlog/CodingBlog.jsx'
import Footer from '../Footer/Footer.jsx'
import CodingSidebar from '../CodingSidebar/CodingSidebar.jsx'

const CodingDetail = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        const singleBlog = CodingBlogs.find((blog) => blog.id === Number(id))
        setBlog(singleBlog || null)
    }, [id])

    useEffect(() => {
       window.scrollTo({
        top:0,
        behavior: 'smooth',
       })
    },[id])

    return (
        <>
            <div className='codingDetail' style={{color:'#fff'}}>
                <div className="main_flex_detail">
                {blog ? (
                    <div className='left_container2'>
                        <h2>{blog.title}</h2>
                        <div className="user_main1_flex">
                          <div className="user_flex1">
                            <p className='logo1'>SD</p>
                            <p className='name'>Security Dispatch</p>
                          </div>
                          <p className='date1'>2 years ago</p>
                        </div>
                        <div className="video_container1">
                            <img src={blog.image} alt="" />
                        </div>
                        <h2 className='head'>Prerequisites & Requirements</h2>
                        <p className='para'>{blog.detail}</p>
                        <Terminal />
                        <p className='para'>{blog.detail}</p>
                        <Terminal />
                        <p className='para'>{blog.detail}</p>
                        <CodingBlog />
                    </div>
                ) : (
                    <p>Blog not found</p>
                )}
                <CodingSidebar />
            </div>
            </div>
            <Footer />
        </>
    )
}

export default CodingDetail
