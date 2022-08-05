import React from "react";
import Navbar from "../../Navbar/Navbar";
import { Container, Box} from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../../assets/colorPalette"
import Footer from "../../Footer/Footer"
import { Text, Button, Progress, Collapse, Row, Grid, Card } from "@nextui-org/react"
const sizeBox = "65vw";


export default function EmployeeProgress() {
  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      <Overview />
      <Content />
      <Footer />
    </Container>
  );
}

function Overview() {


  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: color.richBlackFogra,
        display: "flex",
        justifyContent: "center",
    }}
    >
      <Container
        style={{ marginBottom: "4vw", marginTop: "1vw", width: sizeBox }}
      >

      </Container>
    </Container>
  );
}

function Content() {
  return (
    <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
      <Container>

       
      </Container>
    </Container>
  );
}
