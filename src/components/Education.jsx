import { EDUCATION } from "../constants"
import { GoPaperclip } from "react-icons/go";
import { motion } from 'framer-motion';

const container = (delay, x) => ({
    hidden: { x: x, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-3xl lg:text-5xl font-semibold tracking-wider">Education</motion.h2>
            <div>
                <div>
                    {EDUCATION.map((education, index) => (
                        <div key={index} className="mb-10 flex flex-wrap text-[13px] lg:text-2xl">
                            <div className="flex flex-col w-1/2">
                                <motion.div
                                    variants={container(0, -100)}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="font-bold  my-1">
                                    {education.college}
                                </motion.div>
                                <motion.div
                                    variants={container(0.2, -100)}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="font-light">
                                    {education.degree}
                                </motion.div>
                                <motion.div
                                    variants={container(0.4, -100)}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="font-light mt-2">
                                    CGPA: {education.cgpa}
                                </motion.div>
                            </div>
                            <div className="flex flex-col w-1/2 text-right italic text-[12px]">
                                <motion.div
                                    variants={container(0, 100)}
                                    initial="hidden"
                                    whileInView="visible"
                                    className="my-1">
                                    {education.place}
                                </motion.div>
                                <motion.div
                                    variants={container(0.2, 100)}
                                    initial="hidden"
                                    whileInView="visible">
                                    {education.timeline}
                                </motion.div>
                            </div>

                            <motion.div
                                variants={container(0.6, -100)}
                                initial="hidden"
                                whileInView="visible"
                                className="flex my-3 w-3/5 flex-wrap lg:w-2/5">
                                {education.skills.map((skill, index) => (
                                    <div key={index} className="bg-indigo-900 text-[12px] lg:text-[1.2rem] m-1 px-2 rounded text-neutral-100">{skill}</div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education