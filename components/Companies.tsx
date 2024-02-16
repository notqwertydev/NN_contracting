"use client";
import Image from 'next/image';
import MarqueeLogos from './MarqueeLogos';
import { BorderBeam } from './magicui/border-beam';
import Projects from './Projects';
import { LayoutGrid } from './magicui/layout-grid';

import React, { useState } from 'react';

const courses = [
    {
        id: 1,
        imageSrc: '/image1.jpg',
        category: 'Retail',
        title: 'City Center',
        location: "Lebanon",
        client: "Majid Al Futaim ",
        description: "400t Wave like skylight ",
        duration: " 6 Months"
    },
    {
        id: 2,
        imageSrc: '/image2.jpg',
        category: 'Residential',
        title: 'Marina Tower',
        location: "Lebanon",
        client: "CAT ",
        description: "1000t Box fins, Glass cleaning system, Sail super structure ",
        duration: "2 Years"




    },
    {
        id: 3,
        imageSrc: '/image2.jpg',
        category: 'Industrial',
        title: 'Litani Damn',
        location: "Lebanon",
        client: "SETCO ",
        description: "Pressurized submerged tunnels doors ",
        duration: "12 Months"




    },
    {
        id: 4,
        imageSrc: '/image2.jpg',
        category: 'Industrial',
        title: 'Litani Damn',
        location: "Lebanon",
        client: "SETCO ",
        description: "Pressurized submerged tunnels doors ",
        duration: "12 Months"




    },
    {
        id: 5,
        imageSrc: '/image2.jpg',
        category: 'Industrial',
        title: 'Litani Damn',
        location: "Lebanon",
        client: "SETCO ",
        description: "Pressurized submerged tunnels doors ",
        duration: "12 Months"




    },
    // Add more courses as needed
];



function Companies() {

    const [selectedCategory, setSelectedCategory] = useState('All');

    // Function to handle category change
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const categories = ['All', 'Retail', 'Residential', 'Industrial', 'Entertainment', 'Spiritual'];
    // Filter courses based on selected category
    const filteredCourses = courses.filter((course) =>
        selectedCategory === 'All' ? true : course.category === selectedCategory
    );

    return (
        <section>
            <div className="p-2 md:p-8">
                <div className="relative items-center w-full p-2 ring-white/10 ring-1 from-white/20 rounded-3xl">
                    <div className="p-2 mx-auto md:p-8 lg:p-10 ring-1 ring-white/10 rounded-2xl shadow-massive">

                        <div>
                            <div className="flex flex-col justify-between mt-6 space-y-3 text-white md:flex-row gap-[3rem]">

                                <div className="md:w-[50%]">
                                    <span className="relative px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-white/10">
                                        Our Projects
                                    </span>
                                    <h1 className="mt-6 text-3xl font-light tracking-tighter text-white lg:text-6xl">
                                        A Portfolio <span className="block text-[#2b669c]">of Prestige</span>
                                    </h1>
                                    <p className="w-full md:w-full">
                                        From retail spaces and residential towers to spiritual and entertainment venues, our portfolio showcases our versatility and commitment to excellence. Each project, a testament to our ability to navigate the complexities of modern engineering and design, reflects our dedication to fulfilling our clients visions without compromise.
                                    </p>
                                </div>



                            </div>

                            <div className="mt-6 space-y-3 text-white">

                                <MarqueeLogos />


                            </div>

                            <div className="flex flex-col justify-between mt-6 space-y-3 text-white md:flex-row gap-[3rem]">
                                {/* Category selection as bubbles */}
                                <div className="flex overflow-x-auto space-x-4 scrollbar-hide no-visible-scrollbar">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-[#2b669c] text-white' : 'bg-transparent text-white border-white'}`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className='grid items-center grid-cols-1 gap-12  lg:grid-cols-2 rounded-2xl  mt-8'>
                                {filteredCourses.map((course) => (
                                    <div key={course.id} className=" backdrop-blur-2xl p-4 rounded-2xl shadow-massive ring-white/10 ring-1  flex flex-col h-full justify-between">
                                        <div>
                                            <div className="inline-flex justify-between items-center  w-full">
                                                <div>
                                                    <Image className=" w-full rounded-lg " src={course.imageSrc} alt={course.description} width={500} height={150} />
                                                </div>
                                            </div>
                                            <div className="order-first mt-4">
                                                <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs text-black ring-1 ring-inset ring-white/10">{course.category}</span>
                                                <p className="text-xl mt-2 font-display text-white lg:text-2xl">{course.title}</p>
                                            </div>
                                            <p className="mt-2 text-md ">
                                                {course.location}<br />
                                                {course.client}<br />
                                                {course.duration}<br />
                                                {course.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>





                    </div>
                </div>

            </div>
        </section>
    );
}

export default Companies;




