import { DreamData } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useWindowSize from "./Window";

const DreamJob = () => {

  const { width, height } = useWindowSize();

  return (
    <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide white`}>
      <div className="container">
        <div className={`row justify-content-center ${width > height ? "ph-w2" : "ph-h2" }`}>
          <div className="col-lg-8 col-md-10 text-center">
            <h2 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>Elevating your dream home is our dream job!</h2>
            <p className={`fl fc-g ${width > height ? "fs-w-20 pv-w1" : "fs-h-20 pv-h1"}`}>With a keen eye for detail and a passion for design, we transform houses into homes that reflect your unique style.
              Backed by our dedicated team of interior designers and professional craftsmen, we are committed to bring your vision to life.
              From concept to completion, we handle every aspect of your home interiors with precision and care.</p>
            <h3 className={`fl fc-g ${width > height ? "fs-w-40" : "fs-h-40"}`}>Crafting inspiringinteriors</h3>
          </div>
        </div>
        <div className={`row justify-content-center ${width > height ? "mv-w" : "mv-h"}`}>
          {DreamData.map((x, i) => (
            <div className="col-lg-3 col-md-4" key={i + 1}>
              <div className={`single-expe text-center ${width > height ? "pv-w1" : "pv-h1"}`}>
                <div className={`${width > height ? "grid-icon-w" : "grid-icon-h"}`}>
                  <img
                    src={x.img}
                    alt={x.title + " Icon"}
                  />
                </div>
                <h3 className={`fl fc-o ${width > height ? "fs-w-24" : "fs-h-24"}`}>{x.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className={`d-flex justify-content-center ${width > height ? "p-w1" : "p-h1"}`}>
          <Link legacyBehavior href="">
            <a className={`btn-main-b fl ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-h-20"}`}>Know&nbsp;more</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DreamJob;
