import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaXmark, FaBars} from "react-icons/fa6"
import {GrTechnology} from 'react-icons/gr'


export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {
            link: 'Home',
            path: '/'
        },
        {
            link: 'About',
            path: '/about'
        },
        {
            link: 'Services',
            path: '/services'
        },
        {
            link: 'Contact',
            path: '/contact'
        },
    ];

    return(
        <header className="w-full bg-white fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4 `}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="" className="text-3xl font-semibold flex items-center space-x-3">
                        <GrTechnology className="w-10 inline-block items-center " />
                        <span className="text-brandPrimary"><Link to="/">WEBWORKS</Link></span></a>
                        <ul className="md:flex space-x-12 hidden ">
                            {
                                navItems.map(({link, path}) => <Link to={path} key={path} className="block text-base text-gray-900 hover:text-brandSecondary first:font-medium cursor-pointer">{link}</Link>)
                            }
                        </ul>        

                        {/* Menu for mobile devides */}
                        <div className="md:hidden">
                            <button 
                            onClick={toggleMenu}
                            className="text-neutralDGrey focus:outline-none focus:text-gray-500">
                                {
                                    isMenuOpen ? (<FaXmark className="h-6 w-6 text-brandPrimary"/>) : (<FaBars className="h-6 w-6 text-brandPrimary"/>)
                                }
                            </button>

                        </div>
                </div>
                

                {/* nav items mobile device */}
                { /* this class isnt working properly */ }
                <div className= {`space-y-10 px-4 py-36 mt-16 bg-brandSecondary ${isMenuOpen ? "flex flex-col items-center fixed top-0 right-0 left-0 h-screen" : "hidden "}`}>
                    {
                        navItems.map(({link, path}) => 
                        <button>
                        <Link onClick={toggleMenu}
                            to={path} 
                            key={path}
                            className="nav-item block text-2xl text-white after">
                                {link}
                            </Link>
                        </button>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}