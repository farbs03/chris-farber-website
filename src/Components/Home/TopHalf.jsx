import React, { useState, useEffect, useRef } from 'react'

import {motion} from "framer-motion"

import profile from "../../Assets/profile-pic.png"
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
    'Musician'
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

  const [clicked, setClicked] = useState(false)


  return (
    <div ref={myRef} className='bg-gray-900 text-white min-h-screen flex flex-col'>
        
      <Navbar />      
      
      <div className='z-10 flex-grow grid place-items-center'>
        <div className='max-w-7xl mx-auto justify-center text-center text-white p-4 z-10'>

          <motion.div 
            className='w-60 h-60 md:w-64 md:h-64 rounded-full mx-auto p-1 bg-primary shadow-lg shadow-indigo-500/50'
            initial={{opacity: 0, y: 10}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 0.4, delay: 0.4}}
          >
            <div
              className='bg-gray-900 rounded-full w-[232px] h-[232px]  md:w-[248px] md:h-[248px]'
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
          
          
          <div className='text-3xl md:text-4xl font-bold text-center my-4 flex justify-center font-mono'>
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

          <div className='flex gap-4 my-4 justify-center'>
            {titles.map((title, idx) => (
              <motion.p
                key={title}
                initial={{opacity: 0, y: 5}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4, delay: 0.6 + 0.2 * idx}}
                className='text-lg md:text-xl font-semibold'
              >
                <span className='text-primary'><i className='fas fa-chevron-right' />&nbsp;</span>
                {title}
              </motion.p>
            ))}
          </div>

          <div className='flex mx-auto text-center justify-center items-center my-4 gap-4'>
              {contactLinks.map((contact, idx) => (
                <ContactButton contact={contact} idx={idx} />
              ))}
          </div>
          <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 2.0}} 
            className='max-w-2xl text-center mx-auto my-6 md:text-lg'
          >
            <p className='font-semibold text-2xl'>About Me</p>
            <p className='my-2'>I am a sophomore at Purdue University studying Computer Science. I enjoy machine learning and web development, and hope to keep furthering these interests. More info below!</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TopHalf;
