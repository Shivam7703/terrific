import React from 'react'
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa6';


export default function Mission() {
  const data = [
    {
      id: 1,
      title: "Our Mission",
      para: "To provide innovative and high-quality digital solutions that empower businesses to achieve their goals efficiently and effectively.",
      icon: <FaBullseye />,
    },
    {
      id: 2,
      title: "Our Vision",
      para: "To be a global leader in digital transformation by delivering cutting-edge technology solutions that drive growth and success.",
      icon: <FaEye />,
    },
    {
      id: 3,
      title: "Our Values",
      para: "We prioritize integrity, innovation, and customer-centric approaches to ensure excellence in all our services.",
      icon: <FaHandshake />,
    },
  ];
  return (
    <section className='lg:px-28 relative sm:p-12 p-7 sm:py-14  bg-white '>
      
      <div className='flex relative gap-y-6 z-10 max-w-[1580px] justify-between items-stretch flex-wrap'>
{data && data.map((card :any)=>(
  <div key={card.id} className='p-3 md:w-[31.6%] sm:w-[48.5%] w-full sm:p-5 rounded-lg bg-color1 text-white shadow'>
    <div className='flex justify-center animate-scale rounded-full items-center mx-auto border-color1 border-4 sm:w-24 sm:h-24 bg-white w-14 h-14 sticky  sm:-mt-16 -mt-7 text-color1 text-xl sm:!text-3xl'>{card.icon}</div>
    <h2 className='text-xl my-3 leading-[1.9]  text-center sm:text-2xl '>{card?.title}</h2> 
    <div className='border-b border-white max-w-44 mx-auto'></div>
    <p className='text-center my-3'>{card?.para}</p></div>
))}
      </div>
<div className='w-full absolute bottom-0 h-3/5 bg-blue-100 left-0  z-0'></div>
    </section>
  )
}

