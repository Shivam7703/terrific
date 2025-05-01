import AboutSection from "@/components/home/AboutSection";
import Blogs from "@/components/home/blog";
import CountDown from "@/components/home/countDown";
import FaqSection from "@/components/home/faq";
import GettoKnow from "@/components/home/getToKnow";
import HomeBanner from "@/components/home/HomeBanner";
import Homepackages from "@/components/home/Homepackages";
import Testimonials from "@/components/home/testimonial";
import TourCat from "@/components/home/tourcat";
import TourPack from "@/components/home/tourpack";
import Trusted from "@/components/home/trusted";
import { aboutdata, countDown, GetKnowdata, HomeBannerData, homepackagedata, Hometourcatdata, Hometourpackdata, testimonialData, trusted } from "@/data/homeData";


export default function Home() {
  return (
    < >
    {HomeBannerData && <HomeBanner data ={HomeBannerData}/>}
    <Homepackages data = {homepackagedata}/>
    <div className="hill-bg w-full bg-opacity-25 ">
    <TourCat data={Hometourcatdata}/>
   <TourPack data={Hometourpackdata}/>
   <CountDown data={countDown}/>
    <AboutSection aboutdata={aboutdata}/>
    <Trusted data={trusted}/>
    <Testimonials data={testimonialData}/>
    </div>

<FaqSection/>
<GettoKnow aboutdata={GetKnowdata}/>

<Blogs/> 
  </>
  );
}
