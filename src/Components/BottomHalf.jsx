import React, {useState} from "react"
import { Container, Typography, Slide, Link, Button, Paper } from "@material-ui/core"

import {motion} from "framer-motion"

import GetAppIcon from '@material-ui/icons/GetApp';

import Slideshow from "./Slideshow"
import Wave from 'react-wavify'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import Resume from "./resume.png"

const BottomHalf = () => {

    const resume = './chris-farber-resume.pdf'

    const options = {
        cMapUrl: 'cmaps/',
        cMapPacked: true,
    };
    

    const [numPages, setNumPages] = useState(null);
    const [file, setFile] = useState('./resume.pdf')

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div>
            <div style={{height: "100px", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)", background: "rgb(6, 6, 6)"}}></div>
            <br></br>
            <br></br>
            <Container maxWidth="lg" style={{marginTop: "-50px"}}>

                <Slide in direction="right" id="projects">
                    <div>
                        <div style={{borderLeft: "5px solid #9369db"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginLeft: "10px"}}>PROJECTS</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", marginLeft: "18px"}}>
                            Here are some of the projects I'm working on, more on my github page
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

                <div 
                    style={{
                        justifyContent: "center", 
                        alignItems: 'center', 
                        display: "flex", 
                        flexDirection: "column", 
                        padding: "10px",
                    }}
                >
                    <Paper elevation={6} style={{maxWidth: "500px", marginLeft:"auto", marginRight:"auto"}}>
                        <img src={Resume} style={{width: "100%", height: "100%"}}/>
                    </Paper>
                    <br></br>
                    <a href={resume} download style={{textDecoration: "none"}}>
                        <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                            <Button 
                                variant="contained" 
                                endIcon={<GetAppIcon />} 
                                style={{
                                    background: "#9369db", 
                                    color: "white", 
                                    borderRadius: "40px", 
                                    textTransform: "none", 
                                    fontWeight: "bold", 
                                    padding:"15px", 
                                    fontSize: "15px",
                                    marginTop: "10px"
                                }}
                                disableRipple
                            >
                                Download Resume
                            </Button>
                        </motion.div>
                    </a>
                </div>
                <br></br>
                <br></br>

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

                
                
            </Container>
        </div>
    )
}
export default BottomHalf