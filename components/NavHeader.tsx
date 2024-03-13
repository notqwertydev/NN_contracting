"use client";
// components/NavBar.js

import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (


        <section className="fixed top-0 z-50 w-full backdrop-blur-2xl">
            <div className="relative w-full mx-auto max-w-7xl">
                <div className="relative flex flex-col w-full px-2 md:px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row ">
                    <div className="flex flex-row items-center justify-between text-white lg:justify-start">
                        <a href="/" className="inline-flex items-center ">

                            {/* <span className="text-xl font-bold uppercase">NN</span> */}
                            <img src="/logo.png" alt="NN Logo" className="h-[3rem]  object-contain" />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-white hover:text-indigo-400 focus:outline-none focus:text-white md:hidden"
                        >
                            <svg className="w-6 h-6" stroke="white" fill="none" viewBox="0 0 24 24">
                                <path className={isOpen ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                <path className={isOpen ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className={`flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row ${isOpen ? 'flex' : 'hidden'}`}>
                        <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white lg:ml-auto" href="/#about">
                            About
                        </a>

                        <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white" href="/projects">
                            Projects
                        </a>
                        <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white" href="/gallery">
                            Gallery
                        </a>
                        <a
                            href="/#contact"
                            className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-8 ring-1 ring-inset ring-white/10"
                        >
                            Contact
                        </a>
                    </nav>
                </div>
            </div >
        </section >
    );
};

export default Header;
