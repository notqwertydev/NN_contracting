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
      name: "City Centre",
      img: "/logos/creditlibanis.png",
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
      name: "Mitsulift",
      img: "/logos/mitsulift.png",
    },
    {
      name: "Shindler",
      img: "/logos/shindler.png",
    },
  ];

  return (
    <div className="py-19 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
          {logos.map((logo, index) => (
            <div key={index} className="bg-gray-400/5 p-6 sm:p-10">
              <img
                className="max-h-28 w-full object-contain"
                src={logo.img}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
