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

import Microsoft from "../../assets/Microsoft.svg";
import ACCC from "../../assets/ACCC.svg";
import FTC from "../../assets/FTC.svg";
export default function ResourcePage() {
  return (
    <>
      <Container maxWidth={false} disableGutters sx={{ minHeight: "100vh" }}>
        <Navbar />
        <Resources />
        <Footer />
      </Container>
    </>
  );
}

function Resources() {
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        flexDirection: "column",

        color: "white",
        backgroundColor: "white",
        height: "120vh",
      }}
    >
      <Container
        style={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "4vw", color: "black" }}>Resources</h1>
        <p
          style={{
            fontSize: "2vw",
            fontWeight: "bold",
            marginTop: "-1%",
            color: "black",
          }}
        >
          Here are some helpful resources that have more detials on Phishing
        </p>
      </Container>
      <Container sx={{ width: "100vw" }}>
        <Container
          sx={{ display: "flex", flexDirection: "row", marginTop: "1vw" }}
        >
          <img src={FTC} width="35%" />
          <Container>
            <h1 style={{ fontSize: "2vw", color: "black" }}>
              Federal Trade Commision
            </h1>
            <p style={{ fontSize: "1vw", color: "black" }}>
              Protecting consumers and competition by preventing
              anticompetitive, deceptive, and unfair business practices through
              law enforcement, advocacy, and education without unduly burdening
              legitimate business activity.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: color.languidLavender,
                color: color.languidLavender,
                marginTop: "1vw",
              }}
            >
              <a
                href="https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams"
                target="_blank"
              >
                VIEW MORE
              </a>
            </Button>
          </Container>
        </Container>
        <hr style={{ backgroundColor: "#B7B5E4" }}></hr>
        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <img src={ACCC} width="35%" />
          <Container>
            <h1 style={{ fontSize: "2vw", color: "black" }}>
              Australian Competition & Consumer Comission
            </h1>
            <p style={{ fontSize: "1vw", color: "black" }}>
              Publications, videos, and other online resources to assist
              consumers, small businesses and industry in understanding and
              preventing harm from scams.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: color.languidLavender,
                marginTop: "1vw",
              }}
            >
              <a
                href="https://www.scamwatch.gov.au/types-of-scams/attempts-to-gain-your-personal-information/phishing"
                target="_blank"
              >
                VIEW MORE
              </a>
            </Button>
          </Container>
        </Container>
        <hr style={{ backgroundColor: "#B7B5E4" }}></hr>
        <Container sx={{ display: "flex", flexDirection: "row"}}>
          <img src={Microsoft} width="35%"  />
          <Container>
            <h1 style={{ fontSize: "2vw", color: "black" }}>Microsoft</h1>
            <p style={{ fontSize: "1vw", color: "black" }}>
              Microsoft Corporation is an American multinational technology
              corporation which produces computer software, consumer
              electronics, personal computers, and related services
              headquartered at the Microsoft Redmond campus located in Redmond,
              Washington, United States.
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: color.languidLavender,
                marginTop: "1vw",
              }}
            >
              <a
                href="https://support.microsoft.com/en-us/windows/protect-yourself-from-phishing-0c7ea947-ba98-3bd9-7184-430e1f860a44"
                target="_blank"
              >
                VIEW MORE
              </a>
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
