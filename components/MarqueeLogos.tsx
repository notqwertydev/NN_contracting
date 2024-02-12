import { cn } from "@/utils/cn";
import Marquee from "@/components/magicui/marquee";

const logos = [
    {
        name: "Microsoft",
        img: "https://cdn.simpleicons.org/microsoft/fff",
    },
    {
        name: "Apple",
        img: "https://cdn.simpleicons.org/apple/fff",
    },
    {
        name: "Google",
        img: "https://cdn.simpleicons.org/google/fff",
    },
    {
        name: "Facebook",
        img: "https://cdn.simpleicons.org/facebook/fff",
    },
    {
        name: "LinkedIn",
        img: "https://cdn.simpleicons.org/linkedin/fff",
    },
    {
        name: "Twitter",
        img: "https://cdn.simpleicons.org/twitter/fff",
    }
    ,
    {
        name: "Apple",
        img: "https://cdn.simpleicons.org/apple/fff",
    },
    {
        name: "Google",
        img: "https://cdn.simpleicons.org/google/fff",
    },
    {
        name: "Facebook",
        img: "https://cdn.simpleicons.org/facebook/fff",
    },
    {
        name: "LinkedIn",
        img: "https://cdn.simpleicons.org/linkedin/fff",
    },
    {
        name: "Twitter",
        img: "https://cdn.simpleicons.org/twitter/fff",
    },
];

const Logo = ({ name, img }: { name: string; img: string }) => {
    return (
        <div className={cn("h-12 w-12 cursor-pointer")}>
            <img src={img} alt={name} />
        </div>
    );
};

const MarqueeLogos = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full gap-4 py-20 overflow-hidden rounded-lg md:shadow-2xl ">
            <Marquee pauseOnHover={true} className="[--gap:3rem]">
                {logos.map((logo, idx) => (
                    <Logo key={idx} {...logo} />
                ))}
            </Marquee>

        </div>
    );
};

export default MarqueeLogos;
