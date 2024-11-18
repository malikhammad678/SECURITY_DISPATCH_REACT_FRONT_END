import React, { useEffect, useState } from 'react';
import './BlogDetail.css';
import { Link, useParams } from 'react-router-dom';
import { blogs } from '../../assets/Blogs.js';
import { User2 } from 'lucide-react';
import NewsLetter from '../NewsLetter/NewsLetter.jsx';
import Blog from '../../pages/Blog.jsx';
import SuggestedBlog from '../SuggestedBlog/SuggestedBlog.jsx';

const BlogDetail = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const foundBlog = blogs.find((blog) => blog.id === Number(id));
        setBlogData(foundBlog || null);
    }, [id]);

    return (
        <>
            <div className='blog_detail'>
                {blogData ? (

                    <div className='detail_box'>
                        <div className="image">
                            <img src={blogData.image} alt="" />
                        </div>
                        <h1>{blogData.title}</h1>
                        <div className="main_flex">
                            <div className="date_flex">

                                <div className="left_box">
                                    <div className="logo">
                                        <p>SD</p>
                                    </div>
                                    <h3>{blogData.name}</h3>
                                </div>

                                <div className="right_box">
                                    <User2 size={25} className='icon' />
                                    <h2>{blogData.author2}</h2>
                                </div>
                            </div>
                            <Link className='link' to={"/"}>Mint</Link>
                        </div>
                        <div className="author">
                            <h2>{blogData.author}</h2>
                        </div>
                        <div className="details">
                            <h2>Details: </h2>
                            <p>{blogData.detail}</p>
                        </div>
                    </div>
                ) : (
                    <p>Blog not found or loading...</p>
                )}

            </div>
            <NewsLetter />
            <SuggestedBlog />
        </>
    );
};

export default BlogDetail;
