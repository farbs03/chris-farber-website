import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from "../Assets/logo.png"
import { NavLink } from 'react-router-dom'
import {ClipboardListIcon, CogIcon, CollectionIcon, NewspaperIcon} from "@heroicons/react/outline"
import {containerVariant, textVariant, navVariant} from "../Utils/variants"
import Settings from "./Settings"

const Navbar = () => {

    const links = [
        {name: 'Projects', id: "projects", icon: <CollectionIcon className='w-6 h-6 hidden md:block' />},
        {name: 'Resume', id: "resume", icon: <ClipboardListIcon className='w-6 h-6 hidden md:block' />},
    ]

    const [clicked, setClicked] = useState(false)

    const [open, setOpen] = useState(false)

    return (
        <motion.div variants={containerVariant} initial="hidden" animate="show" className='text-white'>
            <motion.div variants={textVariant} className='flex items-center space-between p-4'>
                <motion.img 
                    src={Logo}
                    alt="logo"
                    style={{
                        width: "50px",
                        height: "50px",
                        padding: "4px"
                    }}
                    initial={{y: -2}}
                    animate={{y: 2}}
                    transition={{duration: 0.85, yoyo: Infinity}}
                />

                <motion.div variants={containerVariant} className='flex items-center gap-4 text-main-text w-fit justify-right text-right ml-auto'>
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
                                    className='flex items-center gap-1 text-inherit text-lg font-semibold cursor-pointer hover:text-primary transition duration-100 ease-in'
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
                        className='w-fit text-main-text'
                    >
                        <motion.div variants={textVariant}>
                            <NavLink
                                to='/blog'
                                className='flex gap-2 items-center text-inherit text-lg font-semibold cursor-pointer hover:text-primary transition duration-100 ease-in'
                            >
                                <p>Blog</p>
                                <NewspaperIcon className='w-6 h-6 hidden md:block' />
                            </NavLink>
                        </motion.div>
                    </motion.div>

                    <button onClick={() => setOpen(true)} className='w-8 h-8 text-main-text rounded-md inline-flex justify-center flex-shrink-0 items-center bg-secondary-bg hover:text-primary hover:ring-2 hover:ring-primary hover:shadow-lg hover:shadow-primary/20 hover:bg-main-bg transition duration-200 ease-in'>
                        <CogIcon className='w-6 h-6' />
                    </button>

                    <Settings open={open} setOpen={setOpen} />

                </motion.div>
            </motion.div>
            <div className='relative w-fit ml-4'>
                {clicked ?
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.4}}
                        
                    >
                        <div onClick={() => setClicked(false)} style={{cursor: "pointer"}} className='w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center'>
                            🐌
                        </div>
                        <p className='text-sm text-main-text bg-secondary-bg p-2 rounded-full rounded-tl-none mt-1 ml-4 font-semibold'>
                            Hi there!
                        </p>
                    </motion.div>
                    :
                    <motion.div
                        className='w-8 h-8 rounded-full bg-secondary-bg'
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