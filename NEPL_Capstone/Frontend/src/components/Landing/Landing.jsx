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
import "./Landing.css";
//svg files
import Logo from "../../assets/Logo.svg";
import HeroImage from "../../assets/HeroImage.svg";
import Message from "../../assets/Message.svg";
import Phishing from "../../assets/Phishing.svg";
import Example from "../../assets/Example.svg";
import Security from "../../assets/Security.svg";
import HeroFinal from "../../assets/HeroFinal.svg";
import Navbar from "../Navbar/Navbar";

export default function Landing() {
	return (
		<>
			<Navbar />
			<Hero />
			<SubHero />
			<FinalHero />
		</>
	);
}

// Hero container for the landing page
export function Hero() {
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
				<img src={HeroImage} width="30%" />
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
						Pellentesque sem elit, aliquet in tempor ac, lacinia vel ipsum.
					</h1>
					<p
						style={{
							marginTop: "3vw",
							fontSize: "120%",
						}}
					>
						Sed blandit orci ut purus vestibulum tempor. Quisque sit amet
						faucibus mi. Ut nisi metus, porttitor eu efficitur ut, vestibulum
						sed sapien. Pellentesque sem elit, aliquet in tempor ac, lacinia vel
						ipsum. Donec dignissim, eros nec sodales consectetur, tellus tellus
						vulputate eros
					</p>

					<Button
						to="/Register"
						component={Link}
						style={{
							width: "6vw",
							height: "3vw",
							fontSize: "65%",
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
					marginTop: "4vw",
				}}
				maxWidth={false}
			>
				<Typography component={"div"}>
					<h1
						style={{
							height: "50px",
							fontSize: "120%",
							color: "black",
							marginLeft: "41vw",
							marginTop: "2vw",
						}}
					>
						Current Modules Available
					</h1>
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
							backgroundColor: "#a39eda",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Phishing} style={{ width: "50%" }} />
						<Typography>
							<h2>Phishing</h2>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							borderRadius: "10px",
							backgroundColor: "#a39eda",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Security} style={{ width: "40%" }} />
						<Typography>
							<h2>Account Security</h2>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							borderRadius: "10px",
							backgroundColor: "#a39eda",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Example} style={{ width: "50%" }} />
						<Typography>
							<h2>Examples</h2>
						</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							borderRadius: "10px",
							backgroundColor: "#a39eda",
							height: "18vw",
							width: "18vw",
							justifyContent: "center",
							textAlign: "center",
							alignItems: "center",
						}}
					>
						<img src={Message} style={{ width: "50%" }} />
						<Typography>
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
					<Typography>
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
