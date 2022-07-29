import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Container, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import Kettle from "../../assets/Kettle.svg";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

export default function PageNotFound() {
	return (
		<Container disableGutters maxWidth={false}>
			<Navbar />
			<Container
				sx={{
					marginTop: "5vw",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: color.maximumBluePurple,
					borderRadius: "10px",
					padding: "5vw",
					border: `10px solid ${color.languidLavender}`,
				}}
			>
				<h1 style={{ marginBottom: "5vw", color: color.platinum }}>
					Sorry, seems like this page is still brewing!
				</h1>
				<img src={Kettle} width="50%" height="50%" />
				<Button
					variant="contained"
					to="/"
					component={Link}
					sx={{
						backgroundColor: color.blueBell,
						color: color.richBlackFogra,
						marginTop: "5vw",
					}}
				>
					<span style={{ color: color.platinum, fontWeight: "bold" }}>
						Take me back!
					</span>
					<EmojiFoodBeverageIcon
						sx={{ marginLeft: "0.5vw", color: color.platinum }}
					/>
				</Button>
			</Container>
		</Container>
	);
}
