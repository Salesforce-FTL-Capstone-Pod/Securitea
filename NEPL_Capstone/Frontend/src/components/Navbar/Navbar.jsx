import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Stack, Container } from "@mui/material";
import * as color from "../../assets/colorPalette.jsx";

export default function Navbar() {
	return (
		<AppBar style={{ background: color.richBlackFogra }} position="sticky">
			<Toolbar style={{ height: "40px", justifyContent: "space-between" }}>
				<div style={{ display: "flex" }}>
					<Link
						style={{
							display: "flex",
							alignItems: "center",
							marginRight: "2vw",
							color: color.platinum,
							fontFamily: "Roboto, Helvetica,Arial,sans-serif",
						}}
						to="/"
					>
						<img src={Logo} />
						<h3 style={{ margin: "0" }}>SecuriTEA</h3>
					</Link>
					<Stack direction="row" spacing={3}>
						<Button color="inherit" to="/Modules" component={Link}>
							Modules
						</Button>
						<Button color="inherit" to="/Resources" component={Link}>
							Resources
						</Button>
						<Button color="inherit" to="/Contact-us" component={Link}>
							Contact Us
						</Button>

						<Button color="inherit" to="/ModulePhishing" component={Link}>
							PROVISORY (TAKES YOU TO PHSHING)
						</Button>
					</Stack>
				</div>
				<div>
					<Button
						color="inherit"
						to="/Login"
						component={Link}
						sx={{
							border: `2px solid ${color.languidLavender}`,
							marginRight: "1vw",
							paddingLeft: "1vw",
							paddingRight: "1vw",
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
				</div>
			</Toolbar>
		</AppBar>
	);
}
