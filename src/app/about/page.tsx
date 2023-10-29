"use-client"

import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link";


const About = () => {
    return (
        <Container 
            maxWidth="lg"
            sx={{
                backgroundColor: "#fff",
                marginTop: "86px",
                maxWidth:{xs:"535px", md:"950px", xl:"1230px", lg:"1185px"},
                minHeight:"100vh",
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
                                <Link href="/">
                                    Home
                                </Link>
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
            
        </Container>
    ) 
}

export default About;