import { Container } from "@mui/system";
import { useEffect } from 'react'
import Navbar from "../Navbar/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { Text, Button, Progress, Collapse, Row, Grid, Card, Container as NextContainer } from "@nextui-org/react"
import * as color from "../../assets/colorPalette";
import backgroundImg from '../../assets/SecuriTEA-bg2.svg'
import Footer from "../Footer/Footer";
const sizeBox = "65vw";

export default function Skele() {
	return (
		<>
		<Navbar />
		<Container maxWidth={false} disableGutters sx={{ minWidth: "100vh", minHeight: "100vh", backgroundImage: `url(${backgroundImg})`}}>
			<Overview />
			<Content />
		</Container>
		<Footer />
		</>
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
		  style={{ marginBottom: "2vw", marginTop: "1vw", width: sizeBox }}
		>
			<Text h3 weight="light" css={{ color: "$colors$platinum", marginBottom: "0vw"}}>Module NAME</Text>
			<Text h1 css={{ color: "$colors$platinum", marginTop: "-0.5vw", marginBottom: "0vw"}}>PAGE NAME</Text>
		</Container>
	  </Container>
	);
  }


function Content() {
	return (
	  <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
		<Container>
            <Text size={30}>Whatever Here</Text>
	    </Container>
	  </Container>
)
}
