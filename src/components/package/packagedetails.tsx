"use client";
import { banner1 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import ImageGallery from "./imageSlide";
import MainContent from "./mainContent";

export default function Packagedetail() {
  return (
    <div className="mb-6 md:p-20 relative p-6 hill-bg flex flex-wrap justify-between items-start max-md:gap-5">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent"></div>
      <div className="md:w-[66%]  w-full text-zinc-800  max-md:mt-5">
        <ImageGallery />
<MainContent/>
      </div>

      <div className="md:sticky top-8 md:w-[30%] w-full">
        <div className=" p-6 w-full bg-white shadow-lg">
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
