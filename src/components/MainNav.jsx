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

export default function MainNav() {

  const [isVisible, setVisible] = React.useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);


  return (
    <div className="mainpage">
      <div className="landing-div">
        <p className="subheading-1">NON FUNGIBLE TOKENS</p>
        <img src={Title} alt="Title" className="maintitle"/>
        <p className="subheading-2">Discover, collect and sell</p>
        <SearchBar/>
        <div className="logo-types"></div>
      </div>
      <h3 className="latest-live">Latest Live Auctions</h3>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <NftSlider />
      </div>
      <PaintBucket/>
      <div className="mobile-screens">
        <div className="image-displays" ref={domRef}>
          <div className={`left-screen mobilescreen fade-in-section-2 ${isVisible ? 'is-visible' : ''}`}></div>
          <div className={`middle-screen mobilescreen fade-in-section-1 ${isVisible ? 'is-visible' : ''}`}></div>
          <div className={`right-screen mobilescreen fade-in-section-3 ${isVisible ? 'is-visible' : ''}`}></div>
        </div>
      </div>
      <Spyglass/>
      <LiveAuctions/>
      <Counter/>
      <TabDiv/>
    </div>
  );
}
