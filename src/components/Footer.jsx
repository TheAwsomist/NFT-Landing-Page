import React from 'react';
import "../style/Footer.css";

export default function Footer() {
  return (
    <div className='footer-div'>
        <div className='footer-data'>
            <div className='footer-left footer-section'>
                <div className='logo'></div>
                <div className='options'>
                    <p>Support</p>
                    <p>Terms Of Service</p>
                    <p>License</p>
                </div>
            </div>
            <div className='footer-center footer-section'></div>
            <div className='footer-right footer-section'></div>
        </div>
    </div>
  )
}
