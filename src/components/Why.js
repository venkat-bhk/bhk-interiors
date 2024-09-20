import { WhyData } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useWindowSize from "./Window";

const Why = () => {

  const { width, height } = useWindowSize();

  return (
    <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide gray-d`}>
      <div className="container">
        <div className={`row justify-content-center ${width > height ? "ph-w2" : "ph-h2"}`}>
          <div className="col-lg-8 col-md-10 text-center">
            <h2 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>Why BHK Interiors?</h2>
            <p className={`fl fc-w ${width > height ? "fs-w-20 pv-w1" : "fs-h-20 pv-h1"}`}>Experience seamless home transformation with BHK Interiors.
              We offer end-to-end interior solutions tailored to your style.
              Our commitment to quality & craftsmanship ensures your space is both aesthetically pleasing and built to last.</p>
          </div>
        </div>
        <div className={`row justify-content-center ${width > height ? "mv-w" : "mv-h"}`}>
          {WhyData.map((x, i) => (
            <div className="col-lg-4 col-sm-6" key={i + 1}>
              <div className={`single-expe text-center ${width > height ? "pv-w1" : "pv-h1"}`}>
                <div className={`${width > height ? "grid-icon-w" : "grid-icon-h"}`}>
                  <h3 className={`fl fc-o ${width > height ? "fs-w-40" : "fs-h-40"}`}>{x.title}</h3>
                </div>
                <p className={`fl fc-w ${width > height ? "fs-w-20" : "fs-h-20"}`}>{x.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
