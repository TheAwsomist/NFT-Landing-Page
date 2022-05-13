import React from 'react'
import { CardSmall } from './Card'
import nft1 from "../assets/nft-small-1.png";
import nft2 from "../assets/nft-small-2.png";
import nft3 from "../assets/nft-small-3.png";
import nft4 from "../assets/nft-small-4.png";
import nft5 from "../assets/nft-small-5.png";
import nft6 from "../assets/nft-small-6.png";

export default function NftSlider2() {
  return (
    <div className='small-card-holder'>
        <CardSmall cardimage={nft1}/>
        <CardSmall cardimage={nft2}/>
        <CardSmall cardimage={nft3}/>
        <CardSmall cardimage={nft4}/>
        <CardSmall cardimage={nft5}/>
        <CardSmall cardimage={nft6}/>
    </div>
  )
}
