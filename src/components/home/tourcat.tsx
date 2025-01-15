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

export default function TourCat({ data }: any) {
  const [Domestic, setDomestic] = useState(true);

  const uniqueId = "service123";

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
            Domestic ? "bg-color1 text-white" : "text-color1 bg-white"
          }`}
          onClick={() => setDomestic(true)}
        >
          Domestic
        </div>

        <div
          className={`rounded-lg w-max border-2 cursor-pointer border-color1 text-lg mx-auto px-7 pt-2 pb-3 ${
            !Domestic ? "bg-color1 text-white" : "text-color1 bg-white"
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
            className="mb-16 text-center w-full group p-3"
          >
            {/* Card Content */}
            <div className="md:w-full md:h-96 mx-auto h-44 w-44 mb-2 rounded-full md:rounded-[135px] overflow-hidden relative">
              <Image
                src={cards.img}
                alt="tour"
                fill
                className="transition-all duration-500 w-full h-full object-cover group-hover:scale-110"
              />
            </div>

            <h4 className="font-bold text-black text-xl md:text-2xl mb-2">
              {cards?.title}
            </h4>
            <p className="text-sm text-zinc-700 font-medium mb-5">
              {cards?.para}
            </p>
            <Link href={cards?.slug || "/"} className="">
              <div className="rounded-lg w-max text-nowrap mx-auto px-5 pt-2 pb-3 bg-color1 text-white duration-300 hover:bg-color2">
                <p className="text-sm font-medium">Read More</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </section>
  );
}
