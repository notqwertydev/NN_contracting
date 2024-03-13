import { cn } from "@/utils/cn";
import Marquee from "@/components/magicui/marquee";

export default function Logos() {
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
    },
    {
      name: "Four Seasons",
      img: "/logos/fourseasons.png",
      color: "white",
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

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900"></h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="col-span-2 max-h-24 w-auto object-contain lg:col-span-1"
              src={logo.img}
              alt={logo.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
