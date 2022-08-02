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
} from "@mui/material";
import * as color from "../../assets/colorPalette";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Question from "../../assets/Question.svg";
import { borderRadius } from "@mui/system";

export default function SimulationPage() {
  return (
    <>
      <Container maxWidth={false} disableGutters sx={{ minHeight: "100vh" }}>
        <Navbar />
        <Simulation />
        <Footer />
      </Container>
    </>
  );
}

function Simulation() {
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: color.platinum,
        height: "150vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          height: "145vh",
          width: "50vw",
          marginTop: "1vw",
          borderLeft: 6,
          borderBottom: 6,
          borderColor: "black",
        }}
      >
        <p>Unit Simulation</p>
        <h1 style={{ marginTop: "-1vw" }}>Email Phishing</h1>
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
          SOMETSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
          SOMETHINGSOMETHING SOMETSOMETHING SOMETHINGSOMETHING
          SOMETHINGSOMETHING SOMETHINGSOMETHING SOMET
        </p>
        <Container
          sx={{
           position: "relative",
            // flexDirection: "column",
            backgroundColor: color.maximumBluePurple,
            height: "89vh",
            borderRadius: "2vw",
            // justifyContent: "center",
            // textAlign: "center",
            // alignItems: "center",
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
            >
              Start Simulation
            </Button>
            <img
              src={Question}
              style={{
              position: "absolute",
                width: "2vw",
                bottom:"2%",
                right:"5%"
              }}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
