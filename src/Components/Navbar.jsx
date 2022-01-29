import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from "../Assets/logo.png"

const Navbar = () => {

    const links = [
        {Name: 'Home', id: "home"},
        {Name: 'Projects', id: "projects"},
        {Name: 'Resume', id: "resume"},
    ]

    return (
        <div className='flex items-center space-between'>

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

            <div className='flex gap-4 text-white p-5 w-fit justify-right text-right ml-auto'>
                {links.map((link) => (
                    <motion.div
                        initial={{y: 0, opacity: 0}}
                        animate={{opacity: 1}}
                        whileHover={{
                            y: 1,
                        }}
                        
                        transition={{ duration: 0.2 }}
                    >
                        <motion.a
                            onClick={
                                () => document.getElementById(link.id).scrollIntoView({behavior: 'smooth'})
                            }
                            className='text-inherit font-semibold cursor-pointer hover:text-indigo-500 transition duration-100 ease-in'
                        >
                        <p>{link.Name}</p>
                        </motion.a>
                    </motion.div>
                ))}

                {/*
                    <motion.div
                        initial={{y: 0, opacity: 0}}
                        animate={{opacity: 1}}
                        whileHover={{
                            y: 1,
                        }}
                        
                        transition={{ duration: 0.2 }}
                    >
                        <motion.a
                            href='/'
                            className='text-inherit font-semibold cursor-pointer hover:text-indigo-500 transition duration-100 ease-in'
                        >
                            <p>Blog</p>
                        </motion.a>
                    </motion.div>
                */}
                

            </div>
        </div>
    )
}

export default Navbar