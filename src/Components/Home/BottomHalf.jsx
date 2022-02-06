import React, {useState, useEffect} from "react"

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Resume from "../Resume/Resume";
import Projects from "../Projects/Projects";

import Wave from "react-wavify";

const BottomHalf = () => {

    const [projectsRef, projectsInView] = useInView({
        triggerOnce: true,
        rootMargin: '-80px 0px',
    });

    const [resumeRef, resumeInView] = useInView({
        triggerOnce: true,
        rootMargin: '-80px 0px',
    });

    return (
        <div>

            <div className='bg-gray-900 h-10'>
                <Wave 
                    fill='rgb(31, 41, 55)'
                    paused={false}
                    options={{
                        amplitude: 5,
                        speed: 0.25,
                        points: 3
                    }}
                    style={{height: "40px"}}
                />
            </div>

            <div>
                
                <div className='max-w-7xl mx-auto p-6'>
                    
                    <div 
                        id='projects' 
                        className='my-4'
                        ref={projectsRef}
                    >
                        {projectsInView ?
                            <>
                                <motion.div 
                                    className='my-4 flex  items-center mr-auto w-fit gap-2'
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.4, delay: 0.2}}
                                    
                                >
                                    <div className='w-1 bg-gradient-to-t from-cyan-500 to-indigo-500 h-8' />
                                    <p className='font-semibold text-2xl mr-2'>Projects</p>
                                    
                                </motion.div>

                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.4, delay: 0.4}}   
                                >
                                    <Projects />
                                </motion.div>
                            </>
                            :
                            <div className='h-40' />
                        }
                        
                    </div>                    
                    
                    <div 
                        ref={resumeRef}
                        className='mt-20'
                        id="resume"
                    >
                        {resumeInView ?
                            <>
                                <motion.div 
                                    className='my-4 text-right flex justify-right items-center ml-auto w-fit gap-2'
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.4, delay: 0.2}}
                                    
                                >
                                    <p className='font-semibold text-2xl mr-2'>Resume</p>
                                    <div className='w-1 bg-gradient-to-t from-cyan-500 to-indigo-500 h-8' />
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.4, delay: 0.4}}
                                >
                                    <Resume />
                                </motion.div>
                            </>
                            :
                            <div className='h-72' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BottomHalf