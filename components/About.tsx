import { motion } from "framer-motion";
import AvatarGrid from "./AvatarGrid";

function About() {
    return (
        <section id="about" className="p-2 md:p-8">
            <div className="relative  items-center w-full p-2 ring-white/10 ring-1 from-white/20 rounded-3xl">
                <div className="p-2 mx-auto md:p-8 lg:p-10 ring-1 ring-white/10 rounded-2xl shadow-massive">
                    <div>
                        <span className="relative px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-white/10">
                            About us
                        </span>
                        <h1 className="mt-6 text-3xl font-light tracking-tighter text-white lg:text-6xl">
                            Our Legacy <span className="block text-[#2b669c]">of Innovation</span>
                        </h1>
                        <div className="mt-6 space-y-3 text-white">
                            <p>
                                At N.N Engineering & Contracting, we pride ourselves on a rich history of delivering complex, state-of-the-art structures across the globe. Our expertise spans across skylights, staircases, domes, and more, with each project tailored to meet the precise needs of our clients. With a comprehensive A-to-Z solution, we ensure a seamless process from technical studies to the final installation, embodying excellence every step of the way.
                            </p>
                        </div>




                        <div className="flex flex-col items-center justify-between mt-6 space-y-3 text-white md:flex-row gap-[3rem]">
                            <div
                                className="image-container"
                            >
                                <img src="/image2.jpg" alt="houses"
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}

                                />
                            </div>
                            <div className="md:w-[50%]">
                                <span className="relative px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-white/10">
                                    Our Expertise
                                </span>
                                <h1 className="mt-6 text-3xl font-light tracking-tighter text-white lg:text-6xl">
                                    A Symphony <span className="block text-[#2b669c]">of Skills</span>
                                </h1>
                                <p className="w-full md:w-full">
                                    Our team, a diverse group of structural engineers, designers, project managers, and skilled craftsmen, is at the heart of our success. We blend innovation with tradition, creating steel structures that are not only functional but also masterpieces of engineering artistry. Trust us to bring your vision to life with unparalleled precision and quality.
                                </p>
                            </div>



                        </div>
                        <div className="mt-12 center">
                                <p className="w-full md:w-full">
                                    <AvatarGrid/>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
