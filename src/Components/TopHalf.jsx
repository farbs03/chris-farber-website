import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'

import {Typography, Container, Fade, Grid, Link} from "@material-ui/core"
import {motion} from "framer-motion"

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import profile from "./chrisfarber.jpg"
import Logo from "./logo.png"

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
          backgroundColor: 0x0a0a0a,
          spacing: 26.00,
          maxDistance: 20.00,
          points: 4
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

  const links = [
    {Name: 'Projects', Scroll: "#projects"},
    {Name: 'Resume', Scroll: "#resume"},
    {Name: 'More', Scroll: "#more"}
  ]

  const contactLinks = [
    {Name: "Mail", Icon: <MailOutlineIcon />, Link: "mailto:cgeraldfarber@icloud.com"},
    {Name: "LinkedIn", Icon: <LinkedInIcon />, Link: "https://www.linkedin.com/in/chris-farber-ba90181a4/"},
    {Name: "GitHub", Icon: <GitHubIcon />, Link: "https://github.com/farbs03"},
    {Name: "Instagram", Icon: <InstagramIcon />, Link: "https://www.instagram.com/cfarbs03/"}
  ]

  return (
    <div ref={myRef}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <motion.img 
          src={Logo}
          alt="logo"
          style={{
            width: "100px",
            height: "50px",
            padding: "5px"
          }}
          initial={{y: -2}}
          animate={{y: 2}}
          transition={{duration: 0.85, yoyo: Infinity}}
        />
        <Grid container spacing={3} style={{color: "white", padding: "20px", justifyContent: "right"}}>
          {links.map((link) => (
            <Grid item>
              <motion.div
                  initial={{y: 0, opacity: 0}}
                  animate={{opacity: 1}}
                  whileHover={{
                      y: 1,
                      color: "#9369db"
                  }}
                  transition={{ duration: 0.2 }}
              >
                <motion.a 
                  href={link.Scroll}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "18px",
                  }}
                >
                  <Typography>{link.Name}</Typography>
                </motion.a>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
      <Container maxWidth="md" justifyContent="center" style={{textAlign: "center", color: "white", padding: "10px"}}>
          
          <br></br>
          <br></br>
          <motion.div 
            style={{width: "200px", height: "200px", borderRadius: "50%", marginLeft: "auto", marginRight: "auto", padding: '2px',  background: "linear-gradient(90deg, rgba(0,255,249,1) 0%, rgba(29,82,253,1) 50%, rgba(147,105,219,1) 100%)"}} 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            whileHover={{scale: 1.02}} 
            transition={{duration: 0.2}}
          >
              <motion.img 
                src={profile} 
                style={{width: "100%", height: "100%", borderRadius: "50%"}} 
                initial={{opacity: 0}} 
                animate={{opacity: 1}}
                transition={{duration: 0.2}}
                alt="profile-pic"
              />
          </motion.div>
          <br></br>
          <br></br>
          <Fade in mountOnEnter unmountOnExit style={{transitionDelay: "100ms", transitionDuration: "1000ms"}}>
              <div>
                  <Typography variant="h4" style={{fontWeight: "bold", marginBottom: "5px", fontSize: "40px"}}>Chris Farber</Typography>
              </div>
          </Fade>
          {titles.map((title, idx) => (
              <Fade in mountOnEnter unmountOnExit style={{transitionDelay: `${200 + 100 * idx}ms`, transitionDuration: "1000ms"}}>
                  <div style={{display: "inline-block"}}>
                    <Typography style={{margin: "15px", fontSize: "20px", borderBottom: "2px solid"}}>{title}</Typography>
                  </div>
              </Fade>
          ))}
          <br></br>
          <br></br>
          <div style={{display: "flex", margin: "0px auto", textAlign: 'center', justifyContent: "center", alignItems: "center"}}>
              {contactLinks.map((contact) => (
                  <a href={contact.Link} target="_blank">
                      <motion.div 
                          style={{
                              width: "50px", 
                              height: "50px", 
                              margin: "0px 8px", 
                              color: "#9369db",
                              borderRadius: "50%", 
                              border: "2px solid #9369db"
                          }}
                          initial={{y: 0}}
                          whileHover={{y: -5}}
                      >
                          <div style={{marginTop: "12px"}}>{contact.Icon}</div>
                      </motion.div>
                  </a>
              ))}
          </div>
          <br></br>
          <Typography style={{fontSize: "18px", marginTop: "5px"}}>Hi, welcome to my website! Here, you can take a look at some of the projects I've done, contact me, and check out some of my other hobbies apart from coding.</Typography>
          <br></br>
      </Container>
      <br></br>
    </div>
  )
}

export default TopHalf;
