import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import nft4 from "../assets/nft4.png";
import nft5 from "../assets/nft5.png";

export default function NftSlider() {
  var settings = {
    arrows:true,
    dots:true,
    infinity:false,
    speed: 3000,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return(
      <Slider {...settings}>
        <div><Card cardimage={nft1}/></div>
        <div><Card cardimage={nft2}/></div>
        <div><Card cardimage={nft3}/></div>
        <div><Card cardimage={nft4}/></div>
        <div><Card cardimage={nft5}/></div>
        <div><Card cardimage={nft1}/></div>
        <div><Card cardimage={nft3}/></div>
        <div><Card cardimage={nft2}/></div>
        <div><Card cardimage={nft4}/></div>
        <div><Card cardimage={nft5}/></div>
        <div><Card cardimage={nft1}/></div>
        <div><Card cardimage={nft3}/></div>
      </Slider>
  );
}

export function back_arrow(){
  return(
    <div>
      <button>◄</button>
    </div>
  );
}
