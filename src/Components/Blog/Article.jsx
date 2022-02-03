import React, { useEffect, useState } from 'react'
import { blogData } from './blogData'
import { containerVariant, textVariant, cardVariant } from '../../Utils/variants'
import { motion } from 'framer-motion'
const Article = () => {

    const [post, setPost] = useState({})
    let id = parseInt(window.location.pathname.split('/blog/post-id=')[1])
    console.log(window.location.pathname.split('/blog/post-id='))

    useEffect(() => {
        let currPost = blogData.find((data) => data.id === id)
        setPost(currPost)
    }, [])    

    return (
        <div className='bg-gray-800 text-white min-h-screen'>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="show"
                className='max-w-prose mx-auto p-4'
            >
                {post &&
                    <>
                        <div className='my-4'>
                            <motion.p variants={textVariant} className='text-gray-500 font-semibold'>{post.date}</motion.p>
                            <motion.h1 variants={textVariant} className='font-bold text-3xl'>{post.title}</motion.h1>
                            <motion.div variants={containerVariant} className="flex items-center gap-2 mt-4">
                                {post.tags && post.tags.map((tag) => (
                                    <motion.div variants={textVariant} className='bg-gray-700 w-fit rounded-md text-xs font-semibold px-2 py-1'>
                                        {tag}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>                            
                        <article className='prose lg:prose-lg prose-invert'>
                            <motion.div variants={textVariant}>
                                <p>{post.text}</p>
                                <blockquote>Something cool here idek</blockquote>
                            </motion.div>
                        </article>
                    </>
                }
            </motion.div>
        </div>
    )
}

export default Article