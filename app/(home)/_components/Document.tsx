import React from 'react'
import Image from 'next/image'
import { BookmarkPlusIcon, Building2, Dog, HandCoins, HeartHandshakeIcon, HourglassIcon, ThumbsUp, TrainTrack, User2 } from 'lucide-react'
import FadeInSection from '@/hooks/fade-in'

const items =[
    {
        paragraph: "Financial Support",
        icon: HandCoins
    },
    {
        paragraph: "Tailored Business Solutions",
        icon: BookmarkPlusIcon
    },
    {
        paragraph: "Flexible Networking Options",
        icon: Building2
    },
    {
        paragraph: "Wide Variety of Optional Services",
        icon: HeartHandshakeIcon
    },
]
const nextItems =[
    {
        paragraph: "Great Network",
        icon: ThumbsUp
    },
    {
        paragraph: "Mentorship",
        icon: User2
    },
    {
        paragraph: "Timing motivation",
        icon: HourglassIcon
    },
    {
        paragraph: "Companionship",
        icon: Dog
    },
]
const Document = () => {
  return (
    <section className='md:px-16 px-7 pt-32 pb-40 space-y-20'>
            <FadeInSection direction="left">
                <div className=' flex flex-wrap md:flex-nowrap  space-y-2 relative'>
                        <div className='shadow-2xl rounded-md py-28 px-5 md:w-[600px] w-full md:absolute mt-10  bg-[#bbb]'>
                            <div className='space-y-4 pb-4'>
                                <h2 className='font-bold text-3xl'>Become a corporate partner</h2>
                                <p className='text-2xl  pb-2 '>Corporate Partnership</p>
                                <hr className='w-[100px] border-2 border-amber-400'/>
                                <p className='text-sm'>The Women's Plus Community® (WPC) offers Corporate Partnership options for businesses to include as part of their company perk offerings. </p>
                            </div>
                            
                            <div className='bg-slate-200 py-10 px-5 space-y-5' style={{backgroundImage: `url(/banner.webp)`}}>
                                <h2 className='font-bold text-xl'>What you gain</h2>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                                    {items.map((item, index) => {
                                        const Icon = item.icon 
                                        return (
                                            <div key={index} className='flex  gap-2 items-center'>
                                                <div className='bg-amber-400  py-2 px-4 flex items-center justify-center rounded-md'><Icon size={20}/></div>
                                                <div className='text-black/70 text-xs'>{item.paragraph}</div>       
                                            </div>
                                        )
                                    })}

                                </div>

                            </div>
                        </div>
                    
                        <div className='ml-auto'>
                            <Image src="/WomenSupportingWomenSticker.jpg" width={700} height={1000} alt='delivery' className='md:h-[700px]'/>
                        </div>

                </div>
            </FadeInSection>
            <FadeInSection direction="right">
                <div className=' flex flex-wrap md:flex-nowrap relative'>
                        <div className=''>
                            <Image src="/stronger.webp" width={700} height={1000} alt='delivery' className='md:h-[700px]'/>
                        </div>
                    
                    
                        <div className='shadow-2xl rounded-md py-28 px-5 md:w-[600px] w-full md:absolute mt-10 right-0  bg-[#bbb]'>
                            <div className='space-y-4 pb-4'>
                                <h2 className='font-bold text-3xl'>JOIN OUR COMMUNITY</h2>
                                <p className='text-2xl  pb-2 '>WPC Chapters</p>
                                <hr className='w-[100px] border-2 border-amber-400'/>
                                <p className='text-base'>The Women Plus Community offers multiple ways for women to come together!</p>
                            </div>
                            <div className='bg-slate-200 py-10 px-5 space-y-5' style={{backgroundImage: `url(/banner.webp)`}}>
                                <h2 className='font-bold text-xl'>What you gain</h2>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
                                    {nextItems.map((item, index) => {
                                        const Icon = item.icon 
                                        return (
                                            <div key={index} className='flex  gap-2 items-center'>
                                                <div className='bg-amber-400  py-2 px-4 flex items-center justify-center rounded-md'><Icon size={20}/></div>
                                                <div className='text-black/70 text-xs'>{item.paragraph}</div>       
                                            </div>
                                        )
                                    })}

                                </div>

                            </div>
                        </div>
                </div>
            </FadeInSection>
      
    </section>
  )
}

export default Document
