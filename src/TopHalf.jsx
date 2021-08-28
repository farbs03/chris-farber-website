import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'

import {Typography, Container, Fade, Grid, Link} from "@material-ui/core"
import {motion} from "framer-motion"

import profile from "./chris-profile.jpeg"

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
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9369db,
          backgroundColor: 0x31,
          spacing: 25.00,
          maxDistance: 20.00,
          points: 6
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const titles = ['Student', 'Developer', 'Musician']
  const links = ['About', 'Portfolio', 'Contact']

  return (
    <div ref={myRef}>
      <br></br>
      <div style={{padding: "10px", textAlign: "right", color: "white"}}>
        {links.map((link) => (
          <motion.div
              initial={{y: 0}}
              whileHover={{
                  y: -1,
                  color: "#9369db"
              }}
              transition={{ duration: 0.2 }}
              style={{display: "inline-block", marginRight: "20px"}}
          >
            <Link 
              href="#"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "18px",
              }}
            >
              {link}
            </Link>
          </motion.div>
        ))}
        </div>
        <Container maxWidth="md" justifyContent="center" style={{textAlign: "center", color: "white", padding: "10px"}}>
            
            <br></br>
            <br></br>
            <motion.div style={{width: "150px", height: "150px", borderRadius: "50%", background:"white", marginLeft: "auto", marginRight: "auto", border: "2px solid"}} initial={{opacity: 0}} animate={{opacity: 1}}>
                <img src={profile} style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="profile-pic"/>
            </motion.div>
            <br></br>
            <Fade in mountOnEnter unmountOnExit style={{transitionDelay: "100ms", transitionDuration: "1000ms"}}>
                <div>
                    <Typography variant="h4" style={{fontWeight: "bold", marginBottom: "5px", fontSize: "40px"}}>Chris Farber</Typography>
                </div>
            </Fade>
            {titles.map((title, idx) => (
                <Fade in mountOnEnter unmountOnExit style={{transitionDelay: `${200 + 100 * idx}ms`, transitionDuration: "1000ms"}}>
                    <div style={{display: "inline-block"}}>
                    <Typography style={{marginRight: "15px", fontSize: "20px", borderBottom: "2px solid"}}>{title}</Typography>
                    </div>
                </Fade>
            ))}
            <br></br>
            <br></br>
            <Typography style={{fontSize: "18px", marginTop: "5px"}}>Hi, welcome to my website! Here, you can take a look at some of the projects I've done, contact me, and check out some of my other hobbies apart from coding.</Typography>
            <br></br>
        </Container>
    </div>
  )
}

export default TopHalf;
