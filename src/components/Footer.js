import './Footer.css';

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: 'white', marginRight: '2rem'}}/>
                    <div>
                        <p>123 Housing society</p>
                        <p>Lagos</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: 'white', marginRight: '2rem'}}/>
                    1-234-345-236</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem'}}/>
                    info@gmail.com</h4>
                </div>
            </div>
            
            <div className="right">
               <h4>About the Company</h4>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dicta vero iusto laudantium 
                a voluptates, corporis cupiditate assumenda harum officiis.</p>
               <div className="social">
                 <FaFacebook size={30} style={{ color: 'white', marginRight: '1rem'}}/> 
                 <FaTwitter size={30} style={{ color: 'white', marginRight: '1rem'}}/> 
                 <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem'}}/> 
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer