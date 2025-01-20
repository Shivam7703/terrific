'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { banner1, banner2, banner3, banner4, banner5, banner6, banner7 } from '@/assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const images = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7
];

export default function ImageGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
       
        loop={true}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className=" w-full mb-3"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-80 sm:h-[450px]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
               
                className="h-full w-full object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="packI mt-4 w-full box-border py-2"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full sm:h-[130px] h-20">
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
               
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}