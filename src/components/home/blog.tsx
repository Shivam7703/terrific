"use client";
import { blogData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import TopHeading from "../global/topHeading";

export default function Blogs() {
 
  return (
    <section className=" lg:px-28 md:px-20 sm:p-14 p-7  text-center ">
            <TopHeading title={blogData?.title} para={blogData?.para} />

            <div className="relative md:mt-11 mt-4 flex justify-between flex-wrap items-center gap-y-4">
        {blogData?.blogs?.map((cards: any) => (
          <div
            key={cards.id}
            className="lg:w-[32%] sm:w-[49%] w-full relative  rounded-2xl h-60 sm:h-80 overflow-hidden group"
          >
                <Image
                  src={cards.img}
                  alt=""
                  className=" duration-500 w-full h-full object-cover group-hover:scale-110  z-10"
                />
            
              <div className="py-3 px-8 w-full h-full z-10 top-0 left-0 absolute bg-gradient-to-t from-black to-transparent flex items-center justify-end flex-col text-white">
              <p className="text-xs mb-3">                  {cards.date}
              </p>

                <h3 className="text-lg font-semibold leading-[1.2] pb-3 mb-2 border-b ">
                  {cards.title}
                </h3>
              
                <Link
                  href={`blogs/${cards.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className=" duration-500 hover:text-color2 text-center  text-sm"
                >
                  Read More
                </Link>
               
              </div>
         
          </div>
        ))}
        </div>
    
    </section>
  );
}
