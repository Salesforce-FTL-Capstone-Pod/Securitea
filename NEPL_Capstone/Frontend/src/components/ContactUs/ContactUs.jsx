import { Container } from "@mui/system";
import { useEffect } from 'react'
import Navbar from "../Navbar/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import { Text, Button, Progress, Collapse, Row, Grid, Card, Col, Container as NextContainer, User, Tooltip, Link as NextLink } from "@nextui-org/react"
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
	  <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "0vh"}} disableGutters>
		<Container>

			<Grid.Container justify="center" gap={5}>
				<Grid xs={5}>
					<Card isHoverable variant="bordered" borderWeight="extrabold" css={{ borderColor: "$colors$medpurple" }}>
					<Card.Header css={{ justifyContent: "center",}}>
						<Tooltip content={"I like Frontend"}>
							<User
							src="https://media-exp1.licdn.com/dms/image/C5603AQEQyzB4K7pjAw/profile-displayphoto-shrink_200_200/0/1654102529794?e=2147483647&v=beta&t=6LyaJZe6PIdd20imLxg8cHAvdhC_Ai3XJQTaDjeYpT4"
							name={<Text size={22} weight="">Nana Kofi Okae</Text>}
							size="xl"
							/>
						</Tooltip>
					</Card.Header>
					<Card.Body>
						<Text h5 weight="normal" color="black"> 
							Nana Kofi Okae is a Computer Science student at Virginia Common Wealth University. He designed and developed the Phishing simulations on the frontend and developed some frontend components. 
						</Text>
					</Card.Body>
					<Card.Footer>
						<NextLink
							icon
							color="secondary"
							target="_blank"
							href="https://www.linkedin.com/in/nana-kofi-okae-3328331a1/"
							>
							Connect with Nana on LinkedIn.
						</NextLink>
					</Card.Footer>
					</Card>
				</Grid>

				<Grid xs={5}>
					<Card isHoverable variant="bordered" borderWeight="extrabold" css={{ borderColor: "$colors$medpurple" }}>
					<Card.Header css={{ justifyContent: "center",}}>
						<Tooltip content={"I like Backend"}>
							<User
							src="https://media-exp1.licdn.com/dms/image/C4E03AQFrY7pBAFmg5Q/profile-displayphoto-shrink_400_400/0/1639864498341?e=1666224000&v=beta&t=tXfW-j5tbP1NrhLNFRG9YoEdgrtjdrs21cLsHvE_0oc"
							name={<Text size={22} weight="">Lucas Ribeiro Vidal</Text>}
							size="xl"
							/>
						</Tooltip>
					</Card.Header>
					<Card.Body>
						<Text h5 weight="normal" color="black"> 
							Lucas is a Computer Engineering student at the University of Oklahoma. He helped develop the backend infrastructure and handled the manager-to-user features.
						</Text>
					</Card.Body>
					<Card.Footer>
						<NextLink
							icon
							color="secondary"
							target="_blank"
							href="https://www.linkedin.com/in/lucas-ribeiro-vidal-a26465225/"
							>
							Connect with Lucas on LinkedIn.
						</NextLink>
					</Card.Footer>
					</Card>
				</Grid>

				<Grid xs={5}>
					<Card isHoverable variant="bordered" borderWeight="extrabold" css={{ borderColor: "$colors$medpurple" }}>
					<Card.Header css={{ justifyContent: "center",}}>
						<Tooltip content={"I like UI & Frontend"}>
							<User
							src="https://media-exp1.licdn.com/dms/image/C4E03AQEOKsox7kjeCA/profile-displayphoto-shrink_400_400/0/1633040329995?e=1666224000&v=beta&t=0TfHtFdJ9n3XgRfuOnbUVhid8rWVVZLa0Yj8qWlyyjo"
							name={<Text size={22} weight="">Paul Hazzim Franco</Text>}
							size="xl"
							/>
						</Tooltip>
					</Card.Header>
					<Card.Body>
						<Text h5 weight="normal" color="black"> 
							Paul is a Computer Science student at SUNY - University at Buffalo. He designed the UI & UX for SecuriTEA and developed the frontend components along with the backend Slack API calls.
						</Text>
					</Card.Body>
					<Card.Footer>
						<NextLink
							icon
							color="secondary"
							target="_blank"
							href="https://www.linkedin.com/in/paulfranco12/"
							>
							Connect with Paul on LinkedIn.
						</NextLink>
					</Card.Footer>
					</Card>
				</Grid>
				<Grid xs={5}>
					<Card isHoverable variant="bordered" borderWeight="extrabold" css={{ borderColor: "$colors$medpurple" }}>
					<Card.Header css={{ justifyContent: "center",}}>
						<Tooltip content={"I like Backend & Cybersecurity"}>
							<User
							src="https://media-exp1.licdn.com/dms/image/D4E03AQHw_6urdUWrNA/profile-displayphoto-shrink_400_400/0/1648924288729?e=1666224000&v=beta&t=W1mm0cf27prQNniW5WsrMXjFSSCNAfE5ErxUlHnkkAk"
							name={<Text size={22} weight="">Enrique Rico</Text>}
							size="xl"
							/>
						</Tooltip>
					</Card.Header>
					<Card.Body>
						<Text h5 weight="normal" color="black"> 
							Enrique Rico is a Computer Science student at the University of Texas at El Paso. He helped develop the backend and implemented IBM Watson Text-to-Speech API along with the Internet Safety Tips simulations on the frontend.
						</Text>
					</Card.Body>
					<Card.Footer>
						<NextLink
							icon
							color="secondary"
							target="_blank"
							href="https://www.linkedin.com/in/enrique-rico1/"
							>
							Connect with Enrique on LinkedIn.
						</NextLink>
					</Card.Footer>
					</Card>
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
		<NextContainer fluid>
		<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="paulfranco12" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/paulfranco12?trk=profile-badge"></a></div>
		</NextContainer>
	)
}


//https://www.linkedin.com/in/enrique-rico1/
// https://www.linkedin.com/in/lucas-ribeiro-vidal-a26465225/