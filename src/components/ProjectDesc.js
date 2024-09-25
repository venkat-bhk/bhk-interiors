import { WhyData } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useWindowSize from "./Window";
import { useRouter } from "next/router";
import ProjectData from "@utils/projectData";

const ProjectDesc = (props) => {

  const { width, height } = useWindowSize();

  return (
    <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide`}>
      <div className="container">
        <div className={`row justify-content-center ${width > height ? "ph-w2" : "ph-h2"}`}>
          <div className="col-lg-8 col-md-10 text-center">
            <h2 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>{props?.project?.heading_1}</h2>
            <p className={`fl fc-g ${width > height ? "fs-w-20 pv-w1" : "fs-h-20 pv-h1"}`}>{props?.project?.desc_1}</p>
          </div>
        </div>
        <div className={`row justify-content-center ${width > height ? "mv-w" : "mv-h"}`}>

            <div className="col-lg-4 col-sm-6">
              <div className={`single-expe text-center ${width > height ? "pv-w1" : "pv-h1"}`}>
                <p className={`fl fc-g ${width > height ? "fs-w-20" : "fs-h-20"}`}>Type</p>
                <div className={`${width > height ? "grid-icon-w" : "grid-icon-h"}`}>
                  <h3 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>{props?.project?.type}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={`single-expe text-center ${width > height ? "pv-w1" : "pv-h1"}`}>
                <p className={`fl fc-g ${width > height ? "fs-w-20" : "fs-h-20"}`}>Location</p>
                <div className={`${width > height ? "grid-icon-w" : "grid-icon-h"}`}>
                  <h3 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>{props?.project?.location}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={`single-expe text-center ${width > height ? "pv-w1" : "pv-h1"}`}>
                <p className={`fl fc-g ${width > height ? "fs-w-20" : "fs-h-20"}`}>Plan</p>
                <div className={`${width > height ? "grid-icon-w" : "grid-icon-h"}`}>
                  <h3 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>{props?.project?.plan}</h3>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDesc;
