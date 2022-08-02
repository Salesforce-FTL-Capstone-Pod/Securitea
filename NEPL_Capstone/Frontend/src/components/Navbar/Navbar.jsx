import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Stack, Container } from "@mui/material";
import { useAuthContext } from "../../contexts/auth";
import { Dropdown, Avatar, Text, Grid, User, Spacer } from "@nextui-org/react";
import * as color from "../../assets/colorPalette.jsx";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsModal from "../SettingsModal/SettingsModal";
import { Row, css } from "@nextui-org/react";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Navbar() {
	const { user, handleLogout } = useAuthContext();
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	return (
		<AppBar sx={{ background: color.richBlackFogra }} position="sticky">
			<Toolbar sx={{ height: "8vh", justifyContent: "space-between" }}>
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
						<img src={Logo} width="50vw" style={{ marginRight: "0.5vw" }} />
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
					{user?.email ? (
						<Row justify="space-between" css={{ alignItems: "center" }}>
							<SettingsIcon fontSize="large" onClick={handler} />
							<Spacer></Spacer>
							<SettingsModal
								handler={handler}
								visible={visible}
								setVisible={setVisible}
							/>
							<UserDropdown user={user} handleLogout={handleLogout} />
						</Row>
					) : (
						<>
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
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
}

export function UserDropdown({ user, handleLogout }) {
	const fullName = `${user.firstName} ${user.last_name}`;

	return (
		<Dropdown placement="bottom-left">
			<Dropdown.Trigger>
				<User
					bordered
					as="button"
					size="lg"
					color="gradient"
					name={fullName}
					description={user.email}
					src="https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"
				/>
			</Dropdown.Trigger>
			<Dropdown.Menu color="primary" aria-label="User Actions">
				<Dropdown.Item key="profile" css={{ height: "$18" }}>
					<Link to="/UserDashboard" sx={{ width: "100%" }}>
						<Text b color="inherit" css={{ d: "flex" }}>
							Signed in as {fullName}
						</Text>
						<Text b color="inherit" css={{ d: "flex" }}>
							{user.email}
						</Text>
					</Link>
				</Dropdown.Item>

				<Dropdown.Item key="settings" withDivider>
					<Text>Settings</Text>
				</Dropdown.Item>
				<Dropdown.Item key="help_and_feedback">Help & Feedback</Dropdown.Item>
				<Dropdown.Item key="logout" color="error" withDivider>
					<Text onClick={handleLogout}>Log Out</Text>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
