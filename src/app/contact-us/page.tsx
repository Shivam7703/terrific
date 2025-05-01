import AllBanner from '@/components/banner'
import Form from '@/components/contact/form'
import Contactsec1 from '@/components/contact/section1'
import { contactBanner, contactsec1 } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <>
       <AllBanner img={contactBanner?.img}
                  title={contactBanner?.title} slug={contactBanner?.slug} para={"lorem isit amet consectetur adipisicing elit. Eveniet enim nihil expedita voluptas quidem dolorem eligendi, praesentium perferendis fugiat perspiciatis."}/>
                  <Contactsec1/>
                  <Form contactdata ={contactsec1}/>
    </>
  )
}

export default page
