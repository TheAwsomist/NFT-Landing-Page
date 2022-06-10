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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);

    const options = {
      method: "GET",
      url: "https://opensea13.p.rapidapi.com/bundles",
      params: { limit: "30", offset: "0" },
      headers: {
        "X-RapidAPI-Host": "opensea13.p.rapidapi.com",
        "X-RapidAPI-Key": "33e183288cmsh8e1dba124c134c2p1fbfe3jsn2b0f4a4fc390",
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
            var price;
            const tokenid = data.assets[0].token_id;
            const url = {
              method: "GET",
              url: `https://cors-anywhere.herokuapp.com/https://api.opensea.io/api/v1/asset/${address}/${tokenid}/`,
              headers: {"Access-Control-Allow-Origin": "*"} 
            };
            axios.request(url).then(function (response) {

              price = response.data.collection.stats.one_day_average_price.toFixed(3);
              console.log(price);
            });
          }
          images.push({
            image: image,
            title: title,
            price: price
          });
        });
        images = images.filter(
          (value, index, self) =>
            index ===
            self.findIndex(
              (t) => t.image === value.image && t.title === value.title
            )
        );
        dispatch(nftimport(images));
      })
      .catch(function (error) {
        console.error(error);
      });

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
