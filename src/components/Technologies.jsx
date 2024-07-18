import { TbBrandPython } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { motion } from 'framer-motion';

const animate = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-3xl lg:text-5xl font-semibold tracking-wider">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-cener justify-center gap-4">
        <motion.div
          variants={animate(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandPython className="text-7xl text-cyan-600" />
        </motion.div>
        <motion.div
          variants={animate(3)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiDjango className="text-7xl text-green-800" />
        </motion.div>
        <motion.div
          variants={animate(5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl" />
        </motion.div>
        <motion.div
          variants={animate(3.5)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4" >
          <SiTensorflow className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={animate(2)}
          initial="initial"
          animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiOpencv className="text-7xl text-red-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies