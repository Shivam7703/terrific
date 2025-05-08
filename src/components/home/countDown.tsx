"use client";
import React from 'react';
import CountUp from 'react-countup';



function CountDown({ data }: any) {
 


  return (
    <section
      className="bg-gradient1 w-[80vw] lg:px-24 mb-6 sm:mb-14 md:p-16 sm:p-12 p-7 max-w-[1350px] mx-auto rounded-3xl flex flex-wrap gap-6 md:justify-between justify-center"
    >
      {data?.map((counts: any) => (
        <div key={counts.id} className="text-center space-y-2">
        <h3 className="font-semibold text-xl" style={{ color: counts.textColor }}>
            {counts.title}
          </h3>
          
                <div className="text-3xl font1 text-black md:text-5xl font-bold">
                <CountUp
              start={0}
              end={counts.Value}
              delay={0.2}
              duration={2.75}
              separator=","
            /> {counts.value2 || "+"}
                </div>
         
        </div>
      ))}
    </section>
  );
}

export default CountDown;
