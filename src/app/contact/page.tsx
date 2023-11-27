"use client";
import * as React from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import Style from "./contact.module.scss"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import "../globals.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Contact() {
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
          // Ensure that window and document are defined before calling Aos.init()
          Aos.init();
        }
    }, []);

    return (
        <div style={{
            minHeight: "1000px",
            backgroundColor: "#fff",
            paddingTop: "86px"
        }}>
           <Box
                className = {Style.breadcrumbBanner} 
           >
                <div className={Style.barContainer}>
                    <div className={Style.containerTitle}>
                        <>
                            <a href="/" style={{
                                color: "#878c9f",
                                textDecoration: "none",
                            }}>
                                Home
                            </a>
                            <ChevronRightIcon 
                                sx={{
                                    fontSize: "18px",
                                    marginRight:"7px",
                                    marginLeft:"7px"
                                }}
                            />
                        </>
                    </div>
                    <div className={Style.contactAddress}>
                       Contact
                    </div>
                </div>
           </Box>
           <Container id={Style.primary}>
                <Container className={Style.elementSection}>
                    <Box className = {Style.elementContainer}>
                        <Box 
                            className = {Style.elementColumn}
                            sx={{
                                width: {sm: "50.805%"}
                            }}
                        >
                            <Box
                                className = {Style.widgetWrap}
                            >
                                <Box
                                    className = {"Style.elementSection Style.elementElement"}
                                >
                                    <Box className = {"Style.elementSection Style.elementContainer"}>
                                        <Box
                                            sx={{
                                                width: {sm: "100%"}
                                            }}
                                            className = {"Style.elementColumn"}
                                        >
                                            <Box
                                                className = {"Style.widgetWrap_2"}
                                            >
                                                <Box className = {Style.elementElement}>
                                                    <div className = {Style.elementWidgetContainer}>
                                                        <div className = {Style.sectionTitleWrap}>
                                                           <div className={Style.titleInner}>
                                                                <h2 className={Style.mainTitle}>
                                                                    Get in Touch
                                                                </h2>

                                                                <div className={Style.description}>
                                                                    <p>Borem ipsum dolor sit amet conse ctetur adipisicing elit sed do eiusmod Eorem ipsum dolor sit amet conse ctetur.</p>
                                                                </div>
                                                           </div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
           </Container>
        </div>
    ) 
}

export default Contact;