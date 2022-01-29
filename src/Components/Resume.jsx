import React from "react"

import {motion} from "framer-motion"

import resume from "../Assets/resume.png"

const Resume = () => {

    const resumeLink = './resume.pdf'

    return (
        <div className='justify-center items-center flex flex-col p-3'>
            <div className='max-w-xl mx-auto mb-4 drop-shadow-xl bg-white'>
                <img src={resume} className='w-full h-full'/>
            </div>
            <a href={resumeLink} download style={{textDecoration: "none", display: 'block'}}>
                <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}  transition={{duration: 0.2}}>
                    <button
                        className='bg-indigo-500 rounded-lg px-6 py-3 font-semibold mt-3 text-white'
                    >
                        Download Resume
                    </button>
                </motion.div>
            </a>
        </div>
    )
}

export default Resume
