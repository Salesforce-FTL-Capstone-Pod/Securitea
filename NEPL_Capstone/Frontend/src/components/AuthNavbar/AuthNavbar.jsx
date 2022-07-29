import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Stack } from "@mui/material";
import { useAuthContext } from "../../contexts/auth";
import { Dropdown, Avatar, Text, Grid, User, Spacer } from "@nextui-org/react";
import * as color from "../../assets/colorPalette.jsx";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsModal from "../SettingsModal/SettingsModal";
import { Row } from '@nextui-org/react'
import SettingsIcon from '@mui/icons-material/Settings';

export default function AuthNavbar() {
	const { user, handleLogout } = useAuthContext()
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
	return (
		<AppBar style={{ background: color.richBlackFogra }} position="sticky">
			<Toolbar style={{ height: "40px", justifyContent: "space-between" }}>
				<div style={{ display: "flex" }}>
					<img src={Logo} style={{ marginRight: "1vw" }} />
					<Stack direction="row" spacing={3}>
						<Button color="inherit" to="/" component={Link}>
							Home
						</Button>
						<Button color="inherit" to="/ModulePage" component={Link}>
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
					{user?.email ? (
					<Row justify='space-between'>
                        <SettingsIcon fontSize="large" onClick={handler}/>
                        <Spacer></Spacer>
                        <SettingsModal handler={handler} visible={visible} setVisible={setVisible} />
						<UserDropdown user={user} handleLogout={handleLogout} />
                    </Row>
					):(
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
					</>)}
				</div>
			</Toolbar>
		</AppBar>
	);
}


export function UserDropdown({ user, handleLogout }){
    const fullName = `${user.firstName} ${user.last_name}`

    return(
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
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as {fullName}
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {user.email}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              <Text>Settings</Text>
            </Dropdown.Item>
            <Dropdown.Item key="help_and_feedback">
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              <Text onClick={handleLogout}>Log Out</Text>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    )
}
