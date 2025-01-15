"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import TopHeading from "../global/topHeading";
import { useState } from "react";
import { ImLocation } from "react-icons/im";

export default function TourPack({ data }: any) {
  const [Domestic, setDomestic] = useState(true);

  const uniqueId = "tourpack123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Autoplay, Pagination],
    breakpoints: {
      140: {
        slidesPerView: 1,
      },
      468: {
        slidesPerView: 2,
      },
      824: {
        slidesPerView: 3,
      },
      1080: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <section className="lg:px-28 sm:p-12 p-7 text-center relative slider1">
      {/* Top Heading */}
      <TopHeading title={data?.title} para={data?.para} />

      {/* Domestic/International Buttons */}
      <div className="flex flex-wrap items-center justify-center mt-7 w-full gap-3 max-w-md mx-auto">
        <div
          className={`rounded-lg w-max border-2 cursor-pointer border-color1 text-lg mx-auto px-7 pt-2 pb-3 ${
            Domestic ? "bg-color1 text-white" : "bg-white text-color1"
          }`}
          onClick={() => setDomestic(true)}
        >
          Domestic
        </div>

        <div
          className={`rounded-lg w-max border-2 cursor-pointer border-color1 text-lg mx-auto px-7 pt-2 pb-3 ${
            !Domestic ? "bg-color1 text-white" : "bg-white text-color1"
          }`}
          onClick={() => setDomestic(false)}
        >
          International
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        {...swiperOptions}
        className={`mySwiper md:mt-16 mt-9 w-full max-w-fit px-5 ${uniqueId}`}
      >
        {(Domestic ? data?.tours1 : data?.tours2)?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-16 w-full shadow-lg group rounded-xl overflow-hidden"
          >
            {/* Card Content */}
            <div className="w-full md:h-64 h-44 mb-2   overflow-hidden relative">
<p className="py-2 px-4 w-max text-xs font-bold text-white bg-blue-500 z-10 absolute top-4 left-4 rounded-2xl shadow-lg">Trending</p>

              <Image
                src={cards.img}
                alt="tour"
                fill
                className="transition-all duration-500 w-full h-full object-cover group-hover:scale-110"
              />
            </div>
<div className="px-5 py-3 text-left bg-white">
<p className="mb-2"><span className="py-1 px-3   w-max text-xs font-bold text-black bg-yellow-400  rounded-md shadow-lg"> ★ 5.0</span> <span className="text-zinc-500 text-base">{"  ("}400 reviews{")"}</span></p>
            <h4 className="font-bold text-black text-xl mb-2">
              {cards?.title}
            </h4>
            <p className="text-xs text-zinc-500 font-medium mb-3 pb-2 border-b border-zinc-300">
              {cards?.para}
            </p>

            <p className=" text-zinc-900 flex gap-2 items-center mb-3 pb-2 border-b border-zinc-300">
            <ImLocation className="text-color1" /> {cards?.location}
            </p>

<div className="flex justify-between items-center mb-2">
    <p className="text-zinc-700"><span className="text-xl font-bold text-color1">{cards?.price}</span>/ Night</p>

    <Link href={cards?.slug || "/"} className="w-max">
              
                <p className="text-sm font-medium text-black hover:text-color2 hover:border-b duration-300">Know More</p>
              
            </Link>
</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </section>
  );
}
