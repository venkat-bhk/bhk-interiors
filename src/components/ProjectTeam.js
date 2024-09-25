import Image from "next/image";
import React from "react";
import useWindowSize from "./Window";
import { useRouter } from "next/router";
import ProjectData from "@utils/projectData";

const ProjectTeam = () => {

  const { width, height } = useWindowSize();

  const router = useRouter()
  const project = ProjectData.filter(x => x.slug === router.query.p_name)

  return (
    <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide gray`}>
      <div className="container">
        <div className={`row justify-content-center ${width > height ? "ph-w1" : "ph-h1" }`}>
          <div className="col-lg-8 col-md-10 text-center">
            <h2 className={`fl fc-o ${width > height ? "fs-w-80" : "fs-h-80"}`}>Team</h2>
          </div>
        </div>
        <div className={`row justify-content-center ${width > height ? "mv-w" : "mv-h"}`}>
          {project[0]?.team.map((x, i) => (
            <div className="col-lg-3 col-md-6 col-xs-6" key={i + 1}>
              <div className={`single-expe text-center ${width > height ? "pv-w1" : "pv-h1"}`}>
                <div className={`${width > height ? "grid-icon-w" : "grid-icon-h"}`}>
                  <img
                    src={x.img}
                    alt={x.title + " Icon"}
                  />
                </div>
                <div className="">
                  <h3 className={`fc-g ${width > height ? "fs-w-24" : "fs-h-24"}`}>{x.name}</h3>
                  <p className={`fl fc-g ${width > height ? "fs-w-20" : "fs-h-20"}`}>{x.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTeam;
