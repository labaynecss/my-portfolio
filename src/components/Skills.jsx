import React from 'react';
import { inViewhandler } from './animationHandler';
import { motion, useAnimation } from 'framer-motion';
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
import { Accordio } from './Accordio';
export const Skills = () => {
  return (
    <section
      id="skills"
      className="h-screen
         flex justify-center items-center bg-white ">
      <div className=" container mx-auto mb-[6rem]">
        <div className=" flex flex-col ">
          <h1 className="px-1 py-4 uppercase text-xl tracking-widest text-[#6699CC]">
            Skills
          </h1>
          <h1 className="text-left text-primary mb-4 ">What I Can Do</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  px-4 py-8 ">
            <motion.div
              className="flex flex-col items-center justify-center h-40 rounded-md shadow-lg shadow-blue-500/50"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.2 },
              }}>
              <div className="text-lg font-bold mb-4 press-start">
                Front-End
              </div>
              <div className="flex flex-col-2 space-x-2 ">
                <IconButton text="React" color="bg-[#FFFFF]">
                  <SiReact size={30} color="cyan" />
                </IconButton>
                <IconButton text="CSS" color="bg-[#FFFFF]">
                  <SiCss3 size={29} color="5DADE2 " />
                </IconButton>
                <IconButton text="JavaScript" color="bg-[#FFFFF">
                  <SiJavascript size={30} color="yellow" />
                </IconButton>
                <IconButton text="HTML" color="bg-[#FFFFF]">
                  <AiFillHtml5 size={30} color="red" />
                </IconButton>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center h-40 rounded-md shadow-lg shadow-green-500/50"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.5 },
              }}>
              <div className="text-lg font-bold mb-4 press-start">Back-End</div>
              <div className="flex flex-col-2 space-x-2">
                <IconButton text="Express" color="bg-[#FFFFF]">
                  <SiExpress size={30} color="green" />
                </IconButton>
                <IconButton text="MongoDB" color="bg-[#FFFFF]">
                  <SiMongodb size={30} color="green" />
                </IconButton>
                <IconButton text="Node" color="bg-[#FFFFF]">
                  <GrNode size={30} color="green" />
                </IconButton>
                <IconButton text="Postgresql" color="bg-[#FFFFF]">
                  <SiPostgresql size={30} color="blue" />
                </IconButton>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center h-40 rounded-md  shadow-lg shadow-rose-500/50"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.7 },
              }}>
              <div className="text-lg font-bold mb-4 press-start">Others</div>
              <div className="flex flex-col-2 space-x-2">
                <IconButton text="Git" color="bg-[#FFFFF]">
                  <BiGitBranch size={30} color="red" />
                </IconButton>
                <IconButton text="GitHub" color="bg-[#FFFFF]">
                  <AiFillGithub size={30} color="black" />
                </IconButton>
              </div>
            </motion.div>
          </div>
          <span className="hidden lg:block">
            <Accordio />
          </span>
        </div>
      </div>
    </section>
  );
};
