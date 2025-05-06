import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Trusted({ data }: any) {
  return (
    <section className="lg:px-28 sm:p-12 py-7">
      <h3 className="text-center md:text-2xl font-bold mb-9 text-xl text-zinc-800">
        Trusted by 40+ clients around the globe
      </h3>

      {data && data.length > 0 && (
        <Marquee
          className="w-full h-full"
          speed={100}
          pauseOnHover={true}
          gradientWidth={100}
          gradient={true}
          gradientColor={"white"} 
        >
          {data.map((bnr: any) => (
            <div key={bnr.id} className="mx-5">
              <Image
                src={bnr.img}
                alt={`banner-image-${bnr.id}`}
                className="w-52 h-9 object-contain"
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
