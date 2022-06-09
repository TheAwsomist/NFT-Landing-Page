import React, { useEffect } from "react";
import Slider from "react-slick";
import {Card} from "./Card";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import nft4 from "../assets/nft4.png";
import nft5 from "../assets/nft5.png";
import { useSelector } from "react-redux";

export default function NftSlider() {
  var nft_images = useSelector(state => state.nfts);
  
  useEffect(() => {
    
    console.log(nft_images);
  
    // return () => {
    //   second
    // }
  }, [nft_images])
  
  var settings = {
    arrows:true,
    infinity:false,
    speed: 500,
    slidesToShow: 5,  
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,
          dots:true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots:false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots:false,
        },
      },
    ],
  };
  return(
      <div>
        {nft_images.length !==0 && <Slider {...settings} className="nftslider">
          <div><Card cardimage={nft_images[1].image} cardtitle={nft_images[1].title}/></div>
          <div><Card cardimage={nft_images[2].image} cardtitle={nft_images[2].title}/></div>
          <div><Card cardimage={nft_images[3].image} cardtitle={nft_images[3].title}/></div>
          <div><Card cardimage={nft_images[4].image} cardtitle={nft_images[4].title}/></div>
          <div><Card cardimage={nft_images[5].image} cardtitle={nft_images[5].title}/></div>
          <div><Card cardimage={nft_images[6].image} cardtitle={nft_images[6].title}/></div>
          <div><Card cardimage={nft_images[7].image} cardtitle={nft_images[7].title}/></div>
          <div><Card cardimage={nft_images[8].image} cardtitle={nft_images[8].title}/></div>
          <div><Card cardimage={nft_images[9].image} cardtitle={nft_images[9].title}/></div>
          <div><Card cardimage={nft_images[10].image} cardtitle={nft_images[10].title}/></div>
          <div><Card cardimage={nft_images[11].image} cardtitle={nft_images[11].title}/></div>
          <div><Card cardimage={nft_images[12].image} cardtitle={nft_images[12].title}/></div>
        </Slider>}
      </div>
  );
}

export function back_arrow(){
  return(
    <div>
      <button>◄</button>
    </div>
  );
}
