import React, { useState } from 'react'
import IncentivaHome from "../../Assets/incentiva-home.png"
import AIStuff from "../../Assets/ai-stuff-image.png"
import MentalHealthBot from "../../Assets/mental-health-bot-image.png"
import YoutubeClone from "../../Assets/youtube-clone-home.png"
import InstagramClone from "../../Assets/instagram-clone-home.PNG"
import CloudUI from "../../Assets/cloud-ui.PNG"
import Kurricula from "../../Assets/kurricula.PNG"
import InHax from "../../Assets/inhax.PNG"

import ReactCardFlip from 'react-card-flip';

import { motion } from 'framer-motion'

import { ExternalLinkIcon } from '@heroicons/react/solid'

const images = [
    {
        image: IncentivaHome,
        href: "https://incentiva.app/",
        name: "Incentiva",
        color: "bg-gradient-to-tr from-violet-300 to-violet-500 hover:shadow-violet-500/20"
    },
    {
        image: AIStuff,
        href: "https://aistuff.netlify.app/",
        name: "AI Stuff",
        color: "bg-gradient-to-tr from-green-300 to-green-500 hover:shadow-green-500/20"
    },
    {
        image: MentalHealthBot,
        href: "https://mentalhealthbot.netlify.app/",
        name: "Mental Health Chatbot",
        color: "bg-gradient-to-tr from-blue-300 to-blue-500 hover:shadow-blue-500/20"
    },
    {
        image: YoutubeClone,
        href: "https://youtube-clone-mui.netlify.app/",
        name: "Youtube Clone",
        color: "bg-gradient-to-tr from-red-300 to-red-500 hover:shadow-red-500/20"
    },
    {
        image: InstagramClone,
        href: "https://instagram-clone-chakra.netlify.app/",
        name: "Instagram Clone",
        color: "bg-gradient-to-tr from-orange-500 to-violet-500 hover:shadow-orange-500/20"
    },
    {
        image: CloudUI,
        href: "https://cloudui.netlify.app/",
        name: "Cloud UI",
        color: "bg-gradient-to-tr from-sky-300 to-sky-500 hover:shadow-sky-500/40" 
    },
    {
        image: Kurricula,
        href: "https://kurricula.netlify.app/",
        name: "Kurricula",
        color: "bg-gradient-to-tr from-emerald-500 to-indigo-500 hover:shadow-emerald-500/20" 
    },
    {
        image: InHax,
        href: "https://inhax.dev/",
        name: "Indiana Hax",
        color: "bg-gradient-to-tr from-yellow-200 to-rose-300 hover:shadow-rose-300/20" 
    }
];

const MLProjects = [
    {
        title: "GPT2 Quote Generation",
        href: "https://github.com/farbs03/quotegeneration",
        description: "Quotes are generated using the GPT2 language model and webscraped text data.",
        tags: [
            'Python', 'Tensorflow', 'RNNs'
        ]
    },
    {
        title: "Image to Text",
        href: "https://github.com/farbs03/googleCloudBackend",
        description: "Using Google Cloud's Vision AI, this API takes an image and returns any text it detects.",
        tags: [
            'Node JS', 'Google Cloud', 'API'
        ]
    },
    {
        title: "MNIST Handwriting Recognition",
        href: "https://github.com/farbs03/mnist_classification",
        description: "Using Tensorflow and Keras, I trained a model to recognize handwritten digits with the MNIST data.",
        tags: [
            'Python', 'Tensorflow', 'Keras'
        ]
    },
    {
        title: "Linear Regression",
        href: "https://github.com/",
        description: "Basic linear regression implementation in vanilla Python, inspired by Stanford's Coursera ML Course.",
        tags: [
            'Python', 'ML'
        ]
    }
]


const tabs = [
    {title: 'Websites', icon: 'fas fa-code'},
    {title: 'Machine Learning', icon: 'fas fa-brain'}
]

const WebsiteCard = ({image}) => {
    return (
        <a href={image.href} target='_blank'>
            <div className={`h-36 w-full rounded-lg transition duration-200 ease-in hover:shadow-xl ${image.color}  p-1`}>
                <div className='rounded-md h-full' style={{backgroundImage: `url(${image.image})`, backgroundSize: "100%", backgroundRepeat: "none"}} >       
                    <div className='h-full inline-flex flex-shrink-0 items-center justify-center p-4 backdrop-blur-sm w-full rounded-md hover:opacity-0 transition duration-200 ease-in'>
                        <p className='font-semibold text-xl text-center text-black'>{image.name}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

const MLCard = ({project}) => {
    return (
        <div className='w-full rounded-lg rounded-t-none pt-1 transition duration-200 ease-in hover:shadow-xl'>
            <div className='bg-gradient-to-r from-cyan-500 to-indigo-500 h-1 rounded-t-lg' />
            <div className='bg-gray-700 p-4 rounded-lg rounded-t-none'>
                <div className='mb-2'>
                    <a href={project.href} target="_blank" className='flex gap-2 items-center mb-2 w-fit transition duration-200 ease-in hover:text-cyan-400'>
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
                        <div className='text-xs px-2 py-1 font-semibold bg-gray-800 text-gray-500 rounded-lg'>
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
    const [flipped, setFlipped] = useState(false)


    return (
        <div>
            <div className='flex items-center my-4'>
                {tabs.map((tab) => (
                    <button 
                        className={`${selected === tab.title ? "border-b-indigo-500 text-indigo-500 transition duration-200 ease-in" : "border-b-transparent"} flex gap-2 font-semibold text-center px-4 py-2 bg-transparent border-b-4`}
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
                    {images.map((image, idx) => (
                        <motion.div
                            key={image.name}
                            initial={{opacity: 0, scale: 0.5, y: 10}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.2 + 0.2 * idx}}
                        >
                            <motion.div
                                whileHover={{y: -6}}
                            >
                                <WebsiteCard image={image} />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
                :
                <motion.div 
                    className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'
                >
                    {MLProjects.map((project, idx) => (
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