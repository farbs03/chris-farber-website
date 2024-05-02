import React, { useState } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import Logo from "../Assets/logo.png"
import { NavLink } from 'react-router-dom'
import {ClipboardListIcon, CogIcon, CollectionIcon, NewspaperIcon} from "@heroicons/react/outline"
import {containerVariant, textVariant, navVariant} from "../Utils/variants"
import Settings from "./Settings"

const Navbar = () => {

    const links = [
        {name: 'Projects', id: "projects", icon: <CollectionIcon className='w-6 h-6 hidden md:block' />},
        {name: 'Experience', id: "experience", icon: <ClipboardListIcon className='w-6 h-6 hidden md:block' />},
    ]

    

    const [open, setOpen] = useState(false)

    const { scrollYProgress } = useViewportScroll()

    return (
        <motion.div variants={containerVariant} initial="hidden" animate="show" className={`text-white top-0 z-50 w-full`}>
            <motion.div variants={textVariant} className='flex items-center justify-between p-6'>
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

                <motion.div variants={containerVariant} className='flex items-center gap-4 w-fit'>
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
                                to='#'
                                className='flex gap-2 items-center text-inherit text-lg font-semibold cursor-pointer hover:text-primary transition duration-100 ease-in'
                            >
                                <p>Blog</p>
                                <NewspaperIcon className='w-6 h-6 hidden md:block' />
                            </NavLink>
                        </motion.div>
                    </motion.div>
                    {/*
                    <motion.div
                        key='settings'
                        className='w-fit hidden md:block'
                        variants={textVariant}
                    >
                        <Settings />
                    </motion.div>
                    */}

                </motion.div>
                
               {/*
                <motion.div
                    key='settings'
                    className='w-fit block md:hidden'
                    variants={containerVariant}
                >
                    <Settings />
                </motion.div>
                                */}

            </motion.div>
        </motion.div>
    )
}

export default Navbar