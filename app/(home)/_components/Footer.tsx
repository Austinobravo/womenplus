import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

const listLinks =[

    {
        title:"Legal Notice",
        link:"/"
        
    },
    {
        title:"Terms of Use",
        link:"/"
        
    },
    {
        title:"Privacy Notice",
        link:"/"
        
    },

    {
        title:"Additional Information",
        link:"/"
        
    },

]

const socialIcons =[
    {
        icon: Facebook,
        href: "/"
    },
    {
        icon: Twitter,
        href: "/"
    },
    {
        icon: Linkedin,
        href: "/"
    },
    {
        icon: Youtube,
        href: "/"
    },
]

const Footer = () => {
  return (
    <section className='bg-black/90 text-amber-500'>
        <div className='flex flex-wrap md:flex-nowrap px-10'>
            <div className='flex flex-col basis-2/3'>
                <div className='py-5 w-fit'>
                    <Image src={`/logo-black.svg`} width={100} height={20} alt='logo'/>
                </div>
                <div>
                    <ul className='flex flex-wrap flex-col md:flex-row md:flex-nowrap gap-2  font-bold text-xs'>
                        {listLinks.map((link, index)=> (
                            <Link key={index} href={link.link}>
                                <li >{link.title}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='py-7 space-y-2 md:items-center flex flex-col   md:ml-auto '>
                <p className='font-bold text-sm'>Follow Us</p>
                <div className='flex gap-2 items-center'>
                {socialIcons.map((list, index)=> {
                    const Icon = list.icon
                    return (
                        <div key={index} className='hover:border px-2 py-1 rounded-md border-white w-fit '>
                        <Link href={list.href} className=''>
                            <Icon color='#aaa' size={30}/>
                        </Link>
                        </div>
                    )
                })}

                </div>
            </div>

        </div>
        <div className='flex  justify-center py-4'>
            <p className='text-white/40'>{new Date().getFullYear()} &copy; - All rights reserved</p>
        </div>
        
    </section>
  )
}

export default Footer