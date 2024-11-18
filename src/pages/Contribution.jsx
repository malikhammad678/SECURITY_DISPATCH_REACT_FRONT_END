import React from 'react'
import './Contribution.css'
import BlogTitle from '../components/BlogTitle/BlogTitle'
import c_1 from '../assets/c-1.jpg'
import c_2 from '../assets/c-2.png'
import c_8 from '../assets/c-8.jpg'
import c_9 from '../assets/c-9.jpg'
import c_10 from '../assets/c-10.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
const Contribution = () => {
  return (
    <>
    <div className='main' style={{color:'#fff'}}>
    <BlogTitle title={"OUR"} title2={"TEAM"} /> 
      <div className="contribution">
         <div className="contribution_box">
            <h1>Leadership</h1>
            <div className="leader_flex">
                <div className="image">
                    <img src={c_1} alt="" />
                    </div>
                    <div className="content">
                        <Link className='name' to={"/#"}>Laura Tyson</Link>
                        <span>Faculty Director</span>
                    <p>Professor Tyson has helped Berkeley Haas become a pioneer in what is now the booming field of social entrepreneurship. As a former government official and an advisor and board director for both Fortune 500 corporations and major non-profit organizations, Tyson has spent much of her career working with for-profit and nonprofit organizations and the public sector for social change.</p>
                    </div>
            </div>
            <div className="leader_flex">
                <div className="image">
                    <img src={c_2} alt="" />
                    </div>
                    <div className="content">
                        <Link className='name' to={"/#"}>Linda Kreitzman</Link>
                        <span>Faculty Lead</span>
                    <p>Professor Tyson has helped Berkeley Haas become a pioneer in what is now the booming field of social entrepreneurship. As a former government official and an advisor and board director for both Fortune 500 corporations and major non-profit organizations, Tyson has spent much of her career working with for-profit and nonprofit organizations and the public sector for social change.</p>
                    </div>
            </div>
        
            <h1 className="heading_2">
               Faculty Advisory Council of the Security Haas Blockchain Initiative
            </h1>
            <p className='heading_2_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae tempora eveniet molestiae atque enim quaerat voluptatibus corporis facilis esse? Quas animi porro quia. Repellendus, asperiores! Ut illo atque suscipit fugit obcaecati veritatis placeat, eius libero beatae unde facilis earum amet commodi natus blanditiis laudantium, a voluptatum animi. Magni ut modi suscipit dolorem perspiciatis fugiat in dolores, aliquam necessitatibus aliquid consequatur! Voluptatum adipisci veniam, consequuntur quasi, laboriosam accusantium accusamus nemo distinctio natus, modi nam beatae a autem odio quis eos. Amet fugit dignissimos hic ipsam sapiente et sunt fuga nesciunt, illum odio illo perspiciatis beatae quae fugiat possimus atque placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo quaerat quae officia, voluptas nesciunt ab earum? Magnam vel asperiores quis laborum eveniet minus beatae itaque sequi, voluptatum quisquam fugit optio porro ab, fuga provident rem. Vel sapiente minima cupiditate ad accusamus, velit aliquam quia tenetur delectus distinctio. Exercitationem, sunt!</p>

           
            
            
    
            <div className="leader_flex">
                <div className="image">
                    <img src={c_8} alt="" />
                    </div>
                    <div className="content">
                        <Link className='name' to={"/#"}>Ikhlaq Sidhu</Link>
                        <span>Faculty Director & Chief Scientist, Sutardja Center for Entrepreneurship & Technology</span>
                    </div>
            </div>
            <div className="leader_flex">
                <div className="image">
                    <img src={c_9} alt="" />
                    </div>
                    <div className="content">
                        <Link className='name' to={"/#"}>Dawn Song</Link>
                        <span>Professor, Electrical Engineering and Computer Science</span>
                    </div>
            </div>
            <div className="leader_flex">
                <div className="image">
                    <img src={c_10} alt="" />
                    </div>
                    <div className="content">
                        <Link className='name' to={"/#"}>Adam Sterling</Link>
                        <span>Executive Director, Berkeley Center for Law and Business Director of Executive Education at Berkeley Laws</span>
                    </div>
            </div>

         </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contribution
