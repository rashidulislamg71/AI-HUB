
import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa';
import { RiRobot2Fill } from "react-icons/ri";

const navData = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "Products",
        path: "/products",
    },
    {
        id: 3,
        name: "Cart",
        path: "/cart",
    },
    {
        id: 4,
        name: "About",
        path: "/about",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];

function NavBar({cartItems}) {

    const itemLinks = navData.map(item => (
        <li key={item.id}><a href={item.path}>{item.name}</a></li>
    ))

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {itemLinks}
                        </ul>
                    </div>
                    <a className="text-xl flex items-center gap-1 font-bold"><RiRobot2Fill className='text-4xl text-green-500' /> AI Hub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center items-center gap-9">
                        {itemLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-8">
                    <div className='relative'>
                        <FaCartArrowDown className='text-2xl' /> <span className='absolute -top-4 left-3 bg-amber-500 px-1.5 rounded-full text-sm font-bold '>{cartItems.length}</span>
                    </div>
                    <a className='btn' href="3">Get Started</a>
                </div>
            </div>
        </div>


    )
}

export default NavBar