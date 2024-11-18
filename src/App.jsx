import React, { useEffect } from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import Navbar from './components/Navbar/Navbar';
import BlogDetail from './components/BlogDetail/BlogDetail';
import News from './pages/News';
import Contribution from './pages/Contribution';
import Coding from './pages/Coding';
import CodingDetail from './components/CodingDetail/CodingDetail';

import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/detail/:id' element={<BlogDetail />} />
        <Route path='/news' element={<News />} />
        <Route path='/contributors' element={<Contribution />} />
        <Route path='/coding' element={<Coding />} />
        <Route path='/codingDetail/:id' element={<CodingDetail />} />
        <Route path='/htb' element={<Coding />} />
      </Routes>
    </div>
  );
};

export default App;
