import React, { useEffect, useState } from 'react'
import BlogTitle from '../components/BlogTitle/BlogTitle'
import './Blog.css'
import { Search } from 'lucide-react'
import { blogs } from '../assets/Blogs'
import { Link } from 'react-router-dom'
const Blog = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [input, setInput] = useState("")

  useEffect(() => {
    setFilteredProducts([...blogs])
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const filtered = blogs.filter((blog) => blog.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredProducts(filtered)
  }


  return (
    <div className='blogs'>
      <BlogTitle title={"OUR"} title2={"BLOGS"} />
      <div className="search_bar">
        <input type="text" onChange={handleChangeInput} value={input} placeholder='Search...' />
        <Search size={32} className='icon' />
      </div>
      <div className="blog_container">
        {
          filteredProducts.map((item, index) => {
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
                    <Link to={"/news"} className='new_letter_btn'>Newsletter</Link>
                 
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

export default Blog
