"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { FreeMode, Pagination } from "swiper/modules";
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
        category: 'Retail',
        title: 'Altavista Tower',
        location: "Lebanon",
        client: "CAT ",
        description: "200t sail super structure facing ",
        duration: "6 months"




    },
    {
        id: 3,
        imageSrc: '/image2.jpg',
        category: 'Residential',
        title: 'Marina Tower',
        location: "Lebanon",
        client: "CAT ",
        description: "1000t Box fins, Glass cleaning system, Sail super structure",
        duration: "2 Years"




    },
    {
        id: 4,
        imageSrc: '/image2.jpg',
        category: 'Residential',
        title: 'Villa Jaber',
        location: "Lebanon",
        client: "Philipe Jaber ",
        description: "50t corten exo skeleton",
        duration: "5 Months"




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

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstItem = currentIndex === 0;
        const newIndex = isFirstItem ? courses.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastItem = currentIndex === courses.length - 1;
        const newIndex = isLastItem ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const course = courses[currentIndex];


    return (
        <div className="mt-8 p-8 flex justify-center">
            {/* 
            <div className="grid grid-cols-1 mt-12 list-none md:grid-cols-3 gap-2 lg:mt-24 relative " role="list">
                {courses.map((course) => (
                    <div key={course.id} className=" backdrop-blur-2xl p-4 rounded-2xl shadow-massive ring-white/10 ring-1 flex flex-col h-full justify-between">
                        <div>
                            <div className="inline-flex justify-between items-center  w-full">
                                <div>
                                    <Image className=" w-full rounded-lg " src={course.imageSrc} alt={course.description} width={500} height={150} />
                                </div>

                            </div>
                            <div className="order-first mt-4">
                                <span className="inline-flex items-center rounded-md bg-vanta-800 px-2 py-1 text-xs text-white ring-1 ring-inset ring-white/10">{course.category}</span>
                                <p className="text-lg mt-2 font-display text-white lg:text-xl">{course.title}</p>
                            </div>
                            <p className="mt-2 text-sm ">
                                {course.location}<br />
                                {course.client}<br />
                                {course.duration}<br />


                                {course.description}

                            </p>
                        </div>

                    </div>
                ))}
            </div> */}



            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[90%] p-2"
            >
                <CarouselContent>
                    {courses.map((course, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 m-1 ">
                            <div key={course.id} className=" backdrop-blur-2xl p-4 rounded-2xl shadow-massive ring-white/10 ring-1  flex flex-col h-full justify-between">
                                <div>
                                    <div className="inline-flex justify-between items-center  w-full">
                                        <div>
                                            <Image className=" w-full rounded-lg " src={course.imageSrc} alt={course.description} width={500} height={150} />
                                        </div>

                                    </div>
                                    <div className="order-first mt-4">
                                        <span className="inline-flex items-center rounded-md bg-vanta-800 px-2 py-1 text-xs text-white ring-1 ring-inset ring-white/10">{course.category}</span>
                                        <p className="text-lg mt-2 font-display text-white lg:text-xl">{course.title}</p>
                                    </div>
                                    <p className="mt-2 text-sm ">
                                        {course.location}<br />
                                        {course.client}<br />
                                        {course.duration}<br />


                                        {course.description}

                                    </p>
                                </div>

                            </div>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Projects;
