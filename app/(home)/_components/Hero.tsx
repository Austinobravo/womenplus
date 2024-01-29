import React from 'react'
import Image from "next/image"
import { Plus } from 'lucide-react'
import FadeInSection from '@/hooks/fade-in'

const Hero = () => {
  return (
    <section className=" flex flex-wrap md:flex-nowrap gap-x-6 px-6 md:pl-16 pb-10 w-full">

                <div className="md:basis-1/2 md:pt-20 text-center md:text-left pt-10 space-y-6">
                <FadeInSection direction="left">
                    <div className="space-y-6 ">
                        <p className='flex justify-center dark:text-white md:justify-start'>Women Plus <Plus size={15} color='green'/></p>
                        
                        <Image src="/fullleaf.webp" width={180} height={100} alt="leaf" className=" absolute pb-10 "/>
                        <div className="md:text-5xl text-3xl font-bold dark:text-white relative ">     
                            <h2 className="leading-snug">
                                The Women's <span className='text-green-700'>Social</span> Club 
                            </h2>
                        </div>
                        <div className='dark:text-white'>
                            <p>
                                A membership-based community & app that encourages and support women owned business! ⁠
                            </p>
                        </div>
                        <div className="bg-green-500 hover:bg-green-400 text-white flex mx-auto md:mx-0 py-2 px-4 rounded-md w-fit cursor-pointer">
                            Learn more
                        </div>
                    </div>
                </FadeInSection>
                </div>

                <div className="md:basis-1/2 flex items-center justify-center mx-auto ">
                <FadeInSection direction="right">
                    <Image src="/hero.jpg" width={400} height={100} alt="Hero image" className='h-[500px] dark:border-2 md:rounded-bl-[100px] rounded-md my-7 md:rounded-tr-[100px]' />
                </FadeInSection>
                </div>

        </section>
  )
}

export default Hero