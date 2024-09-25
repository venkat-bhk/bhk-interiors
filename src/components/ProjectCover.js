/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import useWindowSize from "./Window";
import { useRouter } from "next/router";
import ProjectData from "@utils/projectData";

const ProjectCover = ({project}) => {

  const videoElement = useRef()
  const { width, height } = useWindowSize();

  return (
    <section
      className=""
    >
      {
        project &&
        <div>
          <img src={project.cover} alt="Cover Image" className="plan-img" />
        </div>
      }
    </section>
  );
};

export default ProjectCover;
