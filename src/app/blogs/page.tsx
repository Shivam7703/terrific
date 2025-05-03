import AllBanner from '@/components/banner'
import Blogs from '@/components/home/blog'
import { blogData } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
         <AllBanner img={blogData?.img}
                  title={blogData?.title} slug={blogData?.title} para={blogData?.para}/>
                  <Blogs/> 
                  <div className='md:h-16  h-10 w-full'></div>
    </>
  )
}

export default page
