/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import useWindowSize from "./Window";
import { useRouter } from "next/router";
import ProjectData from "@utils/projectData";

const ProjectCover = () => {

  const videoElement = useRef()
  const { width, height } = useWindowSize();

  const router = useRouter()
  const project = ProjectData.filter(x => x.slug === router.query.p_name)

  return (
    <section
      className=""
    >
      <div>
        <img src={project[0]?.cover} alt="Cover Image" className="plan-img" />
      </div>
    </section>
  );
};

export default ProjectCover;
