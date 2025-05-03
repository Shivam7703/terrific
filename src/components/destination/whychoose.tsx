"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { TbRosetteDiscountCheckFilled } from 'react-icons/tb';


function Whychoose({data}:any) {
  return (
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
       initial="hidden"
       whileInView="show"
       viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7  overflow-hidden bg-white' >
         
   
         <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
    className="sm:w-[45%] w-full min-h-96 relative group"
       >
                    {data?.img && <Image src={data?.img} alt='About' className='group-hover:bottom-[30%] rounded-2xl duration-300 absolute z-10 bottom-0 shadow-lg left-0 w-[70%] h-[70%] border-8 border-white object-cover'/>}
                    {data?.img2 && <Image src={data?.img2} alt='About' className='group-hover:top-[30%] rounded-2xl duration-300 absolute z-10 top-0 shadow-lg right-0 w-[70%] h-[70%] border-8 border-white group-hover:scale-x-[-1] object-cover'/>}</motion.div>
   
         <motion.div
          variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[49%] w-full space-y-7'>
           
   
        <h2 className='text-color1 font-bold text-3xl md:text-5xl !leading-[1.1]'>Why Choose Terrific Trips?</h2>
            
         <ul className='space-y-4'>
         {data?.data?.map((data :any) => (
           <li key={data.id} className='px-4 pb-4 pt-1 hover:-translate-y-3 space-y-2 border pl-6 ml-3 relative w-full group shadow-lg border-black/30 duration-300 rounded-xl text-black'>
               <div className='group-hover:text-color2 absolute top-10 bg-white shadow-sm -left-5 duration-300  md:text-4xl text-color1'><TbRosetteDiscountCheckFilled />

   </div>
   <div><h3 className='text-xl mb-1 font-bold group-hover:text-color1 duration-300 text-zinc-800'>{data.title}</h3>
   <p className='font-medium text-zinc-600'>{data.text}</p></div>
   </li>
         ))}
         </ul>
         </motion.div>
   
       </motion.div>
  )
}

export default Whychoose
