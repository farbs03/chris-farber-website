import React, {useState} from "react"
import { Container, Typography, Slide, Link } from "@material-ui/core"

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import {motion} from "framer-motion"

const BottomHalf = () => {

    const contactLinks = [
        {Name: "Mail", Icon: <MailOutlineIcon />, Link: "#"},
        {Name: "LinkedIn", Icon: <LinkedInIcon />, Link: "#"},
        {Name: "GitHub", Icon: <GitHubIcon />, Link: "#"},
        {Name: "Instagram", Icon: <InstagramIcon />, Link: "#"}
    ]

    return (
        <div>
            <br></br>
            <br></br>
            <Container maxWidth="lg">

                <Slide in direction="right">
                    <div>
                        <div style={{borderLeft: "5px solid #9369db"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginLeft: "10px"}}>ABOUT</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", marginLeft: "18px"}}>
                            Hi this is some info about me, i am interesting and stuff
                        </Typography>
                    </div>
                </Slide>

                <br></br>
                <br></br>

                <Slide in direction="left">
                    <div>
                        <div style={{borderRight: "5px solid #9369db", textAlign: "right"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginRight: "10px"}}>CONTACT</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", textAlign: "right", marginRight: "18px"}}>
                            Contact tings
                        </Typography>
                    </div>
                </Slide>
                
                <div style={{textAlign: "center", margin: "10px 0px"}}>
                    {contactLinks.map((contact) => (
                        <Link href={contact.Link}>
                            <motion.div 
                                style={{
                                    width: "50px", 
                                    height: "50px", 
                                    display: "inline-block", 
                                    marginRight: "15px", 
                                    color: "#9369db", 
                                    borderRadius: "50%", 
                                    border: "2px solid #9369db"
                                }}
                                initial={{y: 0}}
                                whileHover={{y: -5}}
                            >
                                <Typography style={{marginTop: "12px"}}>{contact.Icon}</Typography>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <br></br>
                <br></br>

                <Slide in direction="right">
                    <div>
                        <div style={{borderLeft: "5px solid #9369db"}}>
                            <Typography variant="h4" style={{fontWeight:"bold", marginLeft: "10px"}}>MORE</Typography>
                        </div>
                        <Typography style={{marginTop: "5px", marginLeft: "18px"}}>
                            More things haha
                        </Typography>
                    </div>
                </Slide>

            </Container>
        </div>
    )
}
export default BottomHalf