"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "@/data/homeData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import TopHeading from "../global/topHeading";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

export default function Testimonials({data} :any) {
  const uniqueId = "servic123";

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
      // dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1200,
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Navigation],
    breakpoints: {
      140: {
        slidesPerView: 1,
      },
      468: {
        slidesPerView: 2,
      },
      924: {
        slidesPerView: 3,
      },
    }
  };

  return (
    <section className=" lg:p-28 sm:p-12 p-7 text-center relative slider1 flex flex-col items-center">
    
      <TopHeading title={data?.title} para={data?.para} />


      <Swiper
        {...swiperOptions}
        className={`mySwiper w-full  mx-auto px-5 md:mt-16 mt-9  ${uniqueId}`}
      >
        {" "}
        {data?.testimonials?.map((cards: any) => (
          <SwiperSlide
            key={cards.id}
            className="mb-12 w-full text-left p-4 sm:p-10 rounded-2xl bg-white shadow-xl"
          >
            <div className=" w-full  h-full overflow-hidden  group  ">
              <h3 className="text-xl font-bold mb-3 group-hover:text-color2 text-color1">{cards?.heading}</h3>
              <p className="text-zinc-600 text-sm pb-3 border-b border-zinc-500">{cards.text}</p>

<div className="flex gap-2 w-max items-center mt-3">
              <div className="relative overflow-hidden h-12 w-12 border-2 border-color2 rounded-full">
                <Image
                  src={cards.img}
                  alt=""
                  className=" transition-all duration-500 w-full h-full rounded-full object-cover group-hover:scale-110  "
                />
              </div>
             <div>
                <h3 className="text-lg  font-bold  text-zinc-800 group-hover:text-color1">
                  {cards.title}
                </h3>
                <p className="text-zinc-600 text-sm">Happy Client</p>
                </div>
              </div>

             <p className="py-1 px-3 float-right -mt-10  w-max text-xs font-bold text-black bg-yellow-400  rounded-md shadow-lg"> ★ 5.0</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-wrap gap-5">
      <div
        className={`${uniqueId}-prev text-color1 hover:text-color2 text-3xl md:text-4xl duration-200`}
      ><FaCircleChevronLeft /></div>

      <div
        className={`${uniqueId}-next text-color1 hover:text-color2 text-3xl md:text-4xl duration-200`}
      ><FaCircleChevronRight /></div>
      </div>
     
    </section>
  );
}
