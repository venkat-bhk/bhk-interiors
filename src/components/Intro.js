/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Link from "next/link";
import useWindowSize from "./Window";

const Intro = () => {

  const videoElement = useRef()
  const { width, height } = useWindowSize();

  return (
    <section
      className="overflow-hidden position-relative"
    >
      <video ref={videoElement} muted autoPlay loop playsInline id="intro">
        <source src="/bhk-home/Cover_low.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-10">
            <div className="intro-wrap">
              <h1 className={`fw-normal ${width > height ? "fs-w-80" : "fs-h-80"} fc-w caret-hide`}>Transform your home effortlessly!</h1>
              <div className="action-btns text-center pt-5 row">
                <div className={`${width >= height ? "col-6 jus-end" : "col-12"}`}>
                  <Link legacyBehavior href="">
                    <a className={`caret-hide btn-main ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-h-20 m-b"}`}>Free&nbsp;design&nbsp;consultation</a>
                  </Link>
                </div>
                <div className={`${width >= height ? "col-6 jus-start" : "col-12"}`}>
                  <Link legacyBehavior href="">
                    <a className={`caret-hide btn-main ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-h-20"}`}>Visit&nbsp;experience&nbsp;centre</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`down-btn text-center d-block ${width > height ? "pv-w2" : "pv-h2"}`}>
        <Link scroll={false} href="#plan" className={`text-white ${width > height ? "fs-w-32" : "fs-h-32"}`}>
          <img
            src="/bhk-home/Down_arrow.svg"
            alt="Down Arrow"
          />
        </Link>
      </div>
    </section>
  );
};

export default Intro;
