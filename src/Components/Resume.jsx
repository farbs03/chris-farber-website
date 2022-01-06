import React from "react"
import { Button, Paper } from "@material-ui/core"

import {motion} from "framer-motion"

import GetAppIcon from '@material-ui/icons/GetApp';

import resume from "./resume.png"

const Resume = () => {

    const resumeLink = './resume.pdf'

    return (
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
                <img src={resume} style={{width: "100%", height: "100%"}}/>
            </Paper>
            <br></br>
            <a href={resumeLink} download style={{textDecoration: "none"}}>
                <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}  transition={{duration: 0.2}}>
                    <Button 
                        variant="contained" 
                        endIcon={<GetAppIcon />} 
                        style={{
                            background: "#9369db", 
                            color: "white", 
                            borderRadius: "40px", 
                            textTransform: "none", 
                            fontWeight: "bold", 
                            padding:"12px 16px", 
                            fontSize: "14px",
                            marginTop: "12px"
                        }}
                        disableRipple
                    >
                        Download Resume
                    </Button>
                </motion.div>
            </a>
        </div>
    )
}

export default Resume
