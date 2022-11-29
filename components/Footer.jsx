import Link from "next/link"
import {BsInstagram,BsGithub,BsLinkedin} from "react-icons/bs"
import {motion} from "framer-motion"
import TypeWriter from "typewriter-effect"
const Footer = () => {
  return (
    <motion.div
        // initial={{opacity:0, x: 100}}
        // whileInView={{opacity:1, x: 0}}
        // transition={{duration: 1}}
    className="bg-secondary text-white w-full grid grid-rows-1 grid-flow-col py-6 px-8 border-b-4 md_max:hidden md_max:grid-rows-2 sm_max:flex flex-col items-center">
        <div className="w-full max-w-xs sm_max:mb-8">
        <motion.div
            initial={{opacity:0, y: 100}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 1,type:"spring",stiffness: 100, delay: 0.5,bounce:0.8}}
        className='nav_logo py-2 text-center xl:text-4xl md:text-3xl sm:text-3xl sm_max:text-2xl'>
                Partik
            </motion.div>
                <motion.p 
                initial={{opacity:0, y: -100}}
                whileInView={{opacity:1, y: 0}}
                transition={{duration: 1,type:"spring",stiffness: 100, delay: 0.5,bounce:0.8}}
                className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, pariatur doloremque. Maxime laudantium reprehenderit a tempore ad totam perspiciatis ut beatae reiciendis rerum.
                </motion.p>
        </div>
        {/* <div className="w-full grid grid-rows-1 grid-flow-col"> */}
        <div className="w-full flex flex-col items-center max-w-xs sm_max:mb-8">
            <h1 className="font-bold xl:text-3xl md:text-3xl sm:text-3xl sm_max:text-2xl">
                <TypeWriter
                options={{
                    strings: ['Contact Me'],
                    autoStart: true,
                    loop: true,
                }}
                />
                {/* Social Media */}
                
                </h1>
            <motion.div 
            initial={{opacity:0, x: 100}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration: 1,type:"spring",stiffness: 100, delay: 0.5,bounce:0.8}}
            
            className="w-1/2 flex justify-between my-5 ">
                <span><BsInstagram className="cursor-pointer" fontSize="2.5rem"/></span>
                <span><BsGithub className="cursor-pointer" fontSize="2.5rem"/></span>
                <span><BsLinkedin className="cursor-pointer" fontSize="2.5rem"/></span>

            </motion.div>
        </div>
        <div>
        <motion.div
            initial={{opacity:0, x: 100}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration: 1,type:"spring",stiffness: 100, delay: 0.5,bounce:0.8}}
        className="flex w-full flex-col items-center max-w-xs">
            <h1 className="font-bold xl:text-3xl md:text-3xl sm:text-3xl sm_max:text-2xl">Download CV</h1>
            <div className="w-full flex flex-row justify-around my-5">
                <button className="cv_button"
                ><Link href="login">DownLoad Cv</Link></button>
            </div>
        </motion.div>
        </div>
        {/* </div> */}
    </motion.div>
  )
}

export default Footer