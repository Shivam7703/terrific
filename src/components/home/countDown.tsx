import React from 'react'
function CountDown({data} :any) {
    return (
        <section className="bg-gradient1 w-[80vw] lg:px-24 md:p-16 sm:p-12 p-7  max-w-[1350px] mx-auto rounded-3xl flex flex-wrap gap-6 md:justify-between justify-center">
          {data?.map((counts: any) => (
            <div key={counts?.id} className="text-center space-y-2">
              <h3 className={` font-semibold text-xl text-[#e303d4] ${counts.textColor}`}>
                {counts?.title}
              </h3>
              <p className="text-3xl text-black md:text-5xl font-bold">
                {counts?.Value}
              </p>
            </div>
          ))}
        </section>
      );
}

export default CountDown
