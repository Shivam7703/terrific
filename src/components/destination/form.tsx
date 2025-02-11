"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn,  staggerContainer} from '@/utils/motion';
import { banner2, banner4, banner6, banner7 } from '@/assets';

export default function DestinationForm() {
  return (
    
    <section   className=' relative text-white w-full h-full text-center lg:p-28 sm:p-12 px-7 py-11'>
        <Image src={banner4} alt='form-bg' className='w-full h-full absolute top-0 object-cover -z-0 left-0'/>
        <div className="w-full h-full  absolute top-0 left-0 bg-[#0000007b] z-10 "></div>
      <div className='max-w-3xl mx-auto z-20 relative'>
      <h2 className=" text-4xl md:text-6xl mb-3 font-medium">
          Talk To Our Travel Expert
        </h2>
    
        <p className="text-base md:text-lg max-w-4xl mx-auto">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem libero saepe quos sunt?
        </p>

        <form action="contact.php" method="POST" className=" w-full mt-6 sm:mt-9 ">
            <div className="w-full flex justify-between flex-wrap gap-y-5">
              <div className="sm:w-[48%] w-full">
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-base bg-[#00000089] text-zinc-100 border"
                  placeholder="Your Name"
                />
              </div>

              <div className="sm:w-[48%] w-full">
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-md text-base bg-[#00000089] text-zinc-100 border"
                  placeholder="Your Email"
                />
              </div>

              <div className="sm:w-[48%] w-full">
                <input
                  type="number"
                  maxLength={15}
                  minLength={7}
                  required
                  className="w-full p-3 rounded-md text-base bg-[#00000089] text-zinc-100 border"
                  placeholder="Contact No."
                />
              </div>

              <div className="sm:w-[48%] w-full">
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-base bg-[#00000089] text-zinc-100 border"
                  placeholder="Subject"
                />
              </div>

              <div className="w-full">
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-md text-base bg-[#00000089] text-zinc-100 border"
                  placeholder="Your Query"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-full mx-auto text-white font-bold text-base py-3 px-8 mt-3 w-max bg-color1 hover:bg-black duration-300"
              >
                Submit Now &nbsp;→
              </button>
            </div>
          </form>
      
      </div>


    </section>
  )
}

 
