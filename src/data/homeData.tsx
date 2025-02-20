import {  about2, about3, banner1, banner2, banner3, banner4, banner5, banner6, banner7, car, cl1, cli1, cli2, cli3, faq, logo2,nav1,nav2, nav3, nav4, nav5, nav6, nav7, nav8, nav9, nav10, nav11 } from "@/assets";
import {  FaMapLocationDot} from "react-icons/fa6";
import { GiDeadEye } from "react-icons/gi";
import { LiaBullseyeSolid } from "react-icons/lia";
import { MdAttachEmail, MdWifiCalling3, } from "react-icons/md";




// homepage
export const headercountry=[{
  id:1,
  img:nav1,
label:"Azerbaizan",
slug:"#"
},
{
  id:2,
  img:nav2,
label:"Bali",
slug:"#"
},{
  id:3,
  img:nav3,
label:"Bhutan",
slug:"#"
},{
  id:4,
  img:nav4,
label:"Dubai",
slug:"#"
},{
  id:5,
  img:nav5,
label:"Japan",
slug:"#"
},{
  id:6,
  img:nav6,
label:"Malaysia",
slug:"#"
},{
  id:7,
  img:nav7,
label:"Nepal",
slug:"#"
},{
  id:8,
  img:nav8,
label:"Singapore",
slug:"#"
},{
  id:9,
  img:nav9,
label:"Sri Lanka",
slug:"#"
},
{
  id:10,
  img:nav10,
label:"Thailand",
slug:"#"
},
{
  id:11,
  img:nav11,
label:"Vietnam",
slug:"#"
},
]

export const navItemsArray = [
  { id: 1, label: "Home", href: "/"},

  { id: 2, label: "About Us", href: "about"},
  { id: 3, label: "Destination", href: "destination",
    subNav:[{
      id: 1, label: "Domestic", href: "#",
      subNav:[
        { id: 1, label: "Golden Triangle", href: "golden-triangle" },
        { id: 2, label: "Andaman & Nicobar", href: "andaman-nicobar" },
        { id: 3, label: "Kashmir", href: "kashmir" },
        { id: 4, label: "Sikkim & Darjeeling", href: "sikkim-darjeeling" },
        { id: 5, label: "Kerala", href: "kerala" },
        { id: 6, label: "Goa", href: "goa" },
        { id: 7, label: "Leh-Ladakh", href: "leh-ladakh" },
        { id: 8, label: "Manali", href: "manali" },
        { id: 9, label: "Mysore-Ooty", href: "mysore-ooty" },
        { id: 10, label: "JimCorbett & Nainital", href: "jimcorbett-nainital" },
        { id: 11, label: "Rajasthan", href: "rajasthan" }
    ]
    
    },
    {
      id: 2, label: "International", href: "#",
      subNav:[
        { id: 1, label: "Dubai", href: "dubai" },
        { id: 2, label: "Thailand", href: "thailand" },
        { id: 3, label: "Singapore", href: "singapore" },
        { id: 4, label: "Azerbaijan-BAKU", href: "azerbaijan-baku" },
        { id: 5, label: "Malaysia", href: "malaysia" },
        { id: 6, label: "BALI-Indonesia", href: "bali-indonesia" },
        { id: 7, label: "Sri-Lanka", href: "sri-lanka" },
        { id: 8, label: "Vietnam", href: "vietnam" },
        { id: 9, label: "Nepal", href: "nepal" },
        { id: 10, label: "Bhutan", href: "bhutan" },
        { id: 11, label: "Maldives", href: "maldives" },
        { id: 12, label: "Japan", href: "japan" },
        { id: 13, label: "Greece", href: "greece" },
        { id: 14, label: "Turkey", href: "turkey" }
    ]
    
    },
   ]
  },
  { id: 4, label: "Packages", href: "packages",
    subNav:[{
      id: 1, label: "Domestic", href: "#",
      subNav:[
        { id: 1, label: "Golden Triangel Tour", href: "golden-triangel-tour" },
        { id: 2, label: "Jodhpur – Jaisalmer Tour", href: "jodhpur-jaisalmer-tour" },
        { id: 3, label: "Paradise on Earth – Kashmir Tour", href: "paradise-on-earth-kashmir-tour" },
        { id: 4, label: "The Andaman Tour", href: "the-andaman-tour" },
        { id: 5, label: "Goa Tour", href: "goa-tour" },
        { id: 6, label: "Ladakh Tour", href: "ladakh-tour" },
        { id: 7, label: "South India Temple Tour 5N 6D", href: "south-india-temple-tour-5n-6d" },
        { id: 8, label: "Exotic kerala Tour 3 N | 4 D", href: "exotic-kerala-tour-3n-4d" },
        { id: 9, label: "Exotic kerala Tour 7 N | 8 D", href: "exotic-kerala-tour-7n-8d" },
        { id: 10, label: "Darjeeling Tour", href: "darjeeling-tour" },
        { id: 11, label: "Assam Magalya Tour", href: "assam-magalya-tour" },
        { id: 12, label: "Dajeeling Gangtok Tour", href: "darjeeling-gangtok-tour" },
        { id: 13, label: "South India Tour", href: "south-india-tour" }
    ]    
    },
    {
      id: 2, label: "International", href: "#",
      subNav:[
        { id: 1, label: "Vietnam Tours", href: "vietnam-tours" },
        { id: 2, label: "Bali Discovery Trip", href: "bali-discovery-trip" },
        { id: 3, label: "Best of Turkey", href: "best-of-turkey" },
        { id: 4, label: "Enchanting Sri Lanka", href: "enchanting-sri-lanka" },
        { id: 5, label: "Greece Tour", href: "greece-tour" },
        { id: 6, label: "Mesmerizing Japan", href: "mesmerizing-japan" },
        { id: 7, label: "Thailand Tour", href: "thailand-tour" },
        { id: 8, label: "Dubai Tour", href: "dubai-tour" },
        { id: 9, label: "Singapore Tour", href: "singapore-tour" }
    ]  
    },
   ]
     },
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