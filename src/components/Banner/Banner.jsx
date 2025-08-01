import React, { useContext } from "react";
import Banner1 from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { ThemeContext } from "../../context/ThemeContext";

const Banner = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className="w-full dark:bg-dark-bg transition-colors duration-300">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* image section */}
          <div className="flex flex-col justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={Banner1}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
          </div>
          {/* text section */}
          <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
            <motion.h1
              variants={SlideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-4xl font-bold font-serif dark:text-white"
            >
              We Believe that a team makes any project better
            </motion.h1>
            <motion.p
              variants={SlideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="text-gray-500 dark:text-gray-400 text-sm leading-7"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              earum accusantium tempore nam aliquid{" "}
            </motion.p>
            <div>
              <motion.button
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="primary-btn bg-black dark:bg-white text-white dark:text-black shadow-[5px_5px_0px_0px_#6c6c6c] dark:shadow-[5px_5px_0px_0px_#9d9d9d] transition-colors duration-300"
              >
                Discover Now
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
