import React, { useState } from 'react'

import ReactCardFlip from 'react-card-flip';

import { motion } from 'framer-motion'

import { ExternalLinkIcon } from '@heroicons/react/solid'

import {websites} from "./websites"
import {mlprojects} from "./mlprojects"


const tabs = [
    {title: 'Websites', icon: 'fas fa-code'},
    {title: 'Machine Learning', icon: 'fas fa-brain'}
]

const WebsiteCard = ({project}) => {
    return (
        <a href={project.href} target='_blank'>
            <div className={`h-36 w-full select-none rounded-lg transition duration-200 ease-in hover:shadow-xl ${project.color}  p-1`}>
                <div className='rounded-md h-full' style={{backgroundImage: `url(${project.image})`, backgroundSize: "100%", backgroundRepeat: "none"}} >       
                    <div className='h-full inline-flex flex-shrink-0 items-center justify-center p-4 backdrop-blur-sm w-full rounded-md hover:opacity-0 transition duration-200 ease-in'>
                        <p className='font-semibold text-xl text-center text-black'>{project.name}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

const MLCard = ({project}) => {
    return (
        <div className='w-full select-none rounded-lg rounded-t-none pt-1 transition duration-200 ease-in shadow-md hover:shadow-xl'>
            <div className='bg-gradient-to-r from-cyan-500 to-indigo-500 h-1 rounded-t-lg' />
            <div className='bg-main-bg p-4 rounded-lg rounded-t-none'>
                <div className='mb-2'>
                    <a href={project.href} target="_blank" className='flex gap-2 items-center mb-2 w-fit transition duration-200 ease-in hover:text-primary'>
                        <p className='font-semibold'>
                            {project.title}
                        </p>
                        <ExternalLinkIcon className='w-5 h-5' />
                    </a>
                    <p className='font-semibold text-gray-400 text-sm'>
                        {project.description}
                    </p>
                </div>
                <div className='flex gap-2 items-center'>
                    {project.tags.map((tag) => (
                        <div className='text-xs px-2 py-1 font-semibold bg-secondary-bg text-gray-500 rounded-lg'>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const Projects = () => {

    const [selected, setSelected] = useState("Websites")

    return (
        <div>
            <div className='flex items-center my-4'>
                {tabs.map((tab) => (
                    <button 
                        className={`${selected === tab.title ? "border-b-primary text-primary transition duration-200 ease-in" : "border-b-transparent"} flex gap-2 font-semibold text-center px-4 py-2 bg-transparent border-b-4`}
                        onClick={() => setSelected(tab.title)}
                    >
                        {tab.title}
                        <span>
                            <i className={tab.icon} />
                        </span>
                    </button>
                ))}
                
            </div>
            {selected === 'Websites' ?
                <motion.div 
                    className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'
                >
                    {websites.map((website) => (
                        <WebsiteCard project={website} />
                    ))}
                </motion.div>
                :
                <motion.div 
                    className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'
                >
                    {mlprojects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, scale: 0.5, y: 10}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.2 + 0.2 * idx}}
                        >
                            <motion.div
                                whileHover={{y: -6}}
                            >
                                <MLCard project={project} />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

            }
            
        </div>
    )
}

export default Projects