"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';

export default function GettoKnow({aboutdata}:any) {
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white' >
      

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[45%] w-full min-h-96 relative group"
    >
                 {aboutdata?.img && <Image src={aboutdata?.img} alt='About' className='group-hover:bottom-[30%] rounded-2xl duration-300 absolute z-10 bottom-0 shadow-lg left-0 w-[70%] h-[70%] border-8 border-white object-cover'/>}
                 {aboutdata?.img2 && <Image src={aboutdata?.img2} alt='About' className='group-hover:top-[30%] rounded-2xl duration-300 absolute z-10 top-0 shadow-lg right-0 w-[70%] h-[70%] border-8 border-white group-hover:scale-x-[-1] object-cover'/>}</motion.div>

      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[49%] w-full space-y-7'>
      {aboutdata?.title1 && <h4 className='text-color1 bg-zinc-100 px-7 font-bold text-sm rounded-lg py-3 w-max'>{aboutdata?.title1}</h4>}


     <h2 className='text-zinc-800 font-bold text-3xl md:text-5xl !leading-[1.1]'>{aboutdata?.title2} <span className='text-color1'>{aboutdata?.title3}</span></h2>

      {aboutdata?.para && <p className='text-zinc-600 text-sm md:text-base'>{aboutdata?.para}</p>}
      
      <ul className='gap-3 flex max-sm:flex-wrap'>
      {aboutdata?.vision?.map((data :any) => (
        <li key={data.id} className='p-4  space-y-3 group hover:shadow-xl duration-300  rounded-xl text-black'>
            <div className='group-hover:text-color2  duration-300  md:text-3xl text-color1'>{data?.icon}
</div>
<div><h3 className='text-xl mb-1 font-bold group-hover:ml-3 group-hover:text-color1 duration-300 text-zinc-800'>{data.heading}</h3>
<p className='font-medium text-zinc-600'>{data.text}</p></div>
</li>
      ))}
      </ul>
      </motion.div>

    </motion.div>
  )
}


