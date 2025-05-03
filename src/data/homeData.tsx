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

  export const homepackagedata ={
    title:"Best Travel Packages",
    para:"We specialize in curating unforgettable travel experiences and ensure every trip is hassle-free and filled with cherished memories.",
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
img:banner2,
  title:"Latest News And Blogs",
para: "Stay updated with the latest travel trends, destination highlights, and expert tips through our news and blogs. Discover inspiring stories and valuable insights for your next adventure.",
blogs:[
  {
    id: 1,
    title: "Best Travel Agency in Delhi—Discover Unforgettable Journeys with Terrific Trips",
    date: "05/09/23",
    img: banner1,
    data:`<h1 style="font-size:2.4rem; font-weight:700; line-height:1.2; margin-bottom:20px;">Best Travel Agency in Delhi—Discover Unforgettable Journeys with Terrific Trips</h1>
  <p>You need the best travel agency in Delhi to schedule your vacation dreams. People seeking optimal travel experiences choose Terrific Trips as the leading Delhi-based travel agency, which brings incredible service and valuable package deals that individualize travel solution capabilities. The selection of an ideal travel agency in Delhi becomes essential because you want your travel experience to be exceptional.</p>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">Why Terrific Trips Is the Best Travel Agency in Delhi</h2>
  <p>The vast selection of travel agencies in Delhi raises a question about what distinguishes Terrific Trips as the premier choice for customers seeking reliable service. The company goes beyond mere ticket bookings to develop exceptional travel experiences. All family vacations and honeymoon getaways receive our specialized attention, for which we build stress-free, customized travel experiences specifically for you. Our experts use their understanding of your preferences to design customized travel itineraries based on budget and taste, which establishes Terrific Trips as the best travel agency in Delhi.</p>

  <h3 style="font-size:18px; color:#5cb85c;">Personalized Service</h3>
  <p>Our organization understands that all vacationers possess unique characteristics. Customizability in your travel itinerary stands as the main strength that makes us the best travel agency in Delhi. Members of our team support your travel needs from inquiry through return until the very end.</p>

  <h3 style="font-size:18px; color:#5cb85c;">Unbeatable Packages</h3>
  <p>Vehicle packages of budget and luxury adventure grades become available to clients through our unbeatable prices. The company builds on worldwide partners' networks to bring customers exceptional prices for domestic and overseas tourism.</p>

  <h3 style="font-size:18px; color:#5cb85c;">Seamless Planning</h3>
  <p>Leave the stress to us. The company manages flight arrangements as well as hotel bookings that handle transportation requirements and activity bookings for rapid change accommodations. As the best travel agency in Delhi, we dedicate ourselves to handling all your trip needs from beginning to end.</p>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">Services Offered by the Best Travel Agency in Delhi</h2>
  <p>As the best travel agency in Delhi, Terrific Trips offers a wide range of services:</p>
  <ul style="padding-left:20px;">
    <li>Customized Domestic and International Tour Packages</li>
    <li>Visa and Passport Assistance</li>
    <li>Flight, Hotel, and Cruise Bookings</li>
    <li>Corporate and Group Travel Planning</li>
    <li>Travel Insurance and Emergency Support</li>
  </ul>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">Business Travel Made Easy</h2>
  <p>The company provides specialized services for business travel. We operate from Delhi as the best travel agency because we understand corporate guests require swift, accurate service with high efficiency standards. That’s exactly what we deliver.</p>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">Best Travel Agency in Delhi for International Holidays</h2>
  <p>From Europe to Dubai and Singapore to Turkey, we craft seamless travel experiences across the globe. Terrific Trips has consistently been rated the best travel agency in Delhi for planning smooth, unforgettable international holidays.</p>
  <p>Destinations We Cover:</p>
  <ul style="padding-left:20px;">
    <li>Europe Tours</li>
    <li>Dubai Luxury Getaways</li>
    <li>Thailand and Bali Honeymoons</li>
    <li>Customized Japan and Korea Experiences</li>
    <li>Visa-Free Destinations</li>
  </ul>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">Best Travel Agency in Delhi for Domestic Travel</h2>
  <p>India contains terrific travel destinations, which can be discovered through Terrific Trips, set up based in Delhi. Terrific Trips maintains the best position as a local destination travel agency throughout Delhi. Trip packets from Terrific Trips guarantee permanent domestic travel moments whenever you choose to explore places such as the snowy mountains of Himachal Pradesh, along with the desert dunes of Rajasthan and the tranquil tracts of Kerala.</p>
  <p>Explore India With Us:</p>
  <ul style="padding-left:20px;">
    <li>Ladakh & Kashmir tours</li>
    <li>South India temple tours</li>
    <li>Golden Triangle tour</li>
    <li>Northeast India adventures</li>
    <li>Goa and Andaman holidays</li>
  </ul>
  <p>We take pride in being recognized among the top 10 travel agencies in Delhi for Indian holidays.</p>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">What Makes Us a Top Travel Agency in Delhi?</h2>
  <p>Years of providing excellent service, as well as reviews from happy customers and our deep love for travel, have secured our spot among the top 10 travel agencies in Delhi. Here’s why:</p>
  <ul style="padding-left:20px;">
    <li><strong>Expert Team</strong><br />Our staff of experienced travel planners possesses specialized training to build valuable and secure vacation experiences for their clients. The effectiveness of our services has made our clients name us as the best travel agency in Delhi.</li>
    <li><strong>Transparent Pricing</strong><br />All our services are crystal clear, so our customers don't face unexpected payments throughout their journey. Complete transparency exists in our offerings among the best travel agencies in Delhi, although this trait is exceptionally hard to find in the top 10 travel agencies in Delhi.</li>
    <li><strong>24x7 Support</strong><br />Positive and successful outcomes do not always happen when planning travels. The support team remains available for you so you can maintain peace of mind during your entire journey.</li>
  </ul>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">Why We’re the Best Travel Agency in Delhi for Customized Tours</h2>
  <p>The diversity of travelers drives our firm to reject standardized packages because each traveler has distinctive preferences. We lead Delhi's travel industry as the foremost agency since we take the time to listen to your needs, then design and execute perfect travel experiences regardless of luxury needs or budget requirements.</p>

  <h3 style="font-size:18px; color:#5cb85c;">Your Style, Your Budget</h3>
  <p>Our company provides vacation solutions that perfectly match the requirements of all kinds of travelers, from solo explorers and families to honeymooners and adventure enthusiasts. Our trips deliver great value for money to each of our customers.</p>

  <h2 style="font-size:20px; color:#0275d8; margin-top:20px;">Why Choose Terrific Trips—The Best Travel Agency in Delhi</h2>
  <p>The question remains why we hold the title of top travel agency throughout Delhi. Here’s what sets us apart:</p>
  <ul style="padding-left:20px;">
    <li>An expert team with years of travel planning experience</li>
    <li>Competitive prices with high-quality service</li>
    <li>Personalized travel itineraries</li>
    <li>Our company maintains a position as one of the trusted travel agencies within the top 10 agencies operating in Delhi.</li>
    <li>1000+ happy clients and 5-star ratings</li>
    <li>Excellent support and problem-solving during emergencies</li>
  </ul>

  <p style="margin-top:20px;"><strong>Finding the best travel agency in Delhi requires Terrific Trips since the company stands ready to plan your next adventure. The company transforms dreams into reality through the power of each travel experience.</strong></p>
`
  },
  {
    id: 2,
    title: "Explore the Top Tourist Places in India with the Best Travel Agency in Delhi",
    date: "15/12/23",
    img: banner2,
    data:` <h1 style="font-size:2.4rem; font-weight:700; line-height:1.2; margin-bottom:20px;">Explore the Top Tourist Places in India with the Best Travel Agency in Delhi</h1>
  <p>India presents itself as a nation that combines different cultural traditions along with spectacular natural landscapes, ancient historical sites, and energetic traditional elements. Observing the top tourist places in India must serve as your top vacation destination priority when developing your travel itinerary. Communing with the best travel agency in Delhi ensures that your journey to these impressive destinations will run smoothly with memorable results.</p>

  <p>Learn about the Indian tourist attractions along with practical information about peak travel periods and accessibility, along with the main attractions in each spot.</p>

  <!-- Place Sections -->
  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">1. Taj Mahal, Agra — A Symbol of Eternal Love</h2>
    <p>Shah Jahan built this eternal love monument for Mumtaz Mahal. A masterpiece of Mughal architecture with stunning natural surroundings.</p>
    <p><strong>Best Time to Visit:</strong> October to March</p>
    <p><strong>How to Visit:</strong> Train or road from Delhi; guided tours via travel agency</p>
    <p><strong>Top Attractions:</strong> Taj Mahal, Agra Fort, Mehtab Bagh</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">2. Jaipur — The Pink City</h2>
    <p>Royal capital filled with majestic forts, palaces, and colorful bazaars. A cultural feast for history lovers.</p>
    <p><strong>Best Time to Visit:</strong> November to February</p>
    <p><strong>How to Visit:</strong> Easily accessible by air, train, or road</p>
    <p><strong>Top Attractions:</strong> Amber Fort, Hawa Mahal, City Palace</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">3. Kerala — God’s Own Country</h2>
    <p>Lush greenery, serene backwaters, and Ayurvedic wellness retreats define Kerala’s charm.</p>
    <p><strong>Best Time to Visit:</strong> September to March</p>
    <p><strong>How to Visit:</strong> Fly into Kochi or Thiruvananthapuram</p>
    <p><strong>Top Attractions:</strong> Alleppey Backwaters, Munnar, Thekkady</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">4. Goa — The Party Capital</h2>
    <p>Golden beaches, nightlife, Portuguese heritage, and music festivals make Goa unforgettable.</p>
    <p><strong>Best Time to Visit:</strong> October to March</p>
    <p><strong>How to Visit:</strong> Fly to Goa International Airport</p>
    <p><strong>Top Attractions:</strong> Baga Beach, Fort Aguada, Dudhsagar Falls</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">5. Leh-Ladakh — Heaven on Earth</h2>
    <p>Snow-covered peaks, monasteries, and scenic lakes make this a paradise for adventurers.</p>
    <p><strong>Best Time to Visit:</strong> May to September</p>
    <p><strong>How to Visit:</strong> Flight to Leh or scenic road trip from Manali</p>
    <p><strong>Top Attractions:</strong> Pangong Lake, Nubra Valley, Magnetic Hill</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">6. Varanasi — The Spiritual Capital</h2>
    <p>One of the world’s oldest cities, sacred for Hindu rituals on the ghats of the Ganges.</p>
    <p><strong>Best Time to Visit:</strong> October to March</p>
    <p><strong>How to Visit:</strong> Train or flight from Delhi</p>
    <p><strong>Top Attractions:</strong> Ganga Aarti, Kashi Vishwanath Temple, Sarnath</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">7. Rishikesh — Adventure and Spiritual Bliss</h2>
    <p>Rafting, yoga, meditation, and serene Himalayan views make Rishikesh a unique retreat.</p>
    <p><strong>Best Time to Visit:</strong> February to May, September to November</p>
    <p><strong>How to Visit:</strong> By road or train from Delhi</p>
    <p><strong>Top Attractions:</strong> Laxman Jhula, Triveni Ghat, River Rafting</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">8. Udaipur — The City of Lakes</h2>
    <p>Romantic palaces and serene lakes give Udaipur timeless charm and cultural richness.</p>
    <p><strong>Best Time to Visit:</strong> October to March</p>
    <p><strong>How to Visit:</strong> Flight or train from Delhi</p>
    <p><strong>Top Attractions:</strong> City Palace, Lake Pichola, Jag Mandir</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">9. Shimla — The Queen of Hills</h2>
    <p>Colonial architecture, hill charm, and snowy winters make Shimla a year-round getaway.</p>
    <p><strong>Best Time to Visit:</strong> March to June & December to January</p>
    <p><strong>How to Visit:</strong> Drive or toy train from Delhi</p>
    <p><strong>Top Attractions:</strong> The Ridge, Kufri, Mall Road</p>
  </div>

  <div style="margin-top: 30px;">
    <h2 style="color: #c06014; font-size: 20px;">10. Andaman & Nicobar Islands — Tropical Paradise</h2>
    <p>White beaches, coral reefs, and WWII history make this island group unforgettable.</p>
    <p><strong>Best Time to Visit:</strong> October to May</p>
    <p><strong>How to Visit:</strong> Fly to Port Blair</p>
    <p><strong>Top Attractions:</strong> Radhanagar Beach, Cellular Jail, Scuba Diving</p>
  </div>

  <!-- Why These Are Top Places -->
  <div style="margin-top: 40px;">
    <h2 style="color: #d2691e; font-size: 22px;">Why These Are the Top Tourist Places in India</h2>
    <p>These destinations reflect India's diversity—spiritual depth, royal grandeur, natural beauty, and festive joy. With proper planning from a travel agency in Delhi, your trip can become truly extraordinary.</p>
  </div>

  <!-- Why Choose Terrific Trips -->
  <div style="margin-top: 40px;">
    <h2 style="color: #d2691e; font-size: 22px;">Why Choose the Best Travel Agency in Delhi—Terrific Trips</h2>
    <ul style="padding-left: 20px; margin: 0;">
      <li>Tailored packages to top destinations</li>
      <li>Hassle-free bookings</li>
      <li>Affordable pricing</li>
      <li>24/7 customer support</li>
    </ul>
    <p style="margin-top: 10px;">Whether for family, honeymoon, or solo travel—Terrific Trips helps you explore India with ease. Plan your journey with the best travel agency in Delhi and make your travel dreams come true.</p>
  </div>`
  },
  {
    id: 3,
    title: "Top 10 Places to Visit in Dubai—The Magic of the City of Gold",
    date: "05/09/24",
    img: banner3,
    data:`  <h1 style="font-size:2.4rem; font-weight:700; line-height:1.2; margin-bottom:20px;">Top 10 Places to Visit in Dubai — The Magic of the City of Gold</h1>
  <p>Luxury alongside innovation and culture combined with multiple attractions rank among the top 10 places to visit in Dubai. Dubai stands as a place that unites traditional heritage with forward-thinking determination, thus becoming an ideal choice for international visitors.</p>
  <p>Let’s explore the Dubai must-visit places that make this destination so iconic.</p>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">1. Burj Khalifa — A Sky-High Wonder</h2>
    <p>The <strong>Burj Khalifa</strong> is the tallest building in the world. Observation decks on the 124th and 148th floors offer panoramic views of Dubai. Located near Dubai Mall, with dancing fountains and Burj Khalifa Park, it’s a must-see spot.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">2. The Dubai Mall — Shopper’s Paradise</h2>
    <p><strong>The Dubai Mall</strong> features 1,200+ shops, an aquarium, ice rink, and VR zones. It's a hub for shopping and entertainment, ranking high among Dubai's attractions.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">3. Palm Jumeirah — Island of Dreams</h2>
    <p><strong>Palm Jumeirah</strong> is a man-made island with luxury resorts like Atlantis The Palm, upscale restaurants, beach clubs, and stunning sea views.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">4. Dubai Marina — Waterfront Living at Its Best</h2>
    <p><strong>Dubai Marina</strong> boasts skyscrapers, boat-lined walkways, a vibrant nightlife, and scenic dining options—perfect for modern urban vibes.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">5. Desert Safari — A Taste of Adventure</h2>
    <p><strong>Desert Safari</strong> experiences include dune bashing, camel rides, and Emirati cultural shows. A blend of thrill and tradition, it's unforgettable.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">6. Dubai Creek — Where History Flows</h2>
    <p><strong>Dubai Creek</strong> offers traditional abra rides and access to bustling souks. A historical landmark showing Dubai’s early trading roots.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">7. Jumeirah Mosque — A Cultural Gem</h2>
    <p><strong>Jumeirah Mosque</strong> is one of the few mosques open to non-Muslims. Its white stone design and educational tours make it a cultural highlight.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">8. Global Village — A World of Cultures</h2>
    <p><strong>Global Village</strong> is a seasonal cultural theme park offering country pavilions, cuisine, shopping, and live shows—great for families.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">9. Dubai Frame — Bridging the Past and Future</h2>
    <p><strong>Dubai Frame</strong> offers views of old and new Dubai through a giant glass skywalk. Educational exhibits inside make it even more meaningful.</p>
  </div>

  <div style="margin-top: 25px;">
    <h2 style="color: #d49e2a; font-size: 20px;">10. Miracle Garden — A Floral Fantasy</h2>
    <p><strong>Miracle Garden</strong> features 150 million flowers in stunning designs like heart-shaped paths and floral castles. Open in winter and perfect for photos.</p>
  </div>

  <div style="margin-top: 40px;">
    <h2 style="color: #c59d5f; font-size: 22px;">Why These Top 10 Places Should Be on Your Bucket List</h2>
    <p>These destinations blend historic charm with futuristic innovation. Perfect for first-time travelers and seasoned Dubai lovers alike. Booking through a trusted travel agency in Delhi can enhance your experience significantly.</p>
  </div>

  <div style="margin-top: 40px;">
    <h2 style="color: #c59d5f; font-size: 22px;">Why Choose Terrific Trips for Your Dubai Tour?</h2>
    <ul style="padding-left: 20px;">
      <li>Custom Dubai tour plans for every traveler</li>
      <li>Access to all Top 10 attractions in Dubai</li>
      <li>Trusted local and international travel partners</li>
      <li>Affordable yet premium vacation packages</li>
      <li>24/7 travel support and customer service</li>
      <li>Visa assistance, flight bookings, and hotel reservations</li>
      <li>Seamless, stress-free travel itineraries</li>
      <li>High satisfaction and returning clients</li>
    </ul>
  </div>
`
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