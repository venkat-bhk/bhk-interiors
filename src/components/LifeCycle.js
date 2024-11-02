import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "./Window";
import { LCData } from "@utils/data";

const LifeCycle = () => {

  const { width, height } = useWindowSize();
  const [inx, setInx] = useState(0)
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on component mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let timeout;

  useEffect(() => {

    if (isVisible) {
      setTimeout(() => {
        startAnimate();
      }, 2000);
    } else {
      setAnimate(false)
    }
  }, [isVisible])

  useEffect(() => {
    if (animate) {
      loop();
    }
  })

  const loop = (() => {
    timeout = setTimeout(autoAnimate, 2000);
  })

  const autoAnimate = (() => {
    if (inx === 4) {
      setInx(0)
    } else {
      setInx(inx + 1)
    }
  })

  const startAnimate = (() => {
    if (animate === false) {
      setAnimate(true);
      autoAnimate();
    }
  })

  const onIconClick = ((index) => {
    clearTimeout(timeout);
    setInx(index)
    setAnimate(false)
  })

  return (
    <>
      <section className={`caret-hide`} id="plan">
        <div className="container lc-div">
          <div className="lc-component" ref={elementRef}>
            {
              LCData.map((x, index) => (
                <div className={`lc-element pointer ${inx === index && "lc-circle"}`} key={index + 1} onClick={() => onIconClick(index)}>
                  <img
                    src={x.img}
                    className={`${inx !== index ? "lc-icon" : "lc-icon-sel"}`}
                  />
                  <h3 className={`fl fc-g ${inx === index ? "lc-title-sel" : "lc-title"} text-center ${width > height ? "fs-w-20" : "fs-w-32"}`}>{x.title}</h3>
                </div>
              ))
            }
            <div className="">
              <img
                src="/bhk-home/lifecycle/Big_Middle.svg"
                className="lc-center"
              />
              <p className={`center-text fl lh-2 fc-o ${width > height ? "fs-w-40" : "fs-w-60"}`}>Design to delivery,<br /> in just 45 days!</p>
            </div>
            <div className="bottom-div">
              <p className={`fl fc-g  text-center ${width > height ? "fs-w-20" : "fs-w-60"}`}>Your dream home is just a few steps away.<br />Our streamlined process ensures a smooth journey <br />from concept to completion.</p>
              <div className={`d-flex justify-content-center ${width > height ? "p-w1" : "p-h1"}`}>
                <Link legacyBehavior href="">
                  <a className={`btn-main-b fl ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-w-40"}`}>Get&nbsp;a&nbsp;quote!</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LifeCycle;
