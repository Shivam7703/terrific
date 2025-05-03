"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TopHeading from "../global/topHeading";

export default function Activity({ data }: any) {
  
  const uniqueId = "todoo123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    loop: true,
    modules: [Autoplay, Pagination, Navigation],
    breakpoints: {
      140: { slidesPerView: 1 },
      824: { slidesPerView: 2 },
    },
  };

  return (
    <>
      {/* Swiper Cards */}
      <section className="lg:px-28 md:px-20 text-center sm:p-16 p-7 max-w-[1580px] mx-auto relative bg-white">
        <TopHeading 
          title={data?.heading} 
          para={"Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss."} 
        />

        <div className="relative">
          <Swiper
            {...swiperOptions}
            className={`mySwiper  mt-9 w-full text-left max-w-fit px-5 ${uniqueId}`}
          >
            {data?.things?.map((card: any) => (
              <SwiperSlide key={card.id} className="md:mb-9 mb-5 w-full group p-3">
                <div className="w-full flex-wrap gap-y-3 flex justify-between">
                  {/* Image */}
                  <div className="sm:w-[45%] w-full min-h-44 relative group">
                    <div className="space-y-7 overflow-hidden relative h-full">
                      <Image
                        src={card?.img}
                        alt={"destination"}
                        className="absolute top-0 left-0 h-full w-full hover:scale-110 duration-300 rounded-xl object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="sm:w-[49%] w-full space-y-3">
                    <h3 className="text-black font-bold text-xl font1 md:text-3xl !leading-[1.1]">
                      {card?.title}
                    </h3>

                    <p className="text-zinc-600 text-lg">
                      {card?.text}
                     
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={`${uniqueId}-next absolute z-30 p-3 hover:bg-color1 bg-color2 shadow-md text-white -right-8 md:-right-14 bottom-32 max-md:scale-75 rounded-full cursor-pointer`}
          >
            <FaArrowRightLong className="text-xl font-bold" />
          </div>
          <div
            className={`${uniqueId}-prev absolute z-20 rounded-full hover:bg-color1 p-3 bg-color2 shadow-md text-white -left-8 md:-left-14 bottom-32 max-md:scale-75  cursor-pointer`}
          >
            <FaArrowLeftLong className="text-xl font-bold" />
          </div>
        </div>
      </section>
    </>
  );
}