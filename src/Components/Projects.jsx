import React, { useState } from 'react'
import IncentivaHome from "../Assets/incentiva-home.png"
import AIStuff from "../Assets/ai-stuff-image.png"
import MentalHealthBot from "../Assets/mental-health-bot-image.png"
import YoutubeClone from "../Assets/youtube-clone-home.png"
import InstagramClone from "../Assets/instagram-clone-home.PNG"
import CloudUI from "../Assets/cloud-ui.PNG"
import Kurricula from "../Assets/kurricula.PNG"
import InHax from "../Assets/inhax.PNG"

import { motion } from 'framer-motion'

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
        color: "bg-gradient-to-tr from-sky-300 to-sky-500 hover:shadow-sky-500/20" 
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

const tabs = [
    {title: 'Websites', icon: 'fas fa-code'},
    {title: 'Machine Learning', icon: 'fas fa-brain'}
]

const Projects = () => {

    const [selected, setSelected] = useState("Websites")

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
                            initial={{opacity: 0, scale: 0.5, y: 10}}
                            animate={{opacity: 1, scale: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.2 + 0.2 * idx}}
                        >
                            <motion.div
                                whileHover={{y: -6}}
                            >
                                <div className={`h-36 rounded-lg transition duration-200 ease-in hover:shadow-xl ${image.color}  p-1`}>
                                    <a href={image.href} target='_blank'>
                                        <div className='rounded-md h-full' style={{backgroundImage: `url(${image.image})`, backgroundSize: "100%", backgroundRepeat: "none"}} >
                                            <div className='h-full inline-flex flex-shrink-0 items-center justify-center p-4 backdrop-blur-sm w-full rounded-lg hover:opacity-0 transition duration-200 ease-in'>
                                                <p className='font-semibold text-xl text-center text-black'>{image.name}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
                :
                <div>
                    <p className='font-semibold text-center text-lg'>Coming soon :)</p>
                    <p className='font-semibold text-center text-lg my-2'>Brown University pls accept me if you see this btw</p>
                </div>

            }
            
        </div>
    )
}

export default Projects