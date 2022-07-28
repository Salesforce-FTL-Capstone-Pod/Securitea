import React from "react";
import "./ModulePage.css";
import Navbar from "../Navbar/Navbar.jsx";
import { Container, Button, Link } from "@mui/material";
import * as color from "../../assets/colorPalette";

export default function ModulePage() {
	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
			<ModuleOverview />
		</Container>
	);
}

function ModuleOverview() {
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
				style={{ maxWidth: "65%", marginBottom: "4vw", marginTop: "1vw" }}
			>
				<h1 style={{ color: color.platinum }}>Phishing</h1>
				<h2 style={{ color: color.platinum, marginBottom: "1vw" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod
					tempor incididunt ut labore et dolore
				</h2>
				<h3 style={{ color: color.platinum, marginBottom: "2vw" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod
					tempor incididunt ut labore et dolore
				</h3>
				<Button
					color="inherit"
					to="/Login"
					component={Link}
					sx={{
						border: `2px solid ${color.languidLavender}`,
						marginRight: "1vw",
						paddingLeft: "1vw",
						paddingRight: "1vw",
						color: color.platinum,
					}}
				>
					Login
				</Button>
				<Button
					variant="contained"
					to="/Register"
					component={Link}
					sx={{
						backgroundColor: color.languidLavender,
						color: color.richBlackFogra,
					}}
				>
					Sign Up
				</Button>
			</Container>
		</Container>
	);
}
