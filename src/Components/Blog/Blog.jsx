import React, { useState } from 'react'
import { blogData } from './blogData'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { containerVariant, textVariant, cardVariant } from '../../Utils/variants'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Navbar from './Navbar'
import { NewspaperIcon } from '@heroicons/react/outline'

const DisplayCard = ({data}) => {
    return (
        <motion.div 
            variants={cardVariant}
            className='w-full flex gap-4 items-center'
        >
            <p className='font-semibold text-gray-500 text-sm'>{data.date}</p>
            <div>
                <NavLink
                    to={`/blog/post-id=${data.id}`} 
                    className='font-semibold text-xl hover:text-indigo-500 transition duration-200 ease-in'
                >
                    {data.title}
                </NavLink>
                <p className='text-gray-400 text-lg line-clamp-1'>{data.text}</p>
                <NavLink
                    to={`/blog/post-id=${data.id}`} 
                    className='w-fit font-semibold text-indigo-500 hover:text-indigo-400 transition duration-200 ease-in flex gap-2 items-center'
                >
                    <p>Go to article</p> 
                    <ArrowRightIcon className='w-5 h-5' />
                </NavLink>
            </div>
        </motion.div>
    )
}

const Blog = () => {
        
    return (
        <div className='bg-white dark:bg-gray-900 text-black dark:text-white'>
            <motion.div 
                variants={containerVariant} 
                initial="hidden" 
                animate="show" 
                className='max-w-5xl p-4 mx-auto w-full'
            >
                <motion.div variants={containerVariant}>
                    <Navbar />
                </motion.div>

                <motion.p variants={textVariant} className='mt-4 text-2xl font-bold flex gap-3 items-center'>
                    Blog <NewspaperIcon className='w-6 h-6' />
                </motion.p>    

                <div className='my-4 flex flex-col gap-8'>
                    {blogData.map((data) => (
                        <DisplayCard key={data.title} data={data} />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Blog