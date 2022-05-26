import React from 'react';
import "../style/Footer.css";
import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className='footer-div'>
        <div className='footer-data'>
            <div className='footer-left footer-section'>
                <div className='logo'></div>
                <div className='options'>
                    <ul>
                      <li>Support</li>
                      <li>Terms Of Service</li>
                      <li>License</li>
                    </ul>
                </div>
            </div>
            <div className='footer-center footer-section'>
              <ul className='center-options'>
                <li>Auctions</li>
                <li>Roadmap</li>
                <li>Discover</li>
                <li>Community</li>
              </ul>
              <button className='primary-button'>My Account</button>
              <div className='contact-icons'>
                <div className='icon' style={{backgroundImage:`url(${facebook})`}}></div>
                <div className='icon' style={{backgroundImage:`url(${linkedIn})`}}></div>
                <div className='icon' style={{backgroundImage:`url(${github})`}}></div>
                <div className='icon' style={{backgroundImage:`url(${twitter})`}}></div>
                <div className='icon' style={{backgroundImage:`url(${instagram})`}}></div>
              </div>
            </div>
            <div className='footer-right footer-section'>
              <p>
              Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. 
              </p>
              <div className='newsletter-div'>
                <input type="text" className='newsletter-email' placeholder='NewsLetter'/>
                <button className='newsletter-button'>Subscribe</button>
              </div>
            </div>
        </div>
    </div>
  )
}
