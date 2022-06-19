import React, { useEffect } from "react";
import { ExtraSmallCard } from "./Card";
import Slider from "react-slick";
import Extra1 from "../assets/extrasmall1.png";
import Extra2 from "../assets/extrasmall2.png";
import Extra3 from "../assets/extrasmall3.png";
import Extra4 from "../assets/extrasmall4.png";
import Extra5 from "../assets/extrasmall5.png";
import Extra6 from "../assets/extrasmall6.png";
import Extra7 from "../assets/extrasmall7.png";
import { useSelector } from "react-redux";

export default function ExtraSmallSlider() {
  var nft_images = useSelector((state) => state.nfts);
  useEffect(() => console.log(nft_images),[nft_images]);
  var settings = {
    infinity: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 40000,
    slidesToShow: 13,
    slidesToScroll: 5,
    draggable: true,
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
    <>
      {nft_images !== undefined && nft_images.length !== 0 && 
        <div className="extrasmall-slider" style={{ marginTop: "3em" }}>
          <Slider {...settings}>
            <div>
              <ExtraSmallCard
                image={nft_images[19].image}
                price={nft_images[19].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[20].image}
                price={nft_images[20].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[16].image}
                price={nft_images[16].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[17].image}
                price={nft_images[17].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[15].image}
                price={nft_images[15].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[9].image}
                price={nft_images[9].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[10].image}
                price={nft_images[10].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[12].image}
                price={nft_images[12].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[11].image}
                price={nft_images[11].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[7].image}
                price={nft_images[7].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[1].image}
                price={nft_images[1].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[2].image}
                price={nft_images[2].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[3].image}
                price={nft_images[3].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[4].image}
                price={nft_images[4].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[5].image}
                price={nft_images[5].price}
              />
            </div>
            <div>
              <ExtraSmallCard
                image={nft_images[6].image}
                price={nft_images[6].price}
              />
            </div>
          </Slider>
        </div>}
    </>
  );
}
