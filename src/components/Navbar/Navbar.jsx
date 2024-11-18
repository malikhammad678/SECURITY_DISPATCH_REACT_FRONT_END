import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { ChevronDown, Menu, X } from 'lucide-react'; // Replace with your actual icons library


const Navbar = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [mdrop, setMdropDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const [rotate,setRotate] = useState(false)
  const location = useLocation();

  

  const showMobileDropDown = () => {
    setMdropDown(prev => !prev);
  };

  useEffect(() => {
    // Set the active link based on the current path
    if (location.pathname === "/") {
      setActive('home');
    } else if (location.pathname === "/blog") {
      setActive('blog');
    } else if (location.pathname === "/news") {
      setActive('news');
    } else if (location.pathname === "/contributors") {
      setActive('contributors');

    } else if (location.pathname === "/coding") {
      setActive('coding');
    }
    else if (location.pathname === "/htb") {
      setActive('htb');
    }
  }, [location]);

  const showMenuFunc = () => {
    setShowMenu(prev => !prev);
  };
  const toggleDropdown = (e) => {
    e.preventDefault(); 
    setIsOpen(prevState => !prevState);  
  };

  return (
    <div className='navbar'>
      <Link to="/" className='logo'>SECURITY <span className='logo_sp'>DISPATCH</span></Link>

      {/* Desktop Menu */}
      <ul className='desktop_menu'>
        <li onClick={() => setIsOpen(false)}><Link  className={`link ${active === 'home' ? 'active' : ''}`} to="/">Home</Link></li>
        <li onClick={() => setIsOpen(false)}><Link className={`link ${active === 'blog' ? 'active' : ''}`} to="/blog">Blog</Link></li>
        <li onClick={() => setIsOpen(false)}><Link className={`link ${active === 'news' ? 'active' : ''}`} to="/news">News</Link></li>
        <li className="drop">
       <Dropdown show={isOpen}>
      <Dropdown.Toggle as="a" className="link dropdown-toggle" href="#" onClick={toggleDropdown}>
        Walkthroughs <ChevronDown className={`icon ${isOpen ? 'rotate' : ''}`} size={25} style={{ color: '#777e90' }} />
      </Dropdown.Toggle>
      {isOpen && (
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item onClick={() => setIsOpen(false)} as={Link} className={`link dropdown_link ${active === 'coding' ? 'active' : ''}`} to="/coding">Coding</Dropdown.Item>
          <Dropdown.Item onClick={() => setIsOpen(false)} as={Link} className={`link dropdown_link ${active === 'htb' ? 'active' : ''}`} to="/htb">HTB</Dropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
        </li>

        <li onClick={() => setIsOpen(false)}><Link className={`link ${active === 'contributors' ? 'active' : ''}`} to="/contributors">Contributors</Link></li>
      </ul>

      <div className="r_nav">
        <button className='c_btn'>Contact</button>
        <button className='a_btn'>Apply</button>
      </div>




      <Menu onClick={showMenuFunc} className='mobile_menu_icon' size={34} style={{ color: '#d2d2d2' }} />



      <div className={`mobile_nav ${showMenu ? 'show' : ''}`}>
        <nav className="navlinks">
          <li><Link className={`link ${active === 'home' ? 'active' : ''}`} onClick={showMenuFunc} to="/">Home</Link></li>
          <li><Link className={`link ${active === 'blog' ? 'active' : ''}`} onClick={showMenuFunc} to="/blog">Blog</Link></li>
          <li><Link className={`link ${active === 'news' ? 'active' : ''}`} onClick={showMenuFunc} to="/news">News</Link></li>
          <li onClick={showMobileDropDown} className='drop'>
            <a className='link' href="#">Walkthroughs</a>
            <ChevronDown className={`icon ${mdrop ? "rotate" : ''}`} size={25} style={{ color: '#777e90' }} />
          </li>
          <div className={`drop_down_menu ${mdrop ? 'show' : ''}`}>
            <li><Link className={`link ${active === 'coding' ? 'active' : ''}`} onClick={showMenuFunc} to="/coding">Coding</Link></li>
            <li><Link className={`link ${active === 'htb' ? 'active' : ''}`} onClick={showMenuFunc} to="/htb">HTB</Link></li>
          </div>
          <li><Link className={`link ${active === 'contributors' ? 'active' : ''}`} onClick={showMenuFunc} to="/contributors">Contributors</Link></li>
          <div className="r_m_nav">
            <button className='c_btn'>Contact</button>
            <button className='a_btn'>Apply</button>
          </div>
          <X onClick={showMenuFunc} className='cross' size={32} style={{ color: '#777e90' }} />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
