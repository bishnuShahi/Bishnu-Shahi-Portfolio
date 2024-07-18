import { CONTACT } from "../constants"
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-6">
        <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                 className="my-[5rem] text-center text-4xl">Contact
            <span className="text-red-600"> Me</span>
        </motion.h2>
        <motion.div
         whileInView={{opacity: 1, x:0}}
         animate={{opacity: 0, x: -100}}
         transition={{duration: 1}}
         className="flex flex-col justify-center items-center text-center mb-[4rem]">
          <h6 className="my-2">{CONTACT.address}</h6>
          <h6 className="my-2">{CONTACT.phoneNo}</h6>
          <a href={`mailto:${CONTACT.email}`} className="my-2 inline-block hover:text-blue-600  duration-300">
            {CONTACT.email}
          </a>
        </motion.div>
    </div>
  )
}

export default Contact