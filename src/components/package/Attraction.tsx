import React from 'react'
import TopHeading from '../global/topHeading'
import { packagedata } from '@/data/packages'
import Image from 'next/image'

function Attraction() {
  return (
    <section className='lg:px-28 md:p-20 sm:p-16 py-5 px-4 text-center'>
      <TopHeading title={packagedata?.thailand?.topattract?.title} para={packagedata?.thailand?.topattract?.para}/>

      <div className='flex gap-y-4 sm:gap-y-7 sm:mt-14 mt-6 flex-wrap justify-between text-left items-stretch'>
        {packagedata?.thailand?.topattract?.cards?.map((card) =>(
            <div key={card.id} className='p-2 sm:p-4 md:w-[31%] w-[49%] shadow-lg bg-white'>
                <Image src={card.img} alt='popular place' className='w-full object-cover mb-3 sm:h-64 h-32'/>
<h3 className='mb-2 pb-2 font-bold sm:text-xl !leading-[1.3] text-base border-b text-black border-zinc-400'>{card.title}</h3>
<p className='text-zinc-600 sm:text-base text-sm !leading-[1.4] mb-3'>{card?.text}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Attraction
