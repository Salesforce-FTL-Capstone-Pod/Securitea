import React from "react";
import "./ModulePage.css";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { css, Text, Card, Row, Col, Spacer } from "@nextui-org/react";
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

function ModulePage() {
	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
		</Container>
	);
}

export default ModulePage;

const navLinks = [
	{ label: "Home", path: `/` },
	{ label: "Modules", path: `/modules` },
	{ label: "Resources", path: `/resources` },
	{ label: "Contact Us", path: `/contactus` },
];
function Navbar() {
	return (
		<AppBar style={{ background: "#0E131F" }} position="sticky">
			<Toolbar style={{ height: "40px", justifyContent: "space-between" }}>
				<div style={{ display: "flex" }}>
					<img src={Logo} style={{ marginRight: "1vw" }} />
					<Stack direction="row" spacing={3}>
						<Button color="inherit" to="/" component={Link}>
							Home
						</Button>
						<Button
							color="inherit"
							to="/ModulePage"
							component={Link}
							sx={{
								borderBottom: "2px solid #A39EDA",
								borderRadius: "0px",
							}}
						>
							Modules
						</Button>
						<Button color="inherit" to="/resources" component={Link}>
							Resources
						</Button>
						<Button color="inherit" to="/contant us" component={Link}>
							Contact Us
						</Button>
					</Stack>
				</div>
				<div>
					<Button
						color="inherit"
						to="/Login"
						component={Link}
						sx={{ border: "2px solid #A39EDA", marginRight: "1vw" }}
					>
						Login
					</Button>
					<Button
						color="inherit"
						to="/Register"
						component={Link}
						sx={{ backgroundColor: "#A39EDA" }}
					>
						Register
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}

//Ex using theme        <Text css={{ background: '$black' }}>NextUI colors</Text>
