import { ChevronRight } from 'lucide-react'
import React from 'react'
import Image from "next/image"
import FadeInSection from '@/hooks/fade-in'
const Membership = () => {
  return (
    <section className='py-10 md:px-20 ' style={{backgroundImage: `url(/banner.webp)`}}>
        <Image src="/leaf.webp" width={180} height={100} alt="leaf" className=" absolute pb-10 "/>
        <div className='flex space-y-2 flex-col justify-center items-center text-center '>
            <h2 className='font-bold text-4xl '>Membership</h2>
            <hr className='border-2  w-40 border-amber-500 rounded-full '/>
        </div>
        <FadeInSection direction="up">
            <div className='shadow-2xl text-center space-y-9 text-black py-7 rounded-2xl mt-5 px-12' >
                <h3 className='text-4xl text-amber-500'>Find Out More About Our Membership</h3>
                <p className='text-base'>Our membership option are designed for flexibility with no minimum requirements. Being that part of what we offer are networking opportunities and connection building, we're even partnering with businesses to sponsor memberships for their employees!</p>
                <button className='bg-black flex items-center mx-auto font-bold text-amber-500 py-3 px-7 rounded-md '>Join Us<ChevronRight/></button>
            </div>
        </FadeInSection>
    </section>
  )
}

export default Membership