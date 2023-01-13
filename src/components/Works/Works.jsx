import React from 'react'
import './Works.css'
import upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'


const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Works for All These</span>
            <span>Brands & Clients</span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempora nostrum, est consequuntur voluptate fugitaecati p <br />Lorem ipsum dolor sit amet conser adipisit. <br /> Praesentium doloribus ea, mollitia placeat eum distinctio ex sit sue <br /> cupiditate, officia perferendis, ipsum voluptatumisi corporis exerci</span>
            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="w-right">
            <div className="w-maincircle">
                <div className="w-secCircle">
                    <img src={upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={facebook} alt="" />
                </div>
                <div className="w-backcircle blueCircle"></div>
                <div className="w-backcircle yellowCircle"></div>
            </div>
        </div>
    </div>
  )
}

export default Works