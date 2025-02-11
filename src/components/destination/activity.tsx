"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { banner7 } from "@/assets";

export default function Activity() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:px-28 lg:pb-16 sm:px-12 px-7 pb-11 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[48%] w-full flex justify-between"
      >
        
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className="w-[45%]  min-h-32 relative group"
          >
            <div className="space-y-7 overflow-hidden  relative h-full ">
              <Image
                src={banner7}
                alt="About"
                className="absolute top-0 left-0 h-full w-full hover:scale-110 duration-300 rounded-xl object-cover"
              />
            </div>
          </motion.div>

          <div className="w-[49%]  space-y-3">
            <h3 className="text-color1 font-bold text-lg font1 md:text-2xl !leading-[1.1]">
              Things To Do In Thailand
            </h3>

            <p className="text-zinc-600 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae aspernatur voluptates eos quibusdam corrupti mollitia
              ipsa veritatis, illo,
            </p>
          </div>
        </motion.div>

        <motion.div
        variants={fadeIn("left", "tween", 0.3, 1)}
        className="sm:w-[48%] w-full flex justify-between"
      >
        
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className="w-[45%]  min-h-32 relative group"
          >
            <div className=" overflow-hidden  relative h-full ">
              <Image
                src={banner7}
                alt="About"
                className="absolute top-0 left-0 h-full w-full hover:scale-110 duration-300 rounded-xl object-cover"
              />
            </div>
          </motion.div>

          <div className="w-[49%]  space-y-3">
            <h3 className="text-color1 font-bold font1 text-lg md:text-2xl !leading-[1.1]">
              Things To Do In Thailand
            </h3>

            <p className="text-zinc-600 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae aspernatur voluptates eos quibusdam corrupti mollitia
              ipsa veritatis, illo,
            </p>
          </div>
        </motion.div>
      </motion.div>
  );
}
