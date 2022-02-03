import React, { useState, useEffect, useRef } from 'react'

import {motion} from "framer-motion"

import profile from "../../Assets/profile-pic.png"
import Navbar from '../Navbar'

import Typewriter from 'typewriter-effect';

import NET from "vanta/dist/vanta.net.min.js"

const TopHalf = (props) => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 420.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: "rgb(99, 102, 241)",
          backgroundColor: "rgb(17, 24, 39)",
          spacing: 30.00,
          maxDistance: 25.00,
          points: 5
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const titles = [
    'Student',
    'Developer',
    'Musician'
  ]

  const contactLinks = [
    {Name: "Mail", Icon: 'far fa-envelope fa-lg', Link: "mailto:cgeraldfarber@icloud.com"},
    {Name: "LinkedIn", Icon: 'fab fa-linkedin fa-lg', Link: "https://www.linkedin.com/in/chris-farber-ba90181a4/"},
    {Name: "GitHub", Icon: "fab fa-github fa-lg", Link: "https://github.com/farbs03"},
    {Name: "Instagram", Icon: 'fab fa-instagram fa-lg', Link: "https://www.instagram.com/cfarbs03/"}
  ]

  return (
    <div ref={myRef} className='bg-gray-900 min-h-screen'>
        
      <Navbar />

      <div>
        <div className='mt-4 md:mt-12 max-w-7xl mx-auto justify-center text-center text-white p-2'>

          <motion.div 
            className='w-52 h-52 md:w-64 md:h-64 rounded-full mx-auto p-1 bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-lg shadow-indigo-500/50'
            initial={{opacity: 0, y: 10}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 0.4, delay: 0.4}}
          >
            <div
              className='bg-gray-900 rounded-full w-[200px] h-[200px]  md:w-[248px] md:h-[248px]'
            >
              <motion.img 
                src={profile} 
                className='rounded-full w-full h-full'
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{duration: 0.4, delay: 0.4}}
                alt="profile-pic"
              />
            </div>
          </motion.div>
          
          
          <p className='text-2xl md:text-4xl font-bold text-center my-4 flex justify-center font-mono'>
            <span className='text-indigo-500 mr-1'>$</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .typeString('<span>chrisfarber.</span>')
                .typeString('<span style="color: #6366f1;">info()</span>')
                .start();
              }}
            />
          </p>

          <div className='flex gap-4 my-4 justify-center'>
            {titles.map((title, idx) => (
              <motion.p 
                initial={{opacity: 0, y: 5}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.6 + 0.2 * idx}}
                className='text-xl font-semibold'
              >
                <span className='text-indigo-500'><i className='fas fa-chevron-right' />&nbsp;</span>
                {title}
              </motion.p>
            ))}
          </div>

          <div className='flex mx-auto text-center justify-center items-center my-4 gap-4'>
              {contactLinks.map((contact, idx) => (
                <motion.div
                  initial={{opacity: 0, y: 5}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.2, delay: 1.2 + 0.2 * idx}}
                >
                    <a href={contact.Link} target="_blank">
                        <motion.div 
                          className='w-14 h-14 text-indigo-500 rounded-full color-indigo-500 border-2 border-indigo-500 inline-flex flex-shrink-0 justify-center items-center'
                          initial={{y: 0}}
                          whileHover={{y: -4}}
                        >
                            <span><i className={contact.Icon} /></span>
                        </motion.div>
                    </a>
                </motion.div>
              ))}
          </div>
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 2.0}} 
            className='max-w-2xl text-center text-white mx-auto my-6 text-lg'
          >
            <p className='font-semibold text-2xl'>About Me</p>
            <p className='my-2'>I am a high school student who is passionate about coding and violin. More specifically, I enjoy web development and machine learning, and hope to further these interests in college. More info below!</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TopHalf;
