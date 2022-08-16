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
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
//svg files
import HeroImage from "../../assets/HeroImage.svg";
import Message from "../../assets/Message.svg";
import Phishing from "../../assets/Phishing.svg";
import Example from "../../assets/Example.svg";
import Security from "../../assets/Security.svg";
import HeroFinal from "../../assets/HeroFinal.svg";
import Logo from "../../assets/Logo.svg";
import { useAuthContext } from "../../contexts/auth";
export default function Landing() {
	return (
		<>
			<Navbar />
			<Hero />
			<SubHero />
			<FinalHero />
			<Footer />
		</>
	);
}
// Hero container for the landing page
export function Hero() {
	const { user, handleLogout } = useAuthContext();
	return (
		<>
			<Container
				sx={{
					display: "flex",
					marginTop: "3.5vw",
					justifyContent: "space-around",
					background: "#ECEBEB",
					height: "8%",
				}}
				maxWidth={false}
			>
				<img src={HeroImage} width="29%" />
				<Container
					sx={{
						marginLeft: "0",
						width: "30%",
						display: "flex",
						flexDirection: "column",
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
						Learning about internet safety doesn't have to be boring
					</h1>
					<p
						style={{
							marginTop: "3vw",
							fontSize: "120%",
						}}
					>
						Come with us and discover a brand new way to learn about internet
						safety, with a user-centered approach that is designed to teach in a
						more interactive way.
					</p>
					{user?.email ? (
						<Button
							to="/Modules"
							component={Link}
							style={{
								width: "5.5vw",
								height: "2.5vw",
								fontSize: "100%",
								background: "#A39EDA",
								color: "#FFFFFF",
								marginTop: "2vw",
							}}
						>
							Modules
						</Button>
					) : (
						<div>
							<Button
								to="/register"
								component={Link}
								style={{
									width: "5.5vw",
									height: "2.5vw",
									fontSize: "100%",
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
						</div>
					)}
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
					marginTop: "2vw",
					textAlign: "left",
				}}
				maxWidth={false}
			>
				<Typography
					component={"div"}
					align="center"
					style={{
						height: "50px",
						fontSize: "120%",
						color: "black",

						marginTop: "20px",
					}}
				>
					Current Modules Available
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
							backgroundColor: "#A39EDA",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Phishing} style={{ width: "50%" }} />
						<Typography component={"span"}>
							<h2>Phishing</h2>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							borderRadius: "10px",
							backgroundColor: "#A39EDA",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Security} style={{ width: "40%" }} />
						<Typography component={"span"}>
							<h2>Account Security</h2>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							borderRadius: "10px",
							backgroundColor: "#A39EDA",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Example} style={{ width: "50%" }} />
						<Typography component={"span"}>
							<h2>Examples</h2>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							borderRadius: "10px",
							backgroundColor: "#A39EDA",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Message} style={{ width: "50%" }} />
						<Typography component={"span"}>
							<h2>Messages</h2>
						</Typography>
					</Box>
				</Container>
				<Button
					to="/Modules"
					component={Link}
					style={{
						width: "16vw",
						height: "3vw",
						marginTop: "5vw",
						marginLeft: "41vw",
						fontSize: "92%",
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
export function FinalHero() {
	return (
		<>
			<Container
				sx={{
					display: "flex",
					marginTop: "3.5vw",
					justifyContent: "space-around",
					background: "#ECEBEB",
				}}
				maxWidth={false}
			>
				<Container
					sx={{
						marginLeft: "0",
						width: "50%",
						display: "flex",
						flexDirection: "column",
						marginRight: "0",
						justifyContent: "center",
						textAlign: "center",
						alignItems: "center",
					}}
				>
					<Typography component={"span"}>
						<p style={{ fontSize: "120%" }}>
							Sed blandit orci ut purus vestibulum tempor. Quisque sit amet
							faucibus mi. Ut nisi metus, porttitor eu efficitur ut, vestibulum
							sed sapien.{"  "}Pellentesque sem elit, aliquet in tempor ac,
							lacinia vel ipsum. Donec dignissim, eros nec sodales consectetur,
							tellus tellus vulputate eros,
						</p>
					</Typography>
					<Button
						to="/resources"
						component={Link}
						style={{
							width: "16vw",
							height: "3vw",
							marginTop: "5vw",
							fontSize: "92%",
							background: "#0E131F",
							color: "white",
							borderRadius: "5px",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						VIEW RESOURCES
					</Button>
				</Container>
				<img src={HeroFinal} width="40%" sx={{}} />
			</Container>
		</>
	);
}
