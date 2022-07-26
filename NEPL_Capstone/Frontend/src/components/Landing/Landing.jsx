import * as React from "react";
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

export default function Landing() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <SubHero />
    </div>
  );
}

//Navbar function for the landing page
export function Navbar() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ background: "#0E131F" }}>
          <Toolbar style={{ height: "40px" }}>
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
              <Button color="inherit" to="/modules" component={Link}>
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
      </Box>
    </Container>
  );
}

// Hero container for the landing page
export function Hero() {
  return (
    <Stack direction="column" spacing={3}>
      <Typography component={"span"}>
        <h1
          style={{
            position: "fixed",
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
            position: "fixed",
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
        to="/register"
        component={Link}
        style={{
          position: "fixed",
          width: "127px",
          height: "50px",
          left: "1010px",
          top: "232px",
          fontSize: "10px",
          background: "#A39EDA",
          color: "#FFFFFF",
        }}
      >
        Sign Up
      </Button>
      <Typography
        component={"span"}
        style={{
          position: "fixed",
          width: "150px",
          height: "50px",
          left: "1010px",
          top: "300px",
          fontSize: "12px",
        }}
      >
        <p>
          Have an account?
          <Link style={{ textDecoration: "none" }} to="/login">
            Sign In
          </Link>
        </p>
      </Typography>
    </Stack>
  );
}
//SubHero for the landing page
export function SubHero() {
  return (
    <Box>
      <Grid
        container
        spacing={7}
        style={{
          backgroundColor: "#D3CFE2",
          position: "fixed",
          width: "100%",
          height: "500px",
          right: "0px",
          top: "470px",
        }}
        direction="row"
      ></Grid>
      <Typography component={"span"}>
        <h1
          style={{
            position: "fixed",
            width: "230px",
            height: "50px",
            left: "598px",
            top: "430px",
            fontSize: "18px",
            color: "black",
          }}
        >
          Current Modules Available
        </h1>
      </Typography>

      <Button
        to="/modules"
        component={Link}
        style={{
          position: "fixed",
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
  );
}
