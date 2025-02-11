"use client";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { sliderText } from "@/utils/motion";
import Link from "next/link";
import { cloude } from "@/assets";


export default function DestinationBanner({ img, title, para, slug }: any) {
  return (
    <section className="relative md:h-[80vh] h-[65vh] w-full ">
       <Image
              src={cloude}
              alt={`cloud`}
              className="w-full   absolute -bottom-7 left-0 z-30"
            /> <Image
            src={cloude}
            alt={`cloud`}
            className="w-full   absolute -bottom-7 left-0 z-30"
          />

         <Image
            src={img}
            alt={`banner`}
            className="w-full h-full object-cover"
          />
             
     

      <div className="w-full h-full text-white absolute top-0 left-0 bg-[#0000005b] z-10 flex justify-center items-center flex-col gap-6">
      <AnimatePresence>
      <motion.div
                  
                  variants={sliderText} // Using the sliderText motion variants
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ easings: ["easeIn", "easeOut"] }}
                      className="max-w-3xl text-center space-y-6">

{title &&  <motion.h2 className="lg:text-6xl md:text-4xl font-bold mb-3 text-3xl font1">
                        {title}
                      </motion.h2>}
                      <p className="lg:text-xl  mb-5 text-lg">{para}</p>
              <p className="text-white">Home / Package / <span className="text-color2">{slug}</span></p>
                      </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
