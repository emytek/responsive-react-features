import './HeroImg.css';
import { Link } from 'react-router-dom';
import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src="/assets/1.png" alt="" className="intro-img" />
        </div>
        <div className="content">
            <p>Hi Im a freelancer</p>
            <h1>React Developer</h1>
            <div>
                <Link to='/project' className="btn">Projects</Link>
                <Link to='/contact' className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg