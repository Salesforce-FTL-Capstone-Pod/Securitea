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
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Landing.css";
//svg files
import Logo from "../../assets/Logo.svg";
import HeroImage from "../../assets/HeroImage.svg";
import Message from "../../assets/Message.svg";
import Phishing from "../../assets/Phishing.svg";
import Example from "../../assets/Example.svg";
import Security from "../../assets/Security.svg";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubHero />
    </>
  );
}

//Navbar function for the landing page
export function Navbar() {
  return (
    <>
      <AppBar style={{ background: "#0E131F" }} position="sticky">
        <Toolbar style={{ height: "40px" }}>
          <img src={Logo}></img>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ flexGrow: 1 }}
            to="/"
            component={Link}
            style={{ textDecoration: "none" }}
          >
            SecuriTEA
          </Typography>
          <Stack direction="row" spacing={3}>
            <Button color="inherit" to="/" component={Link}>
              Home
            </Button>
            <Button color="inherit" to="/ModulePage" component={Link}>
              Modules
            </Button>
            <Button color="inherit" to="/resources" component={Link}>
              Resources
            </Button>
            <Button color="inherit" to="/contant us" component={Link}>
              Contact Us
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

// Hero container for the landing page
export function Hero() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          marginTop: "3.5vw",
          justifyContent: "space-around",
        }}
        maxWidth={false}
      >
        <img src={HeroImage} width="30%" />
        <Container
          sx={{
            marginLeft: "0",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            marginRight: "0",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              marginTop: "0vw",
              fontSize: "150%",
            }}
          >
            Pellentesque sem elit, aliquet in tempor ac, lacinia vel ipsum.
          </h1>
          <p
            style={{
              marginTop: "3vw",
              fontSize: "120%",
            }}
          >
            Sed blandit orci ut purus vestibulum tempor. Quisque sit amet
            faucibus mi. Ut nisi metus, porttitor eu efficitur ut, vestibulum
            sed sapien. Pellentesque sem elit, aliquet in tempor ac, lacinia vel
            ipsum. Donec dignissim, eros nec sodales consectetur, tellus tellus
            vulputate eros
          </p>

          <Button
            to="/register"
            component={Link}
            style={{
              width: "6vw",
              height: "3vw",
              fontSize: "65%",
              background: "#A39EDA",
              color: "#FFFFFF",

              marginTop: "2vw",
            }}
          >
            Sign Up
          </Button>

          <Typography
            component={"span"}
            style={{
              width: "10vw",
              fontSize: "75%",
            }}
          >
            <p>
              Have an account?
              <Link style={{ textDecoration: "none" }} to="/login">
                {" "}
                Sign In
              </Link>
            </p>
          </Typography>
        </Container>
      </Container>
    </>
  );
}
//SubHero for the landing page
export function SubHero() {
  return (
    <>
      <Container
        style={{
          backgroundColor: "#D3CFE2",
          margin: "0%",
          display: "flex",
          flexDirection: "column",
          marginTop: "4vw",
        }}
        maxWidth={false}
      >
        <Typography component={"div"}>
          <h1
            style={{
              height: "50px",
              fontSize: "120%",
              color: "black",
              marginLeft: "41vw",
              marginTop: "2vw",
            }}
          >
            Current Modules Available
          </h1>
        </Typography>
        <Container
          sx={{
            display: "flex",
            marginRight: "100vw",
            justifyContent: "space-around",
          }}
          maxWidth={false}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#a39eda",
              height: "18vw",
              width: "18vw",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img src={Phishing} style={{ width: "50%" }} />
            <Typography>
              <h2>Phishing</h2>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#a39eda",
              height: "18vw",
              width: "18vw",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img src={Security} style={{ width: "40%" }} />
            <Typography>
              <h2>Account Security</h2>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#a39eda",
              height: "18vw",
              width: "18vw",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img src={Example} style={{ width: "50%" }} />
            <Typography>
              <h2>Examples</h2>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#a39eda",
              height: "18vw",
              width: "18vw",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img src={Message} style={{ width: "50%" }} />
            <Typography>
              <h2>Messages</h2>
            </Typography>
          </Box>
        </Container>
        <Button
          to="/ModulePage"
          component={Link}
          style={{
            width: "16vw",
            height: "3vw",
            marginTop: "5vw",
            marginLeft: "41vw",
            fontSize: "10px",
            background: "#0E131F",
            color: "white",
            borderRadius: "5px",
            marginBottom: "2vw",
          }}
        >
          VIEW ALL MODULES
        </Button>
      </Container>
    </>
  );
}
