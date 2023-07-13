import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
SwiperCore.use([Autoplay]);
const Project = () => {
  return (
    <section id="project">
      <div className="h-screen">
        <div className="container mx-auto">
          <h1 className="px-1 py-4 uppercase text-xl tracking-widest text-[#6699CC]">
            Projects
          </h1>
          <h1 className="text-left text-primary mb-4">Recent Works</h1>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <div className="relative bg-white w-full h-screen flex items-center justify-center">
                <div className="h-[500px] w-[550px] rounded-lg p-5 bg-red-200">
                  Sample 1
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Project;
