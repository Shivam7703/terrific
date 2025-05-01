import React from 'react';
import { packagedata } from '@/data/packages';
import Packagedetail from '@/components/package/packagedetails';
import Attraction from '@/components/package/Attraction';
import {  testimonialData} from "@/data/homeData";
import Testimonials from '@/components/home/testimonial';
import TourPack from '@/components/home/tourpack';
import TourCat from '@/components/home/tourcat';


import AllBanner from '@/components/banner';


type Props = {
  params: {
    slug: string;
  };
  searchParams:{
    categorys: string;
  };
};




async function page({params , searchParams}:Props) {
const cat = (await searchParams).categorys;
const filterData = cat === "domestic" ? packagedata.domestic : packagedata.international;
const decodedSlug = await decodeURIComponent(params.slug).replace(/\s+/g, '-').toLowerCase();

const singlepackage = filterData.find((service: any) => {
  const serviceSlug = service.title.replace(/\s+/g, '-').toLowerCase();
  return serviceSlug === decodedSlug;
});


  return (
    <div className='hill-bg'>
 <AllBanner img={singlepackage?.img}
      title={singlepackage?.title} slug={`packages/${singlepackage?.title}`} para=""/>
 <Packagedetail data={singlepackage}/>
 <Attraction heading={"Top Attractions"} data={singlepackage?.topattract}/>

 <Testimonials data={testimonialData}/>
     <TourPack/>
   <TourCat/>
    </div>
  )
}

export default page;
