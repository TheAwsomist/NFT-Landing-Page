import React, { useEffect, useRef } from "react";
import "../style/MainNav.css";
import Title from "../assets/title.png";
import NftSlider from "./NftSlider";
import PaintBucket from "./PaintBucket";
import SearchBar from "./SearchBar";
import Spyglass from "./Spyglass";
import LiveAuctions from "./LiveAuctions";
import Counter from "./Counter";
import TabDiv from "./TabDiv";
import ExtraSmallSlider from "./ExtraSmallSlider";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { nftimport } from "../redux/Actions";

export default function MainNav() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = useRef();
  var datadump;
  var price;
  var image;
  var title;
  var images = [];
  const dispatch = useDispatch();

  const randomizer = () => {
    var result = Math.random() * 5.0; //I wouldn't have used randomizer for prices if I had OpenSea API Key to make several asset requests for prices but I must resort to this shameful act ; - ;
    return result.toFixed(3);
  };
  const randomizer_date = () => {
    var result =
      Math.floor(Math.random() * 23) + ":" + Math.floor(Math.random() * 60);
    return result;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    images = sessionStorage.getItem("nfts");
    images = JSON.parse(images);
    console.log(images);
    if (!images) {
      images = [];
      const options = {
        method: "GET",
        url: "https://opensea13.p.rapidapi.com/bundles",
        params: { limit: "40", offset: "0" },
        headers: {
          "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
          "X-RapidAPI-Key":
            "33e183288cmsh8e1dba124c134c2p1fbfe3jsn2b0f4a4fc390",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          datadump = response.data.bundles;
          datadump.map((data) => {
            if (
              data.assets[0].image_url !== null &&
              data.assets[0].is_nsfw === false &&
              data.assets[0].name !== null
            ) {
              image = data.assets[0].image_url;
              title = data.assets[0].name;
              const address = data.assets[0].asset_contract.address;
              var price = randomizer();
              var time = randomizer_date();
              const tokenid = data.assets[0].token_id;
            }
            images.push({
              image: image,
              title: title,
              price: price,
              time: time,
            });
          });
          images = images.filter(
            (value, index, self) =>
              index ===
              self.findIndex(
                (t) => t.image === value.image && t.title === value.title
              )
          );
          sessionStorage.setItem("nfts",JSON.stringify(images));
          dispatch(nftimport(images));
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    else{
      dispatch(nftimport(images));
    }

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="mainpage">
      <div className="landing-div">
        <p className="subheading-1">NON FUNGIBLE TOKENS</p>
        <img src={Title} alt="Title" className="maintitle" />
        <p className="subheading-2">Discover, collect and sell</p>
        <SearchBar />
        <div className="logo-types"></div>
      </div>
      <h3 className="latest-live">Latest Live Auctions</h3>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <NftSlider />
      </div>
      <PaintBucket />
      <div className="mobile-screens">
        <div className="image-displays" ref={domRef}>
          <div
            className={`left-screen mobilescreen fade-in-section-2 ${
              isVisible ? "is-visible" : ""
            }`}
          ></div>
          <div
            className={`middle-screen mobilescreen fade-in-section-1 ${
              isVisible ? "is-visible" : ""
            }`}
          ></div>
          <div
            className={`right-screen mobilescreen fade-in-section-3 ${
              isVisible ? "is-visible" : ""
            }`}
          ></div>
        </div>
      </div>
      <Spyglass />
      <LiveAuctions />
      <Counter />
      <TabDiv />
      <ExtraSmallSlider />
      <Footer />
    </div>
  );
}
