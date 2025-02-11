import React from 'react';
import { packagedata } from '@/data/packages';
import Packagedetail from '@/components/package/packagedetails';
import Attraction from '@/components/package/Attraction';
import { GetKnowdata, Hometourcatdata, Hometourpackdata, testimonialData} from "@/data/homeData";
import Testimonials from '@/components/home/testimonial';
import TourPack from '@/components/home/tourpack';
import TourCat from '@/components/home/tourcat';
import DestinationBanner from '@/components/destination/destBanner';
import DestinationAbout from '@/components/destination/aboutPlace';
import TodoSection from '@/components/destination/todo';
import Activity from '@/components/destination/activity';
import GettoKnow from '@/components/home/getToKnow';
import DestinationForm from '@/components/destination/form';


function page() {
  return (
    <div className='hill-bg'>
      <DestinationBanner img={packagedata?.thailand?.img}
      title={packagedata?.thailand?.title} slug={packagedata?.thailand?.slug} para={"lorem isit amet consectetur adipisicing elit. Eveniet enim nihil expedita voluptas quidem dolorem eligendi, praesentium perferendis fugiat perspiciatis."}/>
   <DestinationAbout/>
   <Attraction/>
   <TodoSection/>
   <Activity/>
    <TourPack data={Hometourpackdata}/>
    <Testimonials data={testimonialData}/>
<GettoKnow aboutdata={GetKnowdata}/>
<DestinationForm/>

    </div>
  )
}

export default page
