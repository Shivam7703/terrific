"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { about, banner3 } from "@/assets";

export default function Section1() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:p-28 sm:p-12 px-7 py-11 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white overflow-hidden"
    >
      {/* Image Section */}
      <motion.div
        variants={fadeIn("right", "tween", 0.3, 1)}
        className="sm:w-[45%] w-full min-h-96 relative group"
      >
        <div className="space-y-7 overflow-hidden hover14 relative h-full">
          <Image
            src={about}
            alt="About"
            className="absolute top-0 left-0 h-full w-full rounded-xl object-cover"
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="sm:w-[49%] w-full space-y-7"
      >
        <h4 className="text-color1 bg-zinc-100 px-7 font-bold text-sm rounded-lg py-3 w-max">
          About Us
        </h4>

        <h2 className="text-zinc-800 font-bold text-3xl md:text-5xl !leading-[1.1]">
          Choose The Best Destination
          <span className="text-color1"> For Your Perfect Trip</span>
        </h2>

        <p className="text-zinc-600 text-sm md:text-base">
        Terrific Trips operates as a trusted independent travel agency that has built its journey-planning expertise for more than 20 years. We operate out of New Delhi to produce made-to-order vacation packages that connect travelers to exciting destinations within and outside India through our professional team.

        </p>

        {/* Progress Bars */}
        <div className="max-w-[600px] my-9">
          {[
            { title: "Happy Clients", value: 97 },
            { title: "Tourists Satisfaction", value: 96 },
            { title: "Happy families", value: 99 },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold text-zinc-800">
                {item.title}
                <span className="float-right">{item.value}%</span>
              </h3>
              <div className="h-2 w-full rounded-full overflow-hidden bg-zinc-100 my-2">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 2.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-color2"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
