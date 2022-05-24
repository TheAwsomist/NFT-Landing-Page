import React from 'react';
import { ExtraSmallCard } from './Card';
import Slider from 'react-slick';
import Extra1 from "../assets/extrasmall1.png";
import Extra2 from "../assets/extrasmall2.png";
import Extra3 from "../assets/extrasmall3.png";
import Extra4 from "../assets/extrasmall4.png";
import Extra5 from "../assets/extrasmall5.png";
import Extra6 from "../assets/extrasmall6.png";
import Extra7 from "../assets/extrasmall7.png";

export default function ExtraSmallSlider() {

    var settings = {
        infinity:true,
        autoplay:true,
        arrows:false,
        autoplaySpeed:0,
        speed: 40000,
        slidesToShow: 13,  
        slidesToScroll: 5,
        draggable:true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 12,
              slidesToScroll: 5,

            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 10,
              slidesToScroll: 5,

            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 5,

            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,

            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,

            },
          },
        ],
      };
  return (
    <div className='extrasmall-slider' style={{marginTop:"3em"}}>
        <Slider  {...settings}>
            <div><ExtraSmallCard image={Extra1} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra2} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra3} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra1} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra4} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra7} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra1} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra3} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra6} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra2} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra5} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra3} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra2} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra4} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra5} price={1.45}/></div>
            <div><ExtraSmallCard image={Extra3} price={1.45}/></div>
        </Slider>
    </div>
  )
}
