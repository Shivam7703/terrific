import React from 'react';
import { blogData } from '@/data/homeData';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AllBanner from '@/components/banner';
import { GrUploadOption } from 'react-icons/gr';

type Props = {
  params: {
    slug: string;
  };
};

// Static Params for Export Mode
export async function generateStaticParams() {
  return blogData.blogs.map((blog: any) => {
    const slug = blog.title.replace(/\s+/g, '-').toLowerCase();
    return { slug };
  });
}

const Page = ({ params }: Props) => {

   const Cards = [
        {
            id:1,
            heading:"Expertly Crafted Itineraries: ",
            para:"Our Golden Triangle tours are designed to provide a seamless experience, covering Delhi, Agra, and Jaipur, ensuring you witness the rich tapestry of India's heritage."
        },
        {
            id: 2,
            heading: "Knowledgeable Guides:",
            para: "Benefit from our experienced guides who bring history to life, offering deep insights into each monument and site."
        },
        {
            id: 3,
            heading: "Comfortable Accommodations:",
            para: "We select premium hotels that blend comfort with cultural ambiance, enhancing your stay in each city."
        },
        {
            id: 4,
            heading: "Personalized Services:",
            para: "Our dedicated team caters to your preferences, ensuring a tailored and memorable journey through India's iconic landmarks."
        }
    ]

  const decodedSlug = decodeURIComponent(params.slug).toLowerCase();

  const singleBlog = blogData.blogs.find((blog: any) => {
    const blogSlug = blog.title.replace(/\s+/g, '-').toLowerCase();
    return blogSlug === decodedSlug;
  });

  if (!singleBlog) {
    notFound();
  }

  return (
    <>
      <AllBanner
        img={singleBlog?.img}
        title={`${singleBlog.title.slice(0, 20)}...`}
        para=""
        slug={`blogs / ${singleBlog.title.toLowerCase().slice(0,15)}`}
      />

      <div className="flex text-black h-full flex-wrap justify-between gap-y-7 lg:px-28 md:p-20 sm:p-16 p-7 relative min-h-screen w-full">
        <div className="md:w-[64%] w-full">
          <Image
            src={singleBlog.img}
            alt={singleBlog.title}
            className="w-full object-cover max-h-[450px] mb-4"
            width={1000}
            height={550}
          />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: singleBlog.data }}
          />
        </div>

          <div className="md:sticky h-full top-8 md:w-[30%] w-full">
                  <div className="bg-zinc-50 shadow-lg space-y-3 rounded-xl mb-4 sm:mb-7 p-4 sm:p-7">
                          <h3 className="sm:text-2xl text-xl font-bold text-color1">Why Choose Terrific Trips </h3>
          {Cards.map((card:any) => (
                          <p className="flex flex-wrap gap-2 text-zinc-600 text-sm items-center h-max"><GrUploadOption  className="p-1  rounded-full !text-xl sm:!text-2xl text-color1  bg-[#a52a2a22]"/><span className="font-bold">{card?.heading} </span>{card?.para}</p>
                        ))}
                        </div>
                  <div className=" p-6 w-full bg-zinc-50 shadow-lg rounded-xl">
                    <h3 className="mb-3 font-bold text-xl md:text-2xl text-color1">
                      Send Us Message
                    </h3>
          
                    <form action="contact.php" method="POST" className=" w-full mt-6">
                      <div className="w-full flex justify-between flex-wrap gap-y-5">
                        <div className="w-[48%]">
                          <input
                            type="text"
                            required
                            className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                            placeholder="Your Name"
                          />
                        </div>
          
                        <div className="w-[48%]">
                          <input
                            type="email"
                            required
                            className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                            placeholder="Your Email"
                          />
                        </div>
          
                        <div className="w-full">
                          <input
                            type="number"
                            maxLength={15}
                            minLength={7}
                            required
                            className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                            placeholder="Contact No."
                          />
                        </div>
          
                        <div className="w-full">
                          <input
                            type="text"
                            required
                            className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                            placeholder="Subject"
                          />
                        </div>
          
                        <div className="w-full">
                          <textarea
                            rows={4}
                            className="w-full p-3 rounded-md text-base shadow-lg text-zinc-700 border"
                            placeholder="Your Query"
                          ></textarea>
                        </div>
          
                        <button
                          type="submit"
                          className="rounded-lg mb-3 -mt-1 text-white font-bold text-base py-4 px-6 w-max bg-color1 hover:bg-black duration-300"
                        >
                          Submit Now &nbsp;→
                        </button>
                      </div>
                    </form>
                  </div>
                 </div>
              </div>
    </>
  );
};

export default Page;
