"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import DarkModeButton from "@/components/DarkModeButton"
import { Bitcoin, BookUser, Menu, ShipWheel, Users, X } from "lucide-react"

const leftLinks = [
    {
        name: "About the community",
        href: "/about"
    },
    {
        name: "Contact the community",
        href: "/about"
    },
    {
        name: "Support the community",
        href: "/about"
    },
]
const rightLinks = [
    {
        name: "Become a member",
        href: "/member"
    },
    {
        name: "Login",
        href: "/login"
    },

]
const Navbar = () => {
    const [toggle, setToggle] = React.useState<boolean>(false)
    const [toggleSwitch, setToggleSwitch] = React.useState(false)
    const session = {
        user:{
            role: ""
        }
    }
  return (
    <>
    <nav  className="bg-white fixed w-full text-sm text-black dark:bg-black z-[100] border-b-2 shadow dark:text-white  md:flex hidden items-center px-10 justify-between">
            <div className="flex space-x-2">
                <div >
                    <Link href="/" >
                        <Image src="/logo-color.svg" width={100} height={1} alt="Logo" priority/>
                    </Link>

                </div>
                <div className="flex items-center space-x-7">
                    {leftLinks.map((link,index)=> (
                            <ul key={index}>
                            <Link href={link.href}>
                                <li className='hover:text-amber-500 hover:font-bold'>{link.name}</li>
                            </Link>
                            </ul>
                    ))}
                </div>
            </div>
            <div className="flex space-x-7 items-center">
                <div className="flex items-center space-x-3">
                    {rightLinks.map((link,index)=> (
                            <ul  key={index}>
                            <Link href={link.href}>
                                <li className={`${link.name==="Login" && "bg-amber-500 rounded-full text-white py-2 px-6 "}`}>
                                        <span className={`${link.name==="Become a member" && "hover:text-amber-500"}`}>{link?.name}</span>
                                    </li>
                            </Link>
                            </ul>
                    ))}
                </div>
                <div className="cursor-pointer">
                    <DarkModeButton size={20}/>
                </div>

            </div>

    </nav>
    <nav className={`${toggle && 'h-screen'} md:hidden z-[100] fixed w-full bg-white  text-sm text-black dark:bg-black  border-b-2 shadow dark:text-white`}>
        <div className="flex items-center justify-between w-full px-6">
            <div >
                {!toggle ? 
                    <Link href="/" >
                        <Image src="/logo-color.svg" width={100} height={1} alt="Logo"/>
                    </Link> 
                :
                <div className="border  rounded-full py-1 pr-6 pl-1 cursor-pointer" >
                    <div className=" " style={{transform: `translateX(${toggleSwitch ? 0 : "20px"})`, transition: "transform 0.5s linear"}} onClick={() => setToggleSwitch(!toggleSwitch)}>
                        <DarkModeButton size={17}/>
                    </div>
                </div>
                }

            </div>
            <div className="cursor-pointer">
                {toggle ? 
                <div onClick={() => setToggle(!toggle)} className="p-5">
                    <X size={40}/>  
                </div>
                :
                <div onClick={() => setToggle(!toggle)}>
                    <Menu/>  
                </div>
                }

            </div>

        </div>
        {toggle && (
            <>
            <div className=" px-7 ">
                <div className="flex space-x-4 items-center w-full">
                    <ul className="flex gap-3  w-full">
                    {rightLinks.map((link,index) => (
                            <Link  key={index} href={link.href} className="basis-1/2" onClick={()=> setToggle(!toggle)}>
                                <li className={`${link.name==="Login" && "!bg-amber-400 "} text-base dark:text-white text-center bg-black/50  rounded-md py-2 px-12 w-full dark:bg-white/50`}>
                                    <span >{link.name === "Become a member" ? "Register" : link?.name}</span> 
                                </li>
                            </Link>
                    ))}
                    </ul>
                </div>
                <div className="flex flex-col pt-10 text-lg w-full">
                        <ul>
                        {leftLinks.map((link, index) => (
                            <Link  key={index} href={link.href}  >
                                <li className="flex space-x-2 hover:bg-black/40 hover:rounded-md py-3 px-4 items-center"><span></span> <span>{link.name}</span></li>
                            </Link>
                        ))}
                        </ul>
                </div>
            </div>


            </>
        )}


    </nav>
    </>
  )
}

export default Navbar