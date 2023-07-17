import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Online from '../assets/img/Online-ordering.png';
import IconButton from './IconButton';
import {
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiCss3,
  SiJavascript,
  BiGitBranch,
  AiFillHtml5,
  SiExpress,
  GrNode,
  AiFillGithub,
} from '../assets/icon';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../index.css';
// SwiperCore.use([Autoplay]);
export default function Project() {
  return (
    <section id="project">
      <div className="h-screen">
        <div className="container mx-auto">
          <h1 className="px-1 py-4 uppercase text-xl tracking-widest text-[#6699CC]">
            Projects
          </h1>
          <h1 className="text-left text-primary mb-10">Recent Works</h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper   w-full  rounded-md shadow-lg  place-items-center">
            <SwiperSlide>
              <div className="p-20  rounded-sm w-full  top-0 object-fit z-[-1] opacity-40 absolute">
                <img
                  src={Online}
                  className=" flex justify-center  relative -top-11"
                />
              </div>
              <div className="absolute top-0 w-full h-full grayscale  mix-blend-overlay z-[-1]"></div>
              <div className="relative  top-[165px] p-20">
                <h1 className="flex items-start justify-center relative -top-0 text-md font-semibold">
                  Online Ordering System
                </h1>
                <p className="text-black text-sm py-2 px-2">
                  Develop an online ordering system that will enable customers
                  to access and browse product information in addition to
                  improving ordering and transactions.
                </p>
                <h1 className=" px-2 text-sm font-medium">Built with:</h1>
                <div className="flex items-center justify-center flex-col-2 gap-2 ">
                  <IconButton text="MongoDB" color="bg-[#FFFFF]">
                    <SiMongodb size={20} color="green" />
                  </IconButton>
                  <IconButton text="Express" color="bg-[#FFFFF]">
                    <SiExpress size={20} color="green" />
                  </IconButton>
                  <IconButton text="React" color="bg-[#FFFFF]">
                    <SiReact size={20} color="cyan" />
                  </IconButton>
                  <IconButton text="Node" color="bg-[#FFFFF]">
                    <GrNode size={20} color="green" />
                  </IconButton>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-20  rounded-sm w-full  top-0 object-fit z-[-1] opacity-20 absolute">
                <img
                  src={Online}
                  className=" flex justify-center  relative -top-8"
                />
              </div>
              <div className="absolute top-0 w-full h-full grayscale   mix-blend-overlay z-[-1]"></div>
              <div className="relative  top-52 p-20">
                <h1 className="flex items-start justify-center">
                  Online Enrollment System
                </h1>
                <h1 className="mt-6">Built with:</h1>
                <div className="flex items-center justify-center flex-col-2 gap-2 ">
                  <IconButton text="MongoDB" color="bg-[#FFFFF]">
                    <SiMongodb size={20} color="green" />
                  </IconButton>
                  <IconButton text="Express" color="bg-[#FFFFF]">
                    <SiExpress size={20} color="green" />
                  </IconButton>
                  <IconButton text="React" color="bg-[#FFFFF]">
                    <SiReact size={20} color="cyan" />
                  </IconButton>
                  <IconButton text="Node" color="bg-[#FFFFF]">
                    <GrNode size={20} color="green" />
                  </IconButton>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-20  rounded-sm w-full  top-0 object-fit z-[-1] opacity-20 absolute">
                <img
                  src={Online}
                  className=" flex justify-center  relative -top-8"
                />
              </div>
              <div className="absolute top-0 w-full h-full grayscale  mix-blend-overlay z-[-1]"></div>
              <div className="relative  top-52 p-20">
                <h1 className="flex items-start justify-center">KatChat App</h1>
                <h1 className="mt-6">Built with:</h1>
                <div className="flex items-center justify-center flex-col-2 gap-2 ">
                  <IconButton text="MongoDB" color="bg-[#FFFFF]">
                    <SiMongodb size={20} color="green" />
                  </IconButton>
                  <IconButton text="Express" color="bg-[#FFFFF]">
                    <SiExpress size={20} color="green" />
                  </IconButton>
                  <IconButton text="React" color="bg-[#FFFFF]">
                    <SiReact size={20} color="cyan" />
                  </IconButton>
                  <IconButton text="Node" color="bg-[#FFFFF]">
                    <GrNode size={20} color="green" />
                  </IconButton>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
