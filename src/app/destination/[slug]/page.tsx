import React from 'react';
import { packagedata } from '@/data/packages';
import Packagedetail from '@/components/package/packagedetails';
import Attraction from '@/components/package/Attraction';
import { GetKnowdata, Hometourcatdata, Hometourpackdata, testimonialData} from "@/data/homeData";
import Testimonials from '@/components/home/testimonial';
import TourPack from '@/components/home/tourpack';
import TourCat from '@/components/home/tourcat';
import DestinationAbout from '@/components/destination/aboutPlace';
import TodoSection from '@/components/destination/todo';
import Activity from '@/components/destination/activity';
import GettoKnow from '@/components/home/getToKnow';
import DestinationForm from '@/components/destination/form';
import { Destinationdata } from '@/data/destination';
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
   {/* <TourCat/> */}
    <TourPack />
    <Testimonials data={testimonialData}/>
<GettoKnow aboutdata={GetKnowdata}/>
<DestinationForm/>

    </div>
  )
}

export default page;
