"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';

interface todo{
  title:string,
  img:any,
  para:string
}
export default function TodoSection({title,img,para}:todo) {
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:px-28 pt-0 md:p-20 sm:p-16 px-7 pb-11 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-white' >
      

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[45%] w-full min-h-72 relative group"
    ><div
    className="space-y-7 overflow-hidden relative h-full "
  ><Image src={img} alt='About' className='absolute top-0 left-0 h-full w-full hover:scale-125 duration-300 rounded-xl object-cover '/>

                 </div>
               </motion.div>

      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[49%] w-full space-y-6'>
      
     <h2 className='text-zinc-800 font-bold text-3xl md:text-5xl !leading-[1.1]'>{title}</h2>

      <p className='text-zinc-600 md:text-xl text-lg'>{para}</p>
      </motion.div>

    </motion.div>
  )
}

 
