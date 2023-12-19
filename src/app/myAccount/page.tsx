"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import { Divider } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Aos from "aos";
import "aos/dist/aos.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Style from "./myAccount.module.scss";
import { CheckBox, Label } from "@mui/icons-material";

Aos.init();

function myAccount() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Tính toán backgroundPositionY dựa trên scrollPosition với sự thay đổi 1px khi lăn chuột xuống
  const backgroundPositionY1 = `center ${900 - scrollPosition * 0.4}px`;
  const backgroundPositionY2 = `center ${900 - scrollPosition * 0.6}px`;

  return (
    <div
      style={{
        minHeight: "1065px",
        backgroundColor: "#fff",
      }}
      className="main-container"
    >
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: {
            xs: "738px",
            md: "990px",
            lg: "1220px",
          },
          backgroundColor: "#fff",
          marginTop: "86px",
          minHeight: "100vh",
          padding: { xs: "column", lg: "row", md: "0px" },
          display: "flex",
          flexDirection: "column",
          //alignItems: "center"
        }}
      >
        <Box className={Style.breadcrumbBanner}>
          <div className={Style.barContainer}>
            <div className={Style.containerTitle}>
              <>
                <a
                  href="/"
                  style={{
                    color: "#878c9f",
                    textDecoration: "none",
                  }}
                >
                  Home
                </a>
                <ChevronRightIcon
                  sx={{
                    fontSize: "18px",
                    marginRight: "7px",
                    marginLeft: "7px",
                  }}
                />
              </>
            </div>
            <div className={Style.accountAddress}>myAccount</div>
          </div>
        </Box>

        <Box
          className={Style.elementColumn}
          sx={{
            width: { xs: "100%", md: "100%", sm: "100%" },
            padding: { xs: "20px", sm: "20px" },
            paddingRight: { md: "0px", lg: "0px" },
          }}
        >
          <Box className={Style.widgetWrap_3}>
            <Box>
              <Box>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "100%",
                      sm: "100%",
                    },
                  }}
                  className={Style.elementColumn}
                >
                  <Box className={Style.widgetWrap_2}>
                    <Box
                      className={Style.elementElement}
                      sx={{
                        marginBottom: "50px",
                      }}
                    >
                      <h2 className={Style.mainTitle}>Login</h2>
                    </Box>
                    <Box className={Style.elementElement}>
                      <Box className={Style.ffTContainer}>
                        <Box className={Style.fluentForm}>
                          <div className={Style.inputLabel}>
                            <label className={Style.ff1Title}>
                              User or E-mail
                            </label>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="user"
                              id={Style.namesFirstName}
                              className={Style.elFormControl}
                              aria-invalid="false"
                              aria-required="false"
                            />
                          </div>
                        </Box>
                        <Box className={Style.fluentForm}>
                          <div className={Style.inputLabel}>
                            <label className={Style.ff1Title}>Password</label>
                          </div>
                          <div className={Style.inputContent}>
                            <input
                              type="text"
                              name="names[first-name]"
                              id={Style.namesFirstName}
                              className={Style.elFormControl}
                              aria-invalid="false"
                              aria-required="false"
                            />
                          </div>
                        </Box>
                      </Box>
                      <Box className={Style.wrapSubmit}>
                        <Box className={Style.submitBtn}>
                          <button type="submit" className={Style.btnSubmit}>
                            Login
                          </button>
                        </Box>
                        <Box className={Style.checkBox}>
                          <input
                            className={Style.btnCheckBox}
                            id="CheckBox"
                            type="checkbox"
                          />
                          <label className={Style.textCheckBox}>
                            {" "}
                            Remember Me
                          </label>
                        </Box>
                      </Box>
                      <div>
                        <a className={Style.txtForgotPass} href="">
                          Forgot your password?
                        </a>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default myAccount;
