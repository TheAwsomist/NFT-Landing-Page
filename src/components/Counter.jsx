import React, { useRef, useState, useEffect } from "react";
import "../style/Counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Counter() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div className="counter-div">
      <div className="counter-inner-div" ref={domRef}>
        <div className="counter-item">
          <div className="counter-icon user"></div>
          <div className="counter-count">
            {isVisible && <CountUp
                      end={30000}
                      useEasing={true}
                      duration={2.9}
                      useGrouping={true}
                      separator=","
                      decimals={0}
                      decimal="."
                    />}
          </div>
          <div className="counter-heading">Users Active</div>
        </div>
        <div className="counter-item">
          <div className="counter-icon artwork"></div>
          <div className="counter-count">
            {isVisible && <CountUp
                      end={52500}
                      useEasing={true}
                      duration={2.9}
                      useGrouping={true}
                      separator=","
                      decimals={0}
                      decimal="."
                    />}
          </div>
          <div className="counter-heading">Artworks</div>
        </div>
        <div className="counter-item">
          <div className="counter-icon palette"></div>
          <div className="counter-count">
            {isVisible && <CountUp
                      end={17500}
                      useEasing={true}
                      duration={2.9}
                      useGrouping={true}
                      separator=","
                      decimals={0}
                      decimal="."
                    />}
          </div>
          <div className="counter-heading">Artists</div>
        </div>
        <div className="counter-item">
          <div className="counter-icon wallet"></div>
          <div className="counter-count">
            {isVisible && <CountUp
                      end={35.58}
                      useEasing={true}
                      duration={2.9}
                      useGrouping={true}
                      separator=","
                      decimals={2}
                      decimal="."
                    />}
          </div>
          <div className="counter-heading">ETH Spent</div>
        </div>
      </div>
    </div>
  );
}
