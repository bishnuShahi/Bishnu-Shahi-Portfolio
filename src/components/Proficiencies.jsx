import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { MdDone } from "react-icons/md";
import { motion } from 'framer-motion'

const container = (delay, x) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Proficiencies = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-3xl lg:text-5xl font-semibold tracking-wider">My
                <span className="text-neutral-400"> proficiency</span>
            </motion.h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div
                        variants={container(0, -100)}
                        whileInView="visible"
                        initial="hidden"
                        className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="About" />
                    </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <ul className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT.map((about, index) => (
                                <motion.li
                                    variants={container(1 / 5 * index, 100)}
                                    whileInView="visible"
                                    initial="hidden"
                                    key={index} className="text-1xl py-2 lg:text-2xl lg:ml-14 flex" ><MdDone className="mr-3 my-1" /> {about}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proficiencies