"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TodoSection from "./todo";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TopHeading from "../global/topHeading";

export default function Activity({ data }: any) {
  const [pic, setPic] = useState(data?.things?.[0]?.img || "");
  const [text, setText] = useState(data?.things?.[0]?.text || "");
  const [heading, setHeading] = useState(data?.things?.[0]?.title || "");

  function todoChange(img: any, text: any, heading: any) {
    setPic(img);
    setText(text);
    setHeading(heading);
  }

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
      <section className="lg:px-28 md:p-20 text-center sm:p-16 p-7 max-w-[1580px] mx-auto relative bg-white">
        <TopHeading 
          title={data?.heading} 
          para={"Explore the top 6 exciting things to do on your tour, offering unforgettable moments, local experiences, and highlights you simply can't miss."} 
        />

        <div className="relative">
          <Swiper
            {...swiperOptions}
            className={`mySwiper md:-mb-16 md:mt-14 mt-9 w-full md:border-b border-black/55 text-left max-w-fit px-5 ${uniqueId}`}
          >
            {data?.things?.map((card: any) => (
              <SwiperSlide key={card.id} className="md:mb-16 mb-7 w-full group p-3">
                <div className="w-full flex justify-between">
                  {/* Image */}
                  <div className="w-[45%] min-h-32 relative group">
                    <div className="space-y-7 overflow-hidden relative h-full">
                      <Image
                        src={card?.img}
                        alt={"destination"}
                        className="absolute top-0 left-0 h-full w-full hover:scale-110 duration-300 rounded-xl object-cover"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="w-[49%] space-y-3">
                    <h3 className="text-black font-bold text-lg font1 md:text-3xl !leading-[1.1]">
                      {card?.title.slice(0, 15)}...
                    </h3>

                    <p className="text-zinc-600">
                      {card?.text.slice(0, 85)}.....
                      <span
                        className="text-color1 font-semibold hover:text-color2 cursor-pointer"
                        onClick={() =>
                          todoChange(card?.img, card?.text, card?.title)
                        }
                      >
                        Know More
                      </span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={`${uniqueId}-next absolute z-30 p-3 hover:bg-color1 bg-color2 shadow-md text-white right-6 bottom-4 max-md:scale-75 max-md:-bottom-2 cursor-pointer`}
          >
            <FaArrowRightLong className="text-xl font-bold" />
          </div>
          <div
            className={`${uniqueId}-prev absolute z-20 hover:bg-color1 p-3 bg-color2 shadow-md text-white left-6 bottom-4 max-md:scale-75 max-md:-bottom-2 cursor-pointer`}
          >
            <FaArrowLeftLong className="text-xl font-bold" />
          </div>
        </div>
      </section>
      <TodoSection title={heading} para={text} img={pic} />
    </>
  );
}