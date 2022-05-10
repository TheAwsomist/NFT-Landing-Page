import React from 'react';
import "../style/Card.css";

export default function Card({cardimage}) {
  return (
    <div className='card'>
        <div className='card-image' style={{backgroundImage:`url(${cardimage})`}}></div>
        <div className='info-section'>
            <div className='card-info'>
                <p className='card-title'>Dui accumsan leo vestibulum ornare eu</p>
                <div className='price-tag'>1.311 ETH</div>
            </div>
            <div className='timer'>22:59 min left</div>
        </div>
    </div>
  )
}
