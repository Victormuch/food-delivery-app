import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <h2 style={{color: "orangered"}}>Foodies!</h2>
                <p>Good food is the foundation of genuine happiness. If you want to experience true happiness,swing by Foodies FastFood today and discover a new world of flavor and convenience!</p>

                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>CONTACT US VIA:</h2>
                <ul>
                    <li>0113374993</li>
                    <li>contact@Foodies.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            Copyright 2024 @2024 Foodies! - All Right Reserved
        </p>
    </div>
  )
}

export default Footer