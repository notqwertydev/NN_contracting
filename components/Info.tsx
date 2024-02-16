import Image from 'next/image';
import { Mail, MapPin, Phone } from "lucide-react";
import { BackgroundBeams } from './ui/background-beams';

function Info() {

    const courses = [
        {
            id: 1,
            title: 'OFFICE',
            instructor: 'Juan Gutierrez',
            rating: '5.7',
            description: 'Uncover the strategies behind successful digital campaigns, from social media to SEO, and elevate your marketing skills.',
            category: 'Marketing',
            avatarSrc: '/avatars/head1.svg',
        },

        // Add more course objects here as needed
    ];

    return (
        <section id='contact' className='p-2 md:p-8 '>
            <div className="py-12 mx-auto lg:pt-48 lg:pb-24 ">
                <div className="p-2 ring-white/10 ring-1 rounded-3xl  ">
                    <div className="grid items-center grid-cols-1 gap-12 p-2 md:p-8 lg:grid-cols-2 ring-white/10 ring-1 rounded-2xl ">
                        <div>

                            <span className="px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-white/10">
                                Contact
                            </span>
                            <h1 className="mt-6 text-3xl font-light tracking-tighter text-white lg:text-6xl">
                                Contact <span className="text-[#2b669c]">Us</span>
                            </h1>
                            <div className="mt-6 space-y-3 text-white">
                                <p>
                                    {/* text saying that you can click the button to access a contact form */}
                                    Get in touch with us for more information.

                                </p>

                            </div>
                            <div className="flex mt-12">
                                <a href="/" className="rounded-lg px-4 py-2 text-sm transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/10">Contact us</a>
                            </div>
                           
                           

                        </div>
                        <div className="relative">


                            <div className="flex flex-col justify-between w-full h-full p-8 py-20 backdrop-blur-2xl lg:-mt-32 rounded-2xl ring-white/10 ring-1">
                                <div>
                                    <div className="flex flex-col justify-between w-full gap-4">

                                        <div>

                                            <p className="w-full text-lg text-white font-display lg:text-xl">OFFICE</p>
                                        </div>
                                        <div>
                                            <p className="flex flex-row items-center mt-2 text-vanta-300"> <MapPin size="14" /> &nbsp; MAR TAKLA – ABDEL MASSIH CENTER</p>
                                            <p className="flex flex-row items-center mt-2 text-vanta-300"> <Mail size="14" /> &nbsp; INFO@NNENG.CO</p>
                                            <p className="flex flex-row items-center mt-2 text-vanta-300"> <Phone size="14" /> &nbsp; +9611884941</p>
                                            <p className="flex flex-row items-center mt-2 text-vanta-300"> <Phone size="14" /> &nbsp; +9611871632</p>
                                        </div>
                                    </div>


                                </div>

                                <div>
                                    <div className="flex flex-col justify-between w-full gap-4">

                                        <div>

                                            <p className="w-full mt-8 text-lg text-white font-display lg:text-xl">WORKSHOP</p>
                                        </div>
                                        <div>
                                            <p className="flex flex-row items-center mt-2 text-vanta-300"> <MapPin size="14" /> &nbsp; ROUMIEH, INDUSTRIAL ZONE</p>

                                            <p className="flex flex-row items-center mt-2 text-vanta-300"> <Phone size="14" /> &nbsp; +9611902632</p>
                                            <p className="flex flex-row items-center mt-2 text-vanta-300"> <Phone size="14" /> &nbsp; +9613871632</p>
                                        </div>
                                    </div>


                                </div>


                            </div>



                        </div>

                    </div>

                    
                </div>

            </div>


        </section>
    );
}

export default Info;
