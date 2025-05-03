import Mission from '@/components/about/mission'
import Section1 from '@/components/about/section1'
import AllBanner from '@/components/banner'
import CountDown from '@/components/home/countDown'
import GettoKnow from '@/components/home/getToKnow'
import Testimonials from '@/components/home/testimonial'
import Trusted from '@/components/home/trusted'
import { aboutPage, countDown, GetKnowdata, testimonialData, trusted } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
       <AllBanner img={aboutPage?.img}
            title={aboutPage?.title} slug={aboutPage?.slug} para={aboutPage?.para}/>
            <Section1/>
            <Mission/>
              <GettoKnow aboutdata={aboutPage?.why}/>
            <CountDown data={countDown}/>

    <Testimonials data={testimonialData}/>
    <Trusted data={trusted}/>

    </>
  )
}

export default page
