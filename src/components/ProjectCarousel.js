import { DreamData } from "@utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import useWindowSize from "./Window";
import { useRouter } from "next/router";
import ProjectData from "@utils/projectData";

const ProjectCarousel = () => {

  const { width, height } = useWindowSize();

  const router = useRouter()
  const project = ProjectData.filter(x => x.slug === router.query.p_name)

  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    pagination: {
      clickable: true,
      el: '.proj-pagination.swiper-pagination',
    },
    autoplay: {
      delay: 2000,
    },
  };

  return (
    <section className={`caret-hide white`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Swiper
              className="proj-slider pb-5"
              {...swiperOption}
              modules={[Pagination]}
            >
              {
                project[0]?.carousel.map((x, index) => (
                  <SwiperSlide key={index + 1}>
                    {' '}
                    <div>
                      <img src={x.img} alt="Cover Image" className="plan-img" />
                    </div>
                  </SwiperSlide>
                ))
              }
              <div className="proj-pagination swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className={`row justify-content-center ${width > height ? "ph-w2" : "ph-h2"}`}>
          <div className="col-lg-8 col-md-10 text-center">
            <div className={`${width > height ? "pv-w5" : "pv-h5"}`}>
              <h2 className={`fl fc-o ${width > height ? "fs-w-60" : "fs-h-60"}`}>{project[0]?.heading_2}</h2>
              <p className={`fl fc-g ${width > height ? "fs-w-20 pv-w1" : "fs-h-20 pv-h1"}`}>{project[0]?.desc_2}</p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default ProjectCarousel;
