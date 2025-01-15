import {  about2, about3, banner1, banner2, banner3, banner4, banner5, banner6, banner7, car, cl1, cli1, cli2, cli3, faq, logo2 } from "@/assets";
import {  FaMapLocationDot} from "react-icons/fa6";
import { GiDeadEye } from "react-icons/gi";
import { LiaBullseyeSolid } from "react-icons/lia";
import { MdAttachEmail, MdWifiCalling3, } from "react-icons/md";




// homepage
export const navItemsArray = [
  { id: 1, label: "About", href: "about"},
  { id: 2, label: "Packages", href: "services",
    subNav:[{
      id: 1, label: "Package1", href: "bio-diesel"
    },
    {
      id: 2, label: "Package2", href: "bio-petrol"
    },
    {
      id: 3, label: "Package3", href: "bio-cng"
    }]
  },
  { id: 2, label: "Destination", href: "services",
    subNav:[{
      id: 1, label: "Destination11", href: "bio-diesel"
    },
    {
      id: 2, label: "Destination12", href: "bio-petrol"
    },
    {
      id: 3, label: "Destination13", href: "bio-cng"
    }]
  },
  { id: 4, label: "Price Comparison", href: "pricing"},
  { id: 5, label: "Blogs", href: "blogs"},
  { id: 6, label: "Contact Us", href: "contact-us"},
];

export const HomeBannerData= 
  {
    
    imgs: [
      { id: 1, img: banner1 },
      { id: 2, img: banner2 },
      { id: 3, img: banner3 },
      { id: 4, img: banner4 },
      { id: 5, img: banner5 },
      { id: 6, img: banner6 },
      { id: 7, img: banner7 },
    ],
    
    title: "Tereffic Trips",
    para: "Experience the ultimate corporate holiday with Ozara Holidays. Our multi-destination tours offer a mix of adventure, relaxation and sightseeing.",
    
    btntext: "Explore Packages",
    href: "/",
  }

  export const homepackagedata ={
    title:"Bestseller Packages",
    para:"Embark on an adventure with our most sought-after packages. Designed to rejuvenate and inspire, these tours offer a perfect balance of thrill and relaxation.",
    section1:{img:banner1,
      title: "Thailand",
      para: "Discover rich culture, ancient temples, vibrant markets,",
      btntext: "Explore Packages",
      href: "/",
    },
    section2:{img:banner2,
      title: "Shri Lanka",
      para: "Discover rich culture, ancient temples, vibrant markets,",
      btntext: "Explore Packages",
      href: "/",
    },
    section3:{img:banner4,
      title: "Bali",
      para: "Discover rich culture, ancient temples, vibrant markets,",
      btntext: "Explore Packages",
      href: "/",
    },
    section4:{img:banner3,
      title: "Singapore",
      para: "Discover rich culture, ancient temples, vibrant markets,",
      btntext: "Explore Packages",
      href: "/",
    }
  }

  export const Hometourcatdata ={
    title:"Tour Categories",
    para:"Each category is crafted to provide unique experiences that blend adventure, relaxation, and cultural immersion. Explore our categories and find the perfect fit for your team’s next getaway.",
    tours1:[{
      id:1,
      img:banner1,
      title:"Haridwar",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:2,
      img:banner2,
      title:"Assam",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:3,
      img:banner3,
      title:"Jammu & Kashmir",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:4,
      img:banner4,
      title:"Rajasthan",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:5,
      img:banner5,
      title:"Thailand",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:6,
      img:banner6,
      title:"Gujrat",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    }],

    tours2:[{
      id:1,
      img:banner1,
      title:"Thailand",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:2,
      img:banner2,
      title:"Thailand",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:3,
      img:banner3,
      title:"Thailand",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:4,
      img:banner4,
      title:"Thailand",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:5,
      img:banner5,
      title:"Thailand",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:6,
      img:banner6,
      title:"Thailand",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    }]
  }


  export const Hometourpackdata ={
    title:"Tour Packages",
    para:"Each category is crafted to provide unique experiences that blend adventure, relaxation, and cultural immersion. Explore our categories and find the perfect fit for your team’s next getaway.",
    tours1:[{
      id:1,
      img:banner1,
      title:"Haridwar",
      location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:2,
      img:banner2,
      title:"Assam",  location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:3,
      img:banner3,
      title:"Jammu & Kashmir",  location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:4,
      img:banner4,
      title:"Rajasthan",  location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:5,
      img:banner5,
      title:"Thailand",  location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:6,
      img:banner6,
      title:"Gujrat",   location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    }],

    tours2:[{
      id:1,
      img:banner1,
      title:"Thailand",   location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:2,
      img:banner2,
      title:"Thailand",   location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:3,
      img:banner3,
      title:"Thailand",   location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:4,
      img:banner4,
      title:"Thailand",   location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:5,
      img:banner5,
      title:"Thailand",   location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    },{
      id:6,
      img:banner6,
      title:"Thailand",   location:"ciutat vella, barcelona",
      price:"$ 600",
      para:"Discover rich culture, ancient temples, vibrant markets, and delicious street food.",
      slug:"#"
    }]
  }


  export const countDown=[
    {id:1,
      title:"destinations worldwide",
      textColor:"!text-[#0E9384]",
      Value:"50+"
    },{id:2,
      title:"booking completed",
      textColor:"!text-[#0E9384]",
      Value:"750+"
    },{id:3,
      title:"destinations worldwide",
      textColor:"!text-blue-700",
      Value:"6000+"
    },{id:4,
      title:"destinations worldwide",
      textColor:"!text-red-800",
      Value:"50+"
    }
  ]


  export const aboutdata ={
    img: banner1,
    img2: banner2,
    img3: banner3,
    title1:"About Us",
    title2:"Explore Beyond the Horizon: ",
    title3:"Discover the World’s Wonders",
        para: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    vision:[{
      id:1,
      icon:<GiDeadEye />,
      heading:"Our Vision",
      text:"Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    },
    {
      id:2,
      icon:<LiaBullseyeSolid />,
      heading:"Our Mission",
      text:"Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    }],
    title4:"Join us at Bharat Ecofuels and be part of the change!"
  }
  
  export const GetKnowdata ={
    img: about2,
    img2: about3,
    title1:"Get to Know More",
    title2:"Explore Beyond the Horizon: ",
    title3:"Discover the World’s Wonders",
        para: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
    vision:[{
      id:1,
      icon:<GiDeadEye />,
      heading:"Our Vision",
      text:"Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    },
    {
      id:2,
      icon:<LiaBullseyeSolid />,
      heading:"Our Mission",
      text:"Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mesureme aliquaum suspendisse ultrices gravidisu.",
    }],
    title4:"Join us at Bharat Ecofuels and be part of the change!"
  } 

  export const trusted =[{
    id:1,
    img:cli1
  },
  {
    id:2,
    img:cli2
  },
  {
    id:3,
    img:cli1
  },
  {
    id:4,
    img:cli3
  },
{
  id:5,
  img:cli2
},
{
  id:6,
  img:cli3
}] 

export  const testimonialData = {
  title:"What our client Says",
para: "We are best service Provider for We are best service Provider for We are best service Provider for service Provider for Petrolium",
testimonials:[
  {
    id: 1,
    heading:"Great hospitalization",
    title: "R.M. Mathur",
    text:
      "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
    img: cl1,
  },
  {
    id: 2,    heading:"Great hospitalization",

    title: "Shivam Goyal",
    text:
      "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
    img: cl1,
  },
  {
    id: 3,    heading:"Great hospitalization",

    title: "Shivam K. G.",
    text:
      "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
    img: cl1,
  },
  {
    id: 4,     heading:"Great hospitalization",

    title: "Shivam K. G.",
    text:
      "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
    img: cl1,
  },
  {
    id: 5,     heading:"Great hospitalization",

    title: "Shivam K. G.",
    text:
      "In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity In this post, we take a look at the best electric cars currently on the market today and how long it would take to charge each to its full capacity.",
    img: cl1,
  },
  
]};

export const faqData = {
  title:"Frequently Asked Question",
  para: "dreamsTour, a tour operator specializing in dream destinations, offers a variety of benefits for travelers",
img:faq,
  faqs:[
    {
      id:1,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:2,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:3,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:4,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }, {
      id:5,
      que:"What types of tours do you offer?",
      ans:" We offer a wide range of tours, including cultural, adventure, luxury, and customized itineraries. opular destinations include Europe, Africa (e.g., Morocco),"
    }
  ]
}


export  const blogData = {

  title:"Latest News And Blogs",
para: "We are best service Provider for We are best service Provider for We are best service Provider for service Provider for Petrolium",
blogs:[
  {
    id: 1,
    title: "Learn more about the Best Electric Cars and Charging Time",
    date: "05/09/23",
    img: banner1,
  },
  {
    id: 2,
    title: "Learn more about the Best Electric Cars and Charging Time",
    date: "15/12/23",
    img: banner2,
  },
  {
    id: 3,
    title: "Learn more about the Best Electric Cars and Charging Time",
    date: "05/09/24",
    img: banner3,
  },
  {
    id: 4,
    title: "Learn more about the Best Electric Cars and Charging Time",
    date: "07/03/24",
    img: banner4,
  },{
    id: 5,
    title: "Learn more about the Best Electric Cars and Charging Time",
    date: "15/09/24",
    img: banner5,
  },
  {
    id: 6,
    title: "Learn more about the Best Electric Cars and Charging Time",
    date: "01/07/24",
    img: banner6,
  },
]};





export const footer = {
    logo: logo2,
    text: "lorem At Bharat Ecofuels, we are revolutionizing the biofuel industry and transforming the lives of millions of",
  
    socials: {
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com//",
      linkedin: "https://www.linkedin.com/school//",
      youtube: "https://www.youtube.com/c/",
    },
    copyrightText: "Copyrights © 2024 . Designed and Manage by ",
   
    list2: {
      title: "Explore",
      links: [ { id: 1, label: "About", href: "about" },
      { id: 2, label: "Services & Techs", href: "services" },
      { id: 3, label: "Sustainability", href: "sustainability" },
      { id: 4, label: "Blogs", href: "blogs" },
      { id: 5, label: "Contact Us", href: "contact-us" },],
    },
    
    newLetter: {
      title: "Contact Us",
      description: "Subscribe to our newsletter to get latest news and updates.",
    },
  };


  






  // contat Us

  export const contactBanner ={
    title:"Contact Us",
    para:"lorem Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus",
    slug:"contact-us",
    img:banner1
  }

  export const contactsec1 ={
    title:"Contact Us",
    para:"Please contact us, We are sure that you can receive our reply as soon as possible.",
    detail:[{
      id:1,
      icon:<MdWifiCalling3 />,
      title:"Call Us",
      text:"(+91) 1800-214-122",
      slug:"tel:+911800-214-122"
    },{
      id:2,
      icon:<MdAttachEmail />,
      title:"Email Us",
      text:"sunrays@example.com",
      slug:"mailto:sunrays@example.com"
    },{
      id:3,
      icon:<FaMapLocationDot />,
      title:"Address",
      text:"lorem Consectetur adipiscing elit.",
      slug:"#"
    }]
  }