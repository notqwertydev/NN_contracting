"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    title: string;
    category:string;
    className: string;
    thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 ">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden",
                            selected?.id === card.id
                                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-white rounded-xl h-full w-full"
                                    : "bg-white rounded-xl h-full w-full"
                        )}
                        layout
                    >
                        {selected?.id === card.id && <SelectedCard selected={selected} />}
                        <BlurImage card={card} />
                        {/* write the title on the botoom left */}

                        {selected?.id !== card.id && (
                            <div className="absolute bottom-0 left-0 p-4">
                                <p className="text-white text-2xl font-bold p-4">
                                    {card.title}
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0.3 : 0 }}
            />
        </div>
    );
};

const BlurImage = ({ card }: { card: Card }) => {
    const [loaded, setLoaded] = useState(false);
    return (

        <Image
            src={card.thumbnail}
            height="500"
            width="500"
            onLoad={() => setLoaded(true)}
            className={cn(
                "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
                loaded ? "blur-none" : "blur-md"
            )}
            alt="thumbnail"
        />
    );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
        <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                className="absolute inset-0 h-full w-full z-10"
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="relative px-8 pb-4 z-[70]"
            >
                {/* {selected?.content} */}
                <div>
                    <p className="font-bold text-4xl text-white">{selected?.title}</p>
                    <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs text-black ring-1 ring-inset ring-white/10">{selected?.category}</span>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        A serene and tranquil retreat, this house in the woods offers a peaceful
                        escape from the hustle and bustle of city life.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
