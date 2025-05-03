import {  about2, about3, banner1, banner2, banner3, banner4, banner5, banner6, banner7, car, cl1, cli1, cli2, cli3, faq, logo2,nav1,nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, nav10, nav11 } from "@/assets";
import { BsFillAirplaneFill } from "react-icons/bs";
import {  FaMapLocationDot, FaPassport} from "react-icons/fa6";
import { GiDeadEye } from "react-icons/gi";
import { IoAirplane, IoPersonCircleOutline } from "react-icons/io5";
import { LiaBullseyeSolid } from "react-icons/lia";
import { MdAttachEmail, MdWifiCalling3, } from "react-icons/md";




// homepage
export const headercountry=[{
  id:1,
  img:nav1,
label:"Azerbaizan",
slug:"/destination/azerbaijan?categorys=international"
},
{
  id:2,
  img:nav2,
label:"Bali",
slug:"/destination/bali?categorys=international"
},{
  id:3,
  img:nav3,
label:"Bhutan",
slug:"/destination/bhutan?categorys=international"
},{
  id:4,
  img:nav4,
label:"Dubai",
slug:"/destination/dubai,-uae?categorys=international"
},{
  id:5,
  img:nav5,
label:"Japan",
slug:"/destination/tokyo,-japan?categorys=international"
},{
  id:6,
  img:nav6,
label:"Malaysia",
slug:"/destination/malaysia?categorys=international"
},{
  id:7,
  img:nav7,
label:"Nepal",
slug:"/destination/nepal?categorys=international"
},{
  id:8,
  img:nav8,
label:"Singapore",
slug:"/destination/Singapore?categorys=international"
},{
  id:9,
  img:nav9,
label:"Sri Lanka",
slug:"/destination/Sri Lanka?categorys=international"
},
{
  id:10,
  img:nav10,
label:"Thailand",
slug:"/destination/Thailand?categorys=international"
},
{
  id:11,
  img:nav11,
label:"Vietnam",
slug:"/destination/Vietnam?categorys=international"
},
]

export const navItemsArray = [
  { id: 1, label: "Home", href: "/"},

  { id: 2, label: "About Us", href: "/about-us"},
  { id: 3, label: "Destination", href: "#",
    subNav:[{
      id: 1, label: "Domestic", href: "#",
      subNav:[
        { id: 1, label: "Golden Triangle", href: "/destination/golden-triangle?categorys=domestic" },
        { id: 2, label: "Andaman & Nicobar", href: "/destination/andaman-&-nicobar-islands?categorys=domestic" },
        { id: 3, label: "Kashmir", href: "/destination/kashmir?categorys=domestic" },
        { id: 4, label: "Sikkim & Darjeeling", href: "/destination/sikkim-&-darjeeling?categorys=domestic" },
        { id: 5, label: "Kerala", href: "/destination/kerala?categorys=domestic" },
        { id: 6, label: "Goa", href: "/destination/goa?categorys=domestic" },
        { id: 7, label: "Leh-Ladakh", href: "/destination/leh-ladakh?categorys=domestic" },
        { id: 8, label: "Manali", href: "/destination/manali?categorys=domestic" },
        { id: 9, label: "Mysore-Ooty", href: "/destination/mysore-ooty?categorys=domestic" },
        { id: 10, label: "JimCorbett & Nainital", href: "/destination/jim-corbett-&-nainital?categorys=domestic" },
        { id: 11, label: "Rajasthan", href: "/destination/rajasthan?categorys=domestic" }
    ]
    
    },
    {
      id: 2, label: "International", href: "#",
      subNav:[
        { id: 1, label: "Dubai", href: "/destination/dubai,-uae?categorys=international" },
        { id:2, label: "Bali", href: "/destination/bali?categorys=international" },
        { id:3, label: "Maldives", href: "/destination/maldives?categorys=international" },
        { id:4, label: "Japan", href: "/destination/tokyo,-japan?categorys=international" },
        { id:5, label: "Greece", href: "/destination/greece,-europe?categorys=international" },
        { id:6, label: "Turkey", href: "/destination/turkey?categorys=international" },
        { id:7, label: "Paris", href: "/destination/paris,-france?categorys=international" },
        { id:8, label: "Rome", href: "/destination/rome,-italy?categorys=international" },
        { id:9, label: "New York City", href: "/destination/new-york-city,-usa?categorys=international" },
        { id: 10, label: "Venice", href: "/destination/venice,-italy?categorys=international" },
        { id: 11, label: "Switzerland", href: "/destination/switzerland?categorys=international" },
        { id: 12, label: "Baku ", href: "/destination/baku?categorys=international" },
    ]
    },
   ]
  },
  { id: 4, label: "Packages", href: "#",
    subNav:[{
      id: 1, label: "Domestic", href: "#",
      subNav:[
        { id: 1, label: "Golden Triangel Tour", href: "/packages/golden-triangle-tour?categorys=domestic" },
        { id: 2, label: "Jodhpur – Jaisalmer Tour", href: "/packages/Jodhpur – Jaisalmer Tour?categorys=domestic" },
        { id: 3, label: "Paradise on Earth – Kashmir Tour", href: "/packages/paradise-on-earth – Kashmir Tour?categorys=domestic" },
        { id: 4, label: "The Andaman Tour", href: "/packages/the-andaman-tour?categorys=domestic" },
        { id: 5, label: "Goa Tour", href: "/packages/goa-tour?categorys=domestic" },
        { id: 6, label: "Ladakh Tour", href: "/packages/ladakh-tour?categorys=domestic" },
        { id: 7, label: "South India Temple Tour 5N 6D", href: "/packages/south-india-temple-tour-5n-6d?categorys=domestic" },
        { id: 8, label: "Exotic kerala Tour 3 N | 4 D", href: "/packages/exotic-kerala-tour 3 N | 4 D?categorys=domestic" },
        { id: 9, label: "Exotic kerala Tour 7 N | 8 D", href: "/packages/exotic-kerala-tour-7 N | 8 D?categorys=domestic" },
        { id: 10, label: "Darjeeling Tour", href: "/packages/darjeeling-tour?categorys=domestic" },
        { id: 11, label: "Assam Meghalaya Tour", href: "/packages/assam-Meghalaya-tour?categorys=domestic" },
        { id: 12, label: "Dajeeling Gangtok Tour", href: "/packages/darjeeling-gangtok-tour?categorys=domestic" },
        { id: 13, label: "South India Tour", href: "/packages/south-india-tour?categorys=domestic" }
    ]    
    },
    {
      id: 2, label: "International", href: "#",
      subNav:[
        { id: 1, label: "Vietnam Adventure Tour", href: "/packages/Vietnam Adventure Tour?categorys=international" },
        { id: 2, label: "Bali Discovery Trip", href: "/packages/bali-discovery-trip?categorys=international" },
        { id: 3, label: "Best of Turkey", href: "/packages/best-of-turkey?categorys=international" },
        { id: 4, label: "Enchanting Sri Lanka", href: "/packages/enchanting-sri-lanka-tour?categorys=international" },
        { id: 5, label: "Greece Tour", href: "/packages/greece-tour?categorys=international" },
        { id: 6, label: "Mesmerizing Japan", href: "/packages/mesmerizing-japan?categorys=international" },
        { id: 7, label: "Thailand Tour", href: "/packages/thailand-tour?categorys=international" },
        { id: 8, label: "Dubai Tour", href: "/packages/dubai-tour?categorys=international" },
        { id: 9, label: "Singapore Tour", href: "/packages/singapore-tour?categorys=international" }
    ]  
    },
   ]
     },
  { id: 5, label: "Blogs", href: "/blogs"},
  { id: 6, label: "Contact Us", href: "/contact-us"},
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
    
    title: "The Best Travel Agency in Delhi",
    para: "Your search for the best travel agency in Delhi ends at Terrific Trips. Explore top-rated experiences for that much needed holiday!",
    
    btntext: "Explore Packages",
    href: "/contact-us",
  }

  export const countDown=[
    {id:1,
      title:"Destinations",
      textColor:"#0E9384",
      Value:"50"
    },{id:2,
      title:"Satisfied Clients",
      textColor:"orange",
      Value:"800"
    },{id:3,
      title:"Satisfaction Score",
      textColor:"blue",
      Value:"93",
      value2:"%"
    },{id:4,
      title:"Curated Tours",
      textColor:"red",
      Value:"450"
    }
  ]


  export const aboutdata ={
    img: banner1,
    img2: banner2,
    img3: banner3,
    title1:"About Us",
    title2:"Travel To Top Destinations ",
    title3:"With Terrific Trips",
        para: "At Terrific Trips, we bring you the finest travel experiences across India. Whether you dream of pristine beaches, lush hill stations, or historical cities, we have something for everyone. ",
    vision:[{
      id:1,
      icon:<GiDeadEye />,
      heading:"Our Vision",
      text:"At Terrific Trips, our vision is to become the best travel agency in India, known for delivering unforgettable experiences, seamless journeys, and personalized travel solutions.",
    },
    {
      id:2,
      icon:<LiaBullseyeSolid />,
      heading:"Our Mission",
      text:"Our mission is to make travel simple, enjoyable, and truly memorable for every customer. We are committed to offering top-quality service, handpicked destinations, and well-planned itineraries that cater to all kinds of travelers.",
    }],
  }
  
  export const GetKnowdata ={
    img: about2,
    img2: about3,
    title1:"Why Choose Terrific Trips?",
    title2:"Trusted Travel Experts for  ",
    title3:"Delhi Adventures",
        para: "As the best travel agency in Delhi, we pride ourselves on delivering unparalleled travel experiences. Here’s why thousands of travelers trust us for their journeys:",
    vision:[{
      id:1,
      icon:<IoPersonCircleOutline/>,
      heading:"Expert Guidance:",
      text:"Our team of travel specialists ensures every detail of your trip is meticulously planned.",
    },
    {
      id:2,
      icon:<IoAirplane/>,
      heading:"Seamless Travel Experience:",
      text:"From flights and hotels to guided tours, we handle everything for you.",
    }],
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
  para: "At Terrific Trips, we understand that planning a journey comes with questions. Our FAQs address common travel concerns, including bookings, itineraries, and cancellations. We aim to provide clear, helpful answers to make your travel planning seamless and enjoyable. Go through our FAQs to find the information you need!",
img:faq,
faqs:[
  {
    id: 1,
    que: "What types of tours does Terrific Trips offer?",
    ans: "We offer a wide range of domestic and international travel packages, including family vacations, honeymoon trips, group tours, adventure getaways, and customized holiday plans to suit your preferences."
  },
  {
    id: 2,
    que: "Can I customize my travel itinerary?",
    ans: "Yes, absolutely! We specialize in personalized travel experiences. Whether you want to adjust the duration, add specific destinations, or include unique activities, our team will tailor the itinerary to match your needs."
  },
  {
    id: 3,
    que: "How do I book a trip with Terrific Trips?",
    ans: "You can book your trip online through our website, contact us via phone or email, or visit our office. Our travel consultants are always ready to assist you with planning and booking."
  },
  {
    id: 4,
    que: "Are the travel packages all-inclusive?",
    ans: "Most of our packages include accommodation, sightseeing, transportation, and select meals. However, the inclusions vary by package. We provide a detailed breakdown before booking so you know exactly what’s covered."
  },
  {
    id: 5,
    que: "Does Terrific Trips provide travel assistance during the trip?",
    ans: "Yes, we offer full support before, during, and after your journey. Our dedicated travel assistance team is available to help you with any queries, changes, or emergencies while you're on your trip—so you can travel with peace of mind."
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
    text: "Terrific Trips made my dream vacation hassle-free! Their expert guidance, seamless bookings.",
  
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
    },
  };

  // about page
export const aboutPage = {
  title:"About Us",
  para:"Making Travel Easy & Memorable! Our expert planning services provide dedicated experiences along with a hassle-free journey system throughout India and international destinations.",
  slug:"About-Us",
  img:banner1,

  why:{
    img:banner4,
    img2:banner2,
    title1:"Why Choose Terrific Trips?",
    title2:"Your Trusted Partner for Seamless Travel",
    para:"The expert team at Terrific Trips devotes itself to creating stress-relieving vacations that people will never forget. Reliable support comes with personalized service and expert planning to deliver the ultimate travel experience for every traveler. Our clients choose us as their travel adventure provider for these particular reasons.",
    vision:[
      {id:1,
        icon:<FaPassport />,
heading:"Professional Travel Planning",
text:"The skilled team at Terrific Trips develops structured trip plans that guarantee complete organization across all travel components."
      },
      {id:1,
        icon:<BsFillAirplaneFill />,
heading:"Hassle-Free Travel",
text:"Our service covers complete trip arrangements, including both accommodations, flights, and guided tours, to offer you worry-free travel."
      },
    ]
  }
}
  
  // contat Us
  export const contactBanner ={
    title:"Contact Us",
    para:"Plan Your Perfect Getaway with Terrific Trips! Have questions? Contact us Today for Expert Travel Assistance and Seamless Bookings!",
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
      text:"+919810053278",
      slug:"tel:+919810053278"
    },{
      id:2,
      icon:<MdAttachEmail />,
      title:"Email Us",
      text:"ops@terrifictrip.com",
      slug:"mailto:ops@terrifictrip.com"
    },{
      id:3,
      icon:<FaMapLocationDot />,
      title:"Address",
      text:"LGF, Salcon Ras Vilas, District Center, Saket, New Delhi - 110017",
      slug:"#"
    }]
  }