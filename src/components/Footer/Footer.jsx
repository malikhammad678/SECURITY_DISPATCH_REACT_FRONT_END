import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Facebook } from 'lucide-react'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="upper_footer">
        <div className="left_box">
         <div className="inner_l_box">
            <Link className='f_logo' to={"/"}>S<span className='D'>D.</span></Link>
            <div className="nav_link">
                <Link className='link' to={"/"}>Home</Link>
                <Link className='link' to={"/"}>Blog</Link>
                <Link className='link' to={"/"}>News</Link>
                <Link className='link' to={"/"}>Walkthroughs</Link>
                <Link className='link' to={"/"}>Contributors</Link>
            </div>
         </div>
        </div>
        <div className="right_box">
           <h4>CONTACT</h4>
           <span className='small'>admin@gmail.com</span>
           <p>University of California, Berkeley</p>
           <p>Berkeley, CA</p>
        </div>
      </div>
      {/* <div className="lower_footer">
        <div className="left">
        </div>
        <div className="right">
         <Link   className='social' to={"/"}><i class='bx bxl-facebook-circle'></i></Link>
         <Link  className='social'  to={"/"}><i class='bx bxl-linkedin-square'></i></Link>
        </div>
      </div> */}
    </div>
  )
}

export default Footer
