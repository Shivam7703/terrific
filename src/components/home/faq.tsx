"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { faqData } from '@/data/homeData';
import { FaChevronDown } from 'react-icons/fa6';
import TopHeading from '../global/topHeading';

export default function FaqSection() {
  const [expandedCity, setExpandedCity] = useState<number | null>(null);

  function toggleCity(cityId: number) {
    setExpandedCity((prev) => (prev === cityId ? null : cityId)); // Toggles FAQ visibility for cities
  }
  return (
    
    <motion.div  variants={staggerContainer(0.1, 0)} // Adjusted stagger settings
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }} className='lg:p-28 sm:p-12 px-7 py-11 max-w-[1650px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7 bg-back overflow-hidden' >
      

      <motion.div
       variants={fadeIn("left", "tween", 0.3, 1)} className='sm:w-[54%] w-full space-y-7'>
         <TopHeading title={faqData?.title} para={faqData?.para} />

      
       {/* Cities as FAQ */}
       {faqData?.faqs.map((city) => (
                <div key={city.id} className="mt-8 border-b pb-4">
                  {/* FAQ Question */}
                  <div
                    onClick={() => toggleCity(city.id)}
                    className="flex justify-between items-center cursor-pointer text-xl md:text-xl text-zinc-800  font-bold"
                  >
                    {city.que}

                    <FaChevronDown className={` duration-300 ${expandedCity === city.id ? "rotate-180 text-color1" :"text-zinc-700"}`} />
                   
                  </div>

                  {/* FAQ Answer with Transition */}
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${
                      expandedCity === city.id
                        ? "max-h-14 mt-3 space-y-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className="md:text-lg text-sm font-medium text-zinc-700">
                      {city.ans}
                    </p>
                   
                  </div>
                </div>
              ))}
      </motion.div>

      <motion.div     variants={fadeIn("right", "tween", 0.3, 1)}
 className="sm:w-[43%] w-full min-h-96 group"
    ><div
    className="space-y-7 overflow-hidden hover14 relative h-full sm:h-[546px]"
  >{faqData?.img && <Image src={faqData?.img} alt='About' className='absolute top-0 left-0 h-full w-full rounded-xl object-contain'/>}

                 </div>
           </motion.div>
    </motion.div>
  )
}

