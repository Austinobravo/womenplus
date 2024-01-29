import FadeInSection from '@/hooks/fade-in'
import { BookHeart, LayoutTemplate, Network, Power, Tv2 } from 'lucide-react'
import React from 'react'

const goals = [
    {
        name: "Connections",
        icon: Network,
        paragraph: "With our Members-Only Meet-Ups happening on WomenPlus App, we're making it easier for women to connect with new friends!"
    },
    {
        name: "Empowerment",
        icon: BookHeart,
        paragraph: "With our Members-Only Meet-Ups happening on WomenPlus App, we're making it easier for women to be empowered!"
    },
    {
        name: "Entrepreneurship",
        icon: Tv2,
        paragraph: "With our Members-Only Meet-Ups happening on WomenPlus App, we're making it easier for women to become entrepreneurs, supporting them along the way!"
    },
]
const Goals = () => {
  return (
    <section className='bg-black/90 dark:bg-white dark:text-black text-white py-5 px-6 md:px-32'>
        <div className='flex flex-wrap md:flex-nowrap space-y-8 md:space-y-0 gap-x-7  items-center justify-between py-5'>
            {goals.map((goal, index)=> {
                const Icon = goal.icon
                return(
                    <>
                    
                        <FadeInSection direction={`${goal.name === "Connections" ? "left": goal.name === "Empowerment" ? "up" : goal.name==="Entrepreneurship" && "right"}`}>
                            <div key={index} className='space-y-4 shadow-md hover:shadow-2xl px-4 py-2 md:h-60 items-center md:w-[250px]' >
                                <div className='bg-white dark:bg-black rounded-full p-2 w-fit'>
                                    <Icon color='gold'/>

                                </div>
                                <div className='space-y-4'>
                                    <h2 className='font-bold text-lg text-amber-500'>{goal.name}</h2>
                                    <p className='text-sm text-justify'>{goal.paragraph}</p>
                                </div>
                            </div>

                        </FadeInSection>
                    </>
                )
            })}

        </div>

        
    </section>
  )
}

export default Goals