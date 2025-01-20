import PackageBanner from '@/components/global/banner'
import React from 'react';
import { packagedata } from '@/data/packages';
import Packagedetail from '@/components/package/packagedetails';

function page() {
  return (
    <>
      <PackageBanner img={packagedata?.thailand?.img}
      title={packagedata?.thailand?.title} slug={packagedata?.thailand?.slug}/>
    <Packagedetail/>
    </>
  )
}

export default page
