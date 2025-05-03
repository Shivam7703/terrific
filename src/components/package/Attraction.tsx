import React from 'react'
import TopHeading from '../global/topHeading'
import Image from 'next/image'

function Attraction({heading, data}:any) {
  return (
    <section className='lg:px-28 md:p-20 sm:p-16 py-5 px-4 text-center'>
      <TopHeading title={heading || "Top Attractions"} para="Explore must-see attractions, vibrant local markets, breathtaking natural landscapes, thrilling wildlife experiences, and beautiful island getaways"/>

      <div className='flex gap-y-4 sm:gap-y-7 gap-x-[2%] sm:mt-14 mt-6 flex-wrap justify-between text-left items-stretch'>
        {data?.map((card :any) =>(
            <div key={card.id} className='p-2 relative group sm:p-4 md:w-[31%] w-[49%] max-md:mx-auto shadow-lg bg-white'><p className="group-hover:scale-125 duration-200 w-14 h-14 pt-2 text-center text-2xl font-bold text-white bg-gradient-to-tr from-blue-700 to-blue-300 z-10 absolute -top-2 -left-2 rounded-xl shadow-lg">0{card.id}</p>
                <Image src={card.img} alt='popular place' className=' w-full object-cover mb-3 sm:h-64 h-32'/>
<h3 className='mb-2 pb-2 font-bold sm:text-xl !leading-[1.3] text-base border-b text-black border-zinc-400'>{card.title}</h3>
<p className='text-zinc-600 sm:text-base text-sm !leading-[1.4] mb-3'>{card?.text}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Attraction
