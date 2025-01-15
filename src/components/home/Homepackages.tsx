import React from "react";
import TopHeading from "../global/topHeading";
import Image from "next/image";
import Link from "next/link";

function HomePackages({ data }: any) {
  return (
    <section className="lg:p-24 md:p-16 p-7 text-center">
      <TopHeading title={data?.title} para={data?.para} />
      <div className="flex md:mt-20 mt-9 flex-wrap max-w-7xl mx-auto justify-between gap-y-4 w-full items-stretch md:h-[600px] h-full">
        {/* Section 1 */}
        <div className="md:w-[48%] w-full rounded-xl md:h-full h-64 overflow-hidden group relative">
          <Image
            src={data?.section1?.img}
            alt="package"
            className="object-cover w-full h-full group-hover:scale-110 duration-300"
            fill
           
          />
          <Textc
            title={data?.section1?.title}
            para={data?.section1?.para}
            btn={data?.section1?.btntext}
            link={data?.section1?.href}
          />
        </div>

        {/* Placeholder for Section 2 */}
        <div className="md:w-[50%] w-full h-full  flex flex-wrap justify-between gap-y-4 md:gap-y-[2%]">
            <div className="sm:w-[49%] w-full md:h-[49%] relative rounded-xl  h-64 overflow-hidden group">
            <Image
            src={data?.section2?.img}
            alt="package"
            className="object-cover w-full h-full group-hover:scale-110 duration-300"
            fill
           
          />
          <Textc
            title={data?.section2?.title}
            para={data?.section2?.para}
            btn={data?.section2?.btntext}
            link={data?.section2?.href}
          />
            </div>
       
            <div className="sm:w-[49%] w-full md:h-[49%] relative rounded-xl  h-64 overflow-hidden group">
            <Image
            src={data?.section3?.img}
            alt="package"
            className="object-cover w-full h-full group-hover:scale-110 duration-300"
            fill
           
          />
          <Textc
            title={data?.section3?.title}
            para={data?.section3?.para}
            btn={data?.section3?.btntext}
            link={data?.section3?.href}
          />
            </div>

            <div className=" w-full md:h-[49%] relative rounded-xl  h-64 overflow-hidden group">
            <Image
            src={data?.section4?.img}
            alt="package"
            className="object-cover w-full h-full group-hover:scale-110 duration-300"
            fill
           
          />
          <Textc
            title={data?.section4?.title}
            para={data?.section4?.para}
            btn={data?.section4?.btntext}
            link={data?.section4?.href}
          />
            </div>

            
        </div>
      </div>
    </section>
  );
}

function Textc({
  title,
  para,
  btn,
  link,
}: {
  title: string;
  para: string;
  btn: string;
  link: string;
}) {
  return (
    <div className="w-full h-full text-left text-white absolute flex items-end top-0 left-0 bg-[#00000070] p-5">
      <div className="max-w-96 ">
        <h4 className="font-medium text-2xl md:text-3xl mb-1 font1">{title}</h4>
        <p className="text-sm text-zinc-300  font-medium !leading-[1.2] mb-5 ">{para}</p>
        <Link href={link || "/"} className="">
          <div className="rounded-lg w-max text-nowrap px-5 pt-2 pb-3 bg-color1 text-white duration-300 hover:bg-color2">
            <p className="text-sm font-medium">{btn}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePackages;
