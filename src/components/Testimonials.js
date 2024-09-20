import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import useWindowSize from './Window';
import { TestimonialsData } from '@utils/data';

export default function Testimonials() {

  const { width, height } = useWindowSize();

  const swiperOption = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    pagination: {
      clickable: true,
      el: '.test-pagination.swiper-pagination',
    },
    autoplay: {
      delay: 2000,
    },
  };
  return (
    <section className={`${width > height ? "pv-w5" : "pv-h5"} caret-hide`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-4">
              <h2 className={`fl fc-o ${width > height ? "fs-w-80" : "fs-h-80"}`}>Testimonials</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Swiper
              className="test-slider pb-5"
              {...swiperOption}
              modules={[Pagination]}
            >
              {
                TestimonialsData.map((x, index) => (
                  <SwiperSlide>
                    {' '}
                    <div className="text-center">
                      <div className='icon-div'>
                        <div className='left-quote'>
                          <img
                            width={width > height ? width / 14 : height / 10}
                            src='/bhk-home/left.svg'
                          />
                        </div>
                        <div className='test-icon'>
                          <img
                            src="bhk-home/projects/team.jpg"
                            width={width > height ? width / 10 : height / 8}
                            alt="avatar"
                            className=""
                          />
                        </div>
                        <div className='left-quote-2'>
                          <img
                            width={width > height ? width / 14 : height / 10}
                            src='/bhk-home/left.svg'
                          />
                        </div>
                      </div>
                      <p className={`fl fc-g ${width > height ? "p-w1 fs-w-20" : "p-h1 fs-h-20"}`}>{x.testimonial}</p>
                      <div className='title-div'>
                        <div className='test-title'>
                          <h3 className={`fc-g ${width > height ? "fs-w-24 ph-w2" : "ph-h2 fs-h-24"}`}>{`- ` + x.title}</h3>
                        </div>
                        <img
                          width={width > height ? width / 14 : height / 10}
                          src='/bhk-home/right.svg'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
              <div className="test-pagination swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
