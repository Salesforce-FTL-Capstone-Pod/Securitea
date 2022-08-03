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

export default function EmailSim() {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Email />
      </Container>
    </>
  );
}

function Email() {
  return (
    <>
      <Container
        maxWidth={false}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          height: "150vh",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "2vw",
            backgroundColor: color.maximumBluePurple,
            height: "89vh",
          }}
        >
          <Container
            sx={{
              margin: "0",
              //   display: "flex",
              justifyContent: "flex-start",
              backgroundColor: color.platinum,
              width: "50vw",
              height: "75vh",
              marginTop: "5vw",
              borderRadius: "0.5vw",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "white",
                height: "6vh",
              }}
            >
              <p style={{ fontSize: "1vw" }}> Unread</p>
            </Box>
            <hr style={{ backgroundColor: "black" }}></hr>
            <Button
              disableGutters
              maxWidth={false}
              sx={{
                display: "flex",
                backgroundColor: "white",
                height: "4.8vh",
              }}
            >
              interactive email
            </Button>
            <hr style={{ backgroundColor: "black" }}></hr>

            <Box sx={{ backgroundColor: "white", height: "4.8vh" }}>static</Box>
            <hr style={{ backgroundColor: "black" }}></hr>
            <Box sx={{ backgroundColor: "white", height: "4.8vh" }}>static</Box>
            <hr style={{ backgroundColor: "black" }}></hr>
            <Box sx={{ backgroundColor: "white", height: "4.8vh" }}>static</Box>
            <hr style={{ backgroundColor: "black" }}></hr>
            <Box sx={{ backgroundColor: "white", height: "4.8vh" }}>static</Box>
            <hr style={{ backgroundColor: "black" }}></hr>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "white",
                height: "5vh",
              }}
            >
              <p style={{ fontSize: "1vw" }}> Everything else</p>
            </Box>
          </Container>
        </Container>
        {/* </Container> */}
      </Container>
    </>
  );
}
