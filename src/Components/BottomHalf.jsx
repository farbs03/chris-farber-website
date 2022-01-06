import React, {useState, useEffect} from "react"
import { Container, Typography, Slide, Link, Button, Paper } from "@material-ui/core"

import GetAppIcon from '@material-ui/icons/GetApp';

import Slideshow from "./Slideshow"
import Wave from 'react-wavify'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Resume from "./Resume";


const Section = ({children}) => {

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const sectionVariant = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }
    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={sectionVariant}>
            {children}
        </motion.div>
    )
}

const BottomHalf = () => {
    return (
        <div>
            <div style={{height: "100px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)", background: "#0a0a0a"}}></div>
            <br></br>
            <Container maxWidth="lg" style={{marginTop: "-50px"}}>

                <Slide in direction="right" id="projects">
                    <div>
                        <div style={{borderLeft: "5px solid #9369db"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginLeft: "10px"}}>PROJECTS</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", marginLeft: "18px"}}>
                            Here are some of the projects I'm currently working on, more on my github page
                        </Typography>
                    </div>
                </Slide>

                <div style={{maxWidth: "400px", marginLeft: 'auto', marginRight: "auto", padding: "10px"}}>
                    <Slideshow />
                </div>

                <br></br>
                <br></br>

                <Slide in direction="left" id="resume">
                    <div>
                        <div style={{borderRight: "5px solid #9369db", textAlign: "right"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginRight: "10px"}}>RESUME</Typography>
                        </div>
                    </div>
                </Slide>
                
                <br></br>
                <br></br>

                <Resume />

                <br></br>
                <br></br>

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
            </Container>
        </div>
    )
}
export default BottomHalf