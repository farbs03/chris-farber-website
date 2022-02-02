import React from "react"

import {motion} from "framer-motion"

import resume from "../Assets/resume.png"
import MusicPlayer from "./MusicPlayer"
import Experience from "./Experience"

const Resume = () => {

    const resumeLink = './resume.pdf'

    return (
        <div>
            <a href={resumeLink} download className='block w-fit ml-auto'>
                <motion.div className='w-fit' whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}  transition={{duration: 0.2}}>
                    <button
                        className='bg-indigo-500 rounded-lg px-6 py-3 font-semibold mt-3 text-white'
                    >
                        Download Resume
                    </button>
                </motion.div>
            </a>

            <div className="max-w-xl mx-auto">
                <img src={resume} alt='resume' />
            </div>

            {/* 
            <Experience />
            <MusicPlayer />
            */}
            
            
        </div>
    )
}

export default Resume
