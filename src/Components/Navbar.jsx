import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from "../Assets/logo.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const links = [
        {Name: 'Projects', id: "projects"},
        {Name: 'Resume', id: "resume"},
    ]

    const [clicked, setClicked] = useState(false)

    return (
        <div className='text-white'>
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
                                className='text-inherit text-lg font-semibold cursor-pointer hover:text-indigo-500 transition duration-100 ease-in'
                            >
                            <p>{link.Name}</p>
                            </motion.a>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{y: 0, opacity: 0}}
                        animate={{opacity: 1}}
                        whileHover={{
                            y: 1,
                        }}
                        
                        transition={{ duration: 0.2 }}
                    >
                        <NavLink
                            to='/blog'
                            className='text-inherit text-lg font-semibold cursor-pointer hover:text-indigo-500 transition duration-100 ease-in'
                        >
                            <p>Blog</p>
                        </NavLink>
                    </motion.div>
                </div>
            </div>
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
        </div>
    )
}

export default Navbar