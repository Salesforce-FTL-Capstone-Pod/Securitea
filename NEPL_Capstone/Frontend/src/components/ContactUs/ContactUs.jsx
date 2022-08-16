import { Container } from "@mui/system";
import { useEffect } from 'react'
import Navbar from "../Navbar/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { Text, Button, Progress, Collapse, Row, Grid, Card, Container as NextContainer } from "@nextui-org/react"
import * as color from "../../assets/colorPalette";
import { ContactCard } from "./ContactCard";
import backgroundImg from '../../assets/SecuriTEA-bg3.svg'
import Footer from "../Footer/Footer";
const sizeBox = "65vw";

export default function ContactUs() {
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
			<Text h3 weight="light" css={{ color: "$colors$platinum", marginBottom: "0vw"}}>Contact Us</Text>
			<Text h1 css={{ color: "$colors$platinum", marginTop: "-0.5vw", marginBottom: "0vw"}}>Our Team</Text>
		</Container>
	  </Container>
	);
  }


function Content() {
	return (
	  <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
		<Container>

			<Grid.Container justify="center" gap={3} >
				<Grid xs={4}>
					<Card>
					<Card.Header>
						Hello
					</Card.Header>
					<Card.Body>
					<CardDisplay />
					</Card.Body>
					<Card.Footer>
						Hello
					</Card.Footer>
					</Card>
				</Grid>
				<Grid xs={4} >
					<CardDisplay />
				</Grid>
				<Grid xs={4}>
					<CardDisplay />
				</Grid>
				<Grid xs={4}>
					<CardDisplay />
				</Grid>

			</Grid.Container>
	    </Container>
	  </Container>
)
}

function CardDisplay(){
	useEffect(() => {
		const script = document.createElement('script');
	
		script.src = 'https://platform.linkedin.com/badges/js/profile.js';
		script.async = true;
		script.defer = true;
	
		document.body.appendChild(script);
	
		return () => {
		  document.body.removeChild(script);
		};
	  }, []);
	
	return(
		<NextContainer css={{ width: "1vw"}}>
		<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="paulfranco12" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/paulfranco12?trk=profile-badge"></a></div>
		</NextContainer>
	)
}
