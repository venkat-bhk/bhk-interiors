import React from "react";
import Link from "next/link";

import useWindowSize from "./Window";
import { PlanData } from "@utils/data";

const Plan = () => {

  const { width, height } = useWindowSize();

  return (
    <>
      <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide`} id="plan">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 text-center">
              <h2 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>Select a plan that <br /> suits your style</h2>
            </div>
          </div>

          <div className={`row justify-content-center ${width > height ? "mv-w":"mv-h"}`}>
            {
              PlanData.map((x, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="single-plan mt-3">
                    <img src={x.img} alt={x.title} className="plan-img" />
                    <div className="overlay">
                      <div className="plan-title">
                        <h2 className={`fl fc-w ${width > height ? "fs-w-40 ph-w1" : "fs-h-40 ph-h1"}`}>{x.title}</h2>
                        <h2 className={`price fl fc-w ${width > height ? "fs-w-40 ph-w1" : "fs-h-40 ph-h1"}`}>{x.price}</h2>
                      </div>
                      <p className={`desc fl fc-w ${width > height ? "p-w1 fs-w-20" : "p-h1 fs-h-20"}`}>{x.desc}</p>
                      <div className={`${width > height ? "p-w1" : "p-h1"}`}>
                        <Link legacyBehavior href="">
                          <a className={`btn-main fl ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-h-20"}`}>Learn more</a>
                        </Link>
                      </div>
                    </div>
                    <div className="overlay-2"></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Plan;
