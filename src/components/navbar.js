"use client"
import Link from "next/link";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { useRef } from "react";
// import NavbarsecondPart from "./navbarsecondpart";
export default function Navbar() {
    const togglecart = () => {
        if (ref.current.classList.contains('-translate-x-full')) {
            ref.current.classList.remove('-translate-x-full');
            ref.current.classList.add('-translate-x-0');
            ref.current.classList.add('left-2');
        }
        else if (!ref.current.classList.contains('-translate-x-full')) {
            ref.current.classList.remove('-translate-x-0');
            ref.current.classList.remove('left-2');
            ref.current.classList.add('-translate-x-full');
        }
    }
    const ref = useRef();
    return (<>
        <div className="  h-[8vh] lg:h-[10vh] flex justify-between max-w-[100vw] items-center bg-gray-800 shadow-xl ">


            {/* On all button presss */}
            <div ref={ref} className="rounded-lg top-14 ml-0  z-20 overflow-y-scroll  bg-gray-600 absolute -translate-x-full no-scrollbar  ">
                <h2 className='font-black text-black text-2xl mr-10 px-6  text-center mt-1 ' >Cources</h2>
                <span onClick={togglecart} className='absolute top-0 p-2 bg-white rounded-lg right-0 text-2xl mr-0 mt-0  cursor-pointer text-black'><AiFillCloseCircle /></span>
                <hr className="text-black" />
                <div className="z-20 ml-3 md:ml-6 mt-3">
                <ul className="flex items-start flex-col ">
                    <li><Link legacyBehavior href={'/'}><a onClick={togglecart} className=" text-white text-xl m-4 md:m-2" >Home</a></Link></li>
                    <li><Link legacyBehavior href={'/CSIT'}><a onClick={togglecart} className="flex   text-xl m-4 ml-3 text-white" >CSIT</a></Link></li>
                    <li><Link legacyBehavior href={'/BCA'}><a onClick={togglecart} className="flex  text-xl m-4 ml-3 text-white">BCA</a></Link></li>
                    <li><Link legacyBehavior href={'/BIT'}><a onClick={togglecart} className="flex  text-xl m-4 ml-3 text-white">BIT</a></Link></li>
                    {/* <li><Link legacyBehavior href={'/product'}><a className="hidden sm:flex hover:text-white  text-xl m-4 text-gray-300">More</a></Link></li> */}

                </ul>
            </div>
            </div>


            {/* this is second part of header */}
            <div className="z-20 ml-3 md:ml-6">
                <ul className="flex items-center ">
                    <li className=" flex md:hidden text-white text-xl md:m-2 m-2 ml-4  hover:text-gray-500" onClick={togglecart}><VscThreeBars /></li>
                    <li><Link legacyBehavior href={'/'}><a className=" hover:text-white  text-gray-300 text-xl m-4 md:m-2" >Home</a></Link></li>
                    <li><Link legacyBehavior href={'/CSIT'}><a className="hidden md:flex hover:text-white  text-xl m-4 text-gray-300" >CSIT</a></Link></li>
                    <li><Link legacyBehavior href={'/BCA'}><a className="hidden md:flex hover:text-white  text-xl m-4 text-gray-300">BCA</a></Link></li>
                    <li><Link legacyBehavior href={'/BIT'}><a className="hidden md:block hover:text-white  text-xl m-4 text-gray-300">BIT</a></Link></li>
                    {/* <li><Link legacyBehavior href={'/product'}><a className="hidden sm:flex hover:text-white  text-xl m-4 text-gray-300">More</a></Link></li> */}
                </ul>
            </div>

            {/* This is sinin and search button of header */}
            {/* <NavbarsecondPart /> */}



        </div>
    </>)
}