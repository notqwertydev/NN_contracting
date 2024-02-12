"use client";
// components/NavBar.js

import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <div className="fixed inset-x-0 z-50 top-4">
        //     <div className="px-8 mx-auto lg:max-w-2xl">
        //         <div className="w-full mx-auto">
        //             <div
        //                 className="relative flex flex-col w-full p-3 mx-auto bg-black/70 ring-1 ring-inset ring-white/10 shadow-thick backdrop-blur-xl backdrop-filter rounded-xl md:rounded-full md:items-center md:justify-between md:flex-row"
        //             >
        //                 <div className="flex flex-row items-center justify-between md:justify-start">
        //                     <a
        //                         href="/"
        //                         className="inline-flex items-center gap-4 ml-2 text-sm font-medium tracking-tighter text-white uppercase hover:text-white/50"
        //                     >
        //                         <svg
        //                             className="h-4"
        //                             viewBox="0 0 2156 278"
        //                             fill="none"
        //                             xmlns="http://www.w3.org/2000/svg"
        //                         ></svg>
        //                     </a>
        //                     <button
        //                         onClick={() => setIsOpen(!isOpen)}
        //                         className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-accent-300 focus:outline-none focus:text-white md:hidden"
        //                     >
        //                         <svg
        //                             className="w-6 h-6"
        //                             stroke="currentColor"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 className={isOpen ? 'hidden' : 'inline-flex'}
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             ></path>
        //                             <path
        //                                 className={isOpen ? 'inline-flex' : 'hidden'}
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M6 18L18 6M6 6l12 12"
        //                             ></path>
        //                         </svg>
        //                     </button>
        //                 </div>
        //                 <nav
        //                     className={`${isOpen ? 'flex' : 'hidden'
        //                         } md:flex md:items-end justify-center md:flex-row`}
        //                 >
        //                     <ul className="items-center justify-center gap-3 space-y-2 text-sm text-center text-white list-none md:space-y-0 md:ml-auto md:inline-flex md:text-left lg:gap-6">
        //                         <li>
        //                             <a href="#work" className="hover:text-accent-400">
        //                                 Work
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a href="#how" className="hover:text-accent-400">
        //                                 How it works
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a href="#pricing" className="hover:text-accent-400">
        //                                 Pricing
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a href="#faq" className="hover:text-accent-400">
        //                                 Faq
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a
        //                                 href="https://app.monomod.studio/sign-in"
        //                                 className="inline-flex items-center justify-center w-auto h-8 px-4 py-2 text-sm text-white duration-200 border border-transparent rounded-full focus:ring-2 bg-white/5 hover:bg-transparent focus:ring-offset-2 focus:ring-white hover:text-white ring-1 ring-white/10"
        //                             >
        //                                 Log in
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </nav>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <section className="fixed relative z-50 w-full overflow-hidden backdrop-blur-2xl">
            <div className="relative w-full mx-auto max-w-7xl">
                <div className="relative flex flex-col w-full px-8 py-5 mx-auto md:items-center md:justify-between md:flex-row ">
                    <div className="flex flex-row items-center justify-between text-white lg:justify-start">
                        <a href="/" className="inline-flex items-center ">
                           
                            <span className="text-xl font-bold uppercase">NN</span>
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
                        <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white lg:ml-auto" href="/">
                            About
                        </a>
                        <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white" href="/system/styleguide">
                            Team
                        </a>
                        <a className="px-2 py-2 text-sm font-normal text-white lg:px-6 md:px-3 hover:text-white" href="/system/styleguide">
                            Projects
                        </a>
                        <a
                            href="/"
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
