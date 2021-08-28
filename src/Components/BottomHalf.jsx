import React, {useState} from "react"
import { Container, Typography, Slide, Link } from "@material-ui/core"

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import {motion} from "framer-motion"

import Slideshow from "./Slideshow"
import Wave from 'react-wavify'

import resume from "./resume.pdf"

const BottomHalf = () => {

    return (
        <div>
            <Wave fill='#000031'
                paused={false}
                options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3
                }}
                style={{transform: "rotate(180deg)", marginTop: "-20px"}}
            />
            <br></br>
            <br></br>
            <Container maxWidth="lg">

                <Slide in direction="right" id="projects">
                    <div>
                        <div style={{borderLeft: "5px solid #9369db"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginLeft: "10px"}}>PROJECTS</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", marginLeft: "18px"}}>
                            Hi this is some info about me, i am interesting and stuff
                        </Typography>
                    </div>
                </Slide>

                <br></br>

                <div style={{maxWidth: "500px", marginLeft: 'auto', marginRight: "auto", padding: "10px"}}>
                    <Slideshow />
                </div>

                <br></br>

                <Slide in direction="left" id="resume">
                    <div>
                        <div style={{borderRight: "5px solid #9369db", textAlign: "right"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginRight: "10px"}}>RESUME</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", textAlign: "right", marginRight: "18px"}}>
                            <a href={resume}>Download here</a>
                        </Typography>
                    </div>
                </Slide>

                <br></br>
                <br></br>

                <Slide in direction="right" id="more">
                    <div>
                        <div style={{borderLeft: "5px solid #9369db"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginLeft: "10px"}}>MORE</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", marginLeft: "18px"}}>
                            Contact tings
                        </Typography>
                    </div>
                </Slide>

                
                
            </Container>
        </div>
    )
}
export default BottomHalf