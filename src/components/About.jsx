import React from 'react';
import person from '../assets/img/person.png';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className=" bg-white   ">
      <motion.div
        className="container  mx-auto mt-[40rem] md:mt-[45rem] sm:mt-[60rem] mb-[5rem] "
        initial={{}}>
        <h1 className="px-1  uppercase text-xl tracking-widest text-[#6699CC] py-10">
          About
        </h1>
        <div className="flex flex-col md:flex-row md:gap-24">
          <img
            src={person}
            alt="person"
            className="w-full  md:w-full lg:w-1/2 h-[540px] rounded-lg shadow-[8px_8px_9px_-6px_#6699CC]  mb-8 md:mb-0 cursor-pointer filter grayscale hover:grayscale-0 hover:pointer-up duration-200"
          />
          <div className="flex-1 flex flex-col justify-center items-center md:items-start md:text-left">
            <div className="flex flex-col mb-[6rem] ">
              <h2 className="text-2xl md:text-3xl font-medium lg:font-extrabold mb-4 text-primary ">
                Who I Am
              </h2>
              <p className="mb-4 text-accent text-center sm:text-left  text-[#6699CC] ">
                React Developer
              </p>
              <p className="mb-8 text-center sm:text-left  text-lg md:text-3xl  text-gray-700">
                I'm currently looking for entry-level position that suits my
                skills. I prefer to keep learning, I am very passionate about
                improving my coding skills & developing web applications.
                <br />
                Coding gives me a wonderful feeling of achievement and joy which
                I cannot explain in words.
              </p>
              <span>
                <button className="inline-flex md:flex-1 shadow-[0_4px_9px_-4px_#6699CC]  bg-[#6699CC] rounded border-2 border-[#6699CC] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-gray-100 transition duration-150 ease-in-out hover:border-[#6699CC] hover:bg-neutral-500 hover:bg-opacity-10 hover:text-black focus:border-primary-600 focus:text-primary focus:outline-none focus:ring-0 active:border-primary-700 active:text-black dark:hover:bg-neutral-100 dark:hover:bg-opacity-20">
                  Check My Project
                </button>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
