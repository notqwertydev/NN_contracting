import About from "@/components/About";
import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <>



      <div className="w-full pt-24 mx-auto md:pt-20 max-w-7xl">

        <Hero />
        <About />
        {/* <Companies /> */}
        <Info />

      </div>







    </>
  );
}
