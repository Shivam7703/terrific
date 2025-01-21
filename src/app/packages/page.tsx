import PackageBanner from '@/components/global/banner'
import React from 'react';
import { packagedata } from '@/data/packages';
import Packagedetail from '@/components/package/packagedetails';
import Attraction from '@/components/package/Attraction';
import { Hometourcatdata, Hometourpackdata, testimonialData} from "@/data/homeData";
import Testimonials from '@/components/home/testimonial';
import TourPack from '@/components/home/tourpack';
import TourCat from '@/components/home/tourcat';


function page() {
  return (
    <div className='hill-bg'>
      <PackageBanner img={packagedata?.thailand?.img}
      title={packagedata?.thailand?.title} slug={packagedata?.thailand?.slug}/>
    <Packagedetail/>
    <Attraction/>
    <Testimonials data={testimonialData}/>
    <TourPack data={Hometourpackdata}/>
  <TourCat data={Hometourcatdata}/>
    </div>
  )
}

export default page
