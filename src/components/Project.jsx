import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { inViewhandler } from './animationHandler';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Online from '../assets/img/Online-ordering.png';
import enrollment from '../assets/img/enrollment.png';
import katchat from '../assets/img/katchat.png';
import IconButton from './IconButton';
import {
  SiReact,
  SiMongodb,
  SiMysql,
  SiCss3,
  SiJavascript,
  BiGitBranch,
  AiFillHtml5,
  SiExpress,
  GrNode,
  SiPhp,
} from '../assets/icon';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../index.css';
// SwiperCore.use([Autoplay]);
export default function Project() {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inViewhandler(inView, animation)}>
      <section id="project">
        <div className="h-screen">
          <motion.div
            className="container mx-auto"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}>
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
                    className=" flex justify-center  relative -top-11 bg-black "
                  />
                </div>
                <div className="absolute top-0 w-full h-full   mix-blend-overlay z-[-1]"></div>
                <div className="relative  top-[165px] p-20">
                  <a href="https://katchat.vercel.app/">
                    <button className="relative -top-[120px] left-[120px] inline-flex md:flex-1 shadow-[0_4px_9px_-4px_#6699CC]  bg-[#6699CC] rounded border-2 border-[#6699CC] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-gray-100 transition duration-150 ease-in-out hover:border-[#6699CC] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-black focus:border-primary-600 focus:text-primary focus:outline-none focus:ring-0 active:border-primary-700 active:text-black dark:hover:bg-neutral-100 dark:hover:bg-opacity-20">
                      Visit Site
                    </button>
                  </a>
                  <h1 className="flex items-start justify-center relative -top-10 text-md font-semibold">
                    Online Ordering System
                  </h1>
                  <p className="text-black text-sm py-2 px-2 -mt-10">
                    Develop an online ordering system that will enable customers
                    to access and browse product information in addition to
                    improving ordering and transactions.The project was
                    completed in March 2023
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
                <div className="p-20  rounded-sm w-full  top-0 object-fit z-[-1] opacity-40 absolute ">
                  <img
                    src={enrollment}
                    className=" flex justify-center  relative -top-11  bg-black"
                  />
                </div>
                <div className="absolute top-0 w-full h-full grayscale  mix-blend-overlay z-[-1]"></div>
                <div className="relative  top-[165px] p-20">
                  <a href="https://katchat.vercel.app/">
                    <button className="relative -top-[120px] left-[120px] inline-flex md:flex-1 shadow-[0_4px_9px_-4px_#6699CC]  bg-[#6699CC] rounded border-2 border-[#6699CC] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-gray-100 transition duration-150 ease-in-out hover:border-[#6699CC] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-black focus:border-primary-600 focus:text-primary focus:outline-none focus:ring-0 active:border-primary-700 active:text-black dark:hover:bg-neutral-100 dark:hover:bg-opacity-20">
                      Visit Site
                    </button>
                  </a>
                  <h1 className="flex items-start justify-center relative -top-10 text-md font-semibold">
                    Online Enrollment System
                  </h1>
                  <p className="text-black text-sm py-2 px-2 -mt-10">
                    The system provides an intuitive and user-friendly
                    interface, allowing students and their parents to apply for
                    courses and submit necessary documents electronically. The
                    project was completed in June 2023.
                  </p>
                  <h1 className=" px-2 text-sm font-medium">Built with:</h1>
                  <div className="flex items-center justify-center flex-col-2 gap-2 ">
                    <IconButton text="Mysql" color="bg-[#FFFFF]">
                      <SiMysql size={20} color="green" />
                    </IconButton>

                    <IconButton text="React" color="bg-[#FFFFF]">
                      <SiReact size={20} color="cyan" />
                    </IconButton>
                    <IconButton text="Php" color="bg-[#FFFFF]">
                      <SiPhp size={20} color="blue" />
                    </IconButton>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-20  rounded-sm w-full  top-0 object-fit z-[-1] opacity-40 absolute">
                  <img
                    src={katchat}
                    className=" flex justify-center  relative -top-11 bg-black "
                  />
                </div>
                <div className="absolute top-0 w-full h-full  mix-blend-overlay z-[-1]"></div>
                <div className="relative  top-[165px] p-20">
                  <a href="https://katchat.vercel.app/">
                    <button className="relative -top-[120px] left-[120px] inline-flex md:flex-1 shadow-[0_4px_9px_-4px_#6699CC]  bg-[#6699CC] rounded border-2 border-[#6699CC] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-gray-100 transition duration-150 ease-in-out hover:border-[#6699CC] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-black focus:border-primary-600 focus:text-primary focus:outline-none focus:ring-0 active:border-primary-700 active:text-black dark:hover:bg-neutral-100 dark:hover:bg-opacity-20">
                      Visit Site
                    </button>
                  </a>
                  <h1 className="flex items-start justify-center relative -top-10 text-md font-semibold">
                    Kat-Chat App
                  </h1>
                  <p className="text-black text-sm py-2 px-2 -mt-10">
                    The Real-Time Chat Application is a feature-rich and
                    user-friendly communication platform designed to facilitate
                    instant messaging and seamless interaction between users.
                    The project was completed in May 2023
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
            </Swiper>
          </motion.div>
        </div>
      </section>
    </InView>
  );
}
