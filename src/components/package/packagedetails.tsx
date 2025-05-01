"use client";
import { banner1 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "./imageSlide";
import MainContent from "./mainContent";
import Attraction from "./Attraction";
import { GrUploadOption } from "react-icons/gr";

export default function Packagedetail({data}:any) {
  return (
    <div className="mb-6 md:p-20 relative p-6  flex flex-wrap justify-between items-start max-md:gap-5">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent"></div>
      <div className="md:w-[66%]  w-full text-zinc-800  max-md:mt-5">
        <ImageGallery images ={data?.imgs} />
<MainContent detail={data} />
      </div>

      <div className="md:sticky  top-8 md:w-[30%] w-full">
        <div className="bg-zinc-50 shadow-lg space-y-3 rounded-xl mb-4 sm:mb-7 p-4 sm:p-7">
                <h3 className="sm:text-2xl text-xl font-bold text-color1">{data?.whychoose?.heading}</h3>
{data?.whychoose?.cards.map((card:any) => (
                <p className="flex flex-wrap gap-2 text-zinc-600 text-sm items-center h-max"><GrUploadOption  className="p-1  rounded-full !text-xl sm:!text-2xl text-color1  bg-[#a52a2a22]"/><span className="font-bold">{card?.heading} </span>{card?.para}</p>
              ))}
              </div>
        <div className=" p-6 w-full bg-zinc-50 shadow-lg rounded-xl">
          <h3 className="mb-3 font-bold text-xl md:text-2xl text-color1">
            Send Us Message
          </h3>

          <form action="contact.php" method="POST" className=" w-full mt-6">
            <div className="w-full flex justify-between flex-wrap gap-y-5">
              <div className="w-[48%]">
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Name"
                />
              </div>

              <div className="w-[48%]">
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Email"
                />
              </div>

              <div className="w-full">
                <input
                  type="number"
                  maxLength={15}
                  minLength={7}
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Contact No."
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Subject"
                />
              </div>

              <div className="w-full">
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                  placeholder="Your Query"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-lg mb-3 -mt-1 text-white font-bold text-base py-4 px-6 w-max bg-color1 hover:bg-black duration-300"
              >
                Submit Now &nbsp;→
              </button>
            </div>
          </form>
        </div>

       
      </div>
    </div>
  );
}
