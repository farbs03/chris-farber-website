import React from "react"

import {motion} from "framer-motion"

import resume from "../../Assets/resume.png"
import MusicPlayer from "./MusicPlayer"
import Experience from "./Experience"
import { DownloadIcon } from "@heroicons/react/solid"

const Resume = () => {

    const resumeLink = './resume.pdf'

    return (
        <div>
            <a href={resumeLink} download className='block w-fit ml-auto'>
                <button
                    className='bg-indigo-500 mt-2 rounded-lg px-4 py-3 hover:shadow-xl hover:shadow-indigo-500/20 active:shadow-none transition duration-200 ease-in'
                >
                    <p className='font-semibold text-white flex items-center gap-2'>
                        Download Resume <DownloadIcon className='w-5 h-5' />
                    </p>
                </button>
            </a>
 
            <Experience />            
            
        </div>
    )
}

export default Resume
