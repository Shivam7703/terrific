import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Trusted({ data }: any) {
  return (
    <section className="lg:px-28 sm:p-12 !pb-0 pt-7">
      <h3 className="text-center md:text-3xl font-bold mb-9 text-xl text-zinc-800">
We Are Official Channel Partner of      </h3>

      {data && data.length > 0 && (
        <Marquee
          className=" h-full"
          speed={50}
          pauseOnHover={true}
          gradientWidth={100}
          gradient={true}
          gradientColor={"white"} 
        >
          {data.map((bnr: any) => (
            <div key={bnr.id} className="mx-7">
              <Image
                src={bnr.img}
                alt={`banner-image-${bnr.id}`}
                className="w-auto  h-14 object-contain"
                width={208} 
                height={36} 
              />
            </div>
          ))}
        </Marquee>
      )}
    </section>
  );
}

export default Trusted;
