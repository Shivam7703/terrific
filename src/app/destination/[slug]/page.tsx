import React from 'react';
import Attraction from '@/components/package/Attraction';
import {  testimonialData} from "@/data/homeData";
import Testimonials from '@/components/home/testimonial';
import TourPack from '@/components/home/tourpack';
import DestinationAbout from '@/components/destination/aboutPlace';
import Activity from '@/components/destination/activity';
import DestinationForm from '@/components/destination/form';
import { Destinationdata } from '@/data/destination';
import AllBanner from '@/components/banner';
import Whychoose from '@/components/destination/whychoose';
import TourCat from '@/components/home/tourcat';


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
const filterData = cat === "domestic" ? Destinationdata.domestic : Destinationdata.international;
const decodedSlug = await decodeURIComponent(params.slug).replace(/\s+/g, '-').toLowerCase();

const singledestination = filterData.find((service: any) => {
  const serviceSlug = service.name.replace(/\s+/g, '-').toLowerCase();
  return serviceSlug === decodedSlug;
});


  return (
    <div className='hill-bg'>
      <AllBanner img={singledestination?.img}
      title={singledestination?.name} slug={`destination/${singledestination?.name}`} para=""/>
   <DestinationAbout data={singledestination?.about}/>
   <Attraction heading={singledestination?.attraction?.heading} data={singledestination?.attraction?.places}/>
   <Activity data={singledestination?.topThings}/>
   <TourCat/>
    <TourPack />
    <Testimonials data={testimonialData}/>
    <Whychoose data ={singledestination?.whychoose}/>
    
    <DestinationForm/>

    </div>
  )
}

export default page;
