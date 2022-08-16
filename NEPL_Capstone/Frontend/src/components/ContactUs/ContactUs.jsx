import { Container } from "@mui/system";
import Navbar from "../Navbar/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import { ContactCard } from "./ContactCard";
import backgroundImg from '../../assets/SecuriTEA-bg3.svg'
import Footer from "../Footer/Footer";
export default function ContactUs() {
	return (
		<>
		<Container maxWidth={false} disableGutters sx={{ minWidth: "100vh", minHeight: "100vh", backgroundImage: `url(${backgroundImg})`}}>
			<Navbar />
			<Container maxWidth={false}>
				<h1 style={{ textAlign: "center" }}>Contact Us</h1>
				<Container maxWidth={false}>
					<h3 style={{ marginLeft: "10vw" }}>
						Check out our public repo{" "}
						<a
							href="https://github.com/Salesforce-FTL-Capstone-Pod/Securitea"
							target="_blank"
						>
							here
						</a>
					</h3>

					<h3 style={{ marginTop: "5vh", marginLeft: "10vw" }}>Meet NEPL:</h3>
					<Container
						maxWidth={false}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							width: "70vw",
						}}
						disableGutters
					>
						<Container
							sx={{
								textAlign: "center",
								width: "15vw",
								alignItems: "center",
								backgroundColor: color.maximumBluePurple,
								padding: "3vw",
								borderRadius: "10px",
							}}
						>
							<img
								style={{ borderRadius: "100px" }}
								src="https://media-exp1.licdn.com/dms/image/C5603AQEQyzB4K7pjAw/profile-displayphoto-shrink_200_200/0/1654102529794?e=2147483647&v=beta&t=6LyaJZe6PIdd20imLxg8cHAvdhC_Ai3XJQTaDjeYpT4"
							/>
							<h4>Nana Kofi Okae</h4>
							<Container
								sx={{ display: "flex", justifyContent: "space-around" }}
							>
								<a
									href="https://github.com/Nan3rOkae"
									target="_blank"
									style={{ textDecoration: "none", color: "black" }}
								>
									<GitHubIcon />
								</a>
								<a
									href="https://www.linkedin.com/in/nana-kofi-okae-3328331a1?trk=people-guest_people_search-card"
									target="_blank"
									style={{ textDecoration: "none", color: "#0072b1" }}
								>
									<LinkedInIcon />
								</a>
							</Container>
						</Container>

						<Container
							sx={{
								textAlign: "center",
								width: "15vw",
								alignItems: "center",
								backgroundColor: color.maximumBluePurple,
								padding: "3vw",
								borderRadius: "10px",
							}}
						>
							<img
								style={{ borderRadius: "100px" }}
								src="https://media-exp1.licdn.com/dms/image/D4E03AQHw_6urdUWrNA/profile-displayphoto-shrink_200_200/0/1648924288729?e=1665014400&v=beta&t=4L-VM2XaeU07yYvM9Hj9bmGHUSNCYrxos0hU2s7_aD4"
							/>
							<h4>Enrique Rico</h4>
							<Container
								sx={{ display: "flex", justifyContent: "space-around" }}
							>
								<a
									href="https://github.com/erico07181"
									target="_blank"
									style={{ textDecoration: "none", color: "black" }}
								>
									<GitHubIcon />
								</a>
								<a
									href="https://www.linkedin.com/in/enrique-rico1/"
									target="_blank"
									style={{ textDecoration: "none", color: "#0072b1" }}
								>
									<LinkedInIcon />
								</a>
							</Container>
						</Container>

						<Container
							sx={{
								textAlign: "center",
								width: "15vw",
								alignItems: "center",
								backgroundColor: color.maximumBluePurple,
								padding: "3vw",
								borderRadius: "10px",
							}}
						>
							<img
								style={{ borderRadius: "100px" }}
								src="https://media-exp1.licdn.com/dms/image/C4E03AQEOKsox7kjeCA/profile-displayphoto-shrink_200_200/0/1633040329995?e=1665014400&v=beta&t=IVmIUfWRF8or9_kk-ELV_M-n34yX6X-bLBMjNjsHNOw"
							/>
							<h4>Paul Hazzim Franco</h4>
							<Container
								sx={{ display: "flex", justifyContent: "space-around" }}
							>
								<a
									href="https://github.com/francosae"
									target="_blank"
									style={{ textDecoration: "none", color: "black" }}
								>
									<GitHubIcon />
								</a>
								<a
									href="https://www.linkedin.com/in/paulfranco12/"
									target="_blank"
									style={{ textDecoration: "none", color: "#0072b1" }}
								>
									<LinkedInIcon />
								</a>
							</Container>
						</Container>

						<Container
							sx={{
								textAlign: "center",
								width: "15vw",
								alignItems: "center",
								backgroundColor: color.maximumBluePurple,
								padding: "3vw",
								borderRadius: "10px",
							}}
						>
							<img
								style={{ borderRadius: "100px" }}
								src="https://media-exp1.licdn.com/dms/image/C4E03AQFrY7pBAFmg5Q/profile-displayphoto-shrink_200_200/0/1639864498341?e=2147483647&v=beta&t=AwwcBtPYvont-wOq5UTDqpR6ivU3jrgWlw_rNFTFJwI"
							/>
							<h4>Lucas Ribeiro Vidal</h4>
							<Container
								sx={{ display: "flex", justifyContent: "space-around" }}
							>
								<a
									href="https://github.com/ByzantineKnight"
									target="_blank"
									style={{ textDecoration: "none", color: "black" }}
								>
									<GitHubIcon />
								</a>
								<a
									href="https://www.linkedin.com/in/lucas-vidal-a26465225?trk=people-guest_people_search-card"
									target="_blank"
									style={{ textDecoration: "none", color: "#0072b1" }}
								>
									<LinkedInIcon />
								</a>
							</Container>

						</Container>
					</Container>
				</Container>
				
			</Container>
			
		</Container>
		
		<Footer />
		</>
	);
}
