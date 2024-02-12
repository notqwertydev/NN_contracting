"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";



const Projects = () => {

    const items = [
        { src: '/image1.jpg', rotation: 'rotate-6', title: 'Title 1', content: 'Content 1' },
        { src: '/image2.jpg', rotation: '-rotate-12', title: 'Title 2', content: 'Content 2' },
        { src: '/image3.jpg', rotation: '-rotate-12', title: 'Title 3', content: 'Content 3' },
        { src: '/image1.jpg', rotation: 'rotate-12', title: 'Title 4', content: 'Content 4' },
    ];
    return (
        <div className="flex flex-col items-center justify-center py-20 mt-8 ">
            projects slidehsow
        </div>
    );
};

export default Projects;
