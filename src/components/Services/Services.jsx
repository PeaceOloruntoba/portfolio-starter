import React from 'react'
import './Services.css'
import heart from "../../img/heartemoji.png"
import glass from "../../img/glasses.png"
import humble from "../../img/humble.png"

const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>My Awesome</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempora nostrum, est consequuntur voluptate fugit obcaecati p</span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            Right side
        </div>
    </div>
  )
}

export default Services