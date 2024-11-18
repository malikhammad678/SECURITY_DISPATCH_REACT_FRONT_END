import React from 'react'
import './BlogTitle.css'
const BlogTitle = ({title,title2}) => {
  return (
    <div className='blog_title'>
      <h1>{title} <span className='pre_head'>{title2}</span></h1>
    </div>
  )
}

export default BlogTitle
