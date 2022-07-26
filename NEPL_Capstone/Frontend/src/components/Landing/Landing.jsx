import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Navbar />
      <Hero />
      <SubHero />
    </Container>
  );
}

//Navbar function for the landing page
function Navbar() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute" style={{ background: "#0E131F" }}>
          <Toolbar style={{ height: "40px" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SecuriTEA
            </Typography>
            <Stack direction="row" spacing={3}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Modules</Button>
              <Button color="inherit">Resources</Button>
              <Button color="inherit">Contact Us</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}

// Hero container for the landing page
function Hero() {
  return (
    <Stack direction="row" spacing={3}>
      <Typography>
        <h1
          style={{
            position: "absolute",
            width: "540px",
            height: "16px",
            left: "860px",
            top: "90px",
            fontSize: "18px",
          }}
        >
          Pellentesque sem elit, aliquet in tempor ac, lacinia vel ipsum.
        </h1>
        <p
          style={{
            position: "absolute",
            width: "550px",
            height: "28px",
            left: "860px",
            top: "150px",
            fontSize: "12px",
          }}
        >
          Sed blandit orci ut purus vestibulum tempor. Quisque sit amet faucibus
          mi. Ut nisi metus, porttitor eu efficitur ut, vestibulum sed sapien.
          Pellentesque sem elit, aliquet in tempor ac, lacinia vel ipsum. Donec
          dignissim, eros nec sodales consectetur, tellus tellus vulputate eros
        </p>
      </Typography>
      <Button
        style={{
          position: "absolute",
          width: "127px",
          height: "50px",
          left: "1010px",
          top: "232px",
          fontSize: "10px",
          background: "#A39EDA",
          color: "#FFFFFF",
        }}
      >
        <Link to="/register">Sign Up</Link>
      </Button>
      <Typography
        style={{
          position: "absolute",
          width: "150px",
          height: "50px",
          left: "1010px",
          top: "300px",
          fontSize: "12px",
        }}
      >
        <p>
          Have an account? <Link to="/login">Sign In</Link>
        </p>
      </Typography>
    </Stack>
  );
}
//SubHero for the landing page
function SubHero() {
  return (
    <Container style={{ backgroundColor: "#000000" }}>
      <Box
        maxWidth="xl"
        style={{
          backgroundColor: "#D3CFE2",

          width: "500px",
          height: "50px",
          left: "598px",
          top: "390px",
          fontSize: "18px",
        }}
      >
        <Typography>
          <h1
            style={{
              position: "absolute",
              width: "230px",
              height: "50px",
              left: "598px",
              top: "390px",
              fontSize: "18px",
            }}
          >
            Current Modules Available
          </h1>
        </Typography>
        <Grid maxWidth="sm" sx={{ background: "purple" }}></Grid>
        <Button
          style={{
            position: "absolute",
            width: "230px",
            height: "50px",
            left: "598px",
            top: "780px",
            fontSize: "10px",
            background: "#0E131F",
            color: "white",
            boarderRadius: "100px",
          }}
        >
          VIEW ALL MODULES
        </Button>
      </Box>
    </Container>
  );
}
