'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';




export default function ImageGallery({images}:any) {
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
        {images && images.map((srcs: any) => (
          <SwiperSlide key={srcs.id}>
            <div className="relative w-full h-80 sm:h-[450px]">
              <Image
                src={srcs.img}
                alt={`Slide ${srcs.id + 1}`}
               
                className="h-full w-full object-cover"
                priority={srcs.id === 0}
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
        {images && images.map((src: { id: number; img: any; }) => (
          <SwiperSlide key={src.id}>
            <div className="relative w-full sm:h-[130px] h-20">
              <Image
                src={src.img}
                alt={`Thumbnail ${src.id + 1}`}
               
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}