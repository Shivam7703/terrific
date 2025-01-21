import { faqData } from "@/data/homeData";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import {  FaChevronDown, FaLocationDot, FaSquareCheck } from "react-icons/fa6";
import { GrUploadOption } from "react-icons/gr";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

export default function MainContent() {
   const [expandedCity, setExpandedCity] = useState<number | null>(null);
  
    function toggleCity(cityId: number) {
      setExpandedCity((prev) => (prev === cityId ? null : cityId)); // Toggles FAQ visibility for cities
    }
  return (
    <div className="sm:space-y-8 mt-5 sm:mt-11 space-y-4 ">
      <div>
        <h1 className="sm:text-3xl text-xl  font-bold flex items-center mb-3">
          Rainbow Mountain Valley
          <span className=" py-1 px-3 ml-6 w-max sticky text-sm font-bold  text-white bg-green-700  rounded-md shadow-lg">
            Verified
          </span>
        </h1>

        <div className="flex text-zinc-500 sm:text-base text-sm font-medium items-center flex-wrap gap-5 ">
          <p className="flex items-center">
            <span>
              <IoChatboxEllipsesOutline className="mr-2 text-color1 " />
            </span>
            Adventure Tour
          </p>
          <p className="flex items-center">
            <span>
              <FaLocationDot className="mr-2 text-color1 " />
            </span>
            Adventure Tour
          </p>
          <p className=" py-[2px] px-3  w-max sticky text-sm font-bold  text-black  bg-yellow-500  rounded-md shadow-lg">
            ★ 5.0
          </p>
        </div>
      </div>

{/* description */}
      <div className="bg-zinc-50 shadow-lg space-y-2 rounded-xl p-4 sm:p-7">
        <h2 className="sm:text-3xl text-xl font-medium text-color1">Description</h2>
        <p className="font-medium sm:text-base text-zinc-500 text-sm">Kicking off on April 1, 2025, the "DreamsTour" will take Luna to major cities across North America and Europe, including Los Angeles, New York, Chicago, Toronto, and London. Each concert will showcase her unique blend of pop and ethereal soundscapes, bringing her music to life in a way you've never seen before.</p>
      </div>

{/* highlights */}
<div className="bg-zinc-50 shadow-lg space-y-3 rounded-xl p-4 sm:p-7">
        <h2 className="sm:text-3xl text-xl font-medium text-color1">Highlights</h2>
        <p className="flex gap-2 text-base text-zinc-600 sm:text-lg items-center h-max"><GrUploadOption  className="p-1 sm:p-2 rounded-full text-2xl sm:text-3xl text-color1  bg-[#a52a2a22]"/>Exclusive merchandise available at each show</p>

        <p className="flex gap-2 text-base text-zinc-600 sm:text-lg items-center h-max"><GrUploadOption  className="p-1 sm:p-2 rounded-full text-2xl sm:text-3xl text-color1 bg-[#a52a2a22]"/>Exclusive merchandise available at each show</p>

        <p className="flex gap-2 text-base text-zinc-600 sm:text-lg items-center h-max"><GrUploadOption  className="p-1 sm:p-2 rounded-full text-2xl sm:text-3xl text-color1 bg-[#a52a2a22]"/>Exclusive merchandise available at each show</p>
      </div>

      {/* Itinerary */}
      <div className="bg-zinc-50 shadow-lg rounded-xl p-4 sm:p-7">
        <h2 className="sm:text-3xl text-xl font-medium mb-3 text-color1">Itinerary</h2>
       <div className="p-4 bg-white rounded-xl space-y-3">
       <div className="flex items-center gap-3 sm:gap-5 pb-2 border-b border-zinc-300"><div className="sm:min-w-14 sm:h-14 min-w-10 h-10 flex justify-center items-center sm:text-2xl text-xl text-white bg-color1">01</div><div><h3 className="text-base sm:text-lg mb-2 font-bold">Day 1, Kickoff in Los Angeles</h3><p className="font-medium sm:text-base text-zinc-500 text-sm">Kicking off on April 1, 2025, the "DreamsTour" will take Luna to major cities across North America and Europe, including Los Angeles, New York, Chicago, Toronto, and London.</p></div>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 pb-2 border-b border-zinc-300"><div className="sm:min-w-14 sm:h-14 min-w-10 h-10 flex justify-center items-center sm:text-2xl text-xl text-white bg-color1">02</div><div><h3 className="text-base sm:text-lg mb-2 font-bold">Day 2, Kickoff in Los Angeles</h3><p className="font-medium sm:text-base text-zinc-500 text-sm">Kicking off on April 1, 2025, the "DreamsTour" will take Luna to major cities across North America and Europe, including Los Angeles, New York, Chicago, Toronto, and London.</p></div>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 pb-2 border-b border-zinc-300"><div className="sm:min-w-14 sm:h-14 min-w-10 h-10 flex justify-center items-center sm:text-2xl text-xl text-white bg-color1">03</div><div><h3 className="text-base sm:text-lg mb-2 font-bold">Day 3, Kickoff in Los Angeles</h3><p className="font-medium sm:text-base text-zinc-500 text-sm">Kicking off on April 1, 2025, the "DreamsTour" will take Luna to major cities across North America and Europe, including Los Angeles, New York, Chicago, Toronto, and London.</p></div>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 pb-2 border-b border-zinc-300"><div className="sm:min-w-14 sm:h-14 min-w-10 h-10 flex justify-center items-center sm:text-2xl text-xl text-white bg-color1">04</div><div><h3 className="text-base sm:text-lg mb-2 font-bold">Day 4, Kickoff in Los Angeles</h3><p className="font-medium sm:text-base text-zinc-500 text-sm">Kicking off on April 1, 2025, the "DreamsTour" will take Luna to major cities across North America and Europe, including Los Angeles, New York, Chicago, Toronto, and London.</p></div>
        </div>
       </div>
      </div>

      {/* include & exclude */}
      <div className="bg-zinc-50 shadow-lg gap-y-3 flex flex-wrap justify-between rounded-xl p-4 sm:p-7">
        <h2 className="sm:text-3xl text-xl font-medium text-color1 w-full">Includes & Excludes</h2>
        <div className="space-y-3 max-w-[49.4%]">
        <p className="flex gap-2  text-zinc-700 text-sm !leading-[1.3] sm:text-lg h-max"><FaSquareCheck  className=" text-xl sm:text-2xl text-green-600  "/>Exclusive merchandise available at each show</p>

        <p className="flex gap-2  text-zinc-700 text-sm !leading-[1.3] sm:text-lg h-max"><FaSquareCheck  className=" text-xl sm:text-2xl text-green-600 "/>Exclusive merchandise available at each show</p>

        <p className="flex gap-2  text-zinc-700 text-sm !leading-[1.3] sm:text-lg h-max"><FaSquareCheck  className=" text-xl sm:text-2xl text-green-600 "/>Exclusive merchandise available at each show</p>
      </div> 

      <div className="space-y-3 max-w-[49.4%]">
        <p className="flex gap-2  text-zinc-700 text-sm !leading-[1.3] sm:text-lg h-max"><FaWindowClose  className=" text-xl sm:text-2xl text-red-600  "/>Exclusive merchandise available at each show</p>

        <p className="flex gap-2  text-zinc-700 text-sm !leading-[1.3] sm:text-lg h-max"><FaWindowClose  className=" text-xl sm:text-2xl text-red-600 "/>Exclusive merchandise available at each show</p>

        <p className="flex gap-2  text-zinc-700 text-sm !leading-[1.3] sm:text-lg h-max"><FaWindowClose  className=" text-xl sm:text-2xl text-red-600 "/>Exclusive merchandise available at each show</p>
      </div>
      </div>


      {/* location */}
<div className="bg-zinc-50 shadow-lg  rounded-xl p-4 sm:p-7">
<h2 className="sm:text-3xl text-xl font-medium mb-3 text-color1 w-full">Location</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258584!2d76.76357436215976!3d28.643684626335453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1737436060319!5m2!1sen!2sin"  height="450" className="w-full"  loading="lazy"></iframe>
</div>


  {/* Faq */}
  <div className="bg-zinc-50 shadow-lg  rounded-xl p-4 sm:p-7">
<h2 className="sm:text-3xl text-xl font-medium mb-3 text-color1 w-full">Frequently Asked Question</h2>
{faqData?.faqs.map((city) => (
                <div key={city.id} className="mt-8 border-b pb-4">
                  {/* FAQ Question */}
                  <div
                    onClick={() => toggleCity(city.id)}
                    className="flex justify-between items-center cursor-pointer text-lg text-zinc-800  font-bold"
                  >
                    {city.que}

                    <FaChevronDown className={` duration-300 ${expandedCity === city.id ? "rotate-180 text-color1" :"text-zinc-700"}`} />
                   
                  </div>

                  {/* FAQ Answer with Transition */}
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${
                      expandedCity === city.id
                        ? "max-h-screen mt-3 space-y-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className="md:text-lg text-sm font-medium text-zinc-700">
                      {city.ans}
                    </p>
                   
                  </div>
                </div>
              ))}
</div>

    </div>
  );
}
