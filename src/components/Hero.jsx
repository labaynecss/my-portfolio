import React from 'react';
import { ArrowSection } from './ArrowSection';

import { inViewhandler } from './animationHandler';
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import {
  AiOutlineFile,
  AiFillLinkedin,
  AiFillGithub,
  AiFillContacts,
} from 'react-icons/ai';

export const Hero = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewhandler(inView, animation)}>
      <section
        id="home"
        className="h-screen bg-white flex items-center bubbles w-full flex-col  ">
        <div className="bubble-container ">
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
          <div className="bubble " />
        </div>
        <div className="container mx-auto h-screen flex justify-center ">
          <motion.div className="context-wrapper flex items-center ">
            <div className="flex pt-[5rem]">
              <div className="flex flex-col items-center lg:item-center text-lg ">
                <div className="text-content text-center  ">
                  <motion.p className="capitalize text-xs md:text-sm  text-gray-700 ">
                    LET'S BUILD TOGETHER
                  </motion.p>
                  <motion.h1
                    className="py-4   text-3xl sm:text-lg md:text-5xl lg:text-6xl text-gray-700 text-bold"
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    Hi, I'm <span className="text-[#6699CC] ">Carl</span>
                  </motion.h1>
                  <motion.h1
                    className="pb-4  text-3xl space-x-5 sm:text-lg md:text-4xl lg:text-6xl  text-center  text-gray-700 "
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    A React Developer
                  </motion.h1>
                  <p className="capitalize text-gray-700 pb-3 text-xs md:text-sm ">
                    Specialized in building your exceptional web applications
                  </p>

                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4 px-1 ">
                    <a href="https://www.linkedin.com/in/carl-louis-c-labayne-93377a228/">
                      <div className="h-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiFillLinkedin />
                      </div>
                    </a>
                    <a href="https://github.com/labaynecss">
                      <div className="h-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiFillGithub />
                      </div>
                    </a>
                    <a href="#contact">
                      <div className="h-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiFillContacts />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      href="https://docs.google.com/document/d/1JtYVUJXcqUsdNJVmJJcOdFuXqXJJTZrH/edit?usp=sharing&ouid=108840990101263968347&rtpof=true&sd=true">
                      <div className="hh-16 w-16 rounded-full hover:pointer-up duration-200 shadow-lg p-6">
                        <AiOutlineFile />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="  flex items-center justify center">
          <ArrowSection />
        </div>
      </section>
    </InView>
  );
};
