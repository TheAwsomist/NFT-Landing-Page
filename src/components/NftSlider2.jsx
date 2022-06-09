import React from 'react'
import { CardSmall } from './Card'
import nft1 from "../assets/nft-small-1.png";
import nft2 from "../assets/nft-small-2.png";
import nft3 from "../assets/nft-small-3.png";
import nft4 from "../assets/nft-small-4.png";
import nft5 from "../assets/nft-small-5.png";
import nft6 from "../assets/nft-small-6.png";
import { useSelector } from 'react-redux';

export default function NftSlider2() {
  const nft_images = useSelector(state => state.nfts)
  return (
    <>
{    nft_images.length !== 0 &&    <div className='small-card-holder'>
        <CardSmall cardimage={nft_images[13].image} cardtitle={nft_images[13].title}/>
        <CardSmall cardimage={nft_images[14].image} cardtitle={nft_images[14].title}/>
        <CardSmall cardimage={nft_images[15].image} cardtitle={nft_images[15].title}/>
        <CardSmall cardimage={nft_images[16].image} cardtitle={nft_images[16].title}/>
        <CardSmall cardimage={nft_images[17].image} cardtitle={nft_images[17].title}/>
        <CardSmall cardimage={nft_images[18].image} cardtitle={nft_images[18].title}/>
        </div>}
    </>
  )
}
