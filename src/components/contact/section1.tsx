import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6';
import Image from 'next/image';
import { contact } from '@/assets';

export default function Contactsec1() {

    const data = [{
        id:1,
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta dolorum doloremque. Maiores nobis molestiae delectus."
    },
    {
        id:2,
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta dolorum doloremque. "
    },
    {
        id:3,
        para:"adipisicing elit. Quibusdam soluta dolorum doloremque. Maiores nobis molestiae delectus."
    },
    {
        id:4,
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta dolorum doloremque. Maiores nobis molestiae delectus Lorem ipsum dolor sit amet consectetur."
    },
    {
        id:5,
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam soluta dolorum doloremque. Maiores nobis molestiae delectus."
    },
]

  return (
    <section className='lg:px-28 md:px-20 sm:px-12 px-7  max-w-[1580px] mx-auto flex flex-wrap items-stretch justify-between gap-y-7  overflow-hidden'>
      <div className='lg:w-[48%] w-full py-6'>
        <h2 className='text-color1 sm:text-4xl text-2xl font-semibold tracking-wider !leading-[1.3] mb-5'>Why Choose Teriffic Trips As Your Travel Agent?</h2>
        <ul className='space-y-4 p-3'>
        {data?.map((points:any)=>(
            <li key={points.id} className='flex gap-2 text-color2 !text-[1.35rem] !sm:text-[25px]'><FaCircleCheck className='mt-2 min-w-4 '/>
 <p className=' sm:text-xl text-lg text-zinc-700'>{points.para}</p>
</li>
        ))}
        </ul>
      </div>

      <div className='lg:w-[45%] w-full'>
        <Image src={contact} width={460} alt='' className='object-cover mx-auto'/>
      </div>
    </section>
  )
}

