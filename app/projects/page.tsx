"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/magicui/lamp";
import ProjectsGrid from "@/components/projectsPage/projects";
import { StickyScroll } from "@/components/magicui/sticky-scroll-reveal";
import { LayoutGrid } from "@/components/magicui/layout-grid";
import Companies from "@/components/Companies";





export default function Projects() {
    return (
        <div className="w-full pt-24 mx-auto md:pt-20 max-w-7xl">
            <Companies />
        </div>
    



    )
}


