import React, { useEffect, useState } from 'react'
import { blogData } from './blogData'
import { containerVariant, textVariant } from '../../Utils/variants'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Media from './Media'

const Article = () => {

    const [post, setPost] = useState({})
    let id = parseInt(window.location.pathname.split('/blog/post-id=')[1])
    console.log(window.location.pathname.split('/blog/post-id='))

    useEffect(() => {
        let currPost = blogData.find((data) => data.id === id)
        setPost(currPost)
    }, [])
    
    return (
        <div>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="show"
                className='max-w-5xl mx-auto p-4'
            >
                
                <motion.div variants={containerVariant}>
                    <Navbar />
                </motion.div>

                <div className='flex gap-12'>

                    <div className='hidden md:block'>
                        <Media />
                    </div>

                    {post &&
                        <>
                            <div className='md:p-4 my-4 md:my-0'>
                                <motion.p variants={textVariant} className='text-gray-500 font-semibold'>{post.date}</motion.p>
                                <motion.h1 variants={textVariant} className='font-bold text-3xl'>{post.title}</motion.h1>
                                <motion.div variants={containerVariant} className="flex items-center gap-2 mt-4">
                                    {post.tags && post.tags.map((tag) => (
                                        <motion.div variants={textVariant} className='bg-gray-700 w-fit rounded-md text-xs font-semibold px-2 py-1'>
                                            {tag}
                                        </motion.div>
                                    ))}
                                </motion.div>
                                
                                <div className='md:hidden'>
                                    <Media />
                                </div>

                                <article className='prose lg:prose-lg prose-invert md:my-4'>
                                    <motion.div variants={textVariant}>
                                        {post.text}
                                    </motion.div>
                                </article>
                            </div>                            
                        </>
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default Article