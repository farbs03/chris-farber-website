import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowLeftIcon, FireIcon  } from '@heroicons/react/solid'
import { ShareIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import { containerVariant, textVariant } from '../../Utils/variants'

const Media = () => {

    const [liked, setLiked] = useState(false)

    const links = [
        {Name: "Email", Icon: 'far fa-envelope fa-lg', Link: "mailto:cgeraldfarber@icloud.com"},
        {Name: "LinkedIn", Icon: 'fab fa-linkedin fa-lg', Link: "https://www.linkedin.com/in/chris-farber-ba90181a4/"},
        {Name: "GitHub", Icon: "fab fa-github fa-lg", Link: "https://github.com/farbs03"},
        {Name: "Instagram", Icon: 'fab fa-instagram fa-lg', Link: "https://www.instagram.com/cfarbs03/"},
    ]
    
    return (
        <motion.div className='py-4 w-fit md:w-[126px]'>
                    
            <motion.div variants={textVariant} className='w-fit'>
                <NavLink to='/blog' className='font-semibold flex gap-2 items-center text-primary hover:border-b-1 transition duration-200 ease-in'>
                    <ArrowLeftIcon className='w-5 h-5' />
                    Back to blogs
                </NavLink>
            </motion.div>

            <motion.div variants={textVariant} className="flex md:flex-col justify-center gap-2 md:gap-4 my-4 w-fit md:mx-auto items-center">
                <motion.button
                    onClick={() => setLiked(!liked)} 
                    className='
                    w-fit 
                    inline-flex 
                    items-center 
                    justify-center 
                    flex-shrink-0 
                    hover:scale-110 
                    active:scale-90 
                    transition 
                    duration-200 
                    ease-in-out                                
                    '
                >
                    {liked ?
                        <FireIcon className='w-8 h-8 transition-all duration-200 text-orange-500 ease-in' />
                        :
                        <FireIcon className='w-8 h-8 transition-all duration-200 ease-in' />
                    }
                </motion.button>
                <motion.button 
                    className='
                    w-fit 
                    inline-flex 
                    items-center 
                    justify-center 
                    flex-shrink-0
                    hover:text-primary
                    hover:scale-110 
                    active:scale-90 
                    transition 
                    duration-200 
                    ease-in-out
                    '
                >
                    <ShareIcon className='w-8 h-8' />
                </motion.button>
            </motion.div>
            
            <motion.div variants={textVariant} className='flex md:block items-center gap-2'>
                <p className='font-semibold text-center mb-2 mr-2 md:mr-0 hidden md:block text-main-text'>Contact</p>
                <div className="flex md:flex-col gap-4 items-center text-gray-400 pl-1 md:pl-0">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.Link}
                            className='hover:text-primary transition duration-200 ease-in'
                            target="_blank"
                        >
                            <span><i className={link.Icon} /></span>
                        </a>
                    ))}
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Media