import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile-image-2.jpeg";
import { motion } from 'framer-motion';

const container = (delay, x) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-5">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0, -100)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-thin tracking-light lg:mt-16 lg:text-7xl">Bishnu Shahi</motion.h1>
                        <motion.span
                            variants={container(0.5, -100)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Python Developer</motion.span>
                        <motion.p
                            variants={container(1, -100)}
                            initial="hidden"
                            animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tight"><strong>{HERO_CONTENT}</strong></motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        variants={container(1.2, 100)}
                        initial="hidden"
                        animate="visible" className="flex justify-center">
                        <img className="h-auto w-auto rounded-lg shadow-xl dark:shadow-gray-800" src={profilePic} alt="Profile Pic" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero