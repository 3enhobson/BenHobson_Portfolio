import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import Button from './button';


function Navbar() {
    const links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "PROJECTS", link: "/projects" }
    ];
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className="lg:flex items-center justify-between bg-tertiary py-4 sm:px-10 px-7">
                <div className='font-bold text-2xl cursor-pointer  items-center text-white'>
                    BH
                </div>
                <ul className='lg:flex lg:items-center'>
                    {
                        links.map((link) => (
                            <li key={link.name} className="px-5 ">
                                <a href={link.link} className='hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar