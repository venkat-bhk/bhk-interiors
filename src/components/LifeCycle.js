import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "./Window";
import { LCData } from "@utils/data";

const LifeCycle = () => {

  const { width, height } = useWindowSize();
  const [clicked, setClicked] = useState(0);

  return (
    <>
      <section className={`caret-hide`} id="plan">
        <div className="container lc-div">
          <div className="lc-component">
            {
              LCData.map((x, index) => (
                <div className={`lc-element pointer ${clicked === index && "lc-circle"}`} key={index + 1} onClick={() => setClicked(index)}>
                  <img
                    src={x.img}
                    className={`${clicked !== index ? "lc-icon" : "lc-icon-sel"}`}
                  />
                  <h3 className={`fl fc-g ${clicked === index ? "lc-title-sel" : "lc-title"} text-center ${width > height ? "fs-w-20" : "fs-w-32"}`}>{x.title}</h3>
                </div>
              ))
            }
            <div className="">
              <img
                src="/bhk-home/lifecycle/Big_Middle.svg"
                className="lc-center"
              />
              <p className={`center-text fl fc-o ${width > height ? "fs-w-40" : "fs-w-60"}`}>Design to delivery,<br /> in just 45 days!</p>
            </div>
            <div className="bottom-div">
              <p className={`fl fc-g text-center ${width > height ? "fs-w-20" : "fs-w-60"}`}>Your dream home is just a few steps away.<br />Our streamlined process ensures a smooth journey <br />from concept to completion.</p>
              <div className={`d-flex justify-content-center ${width > height ? "p-w1" : "p-h1"}`}>
                <Link legacyBehavior href="">
                  <a className={`btn-main-b fl ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-w-40"}`}>Get a quote!</a>
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
