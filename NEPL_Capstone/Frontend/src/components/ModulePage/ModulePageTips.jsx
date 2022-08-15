import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import Footer from "../Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import {
	Text,
	Button,
	Progress,
	Collapse,
	Row,
	Grid,
	Card,
} from "@nextui-org/react";
const sizeBox = "65vw";
import { useLoginForm } from "../../hooks/useLoginForm";
import SignInModal from "../SignInModal/SignInModal";
import { useAuthContext } from "../../contexts/auth";
import { useProgressContext } from "../../contexts/progress";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function ModulePageTips() {
	const progress = useProgressContext();

	const progressTwo = progress?.progress?.progress["2"] || 0;

	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
			<Overview progress={progress} />
			<Content progressTwo={progressTwo} />
			<Footer />
		</Container>
	);
}

function Overview({ progress }) {
	const navigate = useNavigate();
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useLoginForm();
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const { user, handleLogout } = useAuthContext();
	const handleContinue = () => {
		if (progress?.progress?.progress["2"].progress === 0) {
			navigate("/modules/tips");
		} else if (progress?.progress?.progress["2"].progress === 1) {
			navigate("../PasswordPage");
		}
	};

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
				style={{ marginBottom: "4vw", marginTop: "1vw", width: sizeBox }}
			>
				<Text
					h3
					weight="light"
					css={{ color: color.platinum, marginBottom: "0vw" }}
				>
					Module
				</Text>
				<Text
					h1
					css={{
						color: color.platinum,
						marginTop: "-0.5vw",
						marginBottom: "0vw",
					}}
				>
					Internet Safety Tips
				</Text>
				{user?.email ? (
					<Button
						color="secondary"
						onClick={handleContinue}
						css={{ marginTop: "0.5vw", height: "2vw" }}
					>
						<Text
							h4
							weight="bold"
							css={{ color: color.platinum, marginBottom: "0vw" }}
						>
							Continue
						</Text>
					</Button>
				) : (
					<Button
						color="inherit"
						onClick={handler}
						css={{
							marginTop: "0.5vw",
							height: "2vw",
							color: color.richBlackFogra,
						}}
					>
						Login
					</Button>
				)}
				<Text
					h3
					css={{
						color: color.platinum,
						marginTop: "1vw",
						marginBottom: "1vw",
					}}
					weight="light"
				>
					Learn how to surf the web while remaining safe.
				</Text>
				(
				<Container sx={{ display: "flex" }} disableGutters>
					<Progress
						color="gradient"
						size="lg"
						value={progress.percentTwo}
						css={{ width: "50%" }}
					/>

					{progress.percentTwo === 100 ? (
						<TaskAltIcon sx={{ color: color.platinum, marginLeft: "1vw" }} />
					) : null}
				</Container>
				)
			</Container>
			<SignInModal
				handler={handler}
				visible={visible}
				setVisible={setVisible}
				handleOnInputChange={handleOnInputChange}
				handleOnSubmit={handleOnSubmit}
			/>
		</Container>
	);
}

function Content({ progressTwo }) {
	function getCurrent() {
		switch (progressTwo?.progress || 0) {
			case 0:
				return <IntroToTips />;
			case 1:
				return <PasswordCheckerPage />;
		}
	}
	return (
		<Container
			sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh" }}
			disableGutters
		>
			<Container>
				<Text h1 css={{ marginTop: "1vw" }}>
					Current Unit
				</Text>
				<Collapse.Group splitted>{getCurrent()}</Collapse.Group>

				<Text h1 css={{ marginTop: "1vw" }}>
					Curriculum
				</Text>
				<Collapse.Group splitted accordion={true}>
					<IntroToTips />
					<PasswordCheckerPage />
				</Collapse.Group>

				<Text h1 css={{ marginTop: "1vw" }}>
					Additional Resources
				</Text>
				<Collapse.Group splitted>
					<Collapse title="Sources">
						<Text>
							We source our content from trusted websites such as{" "}
							<a href="https://www.scamwatch.gov.au/types-of-scams/attempts-to-gain-your-personal-information/phishing">
								The ACCC
							</a>
							,{" "}
							<a href="https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams">
								The Federal Trade Commission{" "}
							</a>
							, and{" "}
							<a href="https://support.microsoft.com/en-us/windows/protect-yourself-from-phishing-0c7ea947-ba98-3bd9-7184-430e1f860a44">
								Microsoft
							</a>
						</Text>
					</Collapse>
				</Collapse.Group>
			</Container>
		</Container>
	);
}

function IntroToTips() {
	return (
		<Collapse title="Internet Safety Tips">
			<Text>
				This unit has tips on internet safety and how to safely navigate the
				web.
			</Text>
		</Collapse>
	);
}

function PasswordCheckerPage() {
	return (
		<Collapse title="Password Checker">
			<Text>
				This unit will show you how to check the strength of your passwords and
				some examples of very strong passwords.
			</Text>
		</Collapse>
	);
}
