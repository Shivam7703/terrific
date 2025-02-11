"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { banner7 } from '@/assets';

export default function DestinationAbout() {
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white' >
      

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[45%] w-full min-h-96 relative group"
    ><div
    className="space-y-7 overflow-hidden hover14 relative h-full "
  ><Image src={banner7} alt='About' className='absolute top-0 left-0 h-full w-full rounded-xl object-cover'/>

                 </div>
               </motion.div>

      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[49%] w-full space-y-7'>
      
     <h2 className='text-color1 font-bold text-3xl md:text-5xl !leading-[1.1]'>Places To visit In Thailand</h2>

      <p className='text-zinc-600 text-sm md:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aspernatur voluptates eos quibusdam corrupti mollitia ipsa veritatis, illo, repellat voluptatum sequi soluta nulla veniam doloremque blanditiis dolorum? Animi repudiandae maiores eaque repellat voluptatibus, iure, sint laborum porro saepe quisquam inventore!</p>
      
      <ul className='flex gap-4 flex-wrap'>
        <div className='p-3 text-center space-y-2 border-2 rounded-lg'>
            <h3 className='text-color1 sm:text-2xl text-xl font-bold'>300+</h3>
            <p className='sm:text-base text-sm text-zinc-800 font-medium'>Destination Worldwide</p>
        </div>
        <div className='p-3 text-center space-y-2 border-2 rounded-lg'>
            <h3 className='text-color1 sm:text-2xl text-xl font-bold'>300+</h3>
            <p className='sm:text-base text-sm text-zinc-800 font-medium'>Destination Worldwide</p>
        </div>
      </ul>
      </motion.div>

    </motion.div>
  )
}

 
