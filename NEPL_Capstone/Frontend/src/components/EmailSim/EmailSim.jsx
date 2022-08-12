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
// material ui icons imports
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModeIcon from "@mui/icons-material/Mode";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DraftsIcon from "@mui/icons-material/Drafts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

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
          //   backgroundColor: "black",
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
              display: "flex",
              flexDirection: "column",
              width: "20%",
              height: "35vh",
              marginTop: "6vw",
              marginLeft: "0%",
              marginRight: "0%",

              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: color.languidLavender,
                height: "18%",
                width: "65%",
                borderRadius: "0.5vw",
                justifyContent: "center",
              }}
            >
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "1.5vh",
                  fontWeight: "bold",
                }}
              >
                <ModeIcon />
                Compose
              </Container>
            </Box>
            <hr style={{ backgroundColor: "white" }}></hr>
            <Box
              sx={{
                display: "flex",
                backgroundColor: color.maximumBluePurple,
                borderRadius: "0.5vw",
                height: "12%",
          
                fontWeight: "bold",
              }}
            >
              <InboxIcon />
              Inbox
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: color.maximumBluePurple,
                borderRadius: "0.5vw",
                height: "12%",
          
                fontWeight: "bold",
              }}
            >
              <StarOutlineIcon />
              Starred
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: color.maximumBluePurple,
                borderRadius: "0.5vw",
                height: "12%",
           
                fontWeight: "bold",
              }}
            >
              <AccessTimeIcon />
              Snoozed
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: color.maximumBluePurple,
                borderRadius: "0.5vw",
                height: "12%",
               
                fontWeight: "bold",
              }}
            >
              <SendSharpIcon />
              Sent
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: color.maximumBluePurple,
                borderRadius: "0.5vw",
                height: "12%",
              
                fontWeight: "bold",
              }}
            >
              <DraftsIcon />
              Draft
            </Box>
            <Box
              sx={{
                display: "flex",
                backgroundColor: color.maximumBluePurple,
                borderRadius: "0.5vw",
                height: "12%",
      
                fontWeight: "bold",
              }}
            >
              <KeyboardArrowDownIcon />
              More
            </Box>
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              backgroundColor: "white",
              width: "60vw",
              height: "75vh",
              marginTop: "6vw",
              borderRadius: "0.5vw",
              flexDirection: "column",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "5%",
                marginTop: "1vw",
              }}
            >
              <KeyboardArrowUpIcon />
              <Box sx={{ display: "flex", width: "100%", margin: "0" }}>
                Unread
              </Box>
            </Container>
            <hr
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "grey",
                margin: "0",
              }}
            ></hr>
            <Button
              sx={{
                display: "flex",

                justifyContent: "start",
                backgroundColor: "WHITE",
                width: "100%",
                height: "7%",
                color: "black",
                fontSize: "-1vw",
              }}
            >
              <CheckBoxOutlineBlankIcon />
              <StarOutlineIcon />
              This is Nana asking for you to send me your SSN right NOW!!!
            </Button>
            <hr
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "grey",
                margin: "0",
              }}
            ></hr>
            <Box sx={{ backgroundColor: "whblackte", height: "7%" }}>
              <CheckBoxOutlineBlankIcon />
              <StarOutlineIcon />
              static
            </Box>
            <hr
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "grey",
                margin: "0",
              }}
            ></hr>
            <Box sx={{ backgroundColor: "WHITE", height: "7%" }}>
              <CheckBoxOutlineBlankIcon />
              <StarOutlineIcon />
              static
            </Box>
            <hr
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "grey",
                margin: "0",
              }}
            ></hr>
            <Box sx={{ backgroundColor: "WHITE", height: "7%" }}>
              <CheckBoxOutlineBlankIcon />
              <StarOutlineIcon />
              static
            </Box>
            <hr
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "grey",
                margin: "0",
              }}
            ></hr>
            <Container
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "5%",
                marginTop: "1vw",
              }}
            >
              <KeyboardArrowDownIcon />
              <Box sx={{ display: "flex", width: "100%" }}>Everything else</Box>
            </Container>
            <hr
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "grey",
                margin: "0",
              }}
            ></hr>
          </Container>
        </Container>
      </Container>
    </>
  );
}
