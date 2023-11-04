"use-client"
import { createContext } from 'react'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link";
import { Divider } from "@mui/material";
import Image from "next/image";
import styled from 'styled-components';
import './page.css'
import LinearProgress, {linearProgressClasses} from "@mui/material/LinearProgress";




const About = () => {
    return (
        <>
            <Container 
                maxWidth="xl"
                sx={{
                    maxWidth:{xs:"738px", md:"950px", lg:"1230px"},
                    backgroundColor: "#fff",
                    marginTop: "86px",
                    minHeight:"500vh",
                    padding: {xs:"column", lg:"row", md:"0px"}
                }}
            >
                <Box
                    sx = {{
                        width: "100%",
                        backgroundColor: "white",
                        zIndex:"100",
                        padding: "30px 0px"
                    }}
                    >
                        <div 
                            style ={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style ={{
                                    fontSize: "15px",
                                    fontWeight:"600",
                                    color: "#878cab",
                                }}
                            >
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
                            <div
                                style ={{
                                    fontSize: "15px",
                                    fontWeight:"600",
                                    color: "#00c6a9"
                                }}
                            >
                                About
                            </div>
                        </div>
                </Box>
                <Divider 
                    sx={{
                        maxWidth: "100% !important",
                        borderColor: "#deede9 !important",
                        opacity: "1 !important"
                    }} 
                />

                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            paddingTop: "100px",
                            display: "flex",
                            flexDirection: {xs:"column", lg:"row", md:"row", sm: "column"},
                            alignItems: {xs:"center", sm: "center", md:"flex-start !important"},
                        }}
                        
                    >
                        <Image 
                            src="/about-meet.jpg"
                            alt="Logo"
                            width={610}  
                            height={460} 
                            className="image-lg" 
                        />
                        <Box 
                            sx={{ 
                                flexGrow: 1, 
                                paddingRight: "10px",
                                ".MuiBox-root.css-1a0qsji": "-webkit-align-items: flex-start !important"
                            }}
                        >
                            <Box
                                sx = {{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: {xs:"15px", sm: "15px", md:"25px", lg:"60px" },
                                    paddingTop: {xs:"20px", sm: "20px", md:"5px", lg:"17px" }
                                }}
                            >
                                <Grid xs={10}>
                                    <div
                                        style={{
                                            width: "100%"
                                        }}
                                        className="element-1"
                                    >
                                        <h1 style={{
                                                fontSize: "16px",
                                                lineHeight: "26px",
                                                fontWeight: "500px",
                                                letterSpacing: "1.1px",
                                                color: "#00c194",
                                                marginBottom: "10px"
                                            }}
                                        >
                                            ABOUT US
                                        </h1>
                                        <h2
                                            style={{
                                                fontSize: "26px",
                                                fontWeight: "500",
                                                color: "#212121",
                                                lineHeight: "1.2",
                                                width: "80%"
                                            }}
                                        >
                                            We're on a Mission to Change
                                            View of RealEstate Field.       
                                        </h2>
                                        <p
                                            style={{
                                                width: "100%",
                                                fontSize: "15px",
                                                color: "#70778a",
                                                lineHeight: "1.5",
                                                fontWeight: "500"
                                            }}
                                        >
                                            when an unknown printer took a galley of type and scrambled 
                                            it to make type specimen bookt has survived not only five 
                                            centuries alsoey jequery the leap into electronic typesetting.
                                        </p>
                                    </div>
                                </Grid>
                                <Box sx={{
                                    display: "flex",
                                    width: "100%",
                                    marginTop: "20px",
                                    flexDirection: {xs:"column", lg:"row", md:"row", sm: "column"},
                                }}>
                                    <Grid xs = {5} sx={{width: {xs:"100%", lg:"50%", md:"50%", sm: "100%"}, padding: {xs:"0px", lg:"10px", md:"10px", sm: "10px"}}}>
                                        <div>
                                            <Image 
                                                src="/Modern-Villa-1.svg"
                                                alt="Logo"
                                                width={60}  
                                                height={57} 
                                            />
                                            <Box
                                                sx={{
                                                    width: "100%"
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: "100%"
                                                    }}
                                                >
                                                    <h2
                                                        style={{
                                                            fontSize: "22px",
                                                            margin: "15px 0px 1px 0px",
                                                            fontWeight: "500",
                                                            color: "#212121",
                                                            width: "100%"
                                                        }}
                                                    >
                                                        Modern Villa
                                                    </h2>
                                                </Box>
                                                <Box>
                                                    <p
                                                        style={{
                                                            fontSize: "15px",
                                                            color: "#70778B",
                                                            marginTop: "10px"
                                                        }}
                                                    >
                                                        when unknown printer took galley of type and scrambled.
                                                    </p>
                                                </Box>
                                            </Box>
                                        </div>
                                    </Grid>
                                    <Grid xs = {5} sx={{width: {xs:"100%", lg:"50%", md:"50%", sm: "100%"}, padding: {xs:"0px", lg:"10px", md:"10px", sm: "10px"}}}>
                                        <div>
                                            <Image 
                                                src="/home_hand_3-1.svg"
                                                alt="Logo"
                                                width={59}  
                                                height={63} 
                                            />
                                            <Box>
                                                <Box>
                                                    <h2
                                                        style={{
                                                            fontSize: "22px",
                                                            margin: "15px 0px 1px 0px",
                                                            fontWeight: "500",
                                                            color: "#212121"
                                                        }}
                                                    >
                                                        Secure Payment
                                                    </h2>
                                                </Box>
                                                <Box>
                                                    <p
                                                        style={{
                                                            fontSize: "15px",
                                                            color: "#70778B",
                                                            marginTop: "10px"
                                                        }}
                                                    >
                                                        when unknown printer took galley of type and scrambled.
                                                    </p>
                                                </Box>
                                            </Box>
                                        </div>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {xs:"column", lg:"row", md:"row", sm: "column"},
                            alignItems: {xs:"center", sm: "center", md:"flex-start !important"},
                        }}
                    >
                        <Box 
                            sx={{ 
                                flexGrow: 1, 
                                paddingRight: "10px",
                                ".MuiBox-root.css-1a0qsji": "-webkit-align-items: flex-start !important",
                                width: "100%"
                            }}
                        >
                            <Box
                                sx = {{
                                    display: "flex",
                                    flexDirection: "column",
                                    paddingLeft: {xs:"15px", sm: "15px", md:"25px", lg:"0px" },
                                    paddingTop: {xs:"20px", sm: "20px", md:"5px", lg:"40px" },
                                    width: "100%"
                                }}
                            >
                                <Grid xs={10} sx={{width: "100%"}}>
                                    <div
                                        style={{
                                            width: "100%"
                                        }}
                                        className="element-1"
                                    >
                                        <h1 style={{
                                                fontSize: "16px",
                                                lineHeight: "26px",
                                                fontWeight: "500px",
                                                letterSpacing: "1.1px",
                                                color: "#00c194",
                                                marginBottom: "10px"
                                            }}
                                        >
                                            COMPANY POWER
                                        </h1>
                                        <h2
                                            style={{
                                                fontSize: "26px",
                                                fontWeight: "500",
                                                color: "#212121",
                                                lineHeight: "1.2",
                                                width: "60%"
                                            }}
                                            className='content'
                                        >
                                            The Core Company Values Of
                                            Our main Goal       
                                        </h2>
                                        <p
                                            style={{
                                                width: "85%",
                                                fontSize: "15px",
                                                color: "#70778a",
                                                lineHeight: "1.5",
                                                fontWeight: "500"
                                            }}
                                        >
                                            when an unknown printer took a galley of type and scrambled it to make type specimen bookt has survived.
                                        </p>
                                    </div>
                                </Grid>
                                <Box sx={{
                                    display: "flex",
                                    width: "100%",
                                    marginTop: "20px",
                                    flexDirection: {xs:"column", lg:"column", md:"column", sm: "column"},
                                }}>
                                    <Grid xs = {5} sx={{width: {xs:"100%", lg:"85%", md:"100%", sm: "100%"}, height: "77px"}}>
                                        <div>
                                            <Box
                                                sx={{
                                                    width: "100%"
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        width: "100%"
                                                    }}
                                                >
                                                    <h2
                                                        style={{
                                                            fontSize: "16px",
                                                            fontWeight: "500",
                                                            color: "#212121",
                                                            width: "100%",
                                                            marginBottom: "10px"
                                                        }}
                                                    >
                                                        Modern Technology
                                                    </h2>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: "100%"
                                                    }}
                                                >
                                                    <LinearProgress variant="determinate" value={59} 
                                                        sx={{
                                                            borderRadius: "100px",
                                                            backgroundColor: "#dceeea",
                                                            height: "7px",
                                                            "& .MuiLinearProgress-bar": {
                                                                backgroundColor: "#00c194 !important",
                                                            },
                                                        }}
                                                        className='progress-1' 
                                                    />

                                                    <div className="elementor-progress-percentage">
                                                        <div className="wrap place-59">
                                                        <span className="percentage-59">59%</span>
                                                        <div className='59'><span className="shape"></span></div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Box>
                                        </div>
                                    </Grid>
                                    <Grid xs = {5} sx={{width: {xs:"100%", lg:"85%", md:"100%", sm: "100%"}, height: "77px"}}>
                                        <div>
                                            <Box>
                                                <Box>
                                                    <h2
                                                        style={{
                                                            fontSize: "16px",
                                                            fontWeight: "500",
                                                            color: "#212121",
                                                            marginBottom: "10px"
                                                        }}
                                                    >
                                                        Tax Solution Area
                                                    </h2>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        width: "100%",
                                                    }}
                                                >
                                                    <LinearProgress variant="determinate" value={79} 
                                                        sx={{
                                                            borderRadius: "100px",
                                                            backgroundColor: "#dceeea",
                                                            height: "7px",
                                                            "& .MuiLinearProgress-bar": {
                                                                backgroundColor: "#00c194 !important",
                                                            },
                                                        }}
                                                        className='progress-2' 
                                                    />
                                                    <div className="elementor-progress-percentage">
                                                        <div className="wrap place-79">
                                                        <span className="percentage-79">79%</span>
                                                        <div className='79'><span className="shape"></span></div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Box>
                                        </div>
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                        <Image 
                            src="/about-meet-2.jpg"
                            alt="Logo"
                            width={610}  
                            height={460} 
                            className="image-lg" 
                        />
                    </Box>
                    <Box>

                    </Box>
                </Box>
                
            </Container>
        </>
    ) 
}

export default About;