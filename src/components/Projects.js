import React from "react";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "./Window";
import ProjectsData from "@utils/projectData";
import { useRouter } from "next/router";

const Projects = () => {

  const { width, height } = useWindowSize();
  const router = useRouter()
  const filteredProjects = ProjectsData.filter((x, i) => i < 3)

  return (
    <>
      <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide`} id="plan">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 text-center">
              <h2 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>Projects</h2>
            </div>
          </div>

          <div className={`row justify-content-center ${width > height ? "mv-w" : "mv-h"}`}>
            {
              router.asPath === '/' ?
              filteredProjects.map((x, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <Link legacyBehavior href={{
                    pathname: '/projects/[slug]',
                    query: { slug: x.slug },
                  }}>
                    <div className="single-proj pointer mt-3">
                      <img src={x.thumbnail} alt={x.title} className="plan-img" />
                      <div className="next">
                        <div className={`${width > height ? "p-w1" : "p-h1"}`}>
                          <img
                            src="/bhk-home/Inside_next.svg"
                          />

                        </div>
                      </div>
                      <div className="proj-overlay"></div>
                    </div>
                  </Link>
                  <div className={`${width > height ? "pt-w2" : "pt-h2"}`}>
                    <h3 className={`fl fc-o ${width > height ? "fs-w-40" : "fs-h-40"}`}>{x.title}</h3>
                    <p className={`fl fc-g ${width > height ? "fs-w-20" : "fs-h-20"}`}>{x.location}</p>
                  </div>
                </div>
              ))
              :
              ProjectsData.map((x, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <Link legacyBehavior href={{
                    pathname: '/projects/[slug]',
                    query: { slug: x.slug },
                  }}>
                    <div className="single-proj pointer mt-3">
                      <img src={x.thumbnail} alt={x.title} className="plan-img" />
                      <div className="next">
                        <div className={`${width > height ? "p-w1" : "p-h1"}`}>
                          <img
                            src="/bhk-home/Inside_next.svg"
                          />

                        </div>
                      </div>
                      <div className="proj-overlay"></div>
                    </div>
                  </Link>
                  <div className={`${width > height ? "pt-w2" : "pt-h2"}`}>
                    <h3 className={`fl fc-o ${width > height ? "fs-w-40" : "fs-h-40"}`}>{x.title}</h3>
                    <p className={`fl fc-g ${width > height ? "fs-w-20" : "fs-h-20"}`}>{x.location}</p>
                  </div>
                </div>
              ))
            }
          </div>
          {
            router.asPath !== '/projects' &&
            <div className={`d-flex justify-content-center ${width > height ? "p-w1" : "p-h1"}`}>
              <Link legacyBehavior href="/projects">
                <a className={`btn-main-b fl ${width > height ? "p-w-1 fs-w-20" : "p-h-1 fs-h-20"}`}>View more</a>
              </Link>
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default Projects;
