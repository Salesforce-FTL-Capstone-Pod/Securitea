import React from "react";
import {
  Button,
  Grid,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  getLinkUtilityClass,
} from "@mui/material";
import { Link } from "react-router-dom";

import Linkdin from "../../assets/Linkdin.svg";
import GithubIcon from "../../assets/GithubIcon.svg";

export default function Footer() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "black",
          margin: "0%",
          display: "flex",
          flexDirection: "row",
          marginTop: "4vw",
          height: "17vw",
         
        }}
        maxWidth={false}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            justifyContent: "start",
            marginTop: "4vw",
          }}
        >
          <Container
            sx={{ display: "flex",width: "100%", justifyContent: "space-between" }}
            maxWidth={false}
          >
            <Container sx={{ width: "fit-content",marginRight:"30vw" }}>
              <h1 style={{ fontSize: "1.3vw" }}>SecuriTEA</h1>
              <p style={{ margin: "0" }}>
                Basic short text about whatver this is
              </p>
              <Container
                flexDirection="column"
                style={{ marginTop: "1.2vw" }}
                disableGutters
              >
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src={Linkdin} width="20vw" />
                </a>
                <a
                  href="https://github.com/Salesforce-FTL-Capstone-Pod/Securitea"
                  target="_blank"
                >
                  <img
                    src={GithubIcon}
                    width="20vw"
                    style={{ marginLeft: "1.8vw" }}
                  />
                </a>
              </Container>
            </Container>
            <Container
              sx={{
                width: "fit-content",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 style={{ fontSize: "1.3vw" }}>Explore</h1>
              <p style={{ margin: "0" }}>About Us</p>
              <p style={{ margin: "0" }}>Contact Us</p>
              <p style={{ margin: "0" }}>FAQ</p>
            </Container>
          </Container>
          <Container sx={{ marginTop: "2vw" }}>
            <hr></hr>
          </Container>
          <Container sx={{ display: "flex" }}>
            <Container>
              <p>Copyright © 2022 NEPL.</p>
            </Container>
            <Container sx={{ display: "flex", justifyContent: "space-around" }}>
              <p>Terms of Service</p>
              <p>Cookie Policy</p>
              <p>Privacy Policy</p>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}
