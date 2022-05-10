import React, { useState } from 'react'

export default function LiveAuctions() {
    const [selected,Setselected] = useState("Photography");
  return (
    <div className='live-auction'>
        <p className='subheading-1' style={{marginBottom:"0px"}}>OVERLINE</p>
        <h3 className='latest-live auctions-title'>Most popular live auctions</h3>
        <div className='auction-buttons'>
            <button className={selected === "Architecture"?"buttons active":"buttons"} onClick={(e)=>Setselected(e.target.innerHTML)}>Architecture</button>
            <button className={selected === "Photography"?"buttons active":"buttons"} onClick={(e)=>Setselected(e.target.innerHTML)}>Photography</button>
            <button className={selected === "Games"?"buttons active":"buttons"} onClick={(e)=>Setselected(e.target.innerHTML)}>Games</button>
            <button className={selected === "Music"?"buttons active":"buttons"} onClick={(e)=>Setselected(e.target.innerHTML)}>Music</button>
        </div>
    </div>
  )
}
