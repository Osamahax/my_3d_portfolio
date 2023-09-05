'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { styles } from "@/app/styles"
import { logo, menu, close } from "@/assets"
import { navLinks } from "@/constants"
import Image from "next/image"
const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle,setToggle]=useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex
      items-center py-5 fixed top-0 z-20
      `}
    >
      <div className="w-full flex justify-between items-center
      max-w-7xl mx-auto
      ">
        <Link
          href={"/"}
          className="flex items-center gap-2"
          onClick={()=>{
            setActive('');
            window.scroll(0,0);
          }}
        >
          <Image src={logo} alt="logo" 
          className="w-16 object-contain"
          />
          <p 
          className="text-white text-[18px] font-bold cursor-pointer">Osama 
          <span className="sm:block hidden">| Malik</span></p>
        </Link>
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link)=>(
            <li 
              key={link.id}
              className={`${
                active===link.title 
                ? "text-white" : "text-secondary"
              } hover:text-white text-[18px]
                font-medium cursor-pointer
              `}
              onClick={()=>setActive(link.title)}
            >
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))
          }
        </ul>
        <div className="sm:hidden flex flex-1 justify-end
        items-center">
          <Image 
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain
          cursor-pointer"
          onClick={()=>setToggle(!toggle)}
          />

        </div>
      </div>
    </nav>
  )
}

export default Navbar