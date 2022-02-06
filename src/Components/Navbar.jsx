import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from "../Assets/logo.png"
import { NavLink } from 'react-router-dom'
import {ClipboardListIcon, CollectionIcon, NewspaperIcon} from "@heroicons/react/outline"
import {containerVariant, textVariant, navVariant} from "../Utils/variants"

const Navbar = () => {

    const links = [
        {name: 'Projects', id: "projects", icon: <CollectionIcon className='w-6 h-6' />},
        {name: 'Resume', id: "resume", icon: <ClipboardListIcon className='w-6 h-6' />},
    ]

    const [clicked, setClicked] = useState(false)

    return (
        <motion.div variants={containerVariant} initial="hidden" animate="show" className='text-white'>
            <motion.div variants={textVariant} className='flex items-center space-between'>
                <motion.img 
                    src={Logo}
                    alt="logo"
                    style={{
                        width: "100px",
                        height: "50px",
                        padding: "4px"
                    }}
                    initial={{y: -2}}
                    animate={{y: 2}}
                    transition={{duration: 0.85, yoyo: Infinity}}
                />

                <motion.div variants={containerVariant} className='flex gap-6 text-white p-5 w-fit justify-right text-right ml-auto'>
                    {links.map((link) => (
                        <motion.div
                            key={link.name}
                            initial={{y: 0}}
                            whileHover={{y: 2}}
                            className='w-fit'
                        >
                            <motion.div variants={textVariant} >
                                <motion.a
                                    onClick={
                                        () => document.getElementById(link.id).scrollIntoView({behavior: 'smooth'})
                                    }
                                    className='flex items-center gap-2 text-inherit text-lg font-semibold cursor-pointer hover:text-indigo-500 transition duration-100 ease-in'
                                >
                                    <p>{link.name}</p>
                                    {link.icon}
                                </motion.a>
                            </motion.div> 
                        </motion.div>
                    ))}

                    <motion.div
                        key='blog'
                        initial={{y: 0}}
                        whileHover={{y: 2}}
                        className='w-fit'
                    >
                        <motion.div variants={textVariant}>
                            <NavLink
                                to='/blog'
                                className='flex gap-2 items-center text-inherit text-lg font-semibold cursor-pointer hover:text-indigo-500 transition duration-100 ease-in'
                            >
                                <p>Blog</p>
                                <NewspaperIcon className='w-6 h-6' />
                            </NavLink>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className='relative w-fit ml-4'>
                {clicked ?
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.4}}
                    >
                        <div className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center'>
                            🐌
                        </div>
                        <p className='text-sm bg-gray-700 p-2 rounded-full rounded-tl-none mt-1 ml-4 font-semibold'>
                            Hi there!
                        </p>
                    </motion.div>
                    :
                    <motion.div
                        className='w-8 h-8 rounded-full bg-gray-800'
                        initial={{scale: 0.9}}
                        animate={{scale: 1.0}}
                        transition={{duration: 0.4, repeat: Infinity, repeatType: "reverse"}}
                        onClick={() => setClicked(true)}
                        whileHover={{scale: 0.9}}
                        style={{cursor: "pointer"}}
                    />
                }
            </div>
        </motion.div>
    )
}

export default Navbar