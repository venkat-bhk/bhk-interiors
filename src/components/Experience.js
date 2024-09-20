import { ExpeData } from "@utils/data";
import Image from "next/image";
import React from "react";
import useWindowSize from "./Window";

const Experience = () => {

  const { width, height } = useWindowSize();

  return (
    <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide gray`}>
      <div className="container">
        <div className={`row justify-content-center ${width > height ? "ph-w1" : "ph-h1" }`}>
          <div className="col-lg-8 col-md-10 text-center">
            <h2 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>End-to-end services &<br />hassle-free experience</h2>
          </div>
        </div>
        <div className={`row justify-content-center ${width > height ? "mv-w" : "mv-h"}`}>
          {ExpeData.map((x, i) => (
            <div className="col-lg-4 col-md-6 col-xs-6" key={i + 1}>
              <div className={`single-expe text-center ${width > height ? "pv-w1" : "pv-h1"}`}>
                <div className={`${width > height ? "grid-icon-w" : "grid-icon-h"}`}>
                  <img
                    src={x.img}
                    alt={x.title + " Icon"}
                  />
                </div>
                <div className="">
                  <h3 className={`fl fc-o ${width > height ? "fs-w-24" : "fs-h-24"}`}>{x.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
