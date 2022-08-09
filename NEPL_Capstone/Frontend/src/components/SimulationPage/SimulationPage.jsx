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
  colors,
  TextareaAutosize,
} from "@mui/material";
import * as color from "../../assets/colorPalette";
import { Link, renderMatches } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

import Question from "../../assets/Question.svg";
import EmailSim from "../../assets/EmailSim.svg";
import PhisingImg from "../../assets/PhisingImg.svg";
import EmailButton from "../../assets/EmailButton.svg";
import LinkButton from "../../assets/LinkButton.svg";
import Wrong from "../../assets/Wrong.svg";
import { borderRadius } from "@mui/system";
import { StyledBadge } from "../ManagerDashboard/EmployeeTable/StyledBadge";

export default function SimulationPage() {
  return (
    <>
      <Navbar />
      <Simulation />
      <Footer />
    </>
  );
}

function Simulation() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex ",
        flexDirection: "column",
        backgroundColor: color.platinum,
        height: "125vh",
        width: "75%",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <h1>Email Phishing</h1>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Container sx={{ margin: "0" }}>
          <p style={{ fontWeight: "bold", color: "green" }}>Do's</p>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </Container>
        <Container style={{ marginLeft: "0vw" }}>
          <p style={{ fontWeight: "bold", color: "red" }}>Don'ts</p>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </Container>
      </Container>
      <p>What you wil be doing :</p>
      <p style={{ marginTop: "0vw" }}>
        SOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
        SOMETSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
        SOMETSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
        SOMET
      </p>
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          backgroundColor: color.blueBell,
          height: "89vh",
          borderRadius: "2vw",
          width: "100%",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            height: "86vh",
          }}
        >
          {!isStarted ? (
            <Button
              style={{
                display: "flex",
                backgroundColor: "black",
                color: "white",
                height: "6vh",
                width: "7vw",
                borderLeft: "4px solid white",
                borderBottom: "4px solid white",
              }}
              onClick={() => {
                setIsStarted(!isStarted);
               
              }}
            >
              Start Simulation
            </Button>
          ) : null}
          {isStarted ? <EmailRender /> : null}

          <img
            src={Question}
            style={{
              position: "absolute",
              width: "2vw",
              bottom: "2%",
              right: "5%",
            }}
          />
        </Container>
      </Container>
    </Container>
  );
}

function EmailRender() {
  const [isClicked, setIsClicked] = useState(false);
  const [isWrong, setIsWrong] = useState(false)
  return (
    <Container>
      <Button
        onClick={() => setIsClicked(!isClicked)}
        style={{ width: "76.4%", background: "none" }}
        sx={{
          position: "relative",
          top: " 25.5%",
          left: "11.2%",
        }}
      >
        {!isClicked ? (
          <img src={EmailButton} style={{ display: "flex", width: "100%" }} />
        ) : null}
      </Button>
      {isClicked ? (
        <img src={PhisingImg} style={{ width: "100%" }} />
      ) : (
        <img src={EmailSim} style={{ display: "flex", width: "100%" }} />
      )}
      <Button
        onClick={() => setIsClicked(!isClicked)}
        sx={{
          position: "relative",
          bottom: "46.1%",
          left: "6%",
          width: "40%",
        }}
        style={{ background: "none" }}
      >
        {isClicked ? (
          <img src={LinkButton} style={{ display: "flex", fontSize: "100%" }} />
        ) : null}
      </Button>
    
    </Container>
  );
}

