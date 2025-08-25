import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", 
    "About", 
    "Services", 
    "Pricing", 
    "Contact"
]
export function Nav({ onClickShoppingBtn }) {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (
        <nav className="relative z-10 flex flex-wrap items-center justify-between"> 

            {/* Logo */}
            <a href = "#">
                <NikeLogo className="h-20 w-20 dark:fill-white" />
            </a>

            {/* Burger Button */}
            <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className={`dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden outline outline-2 outline-gray-300 outline-offset-2 rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200`}>
                <RxHamburgerMenu size={25} />
            </button>

            { /* Menu List */}
            <div className={`${!isMobileMenuShown && 'hidden'} w-full lg:w-auto lg:block`}>
                <ul className="lg:space-x-8 flex flex-col lg:flex-row rounded-lg border bg-gray-50 lg:bg-transparent border-gray-100 lg:border-none p-4 text-lg lg:dark:text-white">
                    {ROUTES.map((route, i) => {
                        return (
                            <li 
                                className={`lg:hover:text-blue-500 lg:hover:bg-transparent cursor-pointer rounded px-3 py-2 ${
                                    i === 0 
                                        ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500' 
                                        : "hover:bg-gray-100"
                                } ${i==3 || i==4 ? "lg:text-white" : ""}`} 
                                key={route}
                                >
                                    {route}
                                </li>
                        );
                    })}
                </ul>
            </div>

            {/* Cart Button */}
            <div onClick={onClickShoppingBtn} className="btn-press-anim fixed left-4 bottom-4 lg:static ">
                <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
                    <TbShoppingBag />
                </div>
            </div>
        </nav>
    );
}