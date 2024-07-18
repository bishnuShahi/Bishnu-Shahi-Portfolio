import { PROJECTS } from "../constants"
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

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-3xl lg:text-5xl font-semibold tracking-wider">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-20 flex flex-wrap lg:justify-center items-center">
            <div className="w-full lg:w-1/4 justify-center flex mb-4">
              <div className="w-full h-full lg:w-[16rem] lg:h-[9rem] lg:mr-6">
                <motion.img
                  variants={container(0, -100)}
                  initial="hidden"
                  whileInView="visible"
                  src={project.image}
                  alt={project.title}
                  className="h-full mb-6 rounded w-full lg:mt-3"
                />
              </div>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.a
                variants={container(0, 100)}
                initial="hidden"
                whileInView="visible"
                className="mb-2 font-semibold hover:text-orange-400 duration-300" href={project.link} target="_blank">
                {project.title}
              </motion.a>
              <motion.p
                variants={container(0, 100)}
                initial="hidden"
                whileInView="visible"
                className="mb-2 text-neutral-400">
                {project.description}
              </motion.p>
              <motion.div
                variants={container(0, 100)}
                initial="hidden"
                whileInView="visible"
                className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mt-1  rounded bg-neutral-900 px-1 py-1 text-sm font-medium text-purple-900">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects