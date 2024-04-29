"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="p-2 md:p-8">
      <div className=" w-full
       flex flex-col items-center md:flex-row md:items-end justify-center
       
       gap-[5rem] md:gap-[10rem]
       ">
        {/* left side */}
        <div className="flex flex-col items-start justify-start gap-[3rem]">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Engineering <br />
              Excellence
              <br /> in Every Structure
            </motion.h1>
          </div>
          <div className="flex flex-col items-start justify-start text-white-100 flexhero-des">
            Unveil the future of engineering with N.N Engineering & Contracting. Specializing in steel, stainless steel, and glass, we bring over 30 years of expertise to every project. Our dedication to precision, durability, and aesthetics ensures your vision is crafted into reality with unmatched quality.
          </div>
          {/* <div className="flex flex-col items-start justify-start secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div> */}

          {/* <SearchBar/> */}

          <div className="flex gap-3 stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Projects</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={30} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Years of experience</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={100} /> <span>%</span>
              </span>
              <span className="secondaryText">Client satisfaction</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center justify-center hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="/image1.jpg" alt="houses"
            style={{
              objectFit:"cover",
              objectPosition:"center"
            }}
            
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;