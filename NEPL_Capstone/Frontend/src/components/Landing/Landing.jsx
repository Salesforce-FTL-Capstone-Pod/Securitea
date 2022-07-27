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
		<>
			<Navbar />
			<Hero />
			<SubHero />
		</>
	);
}

//Navbar function for the landing page
export function Navbar() {
	return (
		<>
			<AppBar style={{ background: "#0E131F" }} position="sticky">
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
					flexDirection: "column",
					backgroundColor: "white",
				}}
				maxWidth={false}
			>
				<h1
					style={{
						width: "540px",
						height: "16px",
						fontSize: "18px",
					}}
				>
					Pellentesque sem elit, aliquet in tempor ac, lacinia vel ipsum.
				</h1>
				<p
					style={{
						width: "550px",
						height: "28px",
						fontSize: "12px",
					}}
				>
					Sed blandit orci ut purus vestibulum tempor. Quisque sit amet faucibus
					mi. Ut nisi metus, porttitor eu efficitur ut, vestibulum sed sapien.
					Pellentesque sem elit, aliquet in tempor ac, lacinia vel ipsum. Donec
					dignissim, eros nec sodales consectetur, tellus tellus vulputate eros
				</p>

				<Button
					to="/register"
					component={Link}
					style={{
						width: "127px",
						height: "50px",
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
						width: "150px",
						height: "50px",
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
			</Container>
		</>
	);
}
//SubHero for the landing page
export function SubHero() {
	return (
		<>
			<Grid
				container
				spacing={7}
				style={{
					backgroundColor: "#D3CFE2",
					width: "100%",
					height: "500px",
					flexDirection: "column",
					margin: "0px",
				}}
				direction="row"
			>
				<Typography component={"span"}>
					<h1
						style={{
							width: "230px",
							height: "50px",
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
						width: "230px",
						height: "50px",

						fontSize: "10px",
						background: "#0E131F",
						color: "white",
						boarderRadius: "100px",
					}}
				>
					VIEW ALL MODULES
				</Button>
			</Grid>
		</>
	);
}
