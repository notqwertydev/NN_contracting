import { cn } from "@/utils/cn";
import Marquee from "@/components/magicui/marquee";

const logos = [
    {
        name: "ABC",
        img: "/logos/abc.png",
    },
    {
        name: "AUB",
        img: "/logos/aub.png",
    },
    {
        name: "B018",
        img: "/logos/b018.png",
    },
    {
        name: "Bentley",
        img: "https://cdn.simpleicons.org/bentley/fff",
    },
    {
        name: "Cat Group",
        img: "/logos/catgroup.png",
    },
    {
        name: "City Centre",
        img: "/logos/citycentre.png",
    }
    ,
    {
        name: "Four Seasons",
        img: "/logos/fourseasons.png",
    },
    {
        name: "Kharafi",
        img: "/logos/kharafi.svg",
    },
    {
        name: "Lamborghin",
        img: "https://cdn.simpleicons.org/lamborghini",
    },
    {
        name: "LinkedIn",
        img: "/logos/mitsulift.png",
    },
    {
        name: "Twitter",
        img: "/logos/shindler.png",
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
            <Marquee pauseOnHover={false} className="[--gap:3rem]">
                {logos.map((logo, idx) => (
                    <Logo key={idx} {...logo} />
                ))}
            </Marquee>

        </div>
    );
};

export default MarqueeLogos;
