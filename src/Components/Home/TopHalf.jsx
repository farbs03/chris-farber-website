import React, { useState, useEffect, useRef } from 'react'

import {motion} from "framer-motion"

import profile from "../../Assets/updated-pfp.jpg"
import Navbar from '../Navbar'

import Typewriter from 'typewriter-effect';

import NET from "vanta/dist/vanta.net.min.js"
import ContactButton from './ContactButton';
const TopHalf = () => {

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
          color: "#6366f1",
          backgroundColor: "#111827",
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
    'Researcher'
  ]

  const contactLinks = [
    {Name: "Mail", Icon: 'far fa-envelope fa-lg', Link: "mailto:cgeraldfarber@icloud.com"},
    {Name: "LinkedIn", Icon: 'fab fa-linkedin fa-lg', Link: "https://www.linkedin.com/in/chris-farber-ba90181a4/"},
    {Name: "GitHub", Icon: "fab fa-github fa-lg", Link: "https://github.com/farbs03"},
    {Name: "Instagram", Icon: 'fab fa-instagram fa-lg', Link: "https://www.instagram.com/cfarbs03/"}
  ]

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  const circleVariants = {
    hidden: { pathLength: 0, opacity: 0, stroke: "white" },
    visible: {
        pathLength: 1,
        opacity: 1,
        stroke: "#6366f1",
        transition: {
          pathLength: { type: "spring", duration: 2.4, bounce: 0 },
          opacity: { duration: 0.01 },
          duration: 0.4,
          delay: 0.8
        }
    }
  }

  const [clicked, setClicked] = useState(false)

  return (
    <div ref={myRef} className='flex flex-col h-screen text-white bg-gray-900'>
        
      <Navbar />      
      
      <div className='z-10 grid flex-grow place-items-center'>
        <div className='z-10 justify-center p-4 mx-auto text-center text-white max-w-7xl'>
          <motion.div 
            className='relative z-0 grid w-64 mx-auto rounded-full shadow-lg aspect-square place-items-center shadow-indigo-500/50'
            initial={{opacity: 0, y: 10}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 0.4, delay: 0.4}}
          >
            <motion.svg
              className="z-10 rotate-[270deg]"
              viewBox="-0.5 -0.5 65 65" // Adjust the viewbox values to fit your div size
              initial="hidden"
              animate="visible"
            >
              <motion.circle 
                cx="32"
                cy="32"
                r="32"
                variants={circleVariants}
                strokeLinecap="round"
                fill="transparent"
              />
            </motion.svg>
            <div
              className='absolute z-0 w-full bg-gray-900 rounded-full aspect-square'
            >
              <motion.img 
                src={profile} 
                className='w-full h-full rounded-full'
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{duration: 0.4, delay: 0.4}}
                alt="profile-pic"
              />
            </div>
          </motion.div>
          
          
          <div className='flex justify-center my-4 font-mono text-3xl font-bold text-center md:text-4xl'>
            <span className={`mr-1 text-primary`}>$</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .typeString(`<span>chrisfarber.</span>`)
                .typeString(`<span class="text-primary">info()</span>`)
                .start();
              }}
            />
          </div>

          <div className='flex justify-center gap-4 my-4'>
            {titles.map((title, idx) => (
              <motion.p
                key={title}
                initial={{opacity: 0, y: 5}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.6 + 0.2 * idx}}
                className='text-lg font-semibold md:text-xl'
              >
                <span className='text-primary'><i className='fas fa-chevron-right' />&nbsp;</span>
                {title}
              </motion.p>
            ))}
          </div>

          <div className='flex items-center justify-center gap-4 mx-auto my-4 text-center'>
              {contactLinks.map((contact, idx) => (
                <ContactButton contact={contact} idx={idx} />
              ))}
          </div>
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 2.0}} 
            className='max-w-2xl mx-auto my-6 text-center md:text-lg'
          >
            <p className='text-2xl font-semibold'>About Me</p>
            <p className='my-2'>I am a senior at Purdue University studying Computer Science. I enjoy machine learning and web development, and hope to keep furthering these interests. More info below!</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TopHalf;
