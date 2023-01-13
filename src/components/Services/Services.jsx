import React from 'react'
import './Services.css'
import heart from "../../img/heartemoji.png"
import glass from "../../img/glasses.png"
import humble from "../../img/humble.png"
import Card from '../Card/Card'
import resume from './Peace_Oloruntoba_CV.pdf'

const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempora nostrum, est consequuntur voluptate fugit obcaecati p</span>
            <a href={resume} download>
              <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <div className="div" style={{left: '14rem'}}>
              <Card emoji={heart} heading={'Design'} detail={'Figma, Canva, Photoshop, Adobe, AdobeXD'} />
            </div>
            <div className="div" style={{top: '12rem', left: '-4rem'}}>
              <Card emoji={glass} heading={'Development'} detail={'HTML, CSS, JavaScript, Python, PHP, (with there frameworks)'} />
            </div>
            <div className="div" style={{top: '19rem',left: '12rem'}}>
              <Card emoji={humble} heading={'Tutoring'} detail={'You can learn from us at Edge Tech'} />
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services