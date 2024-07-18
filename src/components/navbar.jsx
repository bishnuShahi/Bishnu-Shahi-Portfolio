import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/logo.png";

const navbar = () => {
  return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-[5rem]" src={logo} alt="logo" />
            </div>
            <div className="n-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/bishnu-shahi/">
                    <FaLinkedin className="hover:text-orange-500 transition duration-300"/>
                </a>
                <a href="https://github.com/bishnuShahi">
                    <FaGithub className="hover:text-blue-800 transition duration-300" />
                </a>
                <a href="https://x.com/not_found5545">
                    <BsTwitterX className="hover:text-cyan-600 transition duration-300" />
                </a>
            </div>
        </nav>
  )
}


export default navbar