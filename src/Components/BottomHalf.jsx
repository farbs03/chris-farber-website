import React, {useState, useEffect} from "react"

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Resume from "./Resume";
import Projects from "./Projects";

import Lines from "../Assets/lines.PNG"
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
        <div className='bg-gray-800'>

            <div className='bg-gray-900'>
                <Wave 
                    fill='rgb(31, 41, 55)'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 10,
                        speed: 0.25,
                        points: 3
                    }}
                />
            </div>

            <div className='dark dark:bg-gray-800 dark:text-white -mt-20'>
                
                <div className='max-w-7xl mx-auto p-6'>
                    
                    <div 
                        id='projects' 
                        className='my-4'
                        ref={projectsRef}
                    >
                        {projectsInView ?
                            <>
                                <motion.div
                                    initial={{opacity: 0, x: -50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.4, delay: 0.2}}   
                                >
                                    <div>
                                        <div className='border-l-4 border-l-indigo-500'>
                                            <p className='font-semibold text-2xl ml-2'>Projects</p>
                                        </div>
                                    </div>
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
                        className='my-8'
                        id="resume"
                    >
                        {resumeInView ?
                            <>
                                <motion.div 
                                    className='my-4 text-right'
                                    initial={{opacity: 0, x: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.4, delay: 0.2}}
                                    
                                >
                                    <div>
                                        <div className='border-r-4 border-r-indigo-500'>
                                            <p className='font-semibold text-xl mr-2'>Resume</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.4, delay: 0.4}}
                                >
                                    <Resume />
                                </motion.div>
                            </>
                            :
                            <div className='h-40' />
                        }
                        
                    </div>
                

                    

                    {/*
                    <Slide in direction="right" id="more">
                        <div>
                            <div style={{borderLeft: "5px solid #9369db"}}>
                                <Typography variant="h4" style={{fontWeight:"bold", marginLeft: "10px"}}>MORE</Typography>
                            </div>
                            <Typography style={{marginTop: "5px", marginLeft: "18px"}}>
                                Violin and stuff
                            </Typography>
                        </div>
                    </Slide>
                    */}
                </div>
            </div>
        </div>
    )
}
export default BottomHalf