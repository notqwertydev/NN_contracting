import Image from 'next/image';
import MarqueeLogos from './MarqueeLogos';
import { BorderBeam } from './magicui/border-beam';
import Projects from './Projects';



function Companies() {
    // Define an array of brand image paths for easy management and rendering
    const brandImages = [
        '/brands/7.svg',
        '/brands/8.svg',
        '/brands/9.svg',
        '/brands/10.svg',
        '/brands/11.svg',
        '/brands/12.svg',
    ];

    return (
        <section>
            <div className="p-8">
                <div className="relative items-center w-full p-2 ring-white/10 ring-1 from-white/20 rounded-3xl">
                    <div className="p-8 mx-auto lg:p-10 ring-1 ring-white/10 rounded-2xl shadow-massive">

                        <div>
                            <span className="relative px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-white/10">
                                Our Partners
                            </span>
                            <h1 className="mt-6 text-3xl font-light tracking-tighter text-white lg:text-6xl">
                                Building <span className="block text-[#2b669c]">together</span>
                            </h1>
                            <div className="mt-6 space-y-3 text-white">
                                <p>
                                    At N.N Engineering & Contracting, our strength lies not just in our own expertise but also in the robust partnerships we&apos;ve built over the years. Collaborating closely with leading architects, construction firms, and suppliers, we ensure that every project benefits from a wide spectrum of skills and resources. These partnerships enable us to tackle complex challenges and innovate continuously, maintaining our commitment to excellence in every structure we bring to life.
                                </p>

                            </div>

                            <div className="mt-6 space-y-3 text-white">

                                <MarqueeLogos />


                            </div>


                            <div className="flex flex-col items-center justify-between mt-6 space-y-3 text-white md:flex-row gap-[3rem]">

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
                                <div
                                    // initial={{ x: "7rem", opacity: 0 }}
                                    // animate={{ x: 0, opacity: 1 }}
                                    // transition={{
                                    //     duration: 2,
                                    //     type: "ease-in",
                                    // }}
                                    className="image-container"
                                >
                                    <img src="/image3.jpg" alt="houses" />
                                </div>




                            </div>


                            <Projects />

                        </div>





                    </div>
                </div>

            </div>
        </section>
    );
}

export default Companies;
