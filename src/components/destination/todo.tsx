"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { banner7 } from '@/assets';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaCheckCircle } from 'react-icons/fa';

export default function TodoSection() {
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white' >
      

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[45%] w-full min-h-96 relative group"
    ><div
    className="space-y-7 overflow-hidden  relative h-full "
  ><Image src={banner7} alt='About' className='absolute top-0 left-0 h-full w-full hover:scale-125 duration-300 rounded-xl object-cover'/>

                 </div>
               </motion.div>

      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[49%] w-full space-y-7'>
      
     <h2 className='text-color1 font-bold text-3xl md:text-5xl !leading-[1.1]'>Things To Do In Thailand</h2>

      <p className='text-zinc-600 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae aspernatur voluptates eos quibusdam corrupti mollitia ipsa veritatis, illo,</p>
      
      <ul className='space-y-3 '>
       <li className='flex text-zinc-600 font-semibold sm:text-lg'><FaCheckCircle className='text-color1 mr-2 mt-1'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
       <li className='flex text-zinc-600 font-semibold sm:text-lg'><FaCheckCircle className='text-color1 mr-2 mt-1'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
       <li className='flex text-zinc-600 font-semibold sm:text-lg'><FaCheckCircle className='text-color1 mr-2 mt-1'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>

       <li className='flex text-zinc-600 font-semibold sm:text-lg'><FaCheckCircle className='text-color1 mr-2 mt-1'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
       <li className='flex text-zinc-600 font-semibold sm:text-lg'><FaCheckCircle className='text-color1 mr-2 mt-1'/>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
       
      </ul>
      </motion.div>

    </motion.div>
  )
}

 
